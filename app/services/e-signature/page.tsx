"use client";

import {
  PenTool, FileText, Mail, Shield, Clock, Plug,
  Building2, Home, Briefcase, Scale, Users,
  Palette, Webhook, FileCheck, Lock, Layers,
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

const productStats = [
  { label: "GitHub Stars", value: "12.4K+" },
  { label: "Forks", value: "2.3K+" },
  { label: "Commits", value: "3,800+" },
  { label: "License", value: "AGPL-3.0" },
];

const productScreenshots = [
  {
    src: "/images/services/e-signature/documenso-screenshot-huntscreens.webp",
    alt: "Documenso document signing interface with drag-and-drop field placement and real-time status tracking",
    priority: true,
  },
  {
    src: "/images/services/e-signature/documenso-sliplane.webp",
    alt: "Documenso dashboard showing document templates, team management, and signing workflows",
  },
  {
    src: "/images/services/e-signature/documenso-ph-screenshot.png",
    alt: "Documenso signing experience with audit trail and multi-signer support",
  },
];

const features = [
  { icon: PenTool, title: "Drag-and-Drop Signing Fields", description: "Upload a document, place signature fields exactly where you need them. Recipients sign with a click. Duplicate fields across all pages in one action." },
  { icon: FileText, title: "Reusable Templates", description: "Create templates for contracts, NDAs, and agreements you send regularly. Swap the underlying PDF without rebuilding fields. Move templates between personal and team workspaces." },
  { icon: Users, title: "Teams and Organizations", description: "Invite team members with defined roles. Configure team-wide preferences for documents and signing. Central user management with role-based access control." },
  { icon: Plug, title: "Full REST API", description: "API V2 with envelope support and one-step document uploads. Manage templates and fields programmatically. Embed signing directly into your application." },
  { icon: Webhook, title: "Webhooks and Automation", description: "Real-time event triggers for every signing action. Connect to your CRM, client portal, or internal tools. Automate document generation, sending, and follow-ups." },
  { icon: Palette, title: "Custom Branding", description: "White-label every touchpoint: documents, emails, and signing pages. Custom email domain with SPF and DKIM verification. Your brand, not a vendor watermark." },
  { icon: Shield, title: "Full Audit Trail", description: "Every signature is logged with signer identity, timestamp, IP address, and document hash. Cryptographic sealing of all signed documents. PDF/A archival format." },
  { icon: Lock, title: "Enterprise Compliance", description: "ESIGN Act, UETA, and eIDAS compliant. SOC 2. 21 CFR Part 11 for regulated industries. PAdES digital signatures with X.509 certificates and RFC 3161 timestamps." },
  { icon: Clock, title: "Unlimited Documents", description: "No per-envelope fees. Send 10 or 10,000 documents per month for the same price. No user limits. Add your entire team at zero marginal cost." },
];

const useCases = [
  { icon: Home, industry: "Real Estate ($3K-$6K)", description: "Purchase agreements, lease contracts, and disclosure documents daily. Custom templates per transaction type. Multi-signer workflows for agents, buyers, and title companies." },
  { icon: Scale, industry: "Legal ($3K-$5K)", description: "NDAs, retainer agreements, and client contracts with matter-specific signing workflows. Full audit trail for compliance. Template libraries for common document types." },
  { icon: Briefcase, industry: "HR and Recruiting ($2K-$4K)", description: "Offer letters, employment contracts, NDAs, and policy acknowledgments. Automate the entire employee document lifecycle from onboarding to offboarding." },
  { icon: Building2, industry: "Insurance ($2K-$5K)", description: "Policy documents, claims, and renewals with branded signing experience. Multi-office support with team workspaces. Compliance-grade audit trails." },
  { icon: FileCheck, industry: "Financial Services ($3K-$5K)", description: "Account openings, advisory agreements, and KYC documentation. eIDAS and ESIGN-compliant signatures for regulated workflows. API integration with existing platforms." },
  { icon: Layers, industry: "SaaS and Tech", description: "Embed document signing directly into your product with the white-label API. Custom branding on every touchpoint. No per-envelope fees regardless of volume." },
];

const comparisonRows = [
  { label: "Monthly cost", ours: "$99-$199", theirs: "$25-$65/user/mo", oursHighlight: true },
  { label: "Per-document fees", ours: "None", theirs: "Envelope limits", oursHighlight: true },
  { label: "Cost for 5 users", ours: "$99-$199 flat", theirs: "$125-$325/mo", oursHighlight: true },
  { label: "API access", ours: "Included", theirs: "$300+/mo extra", oursHighlight: true },
  { label: "Embedded signing", ours: "Included", theirs: "Enterprise plan only", oursHighlight: true },
  { label: "Custom branding", ours: "Full white-label", theirs: "Limited or paid add-on", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "Source code access", ours: "Open source", theirs: "Closed", oursHighlight: true },
];

const plans = [
  { name: "Starter", description: "Self-hosted e-signature for small teams.", setupPrice: 1997, monthlyPrice: 99, features: ["Unlimited documents", "Drag-and-drop field placement", "Email notifications & reminders", "Full audit trail", "Reusable templates", "5-7 business days setup"] },
  { name: "Professional", description: "Advanced e-signature with API and custom branding.", setupPrice: 2997, monthlyPrice: 199, recommended: true, features: ["Everything in Starter", "REST API access", "Custom branding & domain", "Multiple signature types", "Bulk sending", "CRM integration", "Priority support", "5-7 business days setup"] },
];

const faqItems = [
  { question: "Are the signatures legally binding?", answer: "Yes. The platform creates a full audit trail with signer identity, timestamp, IP address, and document hash. Cryptographic sealing with PAdES digital signatures. Compliant with eIDAS (EU), ESIGN Act, and UETA (US). SOC 2 and 21 CFR Part 11 support for regulated industries." },
  { question: "Can I migrate from DocuSign?", answer: "Yes. Your existing templates can be recreated during setup. Document history stays in DocuSign, but all future documents live on your own server. We handle template creation and team onboarding as part of setup." },
  { question: "How many users can I add?", answer: "Unlimited users on both plans. Unlike DocuSign, there are no per-seat fees. Add your entire team at no extra cost. Role-based access control keeps permissions organized." },
  { question: "Can signers use this on mobile?", answer: "Yes. Signing works on any device with a browser. No app installation required for signers. The interface is fully responsive." },
  { question: "What file formats are supported?", answer: "PDF is the primary format. You can also upload DOCX files, which are automatically converted to PDF for signing. The platform supports multi-document envelopes for complex signing packages." },
  { question: "How does API pricing compare to DocuSign?", answer: "DocuSign charges $300+/month just for API access. Our Professional plan includes full API access at $199/month total, with unlimited documents. You can embed signing directly in your application at no additional cost." },
  { question: "Is the source code available?", answer: "Yes. The platform is built on Documenso, an open-source project with 12,400+ GitHub stars and 3,800+ commits. AGPL-3.0 license. You can audit the codebase, and there are no hidden vulnerabilities or vendor lock-in." },
  { question: "How long does setup take?", answer: "5-7 business days from kickoff to a working platform. Includes server deployment, custom branding, domain setup, template creation, and team onboarding." },
];

export default function ESignaturePage() {
  return (
    <>
      <ServiceHero
        badge="E-Signature"
        title="Stop paying per envelope for document signing"
        description="DocuSign charges $25-$65 per user per month, then adds envelope limits on top. Deploy your own e-signature platform with unlimited documents, unlimited users, and full API access at a flat monthly rate."
        icon={PenTool}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Built on Documenso"
        subtitle="The fastest-growing open-source e-signature platform. Fully auditable, self-hosted, and backed by an active community."
        projectName="Documenso"
        projectUrl="https://github.com/documenso/documenso"
        stats={productStats}
        screenshots={productScreenshots}
      />
      <FeatureGrid
        title="Everything DocuSign charges extra for"
        subtitle="API access, custom branding, embedded signing, unlimited envelopes. All included from day one."
        features={features}
      />
      <UseCaseSection
        title="High-value use cases by industry"
        useCases={useCases}
      />
      <ComparisonTable
        title="Your Platform vs. DocuSign"
        subtitle="Unlimited documents and users at a flat monthly rate. API access included, not paywalled."
        ourLabel="Your Platform"
        theirLabel="DocuSign"
        rows={comparisonRows}
      />
      <PricingSection
        title="Flat pricing, unlimited signatures"
        subtitle="One-time setup plus monthly hosting. No per-document fees, no user limits."
        plans={plans}
        timeline="Setup takes 5-7 business days. Includes deployment, branding, and template creation."
      />
      <ServiceFaq items={faqItems} />
      <RelatedServices currentSlug="e-signature" />
      <CTA
        heading="Stop paying per envelope"
        description="We'll deploy your own e-signature platform with unlimited documents, custom branding, and API access. Up and running in under a week."
      />
    </>
  );
}
