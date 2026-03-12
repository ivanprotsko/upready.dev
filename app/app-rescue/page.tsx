"use client";

import {
  KeyRound,
  Globe,
  ShieldAlert,
  CreditCard,
  Database,
  Gauge,
  Wand2,
  Zap,
  Code2,
  Terminal,
  Layers,
} from "lucide-react";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature03 from "@/components/shadcn-space/blocks/feature-03/feature";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-05/footer-upready";

/* ─── What We Fix ───────────────────────────────────────── */

const failureCategories = [
  {
    icon: KeyRound,
    title: "Authentication & Sessions",
    description:
      "OAuth redirect loops, sessions expiring after deploy, Supabase RLS blocking every user, magic links that stop working in production. Auth is where AI-built apps fail first.",
  },
  {
    icon: Globe,
    title: "Deploy & Environment",
    description:
      "Builds pass locally, fail on Vercel or Railway. Missing environment variables, CORS errors, 404s on page refresh, wrong Node version in production. The sandbox hid everything.",
  },
  {
    icon: ShieldAlert,
    title: "Security Vulnerabilities",
    description:
      "API keys in client-side bundles, env vars committed to a public repo, no rate limiting, CORS open to all origins. These are exploited within hours of going live.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Stripe webhooks not reaching your endpoint, checkout sessions that create orders but don't charge, subscription events not updating the database. Real money requires production access to debug.",
  },
  {
    icon: Database,
    title: "Database & Data Loss",
    description:
      "Connection pool exhaustion, RLS policies too strict or too loose, migrations that ran differently in production, queries timing out under real user load. The AI never saw your live data.",
  },
  {
    icon: Gauge,
    title: "Performance & Crashes",
    description:
      "Memory leaks causing server restarts, infinite re-renders killing client performance, API timeouts, cold starts pushing 30 seconds. These only appear under real conditions.",
  },
];

/* ─── Process Steps ─────────────────────────────────────── */

const processSteps = [
  {
    step: "01",
    title: "Describe the problem",
    description:
      "Plain English. Share the error message, the app URL, and what you expected to happen. No technical vocabulary required — if you can describe the symptom, that's enough to start.",
    detail: "NDA signed before you share anything. No code access yet.",
  },
  {
    step: "02",
    title: "We audit — you decide",
    description:
      "Within 48 hours: a written diagnosis of what's broken, why it broke, what it takes to fix, and the exact price. You approve the fix plan before a developer touches a single line of production code.",
    detail: "$500 · 48h turnaround · Credited toward rescue if you proceed.",
  },
  {
    step: "03",
    title: "We fix it. You see it. Then pay the rest.",
    description:
      "A developer works in your production environment — not a copy, not a staging clone. Root cause fixed, not patched around. Tested under real conditions. You see it working before the second payment.",
    detail: "3–7 business days · 50% upfront, 50% on delivery.",
  },
];

/* ─── Platforms ─────────────────────────────────────────── */

const platforms = [
  {
    icon: Wand2,
    title: "Lovable",
    description:
      "Auth works in preview, breaks on deploy. API keys exposed client-side. Production deploys fail without clear error messages.",
  },
  {
    icon: Zap,
    title: "Bolt.new",
    description:
      "Environment variable handling fails in production. Backend logic that works in the sandbox breaks on real infrastructure.",
  },
  {
    icon: Code2,
    title: "Cursor",
    description:
      "Codebase accumulates contradictions across long sessions. Works locally, fails in any real deployment target.",
  },
  {
    icon: Terminal,
    title: "Replit",
    description:
      "Deployments are fragile. Database connections drop. SSL and custom domains cause persistent errors.",
  },
  {
    icon: Layers,
    title: "v0",
    description:
      "UI layer only. The moment you add data persistence or auth, you hit architectural gaps the tool never designed for.",
  },
  {
    icon: Database,
    title: "Base44",
    description:
      "Scaling beyond the prototype hits database and API design limits quickly. Works great at zero users, struggles at real load.",
  },
];

/* ─── Pricing ───────────────────────────────────────────── */

const pricingPlans = [
  {
    plan_name: "App Audit",
    plan_descp: "48-hour turnaround",
    plan_price: "$500",
    plan_feature: [
      "Written diagnosis of every vulnerability and failure",
      "Prioritized fix list in plain English",
      "Fix-or-rebuild recommendation with time and cost estimate",
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
      "App Audit included ($500, credited)",
      "Root cause fixed, not patched",
      "Tested in production conditions before delivery",
      "Under 80 hrs — $100/hr · 80+ hrs — $75/hr · 120+ hrs — $50/hr",
      "Full code ownership — repo and credentials stay yours",
    ],
    plan_recommended: true,
    plan_badge: "Most Popular",
    plan_cta: "Get a Diagnosis",
    plan_href: "/contacts",
  },
  {
    plan_name: "Emergency Response",
    plan_descp: "Within 24 hours",
    plan_price: "From $2,500",
    plan_feature: [
      "App hacked or actively breached",
      "API keys exposed — containment within hours",
      "Security audit + immediate fix + post-incident hardening",
      "Direct contact, immediate triage",
    ],
    plan_recommended: false,
    plan_cta: "Request Emergency Help",
    plan_href: "/contacts?type=emergency",
  },
];

