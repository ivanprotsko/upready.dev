"use client";

import {
  Contact,
  Kanban,
  Mail,
  FileSpreadsheet,
  Plug,
  LayoutGrid,
  Briefcase,
  Building2,
  Heart,
  GraduationCap,
  Home,
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
    icon: LayoutGrid,
    title: "Modern Notion-Like UI",
    description:
      "Clean, fast interface inspired by Notion and Linear. Your team will actually want to use it — no training needed.",
  },
  {
    icon: Kanban,
    title: "Visual Sales Pipelines",
    description:
      "Kanban boards, table views, and timeline views. Drag deals between stages, see your funnel at a glance.",
  },
  {
    icon: Contact,
    title: "Custom Objects & Fields",
    description:
      "Create any data structure for your industry — custom fields, relations, formulas. Not limited to contacts and deals.",
  },
  {
    icon: Mail,
    title: "Email Integration",
    description:
      "Full email history on every contact card. See the conversation thread without switching to your inbox.",
  },
  {
    icon: Plug,
    title: "API for Integrations",
    description:
      "Open API to connect with your other tools — forms, payments, marketing automation, or your own app.",
  },
  {
    icon: FileSpreadsheet,
    title: "Import from Excel/CSV",
    description:
      "Migrate your existing data in minutes. Map columns to fields, handle duplicates, and start working immediately.",
  },
];

const useCases = [
  {
    icon: Briefcase,
    industry: "Professional Services",
    description:
      "Track leads, proposals, and active projects. Custom pipeline stages for your sales process.",
  },
  {
    icon: Home,
    industry: "Real Estate",
    description:
      "Property listings, buyer/seller contacts, viewing schedules, and deal tracking in one place.",
  },
  {
    icon: Heart,
    industry: "Non-Profit",
    description:
      "Donor management, grant tracking, volunteer coordination, and campaign performance.",
  },
  {
    icon: Building2,
    industry: "Agency",
    description:
      "Client management, project pipeline, retainer tracking, and team workload visibility.",
  },
  {
    icon: GraduationCap,
    industry: "Education",
    description:
      "Student enrollment pipeline, parent communication, event management, and alumni tracking.",
  },
];

const comparisonRows = [
  {
    label: "Monthly cost (5 users)",
    ours: "$199-$499",
    theirs: "$500-$1,000+",
    oursHighlight: true,
  },
  {
    label: "Custom fields",
    ours: "Unlimited",
    theirs: "Plan-limited",
    oursHighlight: true,
  },
  {
    label: "Data ownership",
    ours: "Your server",
    theirs: "Vendor cloud",
    oursHighlight: true,
  },
  {
    label: "Vendor lock-in",
    ours: "None (open-source)",
    theirs: "High",
    oursHighlight: true,
  },
  {
    label: "API access",
    ours: "Full, open API",
    theirs: "Plan-restricted",
    oursHighlight: true,
  },
];

const plans = [
  {
    name: "Launch",
    description:
      "Essential CRM for small teams getting organized.",
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
    description:
      "Advanced CRM with automations and pipeline management.",
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
    description:
      "Fully customized CRM for your specific workflows.",
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
    question: "Can I migrate from Salesforce/HubSpot?",
    answer:
      "Yes. We handle the data migration as part of setup. Export your data as CSV and we'll map it to your new CRM structure.",
  },
  {
    question: "Is this better than Salesforce?",
    answer:
      "For small-to-medium businesses, yes. You get a modern, fast UI without the complexity and cost of Salesforce. For enterprise needs with 500+ users, Salesforce may still be the better fit.",
  },
  {
    question: "Can I customize the fields and views?",
    answer:
      "Absolutely. Create any custom object, field, or view. The CRM adapts to your business, not the other way around.",
  },
  {
    question: "What about mobile access?",
    answer:
      "The CRM is fully responsive and works on any mobile browser. A dedicated mobile app is on the platform's roadmap.",
  },
  {
    question: "Do I own the data?",
    answer:
      "100%. The CRM runs on your own server. You have full database access and can export everything at any time.",
  },
];

export default function CrmPage() {
  return (
    <>
      <ServiceHero
        badge="CRM"
        title="Your own CRM, built for your industry"
        description="Not a bloated Salesforce at $200/seat. A modern, open-source CRM with custom fields, pipelines, and automations — on your own server."
        icon={Contact}
        ctaText="Get Started"
      />
      <FeatureGrid
        title="What you get"
        subtitle="A full-featured CRM platform with a modern UI your team will actually enjoy using."
        features={features}
      />
      <UseCaseSection title="Built for every industry" useCases={useCases} />
      <ComparisonTable
        title="Your CRM vs. Traditional SaaS"
        subtitle="Own your data, pay less, and get exactly the features you need."
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
      <CTA
        heading="Ready to ditch the bloated CRM?"
        description="Tell us about your sales process — we'll design a CRM that fits like a glove."
      />
    </>
  );
}
