"use client";

import {
  Contact,
  Kanban,
  Mail,
  FileSpreadsheet,
  Plug,
  LayoutGrid,
  Building2,
  Home,
  Briefcase,
  Workflow,
  Code2,
  Shield,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import ProductShowcase from "@/components/services/product-showcase";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import RelatedServices from "@/components/services/related-services";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const showcaseStats = [
  { label: "GitHub Stars", value: "40.3K" },
  { label: "Contributors", value: "300+" },
  { label: "Backed by", value: "YC S23" },
  { label: "Funding", value: "$5.5M" },
];

const showcaseScreenshots = [
  {
    src: "/images/services/crm/views-dark.png",
    alt: "Twenty CRM kanban and table views with dark mode interface",
    priority: true,
  },
  {
    src: "/images/services/crm/workflows-dark.png",
    alt: "Twenty CRM visual workflow builder for sales automation",
  },
  {
    src: "/images/services/crm/data-model-dark.png",
    alt: "Twenty CRM custom data model with flexible object relationships",
  },
];

const features = [
  {
    icon: Kanban,
    title: "Visual Sales Pipelines",
    description:
      "Kanban boards, table views, calendar views, and timelines. Drag deals between stages. Customize pipeline stages for your exact sales process.",
  },
  {
    icon: Contact,
    title: "Custom Objects & Fields",
    description:
      "Go beyond contacts and deals. Create any data structure your business needs -- custom objects, fields, relations, and formulas. No limits.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Visual workflow builder with triggers, iterators, and bulk actions. Automate follow-ups, stage transitions, and notifications without code.",
  },
  {
    icon: Mail,
    title: "Email Sync",
    description:
      "Native Gmail and Outlook integration. See full email history on every contact. Granular folder sync so you control what flows in.",
  },
  {
    icon: Code2,
    title: "REST & GraphQL APIs",
    description:
      "Full API access for custom integrations. Connect your CRM to forms, payments, marketing tools, or your own product. Webhooks and Zapier included.",
  },
  {
    icon: Shield,
    title: "Role-Based Permissions",
    description:
      "Granular field-level access control. SSO via SAML/OIDC. Admin user impersonation for troubleshooting. Enterprise-grade security on your own server.",
  },
];

const useCases = [
  {
    icon: Home,
    industry: "Real Estate",
    description:
      "Property listings, buyer/seller pipelines, viewing schedules, and deal tracking. Custom fields for property type, price range, and location. Typical setup: $3K-$6K.",
  },
  {
    icon: Briefcase,
    industry: "Consulting & Professional Services",
    description:
      "Track leads, proposals, and active engagements. Custom pipeline stages from prospect to retainer. Integrate with invoicing and project tools. Typical setup: $2K-$4K.",
  },
  {
    icon: Building2,
    industry: "SaaS & Tech Startups",
    description:
      "API-first CRM that integrates with your product. Custom objects for product-led growth metrics. Full data ownership for compliance. Typical setup: $2K-$5K.",
  },
];

const comparisonRows = [
  {
    label: "Monthly cost (10 users)",
    ours: "$199-$499",
    theirs: "$1,000-$5,500",
    oursHighlight: true,
  },
  {
    label: "Custom fields & objects",
    ours: "Unlimited",
    theirs: "Plan-limited",
    oursHighlight: true,
  },
  {
    label: "Data ownership",
    ours: "Your server, your database",
    theirs: "Vendor cloud",
    oursHighlight: true,
  },
  {
    label: "API access",
    ours: "REST + GraphQL, no limits",
    theirs: "Plan-restricted",
    oursHighlight: true,
  },
  {
    label: "Vendor lock-in",
    ours: "None (open-source, GPL)",
    theirs: "High",
    oursHighlight: true,
  },
  {
    label: "Implementation cost",
    ours: "$3,497-$8,997",
    theirs: "$10K-$150K+",
    oursHighlight: true,
  },
];

const plans = [
  {
    name: "Launch",
    description: "Essential CRM for small teams getting organized.",
    setupPrice: 3497,
    monthlyPrice: 199,
    features: [
      "Up to 3 users",
      "Basic custom fields",
      "Kanban + table views",
      "Contact & deal management",
      "CSV/Excel import",
      "Custom domain + SSL",
    ],
  },
  {
    name: "Growth",
    description: "Advanced CRM with automations and pipeline management.",
    setupPrice: 5497,
    monthlyPrice: 349,
    recommended: true,
    features: [
      "Up to 10 users",
      "Custom pipelines & automations",
      "Email integration",
      "Role-based access",
      "API access",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "Fully customized CRM for your specific workflows.",
    setupPrice: 8997,
    monthlyPrice: 499,
    features: [
      "Unlimited users",
      "Full customization",
      "Multiple pipelines",
      "Custom integrations",
      "Advanced reporting",
      "Dedicated support channel",
    ],
  },
];

const faqItems = [
  {
    question: "Can I migrate from HubSpot or Salesforce?",
    answer:
      "Yes. We handle the full data migration as part of setup. Export your contacts, deals, and activity history as CSV -- we map everything to your new CRM structure and verify data integrity before go-live.",
  },
  {
    question: "How does this compare to Salesforce for a 10-person team?",
    answer:
      "Salesforce Pro Suite costs $100/user/month ($1,000/month for 10 users) plus $10K-$25K implementation. With us, you pay a one-time setup of $3,497-$8,997 and $199-$499/month. Over 3 years, you save $20K-$50K+ while owning your data.",
  },
  {
    question: "Is open-source CRM reliable for business use?",
    answer:
      "Twenty CRM is backed by Y Combinator (S23 batch), has $5.5M in funding from investors including the HubSpot co-founder and former Pipedrive CEO, and 40K+ GitHub stars with 300+ contributors. It ships monthly releases and is used by growing companies worldwide.",
  },
  {
    question: "Can I customize the fields and views?",
    answer:
      "Fully. Create custom objects, fields, relations, and views for any workflow. Build industry-specific data models -- property listings, student records, donor profiles -- whatever your business needs.",
  },
  {
    question: "What about mobile access?",
    answer:
      "The CRM is fully responsive and works on any mobile browser. A dedicated mobile app is on the platform's roadmap.",
  },
  {
    question: "Do I own the data?",
    answer:
      "100%. The CRM runs on your own server with direct PostgreSQL database access. Export everything at any time. No vendor lock-in, no data hostage situations.",
  },
  {
    question: "What integrations are available?",
    answer:
      "Native Gmail and Outlook email sync, Zapier for no-code automations, Chrome extension for LinkedIn capture, webhooks for event-driven flows, and full REST + GraphQL APIs for custom integrations.",
  },
];

export default function CrmPage() {
  return (
    <>
      <ServiceHero
        badge="CRM"
        title="Stop renting your CRM. Own it."
        description="Your team grew, and so did the bill. HubSpot wants $890/mo. Salesforce wants $100K to implement. There's a better way -- a modern, open-source CRM on your own server, at a fraction of the cost."
        icon={Contact}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Built on Twenty -- the #1 open-source CRM"
        subtitle="A modern alternative to Salesforce, powered by a community of 300+ contributors and backed by Y Combinator."
        projectName="Twenty CRM"
        projectUrl="https://github.com/twentyhq/twenty"
        stats={showcaseStats}
        screenshots={showcaseScreenshots}
      />
      <FeatureGrid
        title="Everything you need, nothing you don't"
        subtitle="A full-featured CRM with a Notion-like interface your team will actually enjoy using. Custom objects, automations, and APIs included."
        features={features}
      />
      <UseCaseSection
        title="Built for high-value industries"
        useCases={useCases}
      />
      <ComparisonTable
        title="Your CRM vs. Salesforce / HubSpot"
        subtitle="Same capabilities. Fraction of the cost. Full data ownership."
        ourLabel="Your CRM"
        theirLabel="Salesforce / HubSpot"
        rows={comparisonRows}
      />
      <PricingSection
        title="Pricing that makes sense"
        subtitle="No per-seat pricing surprises. Fixed monthly cost regardless of how many deals you close."
        plans={plans}
        timeline="Launch timeline: 7-14 business days"
      />
      <ServiceFaq items={faqItems} />
      <RelatedServices currentSlug="crm" />
      <CTA
        heading="Ready to own your CRM?"
        description="Tell us about your sales process and team size. We'll design a CRM that fits your workflow -- deployed on your server in under two weeks."
      />
    </>
  );
}
