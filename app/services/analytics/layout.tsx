import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy-First Web Analytics — Self-Hosted Umami",
  description:
    "GDPR-compliant, cookie-free analytics. No consent banners needed. Replace Google Analytics. Setup from $997.",
  openGraph: {
    title: "Self-Hosted Analytics — No Cookies, No Consent Banners",
    description:
      "Privacy-first analytics built on Umami. Real-time dashboard, funnels, user journeys. GDPR compliant out of the box.",
    url: "https://upready.dev/services/analytics",
  },
  alternates: {
    canonical: "https://upready.dev/services/analytics",
  },
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
