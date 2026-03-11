import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Self-Hosted Knowledge Base — BookStack";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Self-Hosted Knowledge Base",
    description:
      "Confluence alternative. Unlimited users, flat fee.",
  });
}
