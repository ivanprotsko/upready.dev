"use client";

import {
  Server,
  RotateCw,
  ShieldAlert,
  Lock,
  CreditCard,
  Users,
  Clock,
  DollarSign,
  CheckCircle2,
  Wrench,
  AlertTriangle,
  Zap,
} from "lucide-react";

import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import Statistic from "@/components/shadcn-space/blocks/statistics-06/statistics";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";

/* ─── Pain Points ───────────────────────────────────────── */

const painPoints = [
  {
    icon: Server,
    title: '"It works locally. It breaks the second I deploy."',
    content:
      "Environment variables missing, CORS errors, 404s on refresh. The AI's preview sandbox hides every production problem until it's live — in front of your users.",
  },
  {
    icon: RotateCw,
    title: '"I\'ve been going in circles for weeks. Every fix creates a new bug."',
    content:
      "You're 100+ prompts deep. The AI responds to your latest message without remembering everything it built before. The codebase has contradictions the AI can't see.",
  },
  {
    icon: ShieldAlert,
    title: '"Auth worked yesterday. Now nobody can log in."',
    content:
      "OAuth redirect loops, sessions not persisting after deploy, Supabase RLS quietly blocking everyone. The AI can't access your Google Cloud Console or your Supabase dashboard.",
  },
  {
    icon: Lock,
    title: '"My app got hacked. API keys exposed, usage maxed out overnight."',
    content:
      "API keys hardcoded in frontend code, environment variables committed to a public repo, no rate limiting. One scan and the keys are gone. This is the #1 silent risk in AI-built apps.",
  },
  {
    icon: CreditCard,
    title: '"Everything was fine until I tried to add payments."',
    content:
      "The AI can build UI. It struggles with Stripe webhooks, auth flows that interact with billing, and anything that touches real money. These aren't prompting problems — they're architectural gaps.",
  },
];

/* ─── Process Steps ─────────────────────────────────────── */

const processSteps = [
  {
    icon: Wrench,
    title: "01 · Tell us what's broken",
    content:
      "Describe the problem in plain language. No technical knowledge required — paste the error, share the app URL, or just explain what stopped working. We'll do the rest.",
    stat: "Free · 24-hour response · No commitment",
  },
  {
    icon: AlertTriangle,
    title: "02 · We tell you exactly what's wrong",
    content:
      "Within 48 hours, you receive a written diagnosis: what's broken, why it broke, what it takes to fix, and the exact price. Not a sales pitch — a real technical assessment with a fixed quote.",
    stat: "Delivered in 48 hours · Fixed quote included · $500 credited toward rescue",
  },
  {
    icon: Zap,
    title: "03 · We fix it. You ship.",
    content:
      "A senior developer accesses your production environment, fixes the root cause, tests against real conditions, and deploys. You see it working before the second payment clears.",
    stat: "3–7 business days · 50% upfront, 50% on delivery · You own everything",
  },
];

/* ─── Platforms ─────────────────────────────────────────── */

const platforms = [
  {
    icon: Server,
    title: "Lovable",
    content:
      "Production deploys fail silently. Auth works in preview, breaks live. API keys exposed in client-side code.",
  },
  {
    icon: Zap,
    title: "Bolt.new",
    content:
      "Environment variable handling. Backend logic that works in the sandbox breaks on real infrastructure.",
  },
  {
    icon: Wrench,
    title: "Cursor",
    content:
      "Codebase accumulates contradictions across long sessions. Works locally, fails on any real deployment target.",
  },
  {
    icon: AlertTriangle,
    title: "Replit",
    content:
      "Deployments are fragile. Database connections drop. SSL and custom domains cause persistent errors.",
  },
  {
    icon: CreditCard,
    title: "v0",
    content:
      "UI-layer only — the moment you need data persistence or auth, you're on your own.",
  },
  {
    icon: Lock,
    title: "Base44",
    content:
      "Scaling beyond the prototype hits database and API design limits quickly.",
  },
];

/* ─── Pricing ───────────────────────────────────────────── */

const pricingPlans = [
  {
    plan_name: "App Audit",
    plan_descp: "48-hour turnaround",
    plan_price: "$500",
    plan_feature: [
      "Written assessment of every vulnerability",
      "Prioritized issue list in plain English",
      "Fix-or-rebuild recommendation with time estimate",
      "30-minute walkthrough call included",
      "$500 credited toward rescue if you proceed",
    ],
    plan_recommended: false,
    plan_cta: "Order the $500 Audit",
    plan_href: "/contacts?type=audit",
  },
  {
    plan_name: "App Rescue",
    plan_descp: "3–7 business days",
    plan_price: "From $50/hr",
    plan_feature: [
      "Tech Audit included ($500, credited toward rescue)",
      "Senior developer fixes the root cause",
      "Testing in production conditions before delivery",
      "Full code ownership — you get the repo, you keep it",
      "Rate by scope: $100/hr (<80 hrs) · $75/hr (80+) · $50/hr (120+)",
    ],
    plan_recommended: true,
    plan_badge: "Most Popular",
    plan_cta: "Get a Free Diagnosis",
    plan_href: "/contacts",
  },
  {
    plan_name: "Emergency Response",
    plan_descp: "Within 24 hours",
    plan_price: "From $2,500",
    plan_feature: [
      "Immediate response for hacked apps or active breaches",
      "Exposed API keys — containment within hours",
      "Security audit + fix + post-incident hardening",
    ],
    plan_recommended: false,
    plan_cta: "Request Emergency Help",
    plan_href: "/contacts?type=emergency",
  },
];

