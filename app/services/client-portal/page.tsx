"use client";

import {
  Shield, FolderOpen, Bell, Palette, Plug, Users, FileText,
  RefreshCw, Building2, Briefcase, Stethoscope, Scale,
  Database, Workflow, LayoutDashboard, KeyRound,
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
  { label: "GitHub Stars", value: "34K+" },
  { label: "Docker Downloads", value: "41M+" },
  { label: "Projects Built", value: "500K+" },
  { label: "Companies", value: "430+" },
];

const showcaseScreenshots = [
  {
    src: "/images/services/client-portal/visual-editing-popover.png",
    alt: "Inline visual content editing interface with live preview",
    priority: true,
  },
  {
    src: "/images/services/client-portal/ai-assistant-ui.png",
    alt: "AI-powered editing assistant integrated into the content workspace",
  },
  {
    src: "/images/services/client-portal/content-comparison.png",
    alt: "Side-by-side content version comparison for revision management",
  },
];

const features = [
  { icon: Shield, title: "Granular Role-Based Permissions", description: "Control access per collection, per field, per record. Each client sees exactly what they should — nothing more, nothing less." },
  { icon: Database, title: "Headless CMS Foundation", description: "Built on a real SQL database with visual data modeling. Structure your portal data exactly how your business works, not how the software forces you to." },
  { icon: Plug, title: "REST + GraphQL APIs", description: "Every piece of data is accessible through auto-generated REST and GraphQL endpoints. Connect to any frontend, mobile app, or third-party system." },
  { icon: Workflow, title: "Visual Automation Builder", description: "Automate client workflows without code. Trigger notifications, update statuses, generate reports, and sync data when events happen." },
  { icon: Palette, title: "100% White-Label", description: "Replace logos, colors, fonts, and login screens in under 90 seconds. Light and dark themes. Custom CSS for pixel-perfect branding. Your clients see your brand, not ours." },
  { icon: LayoutDashboard, title: "Custom Dashboards", description: "Build no-code dashboards with charts and metrics. Give clients real-time visibility into project status, KPIs, and deliverables." },
  { icon: FolderOpen, title: "File Library with S3 Storage", description: "Centralized document hub with folder organization, focal-point image cropping, and S3-compatible cloud storage. Supports bulk downloads." },
  { icon: KeyRound, title: "SSO & Enterprise Auth", description: "OAuth, OpenID Connect, LDAP, and magic link authentication. Enterprise-grade security with full audit trail for every action." },
  { icon: Bell, title: "Real-Time Notifications", description: "WebSocket-powered live updates. Clients get notified instantly when files are uploaded, statuses change, or comments are added." },
];

const useCases = [
  { icon: Scale, industry: "Law Firms", description: "Secure case file portal with document versioning, audit trails, and role-based access. Replace insecure email attachments with encrypted, compliant sharing." },
  { icon: FileText, industry: "Accounting & Financial Services", description: "Tax document portal with client-specific folders, approval workflows, and compliance logging. Clients upload docs and track engagement status." },
  { icon: Building2, industry: "Architecture & Construction", description: "Project document hub with blueprints, permits, progress photos, and timeline tracking. Stakeholders access everything in one branded space." },
  { icon: Briefcase, industry: "Digital Agencies", description: "Client deliverables portal with project status, approval workflows, and feedback collection. Stop chasing clients through email chains." },
  { icon: Stethoscope, industry: "Healthcare Practices", description: "Secure patient document exchange with granular permissions and access logging. Share records, lab results, and forms through a branded portal." },
  { icon: RefreshCw, industry: "SaaS & Tech", description: "Self-service customer portal with documentation, support tickets, account management, and API-driven integrations with your product." },
];

const comparisonRows = [
  { label: "Monthly cost (50 clients)", ours: "$199", theirs: "$500-$2,000+", oursHighlight: true },
  { label: "Per-client pricing", ours: "None", theirs: "$10-$25/client", oursHighlight: true },
  { label: "White-labeling", ours: "Full (logo, colors, fonts, CSS)", theirs: "Logo only or paid add-on", oursHighlight: true },
  { label: "Data ownership", ours: "Your server, your database", theirs: "Vendor cloud", oursHighlight: true },
  { label: "API access", ours: "Full REST + GraphQL", theirs: "Plan-restricted", oursHighlight: true },
  { label: "Custom automation", ours: "Visual workflow builder", theirs: "Zapier required", oursHighlight: true },
  { label: "Database access", ours: "Direct SQL access", theirs: "No access", oursHighlight: true },
];

