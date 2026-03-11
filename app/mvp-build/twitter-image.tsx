import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt =
  "MVP Build — From Prototype to Product in 1-4 Weeks | upready.dev";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "MVP Build — Prototype to Product in 1-4 Weeks",
    description:
      "Auth, database, payments, deployment. The parts AI tools skip. Flat fee, you own the code.",
  });
}
