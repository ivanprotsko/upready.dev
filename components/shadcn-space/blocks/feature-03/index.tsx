"use client";

import Feature from "@/components/shadcn-space/blocks/feature-03/feature";
import type { FeatureCard } from "@/components/shadcn-space/blocks/feature-03/feature";
import { Video, Zap, CreditCard } from "lucide-react";

const cards: FeatureCard[] = [
  {
    icon: Video,
    title: "Zero Meetings",
    description:
      "No kickoff calls, no status syncs, no scheduling nightmares. Share your idea via text, voice note, or doc — we take it from there and keep you updated async.",
  },
  {
    icon: Zap,
    title: "Async by Default",
    description:
      "We work across time zones and deliver progress updates every 2–3 days via video. You review on your schedule, not ours. No blockers, no waiting on calls.",
  },
  {
    icon: CreditCard,
    title: "USDT / USDC Payments",
    description:
      "Pay in stablecoins — no wire transfers, no banking delays, no currency conversion fees. Fast, borderless, and hassle-free from anywhere in the world.",
  },
];

const Feature03 = () => {
  return (
    <Feature
      cards={cards}
      badgeText="Why Us"
      heading="Everything you need to ship without the friction"
      description="We've cut out every obstacle that slows down traditional agencies — no endless meetings, no payment hassle, no waiting. Just fast, focused delivery."
      footnote="Fixed-price estimate before we start. No hidden costs, no surprise invoices — what you see is what you pay."
      buttonText="Get in Touch"
    />
  );
};

export default Feature03;
