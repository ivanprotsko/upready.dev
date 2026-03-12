"use client";

import {
  ShieldCheck,
  Table,
  Route,
  Globe,
  FileText,
  Server,
  Search,
  FileBarChart,
  PenLine,
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

/* ─── Process Steps ────────────────────────────────────── */

const processSteps = [
  {
    step: "01",
    title: "Describe your product",
    description:
      "One paragraph. What does the first paying user do in your app, step by step? No spec document needed. No wireframes. Just your idea in plain words.",
    detail: "Takes you 10 minutes.",
  },
  {
    step: "02",
    title: "Discovery Week",
    description:
      "We research your market, extract your value proposition, and build a product landing page you can show to users and investors. We test it with real people, collect feedback, and write a detailed technical specification with exact scope, timeline, and price.",
    detail:
      "$2,500 \u00B7 One week \u00B7 Landing page + spec + validation data are yours to keep.",
  },
  {
    step: "03",
    title: "We build \u2014 you stay informed",
    description:
      "1\u20133 weeks of async development. $2,500 per week, paid at the start of each week. Progress reports every 2\u20133 days. Visual demos when there\u2019s something to show. You can pause between weeks if you need time.",
    detail: "No meetings. No check-ins. Pause anytime between weeks.",
  },
  {
    step: "04",
    title: "You see it working \u2014 then we hand it over",
    description:
      "Deployed to a staging environment. You test it, request revisions, confirm it matches the spec. After the final weekly payment \u2014 repo transferred to your GitHub, deployed to your domain, all credentials documented and handed over.",
    detail:
      "Code transfers after final payment. Everything under YOUR accounts.",
  },
];

/* ─── Pricing ──────────────────────────────────────────── */

const pricingPlans = [
  {
    plan_name: "Starter",
    plan_descp: "Validate and launch fast",
    plan_price: "$5,000",
    plan_feature: [
      "Discovery Week included (landing page + spec + validation)",
      "1 build week",
      "Authentication (email + password)",
      "1\u20132 core features",
      "Supabase database",
      "Production deployment (Vercel, custom domain, SSL)",
      "Full code ownership",
      "2 weeks total",
    ],
    plan_recommended: false,
    plan_cta: "Describe Your Product",
    plan_href: "/contacts?service=mvp-build",
  },
  {
    plan_name: "Standard",
    plan_descp: "A real product users will pay for",
    plan_price: "$7,500",
    plan_feature: [
      "Everything in Starter",
      "2 build weeks",
      "Auth with Google OAuth",
      "3\u20135 core features",
      "User dashboard or profile",
      "Role separation if needed",
      "API integrations (1\u20132 external services)",
      "3 weeks total",
    ],
    plan_recommended: true,
    plan_badge: "Most Popular",
    plan_cta: "Describe Your Product",
    plan_href: "/contacts?service=mvp-build",
  },
  {
    plan_name: "Full",
    plan_descp: "Production-ready on day one",
    plan_price: "$10,000",
    plan_feature: [
      "Everything in Standard",
      "3 build weeks",
      "Full auth (email + OAuth + magic link)",
      "5\u20138 core features",
      "Stripe payments (one-time or subscription)",
      "Multi-user roles & permissions",
      "Admin panel + email notifications",
      "4 weeks total",
    ],
    plan_recommended: false,
    plan_cta: "Describe Your Product",
    plan_href: "/contacts?service=mvp-build",
  },
];

/* ─── FAQ ──────────────────────────────────────────────── */

const faqItems = [
  {
    question: "What happens in the Discovery Week?",
    answer:
      "The first week is product work, not coding. We extract your value proposition, research your positioning, and build a product landing page you can show to potential users and investors. We test it with real people and collect their questions and feedback. By Friday you have: a working landing page, validation data, and a technical specification with exact scope, timeline, and price for the build. Discovery Week costs $2,500 and is included in every tier. If you decide not to proceed with the build, you keep everything \u2014 the landing page, the spec, the validation data.",
  },
  {
    question: "How do I know you\u2019re legit?",
    answer:
      "Judge us by how we communicate before you pay anything. When we discuss your project, you\u2019ll see how we think, what questions we ask, and whether we actually understand your problem. The scope document is a detailed technical specification \u2014 if anything goes wrong, any developer can pick it up and continue. You pay weekly, so your maximum risk at any point is one week of work.",
  },
  {
    question: "What if I\u2019m not happy with the result?",
    answer:
      "Two revision rounds are included in every tier. If the product doesn\u2019t match the approved specification, we fix it at no extra cost. If you want changes beyond the original scope, we re-scope and quote before continuing \u2014 no surprise bills. You can also pause between build weeks to reassess.",
  },
  {
    question: "Can you use my existing prototype from Lovable, Bolt, or Cursor?",
    answer:
      "We evaluate it during Discovery Week. Most prototypes have salvageable UI code and backend code that\u2019s faster to replace than fix. We keep what works and replace what doesn\u2019t. You never pay for a rewrite you didn\u2019t need.",
  },
  {
    question: "What if my requirements change mid-build?",
    answer:
      "Small changes: we absorb them. Large changes: we pause, re-scope, and you approve the new scope before we continue. Because you pay weekly, you always have a natural decision point \u2014 continue, adjust, or pause.",
  },
  {
    question: "What if my project is simpler than expected?",
    answer:
      "You get a better product, not a bigger bill. If your app can be built in fewer weeks than expected, we\u2019ll recommend the smaller tier. If we finish the core early within a paid week, we use the remaining time to polish and improve \u2014 not charge for work that isn\u2019t needed. We recommend the tier that fits, not the one that costs more.",
  },
  {
    question: "What if a third-party integration needs setup on my end?",
    answer:
      "Some integrations \u2014 like Stripe payments \u2014 require account verification on your side. We configure the code and test everything in test mode during the build. Going live is straightforward and documented step by step. If your verification takes longer than the build week, we move on to other features. Your scope includes the integration code \u2014 activating it is usually a 30-minute task once your accounts are ready.",
  },
  {
    question: "What are the ongoing costs after launch?",
    answer:
      "Vercel: free tier covers most MVPs (upgrade from $20/mo if needed). Supabase: free tier up to 50,000 rows (then $25/mo). Domain: ~$12/year. Stripe: 2.9% + $0.30 per transaction. Total: $0\u2013$50/month for most early-stage products. We build on free tiers deliberately \u2014 your MVP runs at zero cost until you scale.",
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function BuildPage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        headingLine1="Everything you need to know"
        headingLine2=""
        headingItalic="before we start."
        subheading={
          "What\u2019s included, how we build it, and what each tier costs."
        }
        buttonText=""
      />

      {/* Discovery Week */}
      <Feature03
        cards={[
          {
            icon: Search,
            title: "Product Research",
            description:
              "We extract your value proposition, understand your audience, and identify what makes your product different. You answer a structured questionnaire \u2014 we do the thinking.",
          },
          {
            icon: PenLine,
            title: "Product Landing Page",
            description:
              "A working page that presents your product as if it already exists. Show it to potential users, investors, or partners. Use it for validation interviews.",
          },
          {
            icon: FileBarChart,
            title: "Market Validation",
            description:
              "Test the landing page with real people. Collect their questions, objections, and interest signals. Know whether people want this before you invest in code.",
          },
          {
            icon: FileText,
            title: "Technical Specification",
            description:
              "Exact scope, features, timeline, and price. The spec becomes the agreement \u2014 what we build, what we don\u2019t, and how much it costs. You approve before any code is written.",
          },
        ]}
        badgeText="Week One: Discovery"
        heading="Before we write code, we understand your product."
        description="Every project starts with a $2,500 Discovery Week. You get a landing page, validation data, and a detailed spec \u2014 regardless of whether you proceed to build."
        footnote=""
        buttonText=""
      />

      {/* What We Build */}
      <Feature03
        cards={[
          {
            icon: ShieldCheck,
            title: "Real Authentication",
            description:
              "Email/password + OAuth. Sessions that persist across devices. Role-based access when needed. Not a hardcoded test login \u2014 a production auth system.",
          },
          {
            icon: Table,
            title: "Proper Database",
            description:
              "Structured tables, relationships, and row-level security. Real data your users create \u2014 not hardcoded lists. Built on Supabase, scales to 10,000+ users.",
          },
          {
            icon: Route,
            title: "Core Business Logic",
            description:
              "Whatever makes YOUR product work. Booking flows, marketplace listings, multi-step workflows. Scoped in the spec, agreed before we build.",
          },
          {
            icon: Globe,
            title: "Production Deployment",
            description:
              "Custom domain, SSL, environment variables, CI/CD pipeline. Deployed on Vercel, tested with real user scenarios. Not \u201Cworks on my machine.\u201D",
          },
          {
            icon: FileText,
            title: "Full Code Ownership",
            description:
              "GitHub repo under YOUR account. Supabase under YOUR account. Vercel under YOUR account. Every credential documented. Hand it to any developer tomorrow.",
          },
          {
            icon: Server,
            title: "Zero Ongoing Fees",
            description:
              "Vercel free tier + Supabase free tier = $0/month. No hosting bills, no platform fees, no surprise invoices. Your MVP runs free until you scale.",
          },
        ]}
        badgeText="What We Build"
        heading="Six things every build includes."
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
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 h-7 text-sm font-normal mb-6"
            >
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Four steps. You have control at every one.
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
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {item.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing
        plans={pricingPlans}
        badgeText="Pricing"
        heading={
          "Three tiers. The Discovery Week tells you which one\u00A0fits."
        }
        subtitle="Not sure? Describe your product \u2014 the spec will recommend the right tier."
        footnote="Every project starts with a $2,500 Discovery Week (included in all tiers). Discovery Week is also available standalone. Payment: $2,500 per week, paid at the start of each week. USDT/USDC or PayPal."
      />

      {/* FAQ */}
      <Faq
        items={faqItems}
        badgeText="FAQ"
        heading="Questions founders ask before paying"
      />

      {/* CTA */}
      <CTA
        heading="Ready? Describe your product."
        description={
          "One paragraph is enough. We\u2019ll get back to you within 24 hours."
        }
        buttonText="Describe Your Product"
      />

      <Footer />
    </main>
  );
}
