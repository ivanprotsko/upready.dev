"use client";

import {
  ShieldCheck,
  Table,
  Route,
  CreditCard,
  Globe,
  FileText,
  Rocket,
  CodeXml,
  Target,
  ShoppingBag,
} from "lucide-react";

import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

/* ─── Data ──────────────────────────────────────────────── */

const deliverablesData = [
  {
    icon: ShieldCheck,
    title: "Real Authentication",
    content:
      "Email/password + Google OAuth. Sessions that persist. Role-based access. Not a hardcoded test login — a real auth system that survives production.",
  },
  {
    icon: Table,
    title: "Proper Database",
    content:
      "Structured tables, relationships, and access rules. Real data your users create — not hardcoded lists. Built on Supabase, scales to 10,000+ users.",
  },
  {
    icon: Route,
    title: "Core Business Logic",
    content:
      "Whatever makes your product work. Booking flows, marketplace listings, subscription logic, multi-user workflows. Scoped before we build.",
  },
  {
    icon: CreditCard,
    title: "Live Payments",
    content:
      "Stripe integration that actually processes money. One-time payments, subscriptions, or both. Webhooks configured. Live mode tested before delivery.",
  },
  {
    icon: Globe,
    title: "Production Deployment",
    content:
      'Deployed on Vercel with custom domain. Environment variables set. A pipeline you can use to push future updates. Not "works on my machine."',
  },
  {
    icon: FileText,
    title: "Full Code Ownership",
    content:
      "GitHub repo transferred to you. Supabase project under your account. Vercel under your account. Every credential documented. Zero lock-in.",
  },
];

const audienceData = [
  {
    icon: Rocket,
    title: "Non-technical founders",
    content:
      "You have the idea and the market insight. You need someone to build the technical foundation so you can focus on growing the business.",
  },
  {
    icon: CodeXml,
    title: "Stuck at 80%",
    content:
      "You've built something in Lovable, Bolt, or Cursor. It looks good but real users break it. Auth fails, payments don't work, data isn't persisting.",
  },
  {
    icon: Target,
    title: "Agency refugees",
    content:
      "Agencies quoted $15K–$50K and 3–6 months. You need the same result in weeks, not months, at a fraction of the cost.",
  },
  {
    icon: ShoppingBag,
    title: "Ready to charge",
    content:
      "You have users or customers waiting. You need a product that processes real payments and handles real accounts — not a demo.",
  },
];

const faqItems = [
  {
    question: "Can you use my existing prototype, or does everything start over?",
    answer:
      "We evaluate it first. Most Lovable and Bolt prototypes have salvageable UI code and backend code that's faster to replace than fix. We keep what helps and replace what hurts. You never pay for a rewrite you didn't need.",
  },
  {
    question: "How long does it actually take?",
    answer:
      "1–4 weeks from scope approval to delivery. Starter: 1–2 weeks. Standard: 2–3 weeks. Full: 3–4 weeks. The scope document takes 24–48 hours to prepare.",
  },
  {
    question: "Why are you so much cheaper than agencies?",
    answer:
      "Agencies have offices, project managers, account managers, design reviews. You're paying for their structure, not your product. We use AI tools as our primary development stack — same output, 3–4x less cost, 3–4x faster.",
  },
  {
    question: "What if my requirements change mid-build?",
    answer:
      "We pause and re-scope. Small changes: we absorb them. Large changes: we scope them separately. We'll never surprise you with a bill larger than the original estimate.",
  },
  {
    question: "Do I own the code?",
    answer:
      "100%. GitHub repo transferred to your account. Supabase under your account. Vercel under your account. Every credential documented. You can hand it to any developer tomorrow. Zero lock-in.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "Next.js for the frontend, Supabase for database and auth, Vercel for deployment, Stripe for payments. This stack handles most MVPs cleanly and has predictable scaling costs.",
  },
  {
    question: "What happens after delivery?",
    answer:
      "Two revision rounds are included. For ongoing support, rates start at $50/hr (120+ hrs/month). Most founders come back within 4–8 weeks with the first list of things users are asking for.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Describe your product",
    description:
      "One paragraph from you. What does the first paying user do in your app, step by step? No spec doc needed.",
    detail: "Your side. Takes 10 minutes.",
  },
  {
    step: "02",
    title: "We define exactly what we'll build",
    description:
      "We turn your description into a scope document. Which features are included, which are excluded, what the product looks like on delivery day. You approve it.",
    detail: "24–48 hours from us.",
  },
  {
    step: "03",
    title: "We build it",
    description:
      "Async development. No check-in meetings. Weekly progress updates. We build in the order that delivers the most value first — core features before polish.",
    detail: "1–4 weeks depending on scope.",
  },
  {
    step: "04",
    title: "You get a working product",
    description:
      "Deployed to production, tested with real user scenarios, GitHub repo transferred, all credentials documented. Everything you need to own it.",
    detail: "Delivery day.",
  },
];

