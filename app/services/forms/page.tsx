"use client";

import {
  FileQuestion, GitBranch, BarChart3, Webhook, Globe, Palette,
  Briefcase, Users, ShoppingCart, GraduationCap, ClipboardList,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: FileQuestion, title: "Visual Form Builder", description: "Drag-and-drop form builder with 20+ field types. Text inputs, dropdowns, file uploads, ratings, and more." },
  { icon: GitBranch, title: "Conditional Logic", description: "Show or hide questions based on previous answers. Create dynamic forms that adapt to each respondent." },
  { icon: Palette, title: "Conversational Mode", description: "One question at a time, Typeform-style. Higher completion rates for surveys and lead capture forms." },
  { icon: BarChart3, title: "Response Analytics", description: "Built-in analytics dashboard. See completion rates, drop-off points, and response summaries at a glance." },
  { icon: Webhook, title: "Webhooks & Integrations", description: "Send form data anywhere via webhooks. Connect to your CRM, email platform, Slack, or custom backend." },
  { icon: Globe, title: "Embed Anywhere", description: "Embed forms on your website, share via link, or display as a popup. Works on any platform." },
];

const useCases = [
  { icon: Briefcase, industry: "Lead Generation", description: "Branded contact forms with conditional logic. Qualify leads before they hit your inbox." },
  { icon: Users, industry: "HR & Recruiting", description: "Job applications, employee surveys, and onboarding forms. Collect documents alongside responses." },
  { icon: ShoppingCart, industry: "E-commerce", description: "Product feedback surveys, post-purchase reviews, and custom order forms with file uploads." },
  { icon: GraduationCap, industry: "Education", description: "Course evaluations, registration forms, and quizzes. Export data for academic reporting." },
  { icon: ClipboardList, industry: "Operations", description: "Incident reports, maintenance requests, and inspection checklists. Mobile-friendly for field workers." },
];

const comparisonRows = [
  { label: "Monthly cost", ours: "$99", theirs: "$25-$83/mo", oursHighlight: false },
  { label: "Response limits", ours: "Unlimited", theirs: "100-10,000/mo", oursHighlight: true },
  { label: "Annual cost (high volume)", ours: "$1,188/yr", theirs: "$996-$3,588/yr", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "Custom branding", ours: "Full white-label", theirs: "Paid add-on", oursHighlight: true },
  { label: "Conditional logic", ours: "Included", theirs: "Paid plans only", oursHighlight: true },
];

const plans = [
  { name: "Standard", description: "Self-hosted forms and surveys with unlimited responses.", setupPrice: 1497, monthlyPrice: 99, features: ["Unlimited forms & responses", "Visual form builder", "Conditional logic", "Conversational mode", "Response analytics", "Webhooks & integrations", "Embed on your website", "3-5 business days setup"] },
];

const faqItems = [
  { question: "Can I migrate from Typeform?", answer: "Yes. We'll recreate your forms during setup, including conditional logic and integrations. Export your response data from Typeform to keep your history." },
  { question: "Is there a response limit?", answer: "No. Unlike Typeform and Google Forms, there are no response limits. Collect as many submissions as you need." },
  { question: "Can respondents upload files?", answer: "Yes. File upload fields support images, documents, and other file types. Files are stored on your server." },
  { question: "Does it work on mobile?", answer: "Yes. All forms are fully responsive. The conversational mode works especially well on mobile devices." },
  { question: "Can I export response data?", answer: "Yes. Export responses as CSV or JSON at any time. You also have direct database access for custom queries." },
];

export default function FormsPage() {
  return (
    <>
      <ServiceHero badge="Forms & Surveys" title="Your own Typeform, unlimited responses" description="Beautiful, conversational forms on your own server. No response limits, no per-form fees, no data leaving your infrastructure." icon={FileQuestion} ctaText="Get Started" />
      <FeatureGrid title="Forms that convert" subtitle="Everything you need to collect data — from simple contact forms to complex, multi-step surveys with conditional logic." features={features} />
      <UseCaseSection title="Built for every use case" useCases={useCases} />
      <ComparisonTable title="Your Forms vs. Typeform" subtitle="Unlimited responses at a flat price. The more responses you collect, the more you save." ourLabel="Your Platform" theirLabel="Typeform" rows={comparisonRows} />
      <PricingSection title="One plan, unlimited everything" subtitle="One-time setup plus flat monthly hosting. No response limits, no form limits." plans={plans} timeline="Setup takes 3-5 business days. Includes deployment, branding, and webhook configuration." />
      <ServiceFaq items={faqItems} />
      <CTA heading="Stop hitting response limits" description="We'll set up your self-hosted form platform and migrate your forms from Typeform in under a week." />
    </>
  );
}
