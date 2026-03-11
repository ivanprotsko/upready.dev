import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Self-Hosted Client Portal";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Self-Hosted Client Portal",
    description:
      "White-label, unlimited clients, your domain.",
  });
}
