"use client";

import {
  Mail,
  Users,
  LayoutTemplate,
  BarChart3,
  Code,
  ShoppingCart,
  Megaphone,
  Newspaper,
  Building2,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  {
    icon: Users,
    title: "Unlimited Subscribers",
    description:
      "No per-subscriber fees. Manage 1,000 or 1,000,000 contacts for the same price. Your list grows, your bill doesn't.",
  },
  {
    icon: LayoutTemplate,
    title: "Visual Template Editor",
    description:
      "Drag-and-drop email builder. Create professional campaigns without touching code — or use raw HTML if you prefer.",
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics",
    description:
      "Track opens, clicks, bounces, and unsubscribes in real time. Know exactly what works and what doesn't.",
  },
  {
    icon: Code,
    title: "API & Integrations",
    description:
      "REST API for programmatic sending. Connect to your website, CRM, or e-commerce platform. Works with Amazon SES at $0.10 per 1,000 emails.",
  },
];

const useCases = [
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    description:
      "Abandoned cart reminders, product launches, seasonal promotions. Segment by purchase history and behavior.",
  },
  {
    icon: Megaphone,
    industry: "Marketing",
    description:
      "Regular newsletters with beautiful templates. A/B test subject lines and content to maximize engagement.",
  },
  {
    icon: Newspaper,
    industry: "Transactional",
    description:
      "Order confirmations, password resets, account notifications. Reliable delivery with detailed tracking.",
  },
  {
    icon: Building2,
    industry: "B2B Sales",
    description:
      "Automated drip campaigns that move prospects through your funnel. Trigger sequences based on actions and attributes.",
  },
];

const comparisonRows = [
  {
    label: "10,000 subscribers",
    ours: "$99/mo",
    theirs: "$100-150/mo",
    oursHighlight: true,
  },
  {
    label: "50,000 subscribers",
    ours: "$99/mo",
    theirs: "$350-500/mo",
    oursHighlight: true,
  },
  {
    label: "100,000 subscribers",
    ours: "$99/mo",
    theirs: "$700-1,000/mo",
    oursHighlight: true,
  },
  {
    label: "Data ownership",
    ours: "Your server",
    theirs: "Vendor cloud",
    oursHighlight: true,
  },
  {
    label: "Sending cost",
    ours: "$0.10 per 1K (SES)",
    theirs: "Included in plan",
    oursHighlight: false,
  },
];

const plans = [
  {
    name: "Starter",
    description:
      "Self-hosted email marketing for growing businesses.",
    setupPrice: 1497,
    monthlyPrice: 99,
    features: [
      "Unlimited subscribers",
      "Visual template editor",
      "Behavioral segmentation",
      "Campaign analytics",
      "Amazon SES integration",
      "3-5 business days setup",
    ],
  },
  {
    name: "Professional",
    description:
      "Advanced email platform with automation and testing.",
    setupPrice: 2497,
    monthlyPrice: 149,
    recommended: true,
    features: [
      "Everything in Starter",
      "Advanced automation flows",
      "A/B testing",
      "REST API access",
      "Custom SMTP support",
      "Dedicated IP option",
      "Priority support",
      "3-5 business days setup",
    ],
  },
];

const faqItems = [
  {
    question: "Can I migrate from Mailchimp?",
    answer:
      "Yes. We handle the full migration as part of setup — subscriber lists, templates, and segments. Export your data from Mailchimp and we'll import everything into your new platform.",
  },
  {
    question: "How does Amazon SES pricing work?",
    answer:
      "Amazon SES charges roughly $0.10 per 1,000 emails sent. You pay Amazon directly. For 100,000 emails per month, that's about $10 — compared to hundreds on Mailchimp.",
  },
  {
    question: "Will my emails land in spam?",
    answer:
      "We configure SPF, DKIM, and DMARC records during setup. Combined with a dedicated IP option and proper warm-up, deliverability matches or exceeds SaaS platforms.",
  },
  {
    question: "Can I use my own SMTP provider instead of SES?",
    answer:
      "Yes, the Professional plan supports any SMTP provider — Postmark, SendGrid, your own mail server, or any other service.",
  },
  {
    question: "Do I need technical knowledge to manage it?",
    answer:
      "No. The platform has a visual editor for creating campaigns. We handle all server setup, DNS configuration, and maintenance.",
  },
];

export default function EmailMarketingPage() {
  return (
    <>
      <ServiceHero
        badge="Email Marketing"
        title="Your own email platform, zero per-subscriber fees"
        description="Stop paying Mailchimp $50-500/month as your list grows. Self-hosted email marketing with unlimited subscribers, powerful segmentation, and sending costs as low as $0.10 per 1,000 emails via Amazon SES."
        icon={Mail}
        ctaText="Get Started"
      />
      <FeatureGrid
        title="Full-featured email marketing you own"
        subtitle="Every feature you expect from Mailchimp — without the per-subscriber pricing that punishes growth."
        features={features}
        columns={2}
      />
      <UseCaseSection title="Email that drives revenue" useCases={useCases} />
      <ComparisonTable
        title="Your Platform vs. Mailchimp"
        subtitle="Fixed monthly cost regardless of list size. The bigger your list, the more you save."
        ourLabel="Your Platform"
        theirLabel="Mailchimp"
        rows={comparisonRows}
      />
      <PricingSection
        title="Pay once, send forever"
        subtitle="One-time setup plus low monthly hosting. Sending costs are separate via Amazon SES — roughly $0.10 per 1,000 emails."
        plans={plans}
        timeline="Setup takes 3-5 business days. Includes SES configuration, DNS setup, and template migration from Mailchimp if needed."
      />
      <ServiceFaq items={faqItems} />
      <CTA
        heading="Stop paying per subscriber"
        description="We'll migrate your lists from Mailchimp and set up your self-hosted email platform in days, not weeks."
      />
    </>
  );
}