/* ─── Stats ─────────────────────────────────────────────── */

const stats = [
  {
    icon: Users,
    title: "Founders rescued",
    desc: "50+",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Diagnosis turnaround",
    desc: "48h",
    bgColor: "bg-amber-400/10",
    textColor: "text-amber-600",
  },
  {
    icon: DollarSign,
    title: "Audit + Rescue starts at",
    desc: "$500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600",
  },
  {
    icon: Clock,
    title: "Days avg fix time",
    desc: "3–7",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600",
  },
  {
    icon: CheckCircle2,
    title: "Code owned by you",
    desc: "100%",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
];

/* ─── FAQ ───────────────────────────────────────────────── */

const faqItems = [
  {
    question: "Can't I just ask the AI to fix it?",
    answer:
      "You can — and you probably already have. The ceiling isn't effort, it's architecture. The AI can't log into your production environment, read your server logs, check your database configuration, or see the state of your deployed app. It can only see what you paste into the chat. When the problem is in the gap between what you see and what the server sees, the AI is working blind. A senior developer with access to your actual environment solves it once.",
  },
  {
    question: "Why not just hire a freelancer on Upwork?",
    answer:
      "Most freelancers — even good ones — haven't worked with AI-generated codebases. They see unfamiliar patterns and either rebuild working code or miss what's actually broken. We've fixed apps that a freelancer touched and made worse. We specialize specifically in Lovable, Bolt, Cursor, Replit, and v0 apps. That's the difference.",
  },
  {
    question: "How do I know you won't make it worse?",
    answer:
      "Two reasons. First, we give you a written diagnosis before we touch a line of code. You approve the fix before we start. Second, 50% of the fee is due on delivery — you see it working before you pay the second half. We have no incentive to make it worse.",
  },
  {
    question: "What if the app needs to be rebuilt from scratch?",
    answer:
      "The written assessment (Audit) tells you exactly that. Most apps don't need a rebuild — they need 3–5 targeted fixes. If your app genuinely needs a rebuild, we'll tell you that in the diagnosis, not after billing you for rescue work. And if you want to build from scratch, we do that too — see our MVP Build service.",
  },
  {
    question: 'What does "you own the code" actually mean?',
    answer:
      "You get full access to the repository — every file, every commit. No code is held on our servers. No subscription required to access your own app. You can take the code to any developer after we're done. The ownership is unconditional.",
  },
  {
    question: "My app handles user data. Is this secure?",
    answer:
      "We sign an NDA before accessing your codebase and production environment. We don't store copies of your data. We work in your environment, not ours. If your app is already handling sensitive user data without encryption or proper auth — that's exactly what the Audit will flag.",
  },
  {
    question: "What's the difference between the Audit and the Rescue?",
    answer:
      "The Audit tells you what's wrong. The Rescue fixes it. The $500 Audit is the right starting point if you're not sure what's broken or how serious it is. If you proceed to Rescue, the $500 is credited toward the total. Most clients start with the Audit — it removes all the uncertainty before any real money changes hands.",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function RescuePage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        headingLine1="Your AI-Built App Hit a Wall."
        headingLine2="We'll Fix It."
        headingItalic="Fixed price. No judgment."
        subheading="Works locally, breaks in production? AI keeps going in circles? App got hacked? A senior developer diagnoses it in 48 hours — fixed price, no judgment."
        buttonText="Get a Free Diagnosis"
      />

      {/* Pain Points */}
      <Feature
        featureData={painPoints}
        badgeText="Sound Familiar?"
        heading="You built 80% of it. The last 20% is where AI can't help."
        columns={3}
      />

      {/* No Judgment Zone — CTA block repurposed as standalone callout */}
      <CTA
        heading="You didn't write a single line of code. That's smart."
        description="AI coding tools let you build something real without a computer science degree. Every builder hits the wall where the AI can't close the gap — it's not your fault. We've fixed apps built on $200 worth of AI credits. We've fixed apps that burned $50,000 before someone called us. We don't judge the code. We fix it."
        buttonText="Get a Free Diagnosis"
      />

      {/* Process */}
      <Feature
        featureData={processSteps}
        badgeText="How It Works"
        heading="Three steps. Fixed price from step two."
        columns={3}
      />

      {/* Platforms */}
      <Feature
        featureData={platforms}
        badgeText="Platforms We Know"
        heading="Built with one of these? We've seen what breaks."
        columns={3}
      />

      {/* Pricing */}
      <Pricing
        plans={pricingPlans}
        badgeText="Pricing"
        heading="Fixed prices. No hourly surprises."
        footnote="All prices in USD. Fixed quote after the free diagnosis — no open-ended billing. Not sure which tier you need? Start with the free diagnosis and we'll tell you."
        popularLabel="Most Popular"
      />

      {/* Stats */}
      <Statistic
        data={stats}
        badgeText="By the Numbers"
        heading="50+ founders rescued. Fixed prices. You own everything."
      />

      {/* FAQ */}
      <Faq
        items={faqItems}
        badgeText="FAQ"
        heading="Questions we hear before every engagement"
      />

      {/* Final CTA */}
      <CTA
        heading="Your app is 80% there. Let's close the gap."
        description="Describe your problem. A senior developer reviews your app and responds within 24 hours with a real diagnosis. No commitment, no sales pitch."
        buttonText="Get a Free Diagnosis"
      />

      <Footer />
    </main>
  );
}
