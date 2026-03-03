"use client";

import Feature from "@/components/shadcn-space/blocks/feature-03/feature";
import {
  BrandList,
  Features,
} from "@/components/shadcn-space/blocks/feature-03/feature";
import { MessageSquare, FileText, Code, Rocket } from "lucide-react";

const featureData: Features = [
  {
    icon: MessageSquare,
    title: "01 — Describe your idea",
    content: (
      <>
        Send it via Telegram, Notion, or any messenger. Free-form text, voice
        notes, references — <strong className="text-foreground">whatever works. No calls needed.</strong>
      </>
    ),
  },
  {
    icon: FileText,
    title: "02 — PRD + interactive prototype",
    content: (
      <>
        Product Requirements Document and clickable prototype in{" "}
        <strong className="text-foreground">2-3 days</strong>. You see your
        product before a single line of code is written.
      </>
    ),
  },
  {
    icon: Code,
    title: "03 — Development in 1-3 weeks",
    content: (
      <>
        Full web application: auth, core features, payments (Stripe), landing
        page, deployment.{" "}
        <strong className="text-foreground">Video progress updates every 2-3 days.</strong>
      </>
    ),
  },
  {
    icon: Rocket,
    title: "04 — Launch",
    content: (
      <>
        Deployed product accessible to users.{" "}
        <strong className="text-foreground">Source code is yours.</strong>{" "}
        Documentation included. Ready for real users.
      </>
    ),
  },
];

const brandList: BrandList = [
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-1.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-1.svg",
    name: "Brand 1",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-2.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-2.svg",
    name: "Brand 2",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-3.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-3.svg",
    name: "Brand 3",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-4.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-4.svg",
    name: "Brand 4",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-5.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-5.svg",
    name: "Brand 5",
  },
];

const Feature03 = () => {
  return (
    <>
      <Feature featureData={featureData} brandList={brandList} />
    </>
  );
};

export default Feature03;
