"use client";

import {
  BarChart3, Eye, Globe, Shield, Zap, Code,
  ShoppingCart, Briefcase, Building2,
  GitFork, Route, Users,
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
  { label: "GitHub Stars", value: "35.6K" },
  { label: "Downloads", value: "22M+" },
  { label: "Contributors", value: "340+" },
];

const showcaseScreenshots = [
  {
    src: "/images/services/analytics/app.jpg",
    alt: "Umami analytics dashboard showing real-time traffic overview",
    priority: true,
  },
  {
    src: "/images/services/analytics/feature-user-retention.png",
    alt: "Retention cohort analysis showing visitor return rates",
  },
  {
    src: "/images/services/analytics/feature-user-journeys.png",
    alt: "User journey visualization with drop-off analysis",
  },
];

const features = [
  { icon: Shield, title: "No Cookies, No Consent Banners", description: "Cookieless tracking by default. No GDPR consent popups, no CCPA opt-outs, no PECR headaches. Privacy compliance without configuration." },
  { icon: Eye, title: "Real-Time Dashboard", description: "Live visitor tracking with 1-2 second updates. Page views, unique visitors, referral sources, bounce rate, and session duration at a glance." },
  { icon: Zap, title: "2KB Tracking Script", description: "A single 2KB script vs 45KB for Google Analytics. Zero impact on page speed, Core Web Vitals stay green." },
  { icon: GitFork, title: "Funnel & Conversion Tracking", description: "Multi-step conversion funnels with drop-off percentages. Track signup flows, checkout steps, and onboarding sequences." },
  { icon: Route, title: "User Journeys & Retention", description: "Visualize how visitors navigate your site. Cohort retention reports show return rates and stickiness over time." },
  { icon: Globe, title: "Your Data, Your Server", description: "Deployed on infrastructure you control. Visitor data never leaves your server. No third-party access, full data sovereignty." },
  { icon: Code, title: "REST API & Custom Events", description: "Track button clicks, form submissions, downloads, and any custom interaction. Pull data via API into your own tools." },
  { icon: Users, title: "Multi-Site & Team Access", description: "Unlimited websites from one installation. Team roles, shared dashboards, and client-facing read-only views for agencies." },
];

const useCases = [
  { icon: ShoppingCart, industry: "E-commerce", description: "Track product page performance, conversion funnels, and traffic sources without cookies. Know which campaigns drive sales without compromising shopper privacy. Setup: $2K-$4K." },
  { icon: Briefcase, industry: "SaaS", description: "Monitor trial signups, onboarding completion, and feature adoption. Journey reports reveal where users drop off and what drives retention. Setup: $2K-$4K." },
  { icon: Building2, industry: "Agency", description: "Manage analytics for 50+ client websites from one dashboard. Per-client shared views with team permissions and white-label branding. Setup: $3K-$5K." },
];

const comparisonRows = [
  { label: "Script size", ours: "~2KB", theirs: "~45KB", oursHighlight: true },
  { label: "Cookie consent required", ours: "No", theirs: "Yes", oursHighlight: true },
  { label: "Data ownership", ours: "100% yours", theirs: "Google's servers", oursHighlight: true },
  { label: "GDPR compliant", ours: "By default", theirs: "Requires setup", oursHighlight: true },
  { label: "Setup complexity", ours: "One script tag", theirs: "Tag Manager + config", oursHighlight: true },
  { label: "Open source", ours: "Yes (MIT)", theirs: "No", oursHighlight: true },
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
  { question: "Who uses Umami in production?", answer: "Companies like AMD, Accenture, GM, ESPN, Siemens, Intel, and Hulu use Umami. The project has 35.6K GitHub stars, 22M+ downloads, and 340+ contributors." },
  { question: "What about funnels and retention reports?", answer: "All plans include the real-time dashboard and basic analytics. Funnel analysis, user journeys, and retention cohort reports are available on Professional and Agency plans through the advanced reporting module." },
];

export default function AnalyticsPage() {
  return (
    <>
      <ServiceHero
        badge="Website Analytics"
        title="Website analytics without the privacy headaches"
        description="GA4 is complex, privacy-invasive, and requires cookie banners that tank your data quality. Replace it with a 2KB, cookieless alternative on your own server. GDPR-compliant by default, no configuration needed."
        icon={BarChart3}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="See what your visitors do, not who they are"
        subtitle="Real-time dashboards, conversion funnels, user journeys, and retention reports. All without cookies or personal data."
        projectName="Umami"
        projectUrl="https://github.com/umami-software/umami"
        stats={showcaseStats}
        screenshots={showcaseScreenshots}
      />
      <FeatureGrid
        title="Privacy and insights, no tradeoffs"
        subtitle="Everything you need from analytics, nothing your visitors should worry about."
        features={features}
        columns={2}
      />
      <UseCaseSection title="Built for privacy-conscious businesses" useCases={useCases} />
      <ComparisonTable
        title="Self-Hosted Analytics vs. Google Analytics"
        subtitle="Own your data, respect your visitors, and keep your site fast."
        ourLabel="Self-Hosted"
        theirLabel="Google Analytics"
        rows={comparisonRows}
      />
      <PricingSection
        title="Simple, transparent pricing"
        plans={plans}
        timeline="Launch timeline: 1-2 business days"
      />
      <ServiceFaq items={faqItems} />
      <CTA
        heading="Ready to own your analytics?"
        description="Book a call and we'll deploy a privacy-first analytics dashboard for your website in 1-2 days."
      />
    </>
  );
}
