"use client";

import {
  Building2,
  Mail,
  FileSignature,
  Calendar,
  Layout,
  BarChart3,
  BookOpen,
  Bot,
  FileText,
  ShoppingCart,
  Monitor,
  Globe,
  CircleOff,
  Bug,
  KeyRound,
  RefreshCcw,
  TrendingUp,
  Lock,
  DollarSign,
  Layers,
  Package,
  Megaphone,
  CheckCircle2,
  Users,
  Wrench,
  Search,
  Rocket,
} from "lucide-react";

import HeroSection from "@/components/shadcn-space/blocks/hero-07/hero";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import Statistic from "@/components/shadcn-space/blocks/statistics-06/statistics";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import SocialProof from "@/components/shadcn-space/blocks/testimonial-01/testimonial";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import ServiceFaq from "@/components/services/service-faq";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";

/* ─── Data ──────────────────────────────────────────────── */

const services = [
  {
    icon: Wrench,
    title: "Stuck at 80%? App got hacked?",
    content:
      "Your AI-built app works locally and breaks in production. Or it got hacked. A senior developer diagnoses it in 48 hours and fixes it at a fixed price.",
    stat: "From $500 · 3–7 days · No judgment",
    cta: "Fix my app →",
    href: "/app-rescue",
  },
  {
    icon: Search,
    title: "Not sure if it's ready to launch?",
    content:
      "A senior developer reviews your entire app and gives you a written report of every vulnerability, deployment risk, and code issue — in plain English.",
    stat: "$500 flat · 48-hour turnaround · Credited toward rescue",
    cta: "Get the audit →",
    href: "/tech-audit",
  },
  {
    icon: Rocket,
    title: "Have an idea and no developer to trust?",
    content:
      "From spec to launch in 1–4 weeks. Fixed scope, fixed price, weekly demos, and full repo access from Day 1. You own every line of code.",
    stat: "From $2,500 · 1–4 weeks · You own the repo",
    cta: "Start building →",
    href: "/mvp-build",
  },
];

const problemsVibeCoding = [
  {
    icon: CircleOff,
    title: "Works locally, breaks in production",
    content:
      "The app runs fine on your machine but fails the moment it hits a real server.",
  },
  {
    icon: Bug,
    title: "Every fix creates a new bug",
    content:
      "Payments fail. Features break. The AI goes in circles because it can't access your server, logs, or live database.",
  },
  {
    icon: KeyRound,
    title: "API keys exposed in frontend",
    content: "Hardcoded secrets get scraped within hours. Accounts get hacked.",
  },
  {
    icon: RefreshCcw,
    title: "AI can't escape the loop",
    content:
      "This isn't a prompting problem — it's an access problem. A developer in your real environment solves it in days.",
  },
];

const problemsSaasTrap = [
  {
    icon: TrendingUp,
    title: "Per-user pricing compounds fast",
    content:
      "HubSpot: $890/month. Mailchimp: $500/month. Calendly: $16/user/month. Combined: $2,000–$3,000/month.",
  },
  {
    icon: Lock,
    title: "Vendor lock-in traps your data",
    content:
      "Features move to \u201cPro\u201d plans. Annual renewals double. Export is painful or impossible.",
  },
  {
    icon: DollarSign,
    title: "Open-source equivalents exist",
    content:
      "The difference: you own the instance. No per-user fees, ever.",
  },
];

