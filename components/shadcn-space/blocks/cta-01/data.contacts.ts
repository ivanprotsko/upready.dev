import type { CTA01Data } from "./data";
import { defaultData } from "./data";

export const contactsCtaData: CTA01Data = {
  ...defaultData,
  heading: "Most people start with a quick chat.",
  description:
    "Describe your project, ask a question, or just check if we are the right fit. No forms, no sales calls — just a direct conversation with someone who understands AI-generated code.",
  ctaLabel: "Start a Chat",
  ctaHref: "https://chat.upready.dev",
};
