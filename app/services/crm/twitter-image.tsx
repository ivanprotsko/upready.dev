import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Self-Hosted CRM — Twenty CRM Managed Deployment";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Open Source CRM Setup",
    description:
      "Replace HubSpot at 90% less cost. Unlimited contacts, no per-user fees.",
  });
}
