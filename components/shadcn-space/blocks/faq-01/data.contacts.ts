import type { Faq01Data } from "./data";
import { defaultData } from "./data";

export const contactsFaqData: Faq01Data = {
  ...defaultData,
  badge_text: "FAQ",
  heading: "Quick Questions",
  faqItems: [
    {
      question: "I'm not sure which service I need. Can you help?",
      answer:
        "Yes. This is exactly what the chat is for. Describe your situation — what you built, what is broken, what you are trying to achieve — and we will tell you what service fits and whether we are the right match.",
    },
    {
      question: "Do I need to prepare anything before reaching out?",
      answer:
        "No. A one-paragraph description of your situation is enough to start. If we need more detail to give you an estimate, we will ask. You do not need a spec document, a project brief, or anything formal.",
    },
    {
      question: "What is your timezone and availability?",
      answer:
        "Business hours are 9am–6pm EST, Monday–Friday. Responses outside those hours happen the next business day. For Retainer clients on the Scale tier, critical issue response is within 12 hours including evenings and weekends.",
    },
    {
      question: "I found a security vulnerability in an AI-generated app (not one you built). Can you help?",
      answer:
        "Yes. Our Audit service covers apps we did not build — in fact, that is the primary use case. Reach out via chat or email with a brief description and we will scope an audit.",
    },
  ],
};