const products = [
  {
    label: "Replace HubSpot",
    icon: Building2,
    title: "Twenty CRM",
    desc: "$890/mo → $149/mo. No per-user fees.",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    href: "/services/crm",
  },
  {
    label: "Replace Mailchimp",
    icon: Mail,
    title: "Listmonk",
    desc: "Unlimited subscribers. Flat monthly fee.",
    bgColor: "bg-orange-400/10",
    textColor: "text-orange-400",
    href: "/services/email-marketing",
  },
  {
    label: "Replace DocuSign",
    icon: FileSignature,
    title: "Documenso",
    desc: "Unlimited signatures. No per-envelope charges.",
    bgColor: "bg-teal-400/10",
    textColor: "text-teal-400",
    href: "/services/e-signature",
  },
  {
    label: "Replace Calendly",
    icon: Calendar,
    title: "Cal.com",
    desc: "Unlimited team members. One fixed price.",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500",
    href: "/services/booking",
  },
  {
    label: "Replace Jira / Asana",
    icon: Layout,
    title: "Plane",
    desc: "Unlimited users. No seat-based pricing.",
    bgColor: "bg-sky-400/10",
    textColor: "text-sky-400",
    href: "/services/project-management",
  },
  {
    label: "Replace Google Analytics",
    icon: BarChart3,
    title: "Umami",
    desc: "GDPR-compliant. Data never leaves your server.",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    href: "/services/analytics",
  },
  {
    label: "Replace Confluence",
    icon: BookOpen,
    title: "BookStack",
    desc: "$8,000/yr → $149/mo. Same team, more features.",
    bgColor: "bg-amber-400/10",
    textColor: "text-amber-400",
    href: "/services/knowledge-base",
  },
  {
    label: "Replace ChatGPT Enterprise",
    icon: Bot,
    title: "AnythingLLM",
    desc: "Private AI on your own server. No data sent to OpenAI.",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-500",
    href: "/services/ai-assistant",
  },
  {
    label: "Replace Typeform",
    icon: FileText,
    title: "HeyForm",
    desc: "Unlimited responses. No per-response limits.",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-500",
    href: "/services/forms",
  },
  {
    label: "Replace Shopify",
    icon: ShoppingCart,
    title: "Medusa",
    desc: "Zero transaction fees. Full API access.",
    bgColor: "bg-red-500/10",
    textColor: "text-red-500",
    href: "/services/ecommerce",
  },
  {
    label: "Replace Retool / Grafana",
    icon: Monitor,
    title: "Budibase",
    desc: "Build internal tools and dashboards. Unlimited users.",
    bgColor: "bg-cyan-400/10",
    textColor: "text-cyan-400",
    href: "/services/dashboards",
  },
  {
    label: "Replace custom portals",
    icon: Globe,
    title: "Directus",
    desc: "API-first. White-label. Any tech stack.",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-500",
    href: "/services/client-portal",
  },
];

const bundlePlans = [
  {
    plan_name: "Sales Stack",
    plan_descp: "CRM + Booking + E-Signature",
    plan_price: "From $8,000",
    plan_feature: [
      "Twenty CRM",
      "Cal.com Booking",
      "Documenso E-Signature",
      "Full data migration",
      "Bundle discount applied",
    ],
    plan_recommended: false,
    plan_cta: "Get this bundle",
    plan_href: "/contacts?type=bundle-sales",
  },
  {
    plan_name: "Ops Stack",
    plan_descp: "Project Management + Knowledge Base + Dashboards",
    plan_price: "From $7,500",
    plan_feature: [
      "Plane Project Management",
      "BookStack Knowledge Base",
      "Budibase Dashboards",
      "Full data migration",
      "Bundle discount applied",
    ],
    plan_recommended: true,
    plan_badge: "Best Value",
    plan_cta: "Get this bundle",
    plan_href: "/contacts?type=bundle-ops",
  },
  {
    plan_name: "Marketing Stack",
    plan_descp: "Email Marketing + Analytics + Forms",
    plan_price: "From $6,500",
    plan_feature: [
      "Listmonk Email Marketing",
      "Umami Analytics",
      "HeyForm Forms",
      "Full data migration",
      "Bundle discount applied",
    ],
    plan_recommended: false,
    plan_cta: "Get this bundle",
    plan_href: "/contacts?type=bundle-marketing",
  },
];

const aboutUsData = [
  { icon: Wrench, title: "rescue", color: "bg-red-500/10 text-red-500" },
  { icon: Rocket, title: "build", color: "bg-blue-500/10 text-blue-500" },
  { icon: Package, title: "deploy", color: "bg-emerald-500/10 text-emerald-500" },
];

const processSteps = [
  { title: "Founders have shared their problem", count: 50 },
  { title: "Apps fixed or built from scratch", count: 30 },
  { title: "Open-source tools deployed", count: 12 },
];

