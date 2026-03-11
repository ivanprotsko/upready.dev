import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Documenso — Open Source DocuSign Alternative";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "Documenso vs DocuSign",
    description:
      "Unlimited e-signatures, no per-envelope fees.",
  });
}
