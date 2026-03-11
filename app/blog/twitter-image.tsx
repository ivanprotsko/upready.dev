import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Blog — Migration Guides & Self-Hosting Tips | upready.dev";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Migration Guides & Self-Hosting Tips",
    description:
      "Step-by-step guides from expensive SaaS to self-hosted alternatives. Real cost comparisons.",
  });
}
