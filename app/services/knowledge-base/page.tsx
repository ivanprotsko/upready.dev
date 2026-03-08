"use client";

import {
  BookOpen, Search, Lock, FileDown, GraduationCap,
  Headphones, Users, Building2, PenLine, History,
  Globe, Workflow,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import ProductShowcase from "@/components/services/product-showcase";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const showcaseStats = [
  { label: "GitHub Stars", value: "18.4K+" },
  { label: "Active Since", value: "2015" },
  { label: "License", value: "MIT" },
];

const showcaseScreenshots = [
  {
    src: "/images/services/knowledge-base/books-view.png",
    alt: "BookStack shelf view showing organized books with chapters and pages",
    priority: true,
  },
  {
    src: "/images/services/knowledge-base/page-edit.png",
    alt: "BookStack WYSIWYG editor with rich text formatting toolbar",
  },
  {
    src: "/images/services/knowledge-base/search.png",
    alt: "BookStack full-text search results across all documentation",
  },
];

const features = [
  {
    icon: PenLine,
    title: "WYSIWYG + Markdown Editor",
    description: "A rich text editor anyone can use — no markup syntax required. Power users can switch to Markdown with live preview. Built-in code blocks with syntax highlighting.",
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    description: "Granular permissions per book, chapter, or page. Public help center for customers, private wiki for your team — same system, different access levels.",
  },
  {
    icon: Search,
    title: "Full-Text Search",
    description: "Search across your entire knowledge base instantly. Paragraph-level deep linking lets you share exact answers, not entire pages.",
  },
  {
    icon: History,
    title: "Page Revisions & Versioning",
    description: "Every edit is tracked with full version history. See who changed what, when, and why. Restore any previous version with one click.",
  },
  {
    icon: Workflow,
    title: "Diagrams.net Integration",
    description: "Create flowcharts, architecture diagrams, and process maps directly inside pages. Built-in diagrams.net editor — no external tools needed.",
  },
  {
    icon: Globe,
    title: "Multi-Language & Custom Branding",
    description: "20+ languages supported out of the box. Custom logo, colors, CSS, and domain. Make it look like your own product, not a third-party tool.",
  },
];

const useCases = [
  {
    icon: Building2,
    industry: "SOPs & Compliance",
    description: "Standard operating procedures with version control and audit trail. Track who changed what and when — critical for healthcare, manufacturing, and regulated industries.",
  },
  {
    icon: GraduationCap,
    industry: "Employee Onboarding",
    description: "New hires find answers themselves instead of asking the same questions. Reduce onboarding time from weeks to days with structured, searchable documentation.",
  },
  {
    icon: Headphones,
    industry: "Customer Help Center",
    description: "Public-facing documentation that deflects support tickets. Customers solve issues without contacting your team — 24/7, in any language.",
  },
  {
    icon: Users,
    industry: "Internal Wiki",
    description: "Capture institutional knowledge before it walks out the door. Processes, decisions, methodologies — all searchable, all version-controlled.",
  },
  {
    icon: BookOpen,
    industry: "Engineering Documentation",
    description: "Runbooks, API docs, architecture decisions. Code blocks with syntax highlighting and diagrams.net for technical diagrams — built for engineering teams.",
  },
  {
    icon: FileDown,
    industry: "Training Materials",
    description: "Organized course content with chapters, access control per student group, and PDF export. Faculty and students on the same platform.",
  },
];

const comparisonRows = [
  { label: "Monthly cost (50 users)", ours: "$99-$149", theirs: "$400-$750+", oursHighlight: true },
  { label: "Per-seat pricing", ours: "None (unlimited)", theirs: "$8-$15/user/mo", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "WYSIWYG editor", ours: "Yes (+ Markdown)", theirs: "Varies", oursHighlight: true },
  { label: "SSO (SAML/OIDC/LDAP)", ours: "Included", theirs: "Enterprise tier only", oursHighlight: true },
  { label: "Built-in diagrams", ours: "diagrams.net", theirs: "Plugin or none", oursHighlight: true },
  { label: "Version history", ours: "Unlimited", theirs: "Limited or paid", oursHighlight: true },
  { label: "Export options", ours: "PDF, HTML, Markdown", theirs: "Limited or paid", oursHighlight: true },
];

const plans = [
  {
    name: "Starter",
    description: "Essential knowledge base for small teams getting organized.",
    setupPrice: 1497,
    monthlyPrice: 99,
    features: [
      "Unlimited pages & books",
      "WYSIWYG editor",
      "Full-text search",
      "Basic access control",
      "PDF export",
      "3-5 business days setup",
    ],
  },
  {
    name: "Professional",
    description: "Advanced knowledge base with SSO, branding, and API access.",
    setupPrice: 2497,
    monthlyPrice: 149,
    recommended: true,
    features: [
      "Everything in Starter",
      "Advanced permissions",
      "Custom branding",
      "API access",
      "LDAP/SAML authentication",
      "Multi-language support",
      "Priority support",
    ],
  },
];

const faqItems = [
  {
    question: "Can I migrate from Notion, Confluence, or Google Docs?",
    answer: "Yes. We handle content migration as part of setup. Export your existing pages and we'll import them into the new structure with formatting preserved. We've migrated teams from Confluence, Notion, Google Docs, SharePoint, and Guru.",
  },
  {
    question: "Is this better than Notion or Confluence for documentation?",
    answer: "For team knowledge bases, yes. You get unlimited users at a flat price, no per-seat costs, full data ownership, and a WYSIWYG editor that non-technical team members prefer. Unlike Confluence, there's no performance degradation at scale. Unlike Notion, there's no Markdown learning curve.",
  },
  {
    question: "Can customers and employees use the same system?",
    answer: "Absolutely. Set up public sections for your help center and private sections for internal docs. Same system, different access levels — managed through granular role-based permissions.",
  },
  {
    question: "What about security and authentication?",
    answer: "BookStack supports SAML 2.0, OpenID Connect, and LDAP authentication — connecting to your existing identity provider. Built-in MFA with TOTP and backup codes adds an extra layer. All data stays on your server, behind your firewall.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "It's your server and your data. Export everything as PDF, HTML, or Markdown at any time. Full database backups are included. No vendor lock-in, ever.",
  },
  {
    question: "Do I need technical skills to manage content?",
    answer: "No. The WYSIWYG editor works like Google Docs — anyone can create and edit pages. Diagrams, images, code blocks, and formatting are all point-and-click. No Markdown or coding required.",
  },
  {
    question: "How lightweight is the infrastructure?",
    answer: "BookStack runs on minimal resources — documented running on VPS instances as small as $3/month. For most organizations, our standard hosting is more than sufficient for thousands of pages and hundreds of users.",
  },
];

export default function KnowledgeBasePage() {
  return (
    <>
      <ServiceHero
        badge="Knowledge Base"
        title="Stop losing knowledge when people leave"
        description="Your team's processes, decisions, and documentation — scattered across Google Docs, Notion, and people's heads. We deploy a self-hosted knowledge base where everything is searchable, version-controlled, and owned by you. No per-seat fees, no vendor lock-in."
        icon={BookOpen}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Built on BookStack — trusted by thousands"
        subtitle="A mature, open-source platform with 10+ years of active development. Simple enough for anyone to use, powerful enough for enterprise teams."
        projectName="BookStack"
        projectUrl="https://github.com/BookStackApp/BookStack"
        stats={showcaseStats}
        screenshots={showcaseScreenshots}
      />
      <FeatureGrid
        title="Documentation that people actually use"
        subtitle="A WYSIWYG editor anyone can use, enterprise authentication, and built-in diagram support. Everything you need, none of what you don't."
        features={features}
        columns={3}
      />
      <UseCaseSection
        title="Knowledge that works for every team"
        useCases={useCases}
      />
      <ComparisonTable
        title="Your Knowledge Base vs. SaaS"
        subtitle="Own your data, pay less, and get unlimited users. No per-seat pricing, no feature gating, no surprises."
        ourLabel="Your KB"
        theirLabel="Notion / Confluence"
        rows={comparisonRows}
      />
      <PricingSection
        title="Flat pricing, unlimited users"
        subtitle="Unlike Notion or Confluence, you don't pay per seat. One flat fee for your entire organization."
        plans={plans}
        timeline="Setup takes 3-5 business days. Includes deployment, content migration assistance, and training."
      />
      <ServiceFaq items={faqItems} />
      <CTA
        heading="Your knowledge deserves a permanent home"
        description="We'll deploy your knowledge base, migrate existing content, and train your team. Ready in under a week."
      />
    </>
  );
}