const socialProofCards = [
  {
    label: "Open-source backing",
    value: "$32M",
    description: "Raised by the tools we deploy. Not experiments — funded products.",
    bgClass: "bg-primary/10 dark:bg-white/10",
    textClass: "text-card-foreground",
    subTextClass: "text-primary/70",
    colSpan: "lg:col-span-8",
    icon: DollarSign,
  },
  {
    label: "Community trust",
    value: "50+",
    description: "Founders helped. Fixed-price, no surprises.",
    bgClass: "bg-blue-500",
    textClass: "text-white",
    subTextClass: "text-white/70",
    colSpan: "lg:col-span-4",
    icon: Users,
  },
  {
    label: "GitHub adoption",
    value: "15,000+",
    description: "GitHub stars — Twenty CRM alone.",
    bgClass: "bg-gray-950",
    textClass: "text-white",
    subTextClass: "text-white/70",
    colSpan: "lg:col-span-4",
    icon: CheckCircle2,
  },
  {
    label: "Scale proven",
    value: "30,000+",
    description: "GitHub stars — Plane project management. Battle-tested at scale.",
    bgClass: "bg-primary/10 dark:bg-white/10",
    textClass: "text-card-foreground",
    subTextClass: "text-primary/70",
    colSpan: "lg:col-span-8",
    icon: CheckCircle2,
  },
];

const pricingPlans = [
  {
    plan_name: "App Audit",
    plan_descp: "48-hour turnaround",
    plan_price: "$500",
    plan_feature: [
      "48-hour written report",
      "Every vulnerability, every fix",
      "Fix-or-rebuild recommendation",
      "30-minute walkthrough included",
      "Credited toward rescue if you proceed",
    ],
    plan_recommended: false,
    plan_cta: "Order the $500 Audit",
    plan_href: "/contacts?type=audit",
  },
  {
    plan_name: "App Rescue",
    plan_descp: "Rate by scope",
    plan_price: "From $50/hr",
    plan_feature: [
      "Tech Audit included ($500, credited)",
      "Under 80 hrs — $100/hr",
      "80+ hrs — $75/hr",
      "120+ hrs — $50/hr",
      "Full code ownership — yours to keep",
    ],
    plan_recommended: true,
    plan_badge: "Most Popular",
    plan_cta: "Get a Free Diagnosis",
    plan_href: "/contacts",
  },
  {
    plan_name: "MVP Build",
    plan_descp: "1–4 weeks",
    plan_price: "From $2,500",
    plan_feature: [
      "Fixed scope, fixed price",
      "Weekly demos from Day 1",
      "Full repo access from Day 1",
      "Modern stack any developer can maintain",
      "30 days support post-launch",
    ],
    plan_recommended: false,
    plan_cta: "Start a Project",
    plan_href: "/contacts?type=build",
  },
  {
    plan_name: "Ongoing Support",
    plan_descp: "Monthly hours",
    plan_price: "From $50/hr",
    plan_feature: [
      "Under 80 hrs/mo — $100/hr",
      "80+ hrs/mo — $75/hr",
      "120+ hrs/mo — $50/hr",
      "We already know your codebase",
      "Cancel anytime, no lock-in",
    ],
    plan_recommended: false,
    plan_cta: "Start with Support",
    plan_href: "/contacts?type=support",
  },
];

