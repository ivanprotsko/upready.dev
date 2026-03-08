import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unlimited E-Signatures — Self-Hosted Documenso",
  description:
    "No per-envelope limits. Unlimited document signing for your team. Replace DocuSign at 90% less cost. Setup from $1,997.",
  openGraph: {
    title: "Self-Hosted E-Signature — Open Source DocuSign Alternative",
    description:
      "Document signing built on Documenso. Unlimited envelopes, API access included, custom branding. SOC 2 compliant.",
    url: "https://upready.dev/services/e-signature",
  },
  alternates: {
    canonical: "https://upready.dev/services/e-signature",
  },
};

export default function ESignatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
