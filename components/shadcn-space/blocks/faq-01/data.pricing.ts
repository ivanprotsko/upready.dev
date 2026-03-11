import type { Faq01Data } from "./data";
import { defaultData } from "./data";

export const pricingFaqData: Faq01Data = {
  ...defaultData,
  badge_text: "FAQ",
  heading: "Pricing Questions",
  faqItems: [
    {
      question: "Why are you cheaper than an agency?",
      answer:
        "Agencies have offices, project managers, recruiters, sales teams, and significant overhead. We have none of that. We use AI tools as our primary development stack — which means faster execution with lower overhead. We pass that on as price. This does not mean lower quality — it means a different cost structure.",
    },
    {
      question: "What is the payment schedule?",
      answer:
        "Project work (Rescue, MVP Build): 50% upfront, 50% on delivery. Retainer: monthly subscription auto-billed on the 1st. Audit: 100% upfront. All payments via Stripe invoice. We send the invoice, you pay via card or ACH. No wire transfers, no crypto, no net-30 terms.",
    },
    {
      question: "What if the project ends up costing more than estimated?",
      answer:
        "The estimate is binding. If scope was defined upfront and we misjudged complexity, the additional cost is on us. If scope changes after the estimate — new features, new requirements — we quote those changes separately and you decide whether to include them. We do not change the price without your approval.",
    },
    {
      question: "Do you offer discounts?",
      answer:
        "No. If the price is a concern, the answer is scope reduction — a smaller project at a lower price point, not the same project for less. We do not discount because the prices reflect real work at a fair rate. Discounting would mean we are either overcharging at full price or losing money on the discount. Neither is honest.",
    },
    {
      question: "Is the audit fee always credited toward a project?",
      answer:
        "Yes. If you do an audit and then proceed to a Rescue or MVP Build within 60 days, the full $500 audit fee is subtracted from the project price. So a $500 Audit + $2,500 Rescue = $2,500 total (not $3,000).",
    },
    {
      question: "What is included in the quoted price?",
      answer:
        "Everything listed in the scope document. For Rescue: the fix, testing in production, and a written summary. For MVP Build: the full app, GitHub/Supabase/Vercel ownership transfer, scope document, and handover notes. No hidden fees, no 'that will cost extra' surprises mid-project.",
    },
  ],
};