const faqItems = [
  {
    question: "Can't I just keep prompting the AI to fix it?",
    answer:
      "You can — and most founders have tried, extensively. The ceiling isn't effort, it's access. The AI can't log into your production environment, read your server logs, or see what's actually happening in your live database. When the problem is in the gap between the local sandbox and the real server, the AI is working blind. A developer with access to your actual environment solves it once.",
  },
  {
    question: "I could deploy these tools myself. Why pay you?",
    answer:
      "You could. The question is whether your time is better spent configuring servers or building your business. Most \"I'll do it myself\" projects stall at server configuration. We handle the deployment, SSL, backups, updates, and migration — so you get the tool running in 10 days without spending 40 hours on infrastructure.",
  },
  {
    question: "Do I actually own the code?",
    answer:
      "Yes. Unconditionally. You get the full repository — every file, every commit, every configuration. You can take the code to any developer. No subscription required to access your own app. No code held on our servers. After delivery, you have no dependency on us unless you choose ongoing support.",
  },
  {
    question: "What if my budget is smaller than your minimums?",
    answer:
      "Start with the $500 Audit. It's the lowest-risk entry point — you get a complete written picture of your app before spending more. If the rescue quote comes back higher than your budget, you'll at least know exactly what's wrong and can plan accordingly. The $500 is credited toward rescue if you proceed.",
  },
  {
    question: "How is this different from hiring a freelancer?",
    answer:
      "Freelancers quote hourly, which means the final bill is unknown. Most haven't worked with AI-generated codebases — they see unfamiliar patterns and either over-refactor or miss the root cause. We specialize in Lovable, Bolt, Cursor, and Replit apps specifically, and quote a fixed price before touching any code.",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        badge="Senior Developers · Fixed Prices · You Own Everything"
        heading="Senior developers."
        headingHighlight="Fixed prices."
        headingSuffix="You own everything."
        description="We fix AI-built apps, build MVPs from scratch, and replace expensive SaaS with open-source alternatives you control."
        primaryCta={{ label: "Fix my app", href: "/app-rescue" }}
        secondaryCta={{ label: "Cut my SaaS bill", href: "#products" }}
        socialProof="50+ founders helped · Fixed price, no surprises · Full repo ownership guaranteed"
      />

      {/* Services Overview */}
      <Feature
        featureData={services}
        badgeText="Three Ways We Help"
        heading="What do you need fixed?"
        columns={3}
      />

      {/* Problem Section — Wall 1: Vibe Coding */}
      <Feature
        featureData={problemsVibeCoding}
        badgeText="Why Founders Get Stuck"
        heading="AI coding gets you to 80%. The last 20% is where it stops."
        columns={4}
      />

      {/* Problem Section — Wall 2: SaaS Trap */}
      <Feature
        featureData={problemsSaasTrap}
        badgeText="The SaaS Trap"
        heading="Per-user pricing. Annual increases. Vendor lock-in."
        columns={3}
      />

      {/* Products — 12 Tools */}
      <Statistic
        data={products}
        badgeText="12 Tools. No Per-User Fees. Ever."
        heading="Replace your most expensive SaaS — on your own private instance."
        subtitle="Fully deployed, configured, and migrated by us. You get all the features, none of the recurring SaaS bill."
      />

      {/* Bundles */}
      <Pricing
        plans={bundlePlans}
        badgeText="Bundles"
        heading="Or get the whole stack at once"
        subtitle="We bundle related tools to reduce setup cost and make migration simpler."
        popularLabel="Best Value"
      />

      {/* How It Works */}
      <AboutUs
        aboutusData={aboutUsData}
        statisticsCounter={processSteps}
      />

      {/* Social Proof */}
      <SocialProof
        badgeText="Built on Battle-Tested Open Source"
        heading="The tools we deploy are trusted by millions."
        cards={socialProofCards}
        footnote="All tools are open-source, actively maintained, and backed by millions in VC funding. We deploy, configure, and maintain them on your own server — so your data never leaves your control."
      />

      {/* Pricing */}
      <Pricing
        plans={pricingPlans}
        badgeText="Pricing"
        heading={'Fixed prices. Published. No \u201ccontact us for pricing.\u201d'}
        subtitle="31 of our competitors hide their prices. We don't."
        footnote="All prices in USD. We estimate hours upfront and hold to the quote. Not sure where to start? The $500 Audit is the lowest-risk first step."
      />

      {/* FAQ */}
      <ServiceFaq title="Questions before you book" items={faqItems} />

      {/* Final CTA — Two Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <CTA
          heading="Your app is stuck. Let's unblock it."
          description="Describe your problem. A senior developer responds within 24 hours with a real diagnosis. No commitment, no sales pitch."
          buttonText="Get a free diagnosis"
        />
        <CTA
          heading="You're overpaying for SaaS. Let's calculate."
          description="Tell us which tools you're using and how many users. We'll show you what the open-source equivalent costs on your own instance."
          buttonText="See the savings"
        />
      </div>

      <Footer />
    </main>
  );
}