const plans = [
  { name: "Starter", description: "Essential client portal for small teams getting organized.", setupPrice: 2997, monthlyPrice: 199, features: ["Up to 50 client accounts", "File storage with access controls", "Email notifications", "Custom branding (logo & colors)", "REST API access", "7-10 business days setup"] },
  { name: "Professional", description: "Full-featured portal with unlimited clients and advanced integrations.", setupPrice: 5497, monthlyPrice: 349, recommended: true, features: ["Unlimited client accounts", "Advanced file management", "Real-time notifications", "Full white-label branding", "REST & GraphQL API", "Priority support", "Custom integrations", "7-10 business days setup"] },
];

const faqItems = [
  { question: "Can my clients access the portal on mobile?", answer: "Yes. The portal is fully responsive and works on any device. Clients can view projects, download files, and leave comments from their phone or tablet." },
  { question: "How does authentication work?", answer: "Clients receive an email invitation to create their account. They log in with email and password. You can also enable SSO (OAuth, OpenID, LDAP) or magic link authentication for a passwordless experience." },
  { question: "Can I connect it to my existing tools?", answer: "Absolutely. The portal exposes both REST and GraphQL APIs. Connect it to your CRM, project management, invoicing, or any system with an API. Visual automation flows handle the logic without code." },
  { question: "What about data security?", answer: "The portal runs on your own server with SSL encryption. File access is controlled by granular role-based permissions, and every action is logged in an activity trail for audit purposes." },
  { question: "Do I own the data?", answer: "100%. The portal runs on your infrastructure with a standard SQL database. You have full database access and can export everything at any time. No vendor lock-in." },
  { question: "What can be white-labeled?", answer: "Everything visible to your clients. Logos, colors, fonts, login screen background, light/dark themes, and custom CSS. White-labeling takes under 90 seconds to configure." },
  { question: "How is this different from building a custom portal?", answer: "Custom portal development typically costs $20K-$50K and takes months. We deploy a production-ready platform in 7-10 days for a fraction of the cost, with the same level of customization through extensions and APIs." },
];

export default function ClientPortalPage() {
  return (
    <>
      <ServiceHero
        badge="Client Portal"
        title="Stop emailing files to your clients"
        description="Your clients deserve better than shared Dropbox folders and status update emails. Give them a branded, secure portal where they check progress, access documents, and collaborate — all under your domain."
        icon={Users}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Powered by a platform trusted by enterprises"
        subtitle="Used by Bose, Copa Airlines, and Novus Home Mortgage. Built on the same open-source backend that powers 500K+ projects worldwide."
        projectName="Directus"
        projectUrl="https://github.com/directus/directus"
        stats={showcaseStats}
        screenshots={showcaseScreenshots}
      />
      <FeatureGrid
        title="Everything your clients need in one place"
        subtitle="A headless CMS turned into a white-label client workspace. Granular permissions, real-time APIs, and visual automation — without writing backend code."
        features={features}
        columns={3}
      />
      <UseCaseSection
        title="Built for teams that work with clients"
        useCases={useCases}
      />
      <ComparisonTable
        title="Your Portal vs. SaaS Alternatives"
        subtitle="Own your client experience. No per-seat pricing that scales against you."
        ourLabel="Your Portal"
        theirLabel="Copilot / SuiteDash"
        rows={comparisonRows}
      />
      <PricingSection
        title="Simple, transparent pricing"
        subtitle="One-time setup fee plus predictable monthly hosting. No per-client charges."
        plans={plans}
        timeline="Setup takes 7-10 business days. Includes deployment, configuration, and onboarding."
      />
      <ServiceFaq items={faqItems} />
      <CTA
        heading="Give your clients a better experience"
        description="Book a call and we'll set up a branded client portal for your business in under two weeks."
      />
    </>
  );
}
