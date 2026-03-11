import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "upready.dev — We fix what AI builds";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Fix Your App. Cut Your SaaS Bill.",
    description:
      "Senior developers. Fixed prices. You own everything.",
  });
}
