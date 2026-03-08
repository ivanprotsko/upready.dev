import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beautiful Form Builder — Self-Hosted HeyForm",
  description:
    "Typeform-quality forms with unlimited responses. Lead capture, surveys, payments. No per-response fees. Setup from $1,497.",
  openGraph: {
    title: "Self-Hosted Form Builder — Open Source Typeform Alternative",
    description:
      "Form builder with conditional logic, file uploads, Stripe payments. Built on HeyForm. Your data, your server.",
    url: "https://upready.dev/services/forms",
  },
  alternates: {
    canonical: "https://upready.dev/services/forms",
  },
};

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
