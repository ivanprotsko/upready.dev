import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Self-Hosted Business Tools | upready.dev";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Replace Expensive SaaS with Open-Source",
    description:
      "CRM, email marketing, e-signature, ecommerce, and more. Your server, your data, fixed price.",
  });
}
