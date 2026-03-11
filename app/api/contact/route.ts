import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

interface ContactPayload {
  name: string;
  email: string;
  service: string;
  appUrl: string;
  message: string;
}

function validatePayload(
  body: unknown
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }

  const { name, email, message, service, appUrl } = body as Record<
    string,
    unknown
  >;

  if (typeof name !== "string" || name.trim().length === 0) {
    return { ok: false, error: "Name is required" };
  }

  if (typeof email !== "string" || !email.includes("@") || email.length < 5) {
    return { ok: false, error: "Valid email is required" };
  }

  if (typeof message !== "string" || message.trim().length === 0) {
    return { ok: false, error: "Message is required" };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      service: typeof service === "string" ? service.trim() : "",
      appUrl: typeof appUrl === "string" ? appUrl.trim() : "",
    },
  };
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body" },
      { status: 400 }
    );
  }

  const result = validatePayload(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const { name, email, service, appUrl, message } = result.data;

  const serviceLabel = service || "Not specified";
  const appUrlLine = appUrl ? `App URL: ${appUrl}` : "";

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${serviceLabel}`,
    appUrlLine,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await getResend().emails.send({
      from: "upready.dev Contact <onboarding@resend.dev>",
      to: "hello@upready.dev",
      replyTo: email,
      subject: `New inquiry from ${name} — ${serviceLabel}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
