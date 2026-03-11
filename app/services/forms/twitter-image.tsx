import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Self-Hosted Form Builder — HeyForm";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Self-Hosted Form Builder",
    description:
      "No response limits. GDPR compliant.",
  });
}
