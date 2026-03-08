import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headless E-Commerce — Built on Medusa",
  description:
    "Open-source Shopify alternative. Zero transaction fees, full customization, multi-region support. Setup from $4,997.",
  openGraph: {
    title: "Self-Hosted E-Commerce — Open Source Shopify Alternative",
    description:
      "Headless commerce built on Medusa. 0% GMV fees, multi-currency, pluggable architecture. Own your store.",
    url: "https://upready.dev/services/ecommerce",
  },
  alternates: {
    canonical: "https://upready.dev/services/ecommerce",
  },
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
