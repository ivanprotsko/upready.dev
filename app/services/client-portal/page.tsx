"use client";

import {
  Shield, FolderOpen, Bell, Palette, Plug, Users, FileText,
  RefreshCw, Building2, Briefcase, Stethoscope, Scale,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: Shield, title: "Authenticated Access", description: "Secure login for every client. Role-based permissions ensure each person sees only what they should." },
  { icon: FolderOpen, title: "File Storage & Sharing", description: "Centralized document hub with granular access controls. No more hunting through email threads for attachments." },
  { icon: Bell, title: "Real-Time Notifications", description: "Clients get notified instantly when project status changes, files are uploaded, or comments are added." },
  { icon: Palette, title: "Custom Branding", description: "White-label the portal with your logo, colors, and domain. Clients see your brand, not ours." },
  { icon: Plug, title: "REST & GraphQL API", description: "Connect the portal to your existing systems — CRM, project management, billing, or your own app." },
];

const useCases = [
  { icon: Briefcase, industry: "Agencies", description: "Replace weekly status emails. Clients check project progress, leave feedback, and download deliverables in one place." },
  { icon: FileText, industry: "Professional Services", description: "Contracts, invoices, reports — organized by project with version history and access logs." },
  { icon: RefreshCw, industry: "SaaS & Tech", description: "Give enterprise customers a self-service portal for support tickets, documentation, and account management." },
  { icon: Building2, industry: "Construction & Real Estate", description: "Share blueprints, permits, and progress photos with property owners and stakeholders." },
  { icon: Stethoscope, industry: "Healthcare", description: "Secure document exchange for patient records, lab results, and appointment scheduling." },
  { icon: Scale, industry: "Legal & Accounting", description: "Encrypted file sharing for sensitive documents. Audit trail for every access and download." },
];

const comparisonRows = [
  { label: "Monthly cost (50 clients)", ours: "$199", theirs: "$500-$2,000+", oursHighlight: true },
  { label: "Per-client pricing", ours: "None", theirs: "$10-$25/client", oursHighlight: true },
  { label: "Custom branding", ours: "Full white-label", theirs: "Logo only or paid add-on", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "API access", ours: "Full REST & GraphQL", theirs: "Plan-restricted", oursHighlight: true },
];

const plans = [
  { name: "Starter", description: "Essential client portal for small teams getting organized.", setupPrice: 2997, monthlyPrice: 199, features: ["Up to 50 client accounts", "File storage with access controls", "Email notifications", "Custom branding (logo & colors)", "REST API access", "7-10 business days setup"] },
  { name: "Professional", description: "Full-featured portal with unlimited clients and advanced integrations.", setupPrice: 5497, monthlyPrice: 349, recommended: true, features: ["Unlimited client accounts", "Advanced file management", "Real-time notifications", "Full white-label branding", "REST & GraphQL API", "Priority support", "Custom integrations", "7-10 business days setup"] },
];

const faqItems = [
  { question: "Can my clients access the portal on mobile?", answer: "Yes. The portal is fully responsive and works on any device. Clients can view projects, download files, and leave comments from their phone or tablet." },
  { question: "How does authentication work?", answer: "Clients receive an email invitation to create their account. They log in with email and password. You can also enable SSO or magic link authentication." },
  { question: "Can I connect it to my existing tools?", answer: "Absolutely. The portal exposes REST and GraphQL APIs. Connect it to your CRM, project management, invoicing, or any system with an API." },
  { question: "What about data security?", answer: "The portal runs on your own server with SSL encryption. File access is controlled by role-based permissions, and every action is logged for audit purposes." },
  { question: "Do I own the data?", answer: "100%. The portal runs on your infrastructure. You have full database access and can export everything at any time." },
];

export default function ClientPortalPage() {
  return (
    <>
      <ServiceHero badge="Client Portal" title="A secure space for your clients" description="Stop losing documents in email threads. Give every client a branded portal with project updates, file sharing, and real-time notifications — all under your domain." icon={Users} ctaText="Get Started" />
      <FeatureGrid title="Everything your clients need in one place" subtitle="A branded, secure hub where clients check progress, share files, and stay informed — without a single status email." features={features} />
      <UseCaseSection title="Built for teams that work with clients" useCases={useCases} />
      <ComparisonTable title="Your Portal vs. SaaS Alternatives" subtitle="Own your client experience. No per-seat pricing that scales against you." ourLabel="Your Portal" theirLabel="Copilot / SuiteDash" rows={comparisonRows} />
      <PricingSection title="Simple, transparent pricing" subtitle="One-time setup fee plus predictable monthly hosting. No per-client charges." plans={plans} timeline="Setup takes 7-10 business days. Includes deployment, configuration, and onboarding." />
      <ServiceFaq items={faqItems} />
      <CTA heading="Give your clients a better experience" description="Book a call and we'll set up a branded client portal for your business in under two weeks." />
    </>
  );
}