const pricingPlans = [
  {
    plan_name: "Starter MVP",
    plan_descp: "Validate one core idea",
    plan_price: "$2,500",
    plan_feature: [
      "Landing page or simple interface",
      "One core user action",
      "Basic authentication",
      "Simple data storage",
      "Production deployment",
    ],
    plan_recommended: false,
    plan_cta: "Get Started",
    plan_href: "/contacts",
  },
  {
    plan_name: "Standard MVP",
    plan_descp: "A real product to charge for",
    plan_price: "$5,000",
    plan_feature: [
      "Auth (email + Google OAuth)",
      "3–5 core features",
      "User dashboard or profile",
      "Role separation if needed",
      "Custom domain deployment",
    ],
    plan_recommended: true,
    plan_badge: "Most Popular",
    plan_cta: "Get Started",
    plan_href: "/contacts",
  },
  {
    plan_name: "Full MVP",
    plan_descp: "Production-ready on day one",
    plan_price: "$7,500",
    plan_feature: [
      "Full auth (email + OAuth + magic link)",
      "5–8 core features",
      "Stripe payments (one-time or subscription)",
      "Multi-user roles & permissions",
      "Admin panel + email notifications",
    ],
    plan_recommended: false,
    plan_cta: "Get Started",
    plan_href: "/contacts",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function BuildPage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        headingLine1="You've Already Tried."
        headingLine2="We Finish What Others"
        headingItalic="Couldn't."
        subheading="AI tools got you 80% there. The freelancer ghosted at 60%. The agency quoted $30K and four months. We pick up where they left off — 1–4 weeks, flat fee, working code on delivery."
        buttonText="Describe Your Product"
      />

      {/* The 70% Problem */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
            Sound Familiar?
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">
            You&apos;ve Been Here Before.{" "}
            <span className="text-primary">This Time It Gets Done.</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              You tried the AI builders. Lovable, Bolt, Cursor — maybe all
              three. Got a prototype that looked great in the preview. Then real
              users showed up, and everything fell apart.
            </p>
            <p>
              So you hired a freelancer. They were responsive for two weeks,
              then replies slowed, then stopped. You&apos;re left with
              half-finished code you can&apos;t maintain and an invoice you
              can&apos;t dispute.
            </p>
            <p>
              Maybe you talked to an agency. They quoted $20K–$50K, a
              three-month timeline, and a discovery phase before anything gets
              built. You don&apos;t have that kind of runway.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <blockquote className="border-l-4 border-primary pl-6 py-2 text-muted-foreground italic">
              &ldquo;I&apos;ve spent weeks prompting and the app is 80% done but
              I can&apos;t finish it.&rdquo;
              <span className="block text-sm not-italic mt-1 text-muted-foreground/70">
                — Founder in r/lovable
              </span>
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-6 py-2 text-muted-foreground italic">
              &ldquo;Hired a dev on Upwork. $3K later I have a repo I
              can&apos;t deploy and a Stripe integration that throws
              errors.&rdquo;
              <span className="block text-sm not-italic mt-1 text-muted-foreground/70">
                — Founder in r/SaaS
              </span>
            </blockquote>
          </div>
          <p className="mt-8 text-lg font-medium text-foreground">
            We&apos;ve seen this pattern dozens of times. We know exactly
            where it breaks, and we know how to finish it.
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <Feature
        featureData={deliverablesData}
        badgeText="What You Get"
        heading="What We Build That AI Tools Leave Out"
        columns={3}
      />

      {/* Who It's For */}
      <Feature
        featureData={audienceData}
        badgeText="Who It's For"
        heading="Founders who need more than a prototype"
        columns={4}
      />

      {/* Process */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Four Steps. Scope Before Build.
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((item) => (
              <Card key={item.step} className="border-none bg-background">
                <CardContent className="p-8 flex gap-6">
                  <span className="text-4xl font-bold text-primary/20 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-2">
                      {item.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {item.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing
        plans={pricingPlans}
        badgeText="Pricing"
        heading="Three Scopes. Pick Where You Are."
        subtitle="Not sure which tier fits? Describe your product and we'll tell you."
        footnote="Payment: 50% upfront to start, 50% on delivery. You see the working product before the final payment."
      />

      {/* FAQ */}
      <Faq
        items={faqItems}
        badgeText="FAQ"
        heading="Questions founders ask before starting"
      />

      {/* CTA */}
      <CTA
        heading="From Idea to Working Product."
        description="Agencies charge $15,000–$50,000 and take 3–6 months. We charge $2,500–$7,500 and take 1–4 weeks. Describe your product — we'll scope it, price it, and tell you if we're the right fit."
        buttonText="Describe Your Product"
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
