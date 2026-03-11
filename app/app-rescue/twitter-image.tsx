import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "App Rescue — We Fix AI-Built Apps | upready.dev";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "App Rescue — We Fix AI-Built Apps",
    description:
      "Senior developer diagnoses your broken app for free in 48 hours. Fixed price, no judgment.",
  });
}
