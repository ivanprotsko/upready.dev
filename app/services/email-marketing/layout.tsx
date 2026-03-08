import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing Without Per-Subscriber Fees — Listmonk",
  description:
    "Send to unlimited subscribers for a flat fee. No per-contact pricing. Self-hosted email marketing. Setup from $1,497.",
  openGraph: {
    title: "Self-Hosted Email Marketing — Open Source Mailchimp Alternative",
    description:
      "Newsletter platform built on Listmonk. Unlimited subscribers, SQL segmentation, multi-channel sending. No vendor lock-in.",
    url: "https://upready.dev/services/email-marketing",
  },
  alternates: {
    canonical: "https://upready.dev/services/email-marketing",
  },
};

export default function EmailMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
