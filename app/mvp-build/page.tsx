import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature02 from "@/components/shadcn-space/blocks/feature-02";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";
import { upreadyData as footerData } from "@/components/shadcn-space/blocks/footer-03/data.upready";

const deliverablesData = {
  badge_text: "What You Get",
  heading: "What We Build That AI Tools Leave Out",
  footer_note: "Every MVP includes these. Not as add-ons — as standard.",
  cta_button: "",
  featureCards: [
    {
      icon: "ShieldCheck",
      title: "Real Authentication",
      content:
        "Email/password + Google OAuth. Sessions that persist. Role-based access. Not a hardcoded test login — a real auth system that survives production.",
    },
    {
      icon: "Table",
      title: "Proper Database",
      content:
        "Structured tables, relationships, and access rules. Real data your users create — not hardcoded lists. Built on Supabase, scales to 10,000+ users.",
    },
    {
      icon: "Route",
      title: "Core Business Logic",
      content:
        "Whatever makes your product work. Booking flows, marketplace listings, subscription logic, multi-user workflows. Scoped before we build.",
    },
    {
      icon: "CreditCard",
      title: "Live Payments",
      content:
        "Stripe integration that actually processes money. One-time payments, subscriptions, or both. Webhooks configured. Live mode tested before delivery.",
    },
    {
      icon: "Globe",
      title: "Production Deployment",
      content:
        'Deployed on Vercel with custom domain. Environment variables set. A pipeline you can use to push future updates. Not "works on my machine."',
    },
    {
      icon: "FileText",
      title: "Full Code Ownership",
      content:
        "GitHub repo transferred to you. Supabase project under your account. Vercel under your account. Every credential documented. Zero lock-in.",
    },
  ],
};

const audienceData = {
  badge_text: "Who It's For",
  heading: "Founders who need more than a prototype",
  footer_note: "",
  cta_button: "",
  featureCards: [
    {
      icon: "Rocket",
      title: "Non-technical founders",
      content:
        "You have the idea and the market insight. You need someone to build the technical foundation so you can focus on growing the business.",
    },
    {
      icon: "CodeXml",
      title: "Stuck at 80%",
      content:
        "You've built something in Lovable, Bolt, or Cursor. It looks good but real users break it. Auth fails, payments don't work, data isn't persisting.",
    },
    {
      icon: "Target",
      title: "Agency refugees",
      content:
        "Agencies quoted $15K–$50K and 3–6 months. You need the same result in weeks, not months, at a fraction of the cost.",
    },
    {
      icon: "ShoppingBag",
      title: "Ready to charge",
      content:
        "You have users or customers waiting. You need a product that processes real payments and handles real accounts — not a demo.",
    },
  ],
};

const faqData = {
  badge_text: "FAQ",
  heading: "Questions founders ask before starting",
  faqItems: [
    {
      question:
        "Can you use my existing prototype, or does everything start over?",
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
  ],
};

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

const pricingTiers = [
  {
    name: "Starter MVP",
    subtitle: "Validate one core idea",
    price: "$2,500",
    priceMax: "",
    timeline: "1–2 weeks",
    features: [
      "Landing page or simple interface",
      "One core user action",
      "Basic authentication",
      "Simple data storage",
      "Production deployment",
    ],
    popular: false,
  },
  {
    name: "Standard MVP",
    subtitle: "A real product to charge for",
    price: "$5,000",
    priceMax: "",
    timeline: "2–3 weeks",
    features: [
      "Auth (email + Google OAuth)",
      "3–5 core features",
      "User dashboard or profile",
      "Role separation if needed",
      "Custom domain deployment",
    ],
    popular: true,
  },
  {
    name: "Full MVP",
    subtitle: "Production-ready on day one",
    price: "$7,500",
    priceMax: "",
    timeline: "3–4 weeks",
    features: [
      "Full auth (email + OAuth + magic link)",
      "5–8 core features",
      "Stripe payments (one-time or subscription)",
      "Multi-user roles & permissions",
      "Admin panel + email notifications",
    ],
    popular: false,
  },
];

export default function BuildPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <Badge variant="outline" className="mb-6 px-3 py-1 h-auto text-sm">
            MVP Build
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            You&apos;ve Already Tried.{" "}
            <span className="text-primary">We Finish What Others Couldn&apos;t.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            AI tools got you 80% there. The freelancer ghosted at 60%.
            The agency quoted $30K and four months. You still don&apos;t have a
            product. We pick up where they left off — 1–4 weeks, flat fee,
            working code on delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contacts">
                Describe Your Product
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              <Link href="#pricing">
                See Pricing
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            50+ founders rescued. Fixed scope. Flat fee. You own every line of code.
          </p>
        </div>
      </section>

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
      <Feature02 data={deliverablesData} />

      {/* Who It's For */}
      <Feature02 data={audienceData} />

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
      <section id="pricing" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Three Scopes. Pick Where You Are.
            </h2>
            <p className="text-muted-foreground mt-4">
              Not sure which tier fits? Describe your product and we&apos;ll
              tell you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.popular ? "border-primary relative" : ""}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1 h-auto">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tier.subtitle}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">
                      {tier.priceMax}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {tier.timeline}
                  </p>
                  <Separator className="mb-6" />
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full rounded-full"
                  >
                    <Link href="/contacts">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Payment: 50% upfront to start, 50% on delivery. You see the working
            product before the final payment.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <Faq data={faqData} />

      {/* CTA */}
      <CTA
        data={{
          heading: "From Idea to Working Product.",
          description:
            "Agencies charge $15,000–$50,000 and take 3–6 months. We charge $2,500–$7,500 and take 1–4 weeks. Describe your product — we'll scope it, price it, and tell you if we're the right fit.",
          ctaLabel: "Describe Your Product",
          ctaHref: "/contacts",
        }}
      />

      {/* Footer */}
      <Footer data={footerData} />
    </main>
  );
}
