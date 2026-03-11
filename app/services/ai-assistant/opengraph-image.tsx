import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "HIPAA-Compliant Private AI Assistant";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "HIPAA-Compliant AI Chatbot",
    description:
      "Private AI assistant, data never leaves your server.",
  });
}
