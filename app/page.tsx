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

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Pricing06 from "@/components/shadcn-space/blocks/pricing-06/pricing";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import Statistic from "@/components/shadcn-space/blocks/statistics-06/statistics";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import SocialProof from "@/components/shadcn-space/blocks/testimonial-01/testimonial";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import ServiceFaq from "@/components/services/service-faq";
import Footer05 from "@/components/shadcn-space/blocks/footer-05/footer-upready";
import Feature03 from "@/components/shadcn-space/blocks/feature-03/feature";
import ProblemSection from "@/components/shadcn-space/blocks/feature-02-problem/feature";
import LogoCloudUpready from "@/components/shadcn-space/blocks/logo-cloud-01/logo-cloud-upready";
import { Video, Zap, CreditCard, Banknote, UserX, Clock, GitBranch, Blocks } from "lucide-react";

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
        headingLine1={"Your\u00a0app will\u00a0be\u00a0ready."}
        headingLine2=""
        headingItalic="In weeks, not months."
        subheading="We rescue AI-built apps, launch MVPs from scratch, and cure SaaS addiction. Fixed pricing. No hidden costs. You own everything."
        buttonText=""
      />

      {/* The Problem — Feature 02 (from bf35ad1) */}
      <ProblemSection
        featureData={[
          {
            icon: Banknote,
            title: "Agencies charge\n$25K–150K",
            content: "3-6 months timeline burns through your pre-seed. You spend your entire runway on v1 that might not even find market fit.",
          },
          {
            icon: UserX,
            title: "Freelancers\ndisappear",
            content: "No unified vision \u2014 designer doesn\u2019t talk to developer, nobody understands the business. 30-40% of time wasted on coordination.",
          },
          {
            icon: Bug,
            title: "Vibe-coded apps\nbreak",
            content: "25% of YC W2025 startups with 95% AI code hit a wall: works locally, won\u2019t deploy, security holes everywhere.",
          },
          {
            icon: Rocket,
            title: "MVPs take too long\nto launch",
            content: "By the time your product is ready, the market has moved on. Slow iteration kills startups faster than bad ideas.",
          },
          {
            icon: Wrench,
            title: "Broken apps\nwith no one to fix",
            content: "The original developer is gone, the codebase is a mess, and every new fix introduces two new bugs. You need a rescue, not a rewrite.",
          },
          {
            icon: Lock,
            title: "SaaS subscriptions\ndrain your budget",
            content: "You\u2019re paying $2K\u2013$10K/month for tools you could self-host. Vendor lock-in means you can\u2019t leave without rebuilding everything.",
          },
        ]}
        heading="Building and running IT products shouldn't cost a fortune"
      />

      {/* The Solution — Feature 03 */}
      <Feature03
        cards={[
          {
            icon: Zap,
            title: "AI-Powered Engineer",
            description:
              "A senior engineer with AI tools, UX sense, and product thinking replaces an entire team \u2014 designer, developer, PM. One person, full ownership.",
          },
          {
            icon: Video,
            title: "Zero Meetings",
            description:
              "No kickoff calls, no status syncs, no scheduling nightmares. Share your idea via text, voice note, or doc \u2014 we take it from there.",
          },
          {
            icon: Clock,
            title: "Async by Default",
            description:
              "We work across time zones and deliver progress updates every 2\u20133 days via video. You review on your schedule, not ours.",
          },
          {
            icon: CreditCard,
            title: "USDT / USDC Payments",
            description:
              "Pay in stablecoins \u2014 no wire transfers, no banking delays, no currency conversion fees. Fast, borderless, hassle-free.",
          },
          {
            icon: Blocks,
            title: "Open-Source Stack",
            description:
              "We build on open-source \u2014 no vendor lock-in, no recurring SaaS fees. You own the code, the infrastructure, and the data.",
          },
          {
            icon: GitBranch,
            title: "Automated Dev & Deploy",
            description:
              "CI/CD pipelines, infrastructure as code, one-click deploys. From first commit to production \u2014 fully automated, no manual steps.",
          },
        ]}
        badgeText="The Solution"
        heading={"We\u2019ve cut out every obstacle that slows down traditional agencies."}
        description={"No endless meetings, no\u00a0payment hassle, no waiting. Just fast, focused delivery."}
        footnote=""
        buttonText=""
      />

      {/* The Promise */}
      <section>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center gap-6"
          >
            <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal">The Promise</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              {"Over 90% of dev agencies hide their prices. We\u00a0don\u2019t."}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              {"Fixed-price estimate before we start. No\u00a0hidden costs, no\u00a0surprise invoices\u00a0\u2014 what you see is what you\u00a0pay."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full"
          >
            <Card className="p-6 sm:p-8 shadow-none rounded-2xl text-left bg-transparent h-full">
              <CardContent className="p-0 flex flex-col gap-4 h-full">
                <Wrench size={28} className="shrink-0 text-primary" />
                <p className="text-xl font-semibold">Rescue AI-built app</p>
                <p className="text-base italic text-muted-foreground">Your app works locally but breaks in production.</p>
                <p className="text-base text-muted-foreground">
                  Starts $500 to $2499. Fixed price for the repair based on scope assessment.
                </p>
                <Button asChild className="rounded-lg w-fit mt-auto">
                  <Link href="/app-rescue">Continue</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="p-6 sm:p-8 shadow-none rounded-2xl text-left bg-transparent h-full">
              <CardContent className="p-0 flex flex-col gap-4 h-full">
                <Rocket size={28} className="shrink-0 text-primary" />
                <p className="text-xl font-semibold">Launch MVP from scratch</p>
                <p className="text-base italic text-muted-foreground">{"From spec to launch in 1\u20133 weeks. 3 fixed tiers."}</p>
                <p className="text-base text-muted-foreground">
                  $2500, $5000 or $7500. From scratch to launch. All infrastructure costs are included in the price.
                </p>
                <Button asChild className="rounded-lg w-fit mt-auto">
                  <Link href="/mvp-build">Continue</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="p-6 sm:p-8 shadow-none rounded-2xl text-left bg-transparent h-full">
              <CardContent className="p-0 flex flex-col gap-4 h-full">
                <Blocks size={28} className="shrink-0 text-primary" />
                <p className="text-xl font-semibold">Cure SaaS Addiction</p>
                <p className="text-base italic text-muted-foreground">Replace with an open-source alternative app.</p>
                <p className="text-base text-muted-foreground">
                  Price depends on the product or package to install, plus migration scope and data source.
                </p>
                <Button asChild className="rounded-lg w-fit mt-auto">
                  <Link href="/services">Continue</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer05 />
    </main>
  );
}