/* ─── FAQ ───────────────────────────────────────────────── */

const faqItems = [
  {
    question: "How do I know you won't make it worse?",
    answer:
      "Two reasons. First, we don't touch production code until you've approved the written fix plan from the audit. You know exactly what we're going to do before we do it. Second, 50% of the fee is due on delivery — you see the fix working in your actual production environment before the second payment. We have no incentive to break things further.",
  },
  {
    question: "You'll have access to my production environment. What's the security posture?",
    answer:
      "We sign an NDA before you share anything — before you even share the app URL. We work in your environment using credentials you provide and revoke. We don't copy your database, we don't retain your API keys, and we don't store anything on our systems. When the fix is done, you rotate the credentials and we're gone. If your app already has exposed keys or unsecured data — that's exactly what the audit will flag first.",
  },
  {
    question: "Can't I just keep prompting the AI to fix it?",
    answer:
      "You can — and most founders have tried, at length. The ceiling isn't effort, it's access. The AI can't log into your production environment, read your server logs, check your database configuration, or see the state of your deployed app. It only sees what you paste into the chat. When the problem is in the gap between what you see locally and what the server sees, the AI is working blind. A developer with access to your actual environment solves it once.",
  },
  {
    question: "What if the app actually needs to be rebuilt from scratch?",
    answer:
      "The audit tells you that before any rescue work begins. Most apps don't need a full rebuild — they need 3–5 targeted fixes. But if yours genuinely does, we'll say so in the written diagnosis, with a rebuild estimate, not after billing you for rescue hours. And if you want to build from scratch with a clean foundation, we do that too — see our MVP Build service.",
  },
  {
    question: "Why not hire a freelancer on Upwork?",
    answer:
      "Most freelancers — even experienced ones — haven't worked extensively with AI-generated codebases. The patterns are unfamiliar: they either over-refactor working code or miss the actual root cause. We specialize specifically in Lovable, Bolt, Cursor, Replit, and v0 apps. We know what each tool generates and where each one breaks. That's a different skill set from general debugging.",
  },
  {
    question: "What's the difference between the Audit and the Rescue?",
    answer:
      "The Audit tells you what's wrong. The Rescue fixes it. The $500 Audit is the right starting point if you're not sure how serious the problem is, or if you need a written assessment before committing to repair work. If you proceed to Rescue, the $500 is credited toward the total. Most clients start with the Audit — it removes all uncertainty before any serious money changes hands.",
  },
  {
    question: "How do I describe what's broken if I don't have technical vocabulary?",
    answer:
      "You don't need technical vocabulary. \"Users can't log in after I deployed\" is enough. \"Payments go through but orders don't appear in the dashboard\" is enough. \"It works on my machine but shows a blank page for everyone else\" is enough. Share what you observe — what you expected to happen and what actually happened. We'll ask follow-up questions if we need more. You've been living with this problem; you know it better than anyone.",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function RescuePage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        headingLine1="Here's what fixing your app"
        headingLine2=""
        headingItalic="actually looks like."
        subheading="What we diagnose, what we access, how much it costs — explained before you decide. Starting with a $500 written audit."
        buttonText=""
      />

      {/* What We Fix */}
      <Feature03
        cards={failureCategories}
        badgeText="What We Fix"
        heading="Six failure categories. Most broken apps hit two or three."
        description=""
        footnote=""
        buttonText=""
      />

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal mb-6">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Three steps. You stay in control at every one.
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Card className="shadow-none bg-transparent">
                  <CardContent className="p-6 sm:p-8 flex gap-6">
                    <span className="text-4xl font-bold text-primary/20 shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-sm text-primary font-medium">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms We Know */}
      <Feature03
        cards={platforms}
        badgeText="Platforms We Know"
        heading="Built with one of these? We know where they break."
        description=""
        footnote=""
        buttonText=""
      />

      {/* Pricing */}
      <Pricing
        plans={pricingPlans}
        badgeText="Pricing"
        heading="Start with the audit. Everything else follows."
        subtitle="Fixed quote after the audit — no open-ended billing."
        footnote="All prices in USD. Not sure which you need? Start with the $500 audit and we'll recommend next steps."
      />

      {/* FAQ */}
      <Faq
        items={faqItems}
        badgeText="FAQ"
        heading="Questions before you share access to your app"
      />

      {/* CTA */}
      <CTA
        heading="Describe what's broken."
        description="Plain English is enough. We'll respond within 24 hours with what we need to start the audit."
        buttonText="Get a Diagnosis"
      />

      <Footer />
    </main>
  );
}
