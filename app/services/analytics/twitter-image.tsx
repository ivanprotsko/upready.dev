import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "GDPR-Compliant Self-Hosted Analytics — Umami";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "GDPR-Compliant Analytics",
    description:
      "No cookie banner. Self-hosted Umami.",
  });
}
