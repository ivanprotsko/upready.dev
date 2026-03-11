import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Self-Hosted Email Marketing — Listmonk by upready.dev";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Self-Hosted Email Marketing",
    description:
      "Unlimited subscribers. Flat fee. No Mailchimp pricing.",
  });
}
