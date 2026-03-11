"use client";

import {
  FileQuestion, GitBranch, BarChart3, Webhook, Globe, Palette,
  Briefcase, Users, ShoppingCart, GraduationCap, ClipboardList,
  Upload, CreditCard,
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
  { label: "Active users", value: "30K+" },
  { label: "GitHub stars", value: "7K+" },
  { label: "Integrations", value: "34+" },
];

const showcaseScreenshots = [
  {
    src: "/images/services/forms/customization.webp",
    alt: "HeyForm drag-and-drop form builder with full branding customization",
    priority: true,
  },
  {
    src: "/images/services/forms/smart.webp",
    alt: "Smart forms with conditional logic and AI copilot",
  },
  {
    src: "/images/services/forms/responsive.webp",
    alt: "Responsive forms working on any device",
  },
];

const features = [
  { icon: FileQuestion, title: "Drag-and-Drop Builder", description: "Visual form builder with 20+ field types. Text inputs, dropdowns, file uploads, ratings, signatures, and payment fields — no code required." },
  { icon: GitBranch, title: "Conditional Logic", description: "Show or hide questions based on previous answers. Build dynamic, multi-path forms that adapt to each respondent in real time." },
  { icon: Palette, title: "Full White-Label Branding", description: "Customize fonts, colors, logos, backgrounds, and CSS. Your forms look like your brand, not a third-party tool." },
  { icon: BarChart3, title: "Response Analytics", description: "Built-in dashboard with completion rates, drop-off points, and response summaries. Export data as CSV or JSON at any time." },
  { icon: Upload, title: "File Uploads & Signatures", description: "Collect documents, images, and e-signatures directly through forms. All files stored on your server — no third-party storage." },
  { icon: Webhook, title: "34+ Integrations", description: "Connect to HubSpot, Slack, Zapier, Google Sheets, Stripe, Mailchimp, and 28 more. Send form data anywhere via webhooks." },
  { icon: Globe, title: "Embed Anywhere", description: "Embed forms on your website, share via link, or display as a popup. Fully responsive on every device and screen size." },
  { icon: CreditCard, title: "Payment Collection", description: "Accept payments directly in forms with built-in Stripe integration. Order forms, donations, and event registrations with zero commission." },
];

const useCases = [
  { icon: Briefcase, industry: "SaaS Lead Generation", description: "High-volume lead capture forms with CRM integrations. Qualify prospects with conditional logic before they hit your pipeline." },
  { icon: Users, industry: "Agencies (Multi-Client)", description: "White-label forms for every client. Custom branding, separate analytics, unlimited responses — all from one self-hosted instance." },
  { icon: ShoppingCart, industry: "E-commerce", description: "Product feedback surveys, pre-launch signups, custom order forms with file uploads and Stripe payment collection." },
  { icon: GraduationCap, industry: "Education & Research", description: "Course evaluations, registration forms, and research surveys. Collect thousands of responses without hitting plan limits." },
  { icon: ClipboardList, industry: "HR & Operations", description: "Job applications, employee surveys, incident reports, and inspection checklists. Mobile-friendly for field workers." },
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
  { question: "Can I migrate from Typeform?", answer: "Yes. We recreate your forms during setup, including conditional logic and integrations. Export your response data from Typeform to keep your history." },
  { question: "Is there a response limit?", answer: "No. Unlike Typeform and Google Forms, there are no response limits. Collect as many submissions as your server can handle." },
  { question: "Can respondents upload files?", answer: "Yes. File upload fields support images, documents, and other file types. Files are stored on your server, not a third-party cloud." },
  { question: "Does it work on mobile?", answer: "Yes. All forms are fully responsive. The conversational mode works especially well on mobile devices." },
  { question: "Can I accept payments through forms?", answer: "Yes. Built-in Stripe integration lets you collect payments, donations, and order fees directly within any form." },
  { question: "What integrations are available?", answer: "34+ integrations including HubSpot, Slack, Google Sheets, Zapier, Make, Mailchimp, Salesforce, Stripe, and more. Plus webhooks for custom backends." },
  { question: "Can I export response data?", answer: "Yes. Export responses as CSV or JSON at any time. You also have direct database access for custom queries and reporting." },
];

export default function FormsPage() {
  return (
    <>
      <ServiceHero
        badge="Forms & Surveys"
        title="Stop paying per response"
        description="Self-hosted form platform with unlimited responses, full branding control, and 34+ integrations. Everything Typeform charges $83/mo for — on your own server at a flat rate."
        icon={FileQuestion}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Powered by open-source"
        subtitle="Beautiful, conversational forms trusted by 30,000+ users — from startups to ByteDance and Airbnb."
        projectName="HeyForm"
        projectUrl="https://github.com/heyform/heyform"
        stats={showcaseStats}
        screenshots={showcaseScreenshots}
      />
      <FeatureGrid
        title="Forms that convert"
        subtitle="Everything you need to collect data — from simple contact forms to complex, multi-step surveys with conditional logic and payment collection."
        features={features}
      />
      <UseCaseSection title="Built for every team" useCases={useCases} />
      <ComparisonTable
        title="Your Forms vs. Typeform"
        subtitle="Unlimited responses at a flat price. The more responses you collect, the more you save."
        ourLabel="Your Platform"
        theirLabel="Typeform"
        rows={comparisonRows}
      />
      <PricingSection
        title="One plan, unlimited everything"
        subtitle="One-time setup plus flat monthly hosting. No response limits, no form limits."
        plans={plans}
        timeline="Setup takes 3-5 business days. Includes deployment, branding, and webhook configuration."
      />
      <ServiceFaq items={faqItems} />
      <RelatedServices currentSlug="forms" />
      <CTA
        heading="Stop hitting response limits"
        description="We deploy your self-hosted form platform and migrate your forms from Typeform in under a week."
      />
    </>
  );
}
