import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "About upready.dev — AI Product Studio";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "About upready.dev",
    description:
      "AI product studio. Fixed prices. Full code ownership.",
  });
}
