import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "App Audit — $500 Written Report in 48 Hours | upready.dev";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "App Audit — $500 Written Report in 48 Hours",
    description:
      "Senior developer reviews your AI-built app. Every vulnerability documented. Plain English.",
  });
}
