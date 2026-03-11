import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Contact upready.dev — Fixed Quote in 24 Hours";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Get a Fixed Quote in 24 Hours",
    description:
      "Describe your project. Get a fixed price within 24 hours. No hourly billing, no surprises.",
  });
}
