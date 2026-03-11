import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Fixed Quote in 24 Hours",
  description:
    "Tell us about your project. We respond within 24 hours with a fixed price and timeline. No hourly billing, no surprises.",
  openGraph: {
    title: "Contact upready.dev — Fixed Quote in 24 Hours",
    description:
      "Describe your project. Get a fixed price within 24 hours. App rescue, MVP builds, and self-hosted tool deployment.",
    url: "https://upready.dev/contacts",
  },
  alternates: { canonical: "https://upready.dev/contacts" },
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
