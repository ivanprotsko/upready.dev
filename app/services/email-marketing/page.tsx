"use client";

import {
  Mail,
  Users,
  BarChart3,
  Code,
  ShoppingCart,
  Megaphone,
  Building2,
  Zap,
  Database,
  Send,
  Globe,
  Lock,
  Layers,
  Laptop,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import ProductShowcase from "@/components/services/product-showcase";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const productStats = [
  { label: "GitHub Stars", value: "19.2K+" },
  { label: "Contributors", value: "238" },
  { label: "Handles", value: "Millions" },
  { label: "License", value: "AGPL v3" },
];

const productScreenshots = [
  {
    src: "/images/services/email-marketing/s1.png",
    alt: "Listmonk dashboard showing campaign management, subscriber lists, and real-time sending status",
    priority: true,
  },
  {
    src: "/images/services/email-marketing/s2.png",
    alt: "Listmonk campaign editor with Go template support and content preview",
  },
  {
    src: "/images/services/email-marketing/analytics.png",
    alt: "Listmonk campaign analytics with open rates, click tracking, and bounce reporting",
  },
];

const features = [
  {
    icon: Users,
    title: "Unlimited Subscribers",
    description:
      "No per-subscriber fees. Manage 1,000 or 1,000,000 contacts for the same price. Proven to handle 7M+ emails with 57 MB peak RAM usage.",
  },
  {
    icon: Zap,
    title: "Multi-Threaded Sending",
    description:
      "High-throughput, multi-SMTP queues with sliding window rate limiting. Fine-grained control over sending speed and provider load balancing.",
  },
  {
    icon: Database,
    title: "SQL-Powered Segmentation",
    description:
      "Query and segment subscribers with SQL expressions. Go beyond basic filters with full database-level precision on your subscriber data.",
  },
  {
    icon: Code,
    title: "Go Templating Engine",
    description:
      "Create dynamic email templates with Go templating. Use 100+ built-in functions, conditional logic, and template expressions in both subject lines and content.",
  },
  {
    icon: Send,
    title: "Transactional Emails",
    description:
      "Simple API to send order confirmations, password resets, and account notifications using pre-defined templates. One platform for marketing and transactional.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Webhooks",
    description:
      "More than email. HTTP messenger webhooks to send SMS, WhatsApp, FCM push notifications, or any message type through a unified interface.",
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics",
    description:
      "Built-in analytics to visualize opens, clicks, bounces, top links, and campaign performance. Track what works across all your campaigns.",
  },
  {
    icon: Lock,
    title: "Security and Privacy",
    description:
      "OIDC SSO authentication with granular roles and permissions. API tokens for programmatic access. S3-compatible media storage. Full GDPR control.",
  },
  {
    icon: Layers,
    title: "Single Binary, Zero Bloat",
    description:
      "Written in Go. One binary plus PostgreSQL, nothing else. Nominal CPU and memory footprint. Runs on a $5/month VPS without breaking a sweat.",
  },
];

const useCases = [
  {
    icon: ShoppingCart,
    industry: "E-Commerce ($3K-$6K)",
    description:
      "Abandoned cart recovery, product launches, seasonal promotions. Segment by purchase history and behavior. Transactional + marketing from one platform.",
  },
  {
    icon: Laptop,
    industry: "SaaS ($2K-$5K)",
    description:
      "Product updates, onboarding sequences, and release notes. SQL segmentation by plan tier, usage, or feature adoption. API-driven triggered emails.",
  },
  {
    icon: Megaphone,
    industry: "Content Creators ($2K-$4K)",
    description:
      "Newsletter monetization at scale. Grow from 1K to 500K subscribers without cost jumps. Go templating for personalized content delivery.",
  },
  {
    icon: Building2,
    industry: "Agencies ($3K-$5K)",
    description:
      "White-label email for multiple clients with separate sender domains. Centralized management, isolated subscriber lists, per-client analytics.",
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
    label: "500,000 subscribers",
    ours: "$99/mo",
    theirs: "$1,600+/mo",
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
  {
    label: "Multi-channel",
    ours: "Email + SMS + WhatsApp",
    theirs: "Email only (or paid add-on)",
    oursHighlight: true,
  },
];

const plans = [
  {
    name: "Starter",
    description: "Self-hosted email marketing for growing businesses.",
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
    description: "Advanced email platform with automation and testing.",
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
      "Yes, the Professional plan supports any SMTP provider — Postmark, SendGrid, your own mail server, or any other service. Multi-SMTP queues let you load-balance across providers.",
  },
  {
    question: "How does Listmonk handle millions of subscribers?",
    answer:
      "Listmonk is written in Go and benchmarked at 7M+ emails with peak RAM of 57 MB. Multi-threaded queues with rate limiting ensure reliable delivery without overwhelming your infrastructure.",
  },
  {
    question: "Do I need technical knowledge to manage it?",
    answer:
      "No. The platform has a visual editor for creating campaigns. We handle all server setup, DNS configuration, and maintenance. You focus on writing emails and growing your list.",
  },
  {
    question: "Can I send SMS and WhatsApp messages too?",
    answer:
      "Yes. Listmonk supports HTTP messenger webhooks for SMS, WhatsApp, FCM push notifications, and any custom channel. Configure webhook endpoints and send multi-channel campaigns from one dashboard.",
  },
  {
    question: "What happens if I want to cancel?",
    answer:
      "You own your data and your server. Listmonk is open-source (AGPL v3), so you can continue running it independently. Export your subscribers and templates in standard formats anytime.",
  },
];

export default function EmailMarketingPage() {
  return (
    <>
      <ServiceHero
        badge="Email Marketing"
        title="Mailchimp charges $100+/mo at 10K contacts. You don't have to pay that."
        description="Self-hosted email marketing with unlimited subscribers, SQL-powered segmentation, and multi-channel sending. Your list grows, your bill stays flat. Sending costs as low as $0.10 per 1,000 emails via Amazon SES."
        icon={Mail}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Built on Listmonk"
        subtitle="High-performance, self-hosted newsletter and mailing list manager. Single binary, handles millions of subscribers."
        projectName="Listmonk"
        projectUrl="https://github.com/knadh/listmonk"
        stats={productStats}
        screenshots={productScreenshots}
      />
      <FeatureGrid
        title="Full-featured email marketing you own"
        subtitle="Every capability you expect from Mailchimp — plus SQL segmentation, multi-channel webhooks, and Go templating that Mailchimp will never offer."
        features={features}
      />
      <UseCaseSection
        title="Email that drives revenue"
        useCases={useCases}
      />
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
