"use client";

import {
  BarChart3, Eye, Globe, Shield, Zap, Code,
  ShoppingCart, Briefcase, Building2, Newspaper, HeartPulse,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: Eye, title: "Real-Time Dashboard", description: "See page views, unique visitors, referral sources, and top pages updating live. No waiting for data to process." },
  { icon: Shield, title: "Privacy-First, No Cookies", description: "Cookieless tracking means no cookie banners, no consent popups. GDPR, CCPA, and PECR compliant out of the box." },
  { icon: Zap, title: "Lightweight Script (~2KB)", description: "A 2KB tracking script vs 45KB for Google Analytics. Your site stays fast, your Core Web Vitals stay green." },
  { icon: Globe, title: "Your Data, Your Server", description: "Deployed on a dedicated server you control. Visitor data never leaves your infrastructure. No third-party access." },
  { icon: Code, title: "Open API for Data Export", description: "Pull analytics data via REST API into your dashboards, reports, or custom tools. Full programmatic access." },
  { icon: BarChart3, title: "Multi-Site Support", description: "Track multiple websites and domains from a single dashboard. Perfect for agencies and multi-brand businesses." },
];

const useCases = [
  { icon: ShoppingCart, industry: "E-commerce", description: "Track product page performance, conversion funnels, and traffic sources without slowing down your storefront." },
  { icon: Briefcase, industry: "SaaS", description: "Monitor landing page effectiveness, trial signup flows, and marketing campaign ROI with privacy-compliant analytics." },
  { icon: Building2, industry: "Agency", description: "Manage analytics for all client websites from one dashboard. Share read-only access with individual clients." },
  { icon: Newspaper, industry: "Media & Publishing", description: "Track article performance, reader engagement, and referral sources without intrusive tracking that drives readers away." },
  { icon: HeartPulse, industry: "Healthcare", description: "HIPAA-friendly analytics for medical websites. No personal data collection, no cookies, no compliance headaches." },
];

const comparisonRows = [
  { label: "Script size", ours: "~2KB", theirs: "~45KB", oursHighlight: true },
  { label: "Cookie consent required", ours: "No", theirs: "Yes", oursHighlight: true },
  { label: "Data ownership", ours: "100% yours", theirs: "Google's servers", oursHighlight: true },
  { label: "GDPR compliant", ours: "By default", theirs: "Requires setup", oursHighlight: true },
  { label: "Setup complexity", ours: "One script tag", theirs: "Tag Manager + config", oursHighlight: true },
  { label: "Monthly cost", ours: "$49-$99", theirs: '"Free" (you pay with data)', oursHighlight: true },
];

const plans = [
  { name: "Essential", description: "Privacy-first analytics for a single website.", setupPrice: 997, monthlyPrice: 49, features: ["Dedicated server deployment", "1 website tracking", "Real-time dashboard", "Cookieless, GDPR-compliant", "SSL + custom domain", "Hosting, monitoring, backups"] },
  { name: "Professional", description: "Multi-site analytics with API access and team sharing.", setupPrice: 1497, monthlyPrice: 79, recommended: true, features: ["Everything in Essential", "Up to 5 websites", "REST API for data export", "Team members with roles", "Custom event tracking", "Priority support (4-hour SLA)"] },
  { name: "Agency", description: "Unlimited sites with client dashboards and white-label.", setupPrice: 2497, monthlyPrice: 99, features: ["Everything in Professional", "Unlimited websites", "Client-facing shared dashboards", "White-label branding", "Advanced API integrations", "Dedicated support & onboarding"] },
];

const faqItems = [
  { question: "How accurate is cookieless tracking?", answer: "Very accurate. Instead of cookies, the system uses a hash of the visitor's IP and user agent, which is discarded daily. This provides reliable unique visitor counts without storing any personal data." },
  { question: "Will this slow down my website?", answer: "No. The tracking script is under 2KB — roughly 20x smaller than Google Analytics. It loads asynchronously and has zero impact on your page speed or Core Web Vitals." },
  { question: "Can I migrate from Google Analytics?", answer: "Yes. You can run both in parallel during transition. Historical GA data can be exported separately. Most teams find they get clearer insights from the simpler, privacy-focused dashboard." },
  { question: "Do I really not need a cookie banner?", answer: "Correct. Since no cookies or personal data are stored, no consent is required under GDPR, CCPA, or PECR. One less popup for your visitors." },
  { question: "Can I track custom events?", answer: "Yes. The Professional and Agency plans include custom event tracking — button clicks, form submissions, file downloads, and any custom interaction you define." },
];

export default function AnalyticsPage() {
  return (
    <>
      <ServiceHero badge="Website Analytics" title="Privacy-first analytics for your website" description="Replace Google Analytics with a lightweight, cookieless alternative deployed on your own server. No cookie banners, no data sharing, full GDPR compliance." icon={BarChart3} ctaText="Get Started" />
      <FeatureGrid title="What you get" subtitle="A complete analytics platform that respects your visitors' privacy while giving you the insights you need." features={features} />
      <UseCaseSection title="Built for every industry" useCases={useCases} />
      <ComparisonTable title="Self-Hosted Analytics vs. Google Analytics" subtitle="Own your data, respect your visitors, and keep your site fast." ourLabel="Self-Hosted" theirLabel="Google Analytics" rows={comparisonRows} />
      <PricingSection title="Simple, transparent pricing" plans={plans} timeline="Launch timeline: 1-2 business days" />
      <ServiceFaq items={faqItems} />
      <CTA heading="Ready to own your analytics?" description="Book a call and we'll deploy a privacy-first analytics dashboard for your website." />
    </>
  );
}
