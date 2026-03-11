import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Self-Hosted Project Management — Plane";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Self-Hosted Project Management",
    description:
      "Jira alternative. Unlimited members, flat fee.",
  });
}
