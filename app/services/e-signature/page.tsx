"use client";

import {
  PenTool, FileText, Mail, Shield, Clock, Plug,
  Building2, Home, Briefcase, Heart, Scale,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: PenTool, title: "Drag-and-Drop Signing Fields", description: "Upload a document, place signature fields exactly where you need them. Recipients sign with a click — no printing or scanning." },
  { icon: Mail, title: "Email Notifications", description: "Automatic email to each signer with a secure link. Reminders for unsigned documents. Everyone stays in the loop." },
  { icon: Shield, title: "Full Audit Trail", description: "Every signature is logged — who signed, when, from what IP. Legally binding and verifiable." },
  { icon: FileText, title: "Reusable Templates", description: "Create templates for contracts, NDAs, and agreements you send regularly. Fill in details and send in seconds." },
  { icon: Plug, title: "API Integration", description: "Connect with your CRM, client portal, or custom app. Automate document generation and sending." },
  { icon: Clock, title: "Unlimited Documents", description: "No per-document fees. Send 10 or 10,000 documents per month for the same price." },
];

const useCases = [
  { icon: Scale, industry: "Legal", description: "NDAs, retainer agreements, and client contracts. Templates for common document types. Full audit trail for compliance." },
  { icon: Home, industry: "Real Estate", description: "Purchase agreements, lease contracts, and disclosure documents. Multiple signers with specific field placement." },
  { icon: Briefcase, industry: "Consulting", description: "SOWs, proposals, and service agreements. Send, track, and store — all from one platform." },
  { icon: Heart, industry: "Non-Profit", description: "Grant agreements, volunteer waivers, and donor pledges. Simple for signers who aren't tech-savvy." },
  { icon: Building2, industry: "HR & Operations", description: "Offer letters, employment contracts, and policy acknowledgments. Onboard new hires faster." },
];

const comparisonRows = [
  { label: "Monthly cost", ours: "$99-$199", theirs: "$25-$65/user/mo", oursHighlight: true },
  { label: "Per-document fees", ours: "None", theirs: "Envelope limits", oursHighlight: true },
  { label: "Cost for 5 users", ours: "$99-$199", theirs: "$125-$325/mo", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "API access", ours: "Included", theirs: "Enterprise plan only", oursHighlight: true },
];

const plans = [
  { name: "Starter", description: "Self-hosted e-signature for small teams.", setupPrice: 1997, monthlyPrice: 99, features: ["Unlimited documents", "Drag-and-drop field placement", "Email notifications & reminders", "Full audit trail", "Reusable templates", "5-7 business days setup"] },
  { name: "Professional", description: "Advanced e-signature with API and custom branding.", setupPrice: 2997, monthlyPrice: 199, recommended: true, features: ["Everything in Starter", "REST API access", "Custom branding & domain", "Multiple signature types", "Bulk sending", "CRM integration", "Priority support", "5-7 business days setup"] },
];

const faqItems = [
  { question: "Are the signatures legally binding?", answer: "Yes. The platform creates a full audit trail — signer identity, timestamp, IP address, and document hash. This meets the requirements of eIDAS (EU) and ESIGN/UETA (US) for electronic signatures." },
  { question: "Can I migrate from DocuSign?", answer: "Yes. Your existing templates can be recreated during setup. Document history stays in DocuSign, but all future documents live on your own server." },
  { question: "How many users can I add?", answer: "Unlimited users on both plans. Unlike DocuSign, there are no per-seat fees. Add your entire team at no extra cost." },
  { question: "Can signers use this on mobile?", answer: "Yes. Signing works on any device with a browser. No app installation required for signers." },
  { question: "What file formats are supported?", answer: "PDF is the primary format. You can also upload DOCX files, which are automatically converted to PDF for signing." },
];

export default function ESignaturePage() {
  return (
    <>
      <ServiceHero badge="E-Signature" title="Your own DocuSign, no per-document fees" description="Send, sign, and store documents on your own server. No envelope limits, no per-user fees, full audit trail. Legally binding electronic signatures you actually own." icon={PenTool} ctaText="Get Started" />
      <FeatureGrid title="Everything you need for document signing" subtitle="Upload, place fields, send, sign. Simple for senders and signers — powerful for your business." features={features} />
      <UseCaseSection title="Built for every workflow" useCases={useCases} />
      <ComparisonTable title="Your Platform vs. DocuSign" subtitle="Unlimited documents and users at a flat monthly rate." ourLabel="Your Platform" theirLabel="DocuSign" rows={comparisonRows} />
      <PricingSection title="Flat pricing, unlimited signatures" subtitle="One-time setup plus monthly hosting. No per-document fees, no user limits." plans={plans} timeline="Setup takes 5-7 business days. Includes deployment, branding, and template creation." />
      <ServiceFaq items={faqItems} />
      <CTA heading="Stop paying per envelope" description="We'll set up your own e-signature platform and migrate your templates from DocuSign in under a week." />
    </>
  );
}
