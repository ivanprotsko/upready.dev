"use client";

import {
  BookOpen, Search, Lock, FileDown, GraduationCap,
  Headphones, Users, Building2,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: BookOpen, title: "Structured Hierarchy", description: "Organize content as Books, Chapters, and Pages. Intuitive navigation that mirrors how people actually think about documentation." },
  { icon: Search, title: "Full-Text Search", description: "Search across your entire knowledge base instantly. Find answers in seconds, not minutes — even across hundreds of articles." },
  { icon: Lock, title: "Access Control", description: "Public help center for customers, private wiki for your team. Granular permissions per section, chapter, or page." },
  { icon: FileDown, title: "PDF Export", description: "Export any page or entire books as PDF. Perfect for sharing with clients who prefer offline documentation." },
];

const useCases = [
  { icon: GraduationCap, industry: "Employee Onboarding", description: "New hires find answers themselves instead of asking the same questions. Reduce onboarding time from weeks to days." },
  { icon: Headphones, industry: "Customer Help Center", description: "Public-facing documentation that deflects support tickets. Customers solve issues without contacting your team." },
  { icon: Users, industry: "Internal Wiki", description: "Capture institutional knowledge before it walks out the door. Processes, decisions, and tribal knowledge — all searchable." },
  { icon: Building2, industry: "SOPs & Compliance", description: "Standard operating procedures with version control. Know who changed what, when, and why." },
];

const comparisonRows = [
  { label: "Monthly cost (50 users)", ours: "$99-$149", theirs: "$400-$750+", oursHighlight: true },
  { label: "Per-seat pricing", ours: "None (unlimited)", theirs: "$8-$15/user/mo", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "Markdown required", ours: "No (WYSIWYG)", theirs: "Often yes", oursHighlight: true },
  { label: "Export options", ours: "PDF, HTML, Markdown", theirs: "Limited or paid", oursHighlight: true },
];

const plans = [
  { name: "Starter", description: "Essential knowledge base for small teams getting organized.", setupPrice: 1497, monthlyPrice: 99, features: ["Unlimited pages & books", "WYSIWYG editor", "Full-text search", "Basic access control", "PDF export", "3-5 business days setup"] },
  { name: "Professional", description: "Advanced knowledge base with SSO, branding, and API access.", setupPrice: 2497, monthlyPrice: 149, recommended: true, features: ["Everything in Starter", "Advanced permissions", "Custom branding", "API access", "LDAP/SAML authentication", "Multi-language support", "Priority support"] },
];

const faqItems = [
  { question: "Can I migrate from Notion or Confluence?", answer: "Yes. We handle content migration as part of setup. Export your pages and we'll import them into the new structure with formatting preserved." },
  { question: "Is this better than Notion for documentation?", answer: "For team knowledge bases, yes. You get unlimited users at a flat price, no per-seat costs, full data ownership, and a WYSIWYG editor that non-technical team members prefer over Markdown." },
  { question: "Can customers and employees use the same system?", answer: "Absolutely. Set up public sections for your help center and private sections for internal docs. Same system, different access levels." },
  { question: "What happens to my data if I cancel?", answer: "It's your server and your data. Export everything as PDF, HTML, or Markdown at any time. No vendor lock-in." },
  { question: "Do I need technical skills to manage content?", answer: "No. The WYSIWYG editor works like Google Docs — anyone can create and edit pages. No Markdown or coding required." },
];

export default function KnowledgeBasePage() {
  return (
    <>
      <ServiceHero badge="Knowledge Base" title="Your team's knowledge, always findable" description="Internal wiki or public help center — your call. Employees find answers themselves, customers solve problems without contacting support. No more knowledge trapped in people's heads." icon={BookOpen} ctaText="Get Started" />
      <FeatureGrid title="Documentation that people actually use" subtitle="A WYSIWYG editor anyone can use — no Markdown required. Costs a fraction of Notion or Confluence at scale." features={features} columns={2} />
      <UseCaseSection title="Knowledge that works for every team" useCases={useCases} />
      <ComparisonTable title="Your Knowledge Base vs. SaaS" subtitle="Own your data, pay less, and get unlimited users without per-seat pricing." ourLabel="Your KB" theirLabel="Notion / Confluence" rows={comparisonRows} />
      <PricingSection title="Flat pricing, unlimited users" subtitle="Unlike Notion or Confluence, you don't pay per seat. One flat fee for your entire organization." plans={plans} timeline="Setup takes 3-5 business days. Includes deployment, content migration assistance, and training." />
      <ServiceFaq items={faqItems} />
      <CTA heading="Stop losing knowledge when people leave" description="We'll set up your knowledge base and help migrate existing content. Ready in under a week." />
    </>
  );
}
