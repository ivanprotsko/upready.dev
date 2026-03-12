import { NextRequest, NextResponse } from "next/server";

const MAINTENANCE_MODE = true;
const PREVIEW_SECRET = "upready2026";

const maintenanceHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>upready.dev — Back Soon</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #030712;
      color: #f9fafb;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 480px;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    p {
      color: #9ca3af;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    a {
      color: #60a5fa;
      text-decoration: none;
    }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <h1>We're updating the site</h1>
    <p>upready.dev will be back shortly. In the meantime, reach us at <a href="mailto:hello@upready.dev">hello@upready.dev</a></p>
  </div>
</body>
</html>`;

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  const { searchParams } = request.nextUrl;
  const previewParam = searchParams.get("preview");
  const previewCookie = request.cookies.get("preview")?.value;

  // First visit with ?preview=secret — set cookie and redirect without param
  if (previewParam === PREVIEW_SECRET) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("preview");
    const response = NextResponse.redirect(url);
    response.cookies.set("preview", PREVIEW_SECRET, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  // Has valid cookie — let through
  if (previewCookie === PREVIEW_SECRET) {
    return NextResponse.next();
  }

  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      "Content-Type": "text/html",
      "Retry-After": "3600",
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
