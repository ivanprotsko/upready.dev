"use client";

import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature02 from "@/components/shadcn-space/blocks/feature-02/feature";
import Feature03 from "@/components/shadcn-space/blocks/feature-03/feature";
import Pricing02 from "@/components/shadcn-space/blocks/pricing-02/pricing";
import Faq01 from "@/components/shadcn-space/blocks/faq-01/faq";
import Cta01 from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer01 from "@/components/shadcn-space/blocks/footer-01/footer";
import {
  RefreshCcw,
  CreditCard,
  CloudOff,
  Scissors,
  Lock,
  Rocket,
  Bug,
  Globe,
  Database,
  Gauge,
  Code2,
  MessageSquare,
  Shield,
  DollarSign,
  Zap,
  Check,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/upready";
const TELEGRAM_URL = "https://t.me/ivanprotsko";

export default function RescuePage() {
  return (
    <>
      <title>Fix Your AI-Coded App in 72 Hours — UpReady Rescue</title>
      <div className="relative">
        <Navbar
          logoText="Up"
          logoAccent="Ready"
          logoHref="/"
          navLinks={[
            { title: "Home", href: "/" },
            { title: "Build", href: "/build" },
          ]}
          ctaText="Get a Free Diagnosis"
          ctaHref={CALENDLY_URL}
          ctaExternal
          langHref="/ru/rescue"
          langLabel="RU"
        />

        <main>
          <HeroSection
            badge="AI App Rescue Service"
            headline="Your AI-coded app is broken."
            headlineAccent="We'll have it working in 72 hours."
            subtitle="We rescue apps built with Lovable, Bolt.new, Replit, v0, Cursor, and other AI coding tools. No judgment. No lectures. We fix it and get you moving."
            primaryCta={{ text: "Get a Free Diagnosis", href: CALENDLY_URL, external: true }}
          />

          <Feature02
            badge="Sound familiar?"
            headline="We've seen your exact problem before"
            cards={[
              {
                icon: RefreshCcw,
                title: "The Doom Loop",
                description:
                  "You ask the AI to fix a bug. It fixes it \u2014 and breaks two other things. You fix those \u2014 and the original bug is back. Round and round. We break the cycle by reading the actual code, not prompting blindly.",
              },
              {
                icon: CreditCard,
                title: "Credit Burnout",
                description:
                  "You\u2019ve spent $50, $100, $200 in platform credits. Every generation makes things worse. The sunk cost keeps you going. Stop. We can fix in hours what the AI has been failing at for days.",
              },
              {
                icon: CloudOff,
                title: "Deploy Disaster",
                description:
                  "Everything works in preview. You hit deploy \u2014 and it crashes. Or the auth breaks. Or the database won\u2019t connect. Deployment is where AI tools struggle most. It\u2019s where we excel.",
              },
              {
                icon: Scissors,
                title: "The Frankenstein App",
                description:
                  "50 AI iterations. Code from three different approaches stitched together. No one \u2014 not even the AI \u2014 knows what\u2019s going on anymore. We untangle the mess and make it maintainable.",
              },
            ]}
          />

          <Feature02
            badge="Our expertise"
            headline="What we fix"
            columns={3}
            cards={[
              {
                icon: Lock,
                title: "Authentication & Supabase issues",
                description:
                  "Broken login, RLS misconfigurations, session problems",
              },
              {
                icon: Rocket,
                title: "Deployment failures",
                description:
                  "Vercel, Netlify, custom hosting, environment variables",
              },
              {
                icon: Bug,
                title: "UI/UX bugs",
                description:
                  "Layout breaks, responsive design failures, styling conflicts",
              },
              {
                icon: Globe,
                title: "API integration errors",
                description: "Third-party APIs, webhooks, CORS issues",
              },
              {
                icon: Database,
                title: "Database problems",
                description:
                  "Schema errors, failed migrations, data not saving",
              },
              {
                icon: Gauge,
                title: "Performance issues",
                description:
                  "Slow loads, memory leaks, unnecessary re-renders",
              },
              {
                icon: Code2,
                title: "Code cleanup",
                description:
                  "Refactoring AI-generated spaghetti into maintainable code",
              },
            ]}
            closingText="If it was built with AI and it\u2019s broken \u2014 we fix it."
          />

          <Feature03
            badge="Simple process"
            headline="How Rescue works"
            steps={[
              {
                icon: MessageSquare,
                title: "Submit your issue",
                description:
                  "Describe what\u2019s broken \u2014 or book a 15-minute call.",
              },
              {
                icon: Shield,
                title: "Free diagnosis",
                description:
                  "We audit your app and identify root causes. No charge.",
              },
              {
                icon: DollarSign,
                title: "Get a quote",
                description:
                  "Fixed price based on complexity. No hourly billing surprises.",
              },
              {
                icon: Zap,
                title: "We fix it",
                description:
                  "24\u201372 hours for most issues. You get progress updates throughout.",
              },
              {
                icon: Check,
                title: "You\u2019re up and ready",
                description:
                  "Working app. Deployed. Plus documentation of every change.",
              },
            ]}
          />

          <Pricing02
            id="pricing"
            badge="Transparent pricing"
            headline="Pricing"
            plans={[
              {
                name: "Simple Fix",
                description:
                  "Single bug, configuration issue, deployment problem.",
                price: "$500",
                period: "from",
                features: [
                  "One focused issue",
                  "24\u201348 hour turnaround",
                  "14-day guarantee",
                  "Full documentation",
                ],
                cta: "Get a Free Diagnosis",
                href: CALENDLY_URL,
                external: true,
              },
              {
                name: "Deep Rescue",
                description:
                  "Multiple connected issues. Code refactoring. Auth overhaul.",
                price: "$1,500",
                period: "from",
                features: [
                  "Multiple issue resolution",
                  "Code refactoring included",
                  "48\u201372 hour turnaround",
                  "14-day guarantee",
                  "Full documentation",
                  "Priority support",
                ],
                featured: true,
                featuredLabel: "Most Popular",
                cta: "Get a Free Diagnosis",
                href: CALENDLY_URL,
                external: true,
              },
              {
                name: "Full Rebuild",
                description:
                  "The code is beyond repair. We rebuild the core from scratch.",
                price: "Custom",
                period: "quote",
                features: [
                  "Complete code rewrite",
                  "Modern architecture",
                  "Production deployment",
                  "14-day guarantee",
                  "Full documentation",
                  "Ongoing support options",
                ],
                cta: "Learn About Build",
                href: "/build",
              },
            ]}
            footerText="Every project starts with a free 15-minute diagnosis call."
          />

          <Faq01
            id="faq"
            badge="FAQ"
            headline="Frequently asked questions"
            items={[
              {
                question: "What platforms do you support?",
                answer:
                  "Lovable, Bolt.new, Replit, v0, Cursor \u2014 and any app built with React, Next.js, Supabase, or standard web technologies.",
              },
              {
                question: "How fast can you fix my app?",
                answer:
                  "Most fixes take 24\u201372 hours. Complex rescues can take up to a week.",
              },
              {
                question: "What if the problem comes back?",
                answer: "Every fix comes with a 14-day guarantee.",
              },
              {
                question: "Do I keep ownership of the code?",
                answer: "100%. Your code, your repo, your app.",
              },
              {
                question: "What if my app needs more than a fix?",
                answer:
                  "We\u2019ll recommend our Build service \u2014 or help you figure out the best path forward.",
              },
              {
                question:
                  "Can you work with a project that a freelancer already tried to fix?",
                answer:
                  "Yes. We\u2019ve rescued apps that have been through three different freelancers.",
              },
            ]}
          />

          <Cta01
            headline="Stop burning credits. Get your app fixed by humans."
            subtitle="A 15-minute call is all it takes to know exactly what's wrong and what it costs to fix."
            ctaText="Book a Free Diagnosis"
            ctaHref={CALENDLY_URL}
          />
        </main>

        <Footer01
          logoText="Up"
          logoAccent="Ready"
          logoHref="/"
          tagline="We rescue AI-coded apps and build production-ready software."
          sitemapTitle="Services"
          sitemapLinks={[
            { label: "Rescue", href: "/rescue" },
            { label: "Build", href: "/build" },
          ]}
          contactTitle="Contact"
          contactLinks={[
            { label: "Book a Call", href: CALENDLY_URL, external: true },
          ]}
          telegramUrl={TELEGRAM_URL}
        />
      </div>
    </>
  );
}
