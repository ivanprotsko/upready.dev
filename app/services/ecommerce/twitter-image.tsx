import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Open Source Shopify Alternative — Medusa E-Commerce";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Open Source Shopify Alternative",
    description:
      "Zero transaction fees. Medusa on your server.",
  });
}
