"use client";

import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature02 from "@/components/shadcn-space/blocks/feature-02/feature";
import Pricing01 from "@/components/shadcn-space/blocks/pricing-01/pricing";
import LogoCloud03 from "@/components/shadcn-space/blocks/logo-cloud-03/logo-cloud";
import Cta01 from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer01 from "@/components/shadcn-space/blocks/footer-01/footer";
import {
  Quote,
  Wrench,
  Rocket,
  MessageSquareText,
  Search,
  CircleCheckBig,
  TrendingUp,
  BarChart3,
  Percent,
  Timer,
  Sparkles,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/upready";
const TELEGRAM_URL = "https://t.me/ivanprotsko";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar
        logoText="Up"
        logoAccent="Ready"
        logoHref="/"
        navLinks={[
          { title: "Rescue", href: "/rescue" },
          { title: "Build", href: "/build" },
        ]}
        ctaText="Book a Call"
        ctaHref={CALENDLY_URL}
        ctaExternal
        langHref="/ru"
        langLabel="RU"
      />

      <main>
        <HeroSection
          badge="AI Code Rescue & MVP Studio"
          headline="Your AI-built app is broken."
          headlineAccent="We get it working."
          subtitle="You tried Lovable, Bolt, or Cursor. It worked — until it didn't. Now you're stuck in a loop, burning credits, and nothing deploys. We've been there. We know exactly how to fix it."
          primaryCta={{ text: "Fix My App", href: "/rescue" }}
          secondaryCta={{ text: "Build My MVP", href: "/build" }}
          subtext="Trusted by founders using Lovable, Bolt.new, Replit, v0, and Cursor"
        />

        <Feature02
          badge="Sound Familiar?"
          headline="We hear this every day"
          cards={[
            {
              icon: Quote,
              title: "\u201CI\u2019ve burned through 200 credits\u201D",
              description:
                "I\u2019ve burned through 200 credits and my app still crashes on deploy.",
            },
            {
              icon: Quote,
              title: "\u201CThe AI keeps breaking things\u201D",
              description:
                "The AI keeps fixing one thing and breaking three others. I\u2019m going in circles.",
            },
            {
              icon: Quote,
              title: "\u201CHired a freelancer, made it worse\u201D",
              description:
                "I hired a freelancer from Fiverr. They made it worse.",
            },
            {
              icon: Quote,
              title: "\u201CNeed someone who understands\u201D",
              description:
                "I just need someone who actually understands what these AI tools generate.",
            },
          ]}
          closingText="If you\u2019re nodding \u2014 you\u2019re in the right place."
        />

        <Pricing01
          id="services"
          badge="Services"
          headline="Two ways we help"
          featuresLabel="What\u2019s included"
          plans={[
            {
              name: "Rescue",
              description:
                "App broken? We fix AI-coded apps fast.",
              price: "$500",
              period: " from",
              features: [
                "Stuck in the doom loop? We break you out",
                "Deploy failures, auth bugs, broken UI \u2014 we\u2019ve seen it all",
                "24\u201372 hour turnaround on most fixes",
                "14-day guarantee on every fix",
                "Full documentation of changes",
                "Free initial diagnosis",
              ],
              bgColor: "bg-orange-400/10",
              cta: "Get a Free Diagnosis",
              href: "/rescue",
            },
            {
              name: "Build",
              description:
                "Need an MVP? From idea to launch in weeks.",
              price: "$2,500",
              period: " from",
              features: [
                "Production-ready app, not a fragile prototype",
                "Clean code, proper auth, real deployment",
                "You own everything \u2014 code, repo, data",
                "1\u20133 week delivery timeline",
                "2 weeks post-launch support",
                "Full source code ownership",
              ],
              bgColor: "bg-accent/10",
              cta: "Book a Discovery Call",
              href: "/build",
            },
          ]}
        />

        <Feature02
          id="how-it-works"
          badge="How It Works"
          headline="Three simple steps"
          columns={3}
          cards={[
            {
              icon: MessageSquareText,
              title: "Tell us what\u2019s wrong",
              description:
                "Book a call or describe your issue. Takes 15 minutes.",
            },
            {
              icon: Search,
              title: "We diagnose and fix",
              description:
                "Our team audits your code, identifies root causes, and delivers a working solution.",
            },
            {
              icon: CircleCheckBig,
              title: "You\u2019re up and ready",
              description: "Working app. Deployed. Documented. Yours.",
            },
          ]}
        />

        <LogoCloud03
          items={[
            "Lovable",
            "Bolt.new",
            "Replit",
            "v0",
            "Cursor",
            "Supabase",
            "Vercel",
            "Netlify",
          ]}
        />

        <Feature02
          badge="Market"
          headline="The market is moving fast"
          columns={3}
          cards={[
            {
              icon: TrendingUp,
              title: "~8M users",
              description:
                "Lovable users creating 100,000 new projects every day",
            },
            {
              icon: BarChart3,
              title: "41% AI-generated",
              description: "of all code written today is AI-generated",
            },
            {
              icon: Percent,
              title: "95% spend extra time",
              description:
                "of developers spend extra time fixing what AI produces",
            },
            {
              icon: Timer,
              title: "300% demand growth",
              description:
                "growth in demand for AI code cleanup services in 6 months",
            },
            {
              icon: Sparkles,
              title: "New category",
              description:
                "Fiverr created a dedicated \u2018Vibe Coding\u2019 category to keep up",
            },
          ]}
          closingText="You\u2019re not alone. And you don\u2019t have to figure it out yourself."
        />

        <Cta01
          headline="Ready to get your app up and ready?"
          subtitle="Stop burning credits. Stop going in circles. Get a human who understands AI-generated code \u2014 and knows how to make it work."
          ctaText="Book a Free Call"
          ctaHref={CALENDLY_URL}
        />
      </main>

      <Footer01
        logoText="Up"
        logoAccent="Ready"
        logoHref="/"
        tagline="We fix AI-coded apps and build MVPs that actually work."
        sitemapTitle="Sitemap"
        sitemapLinks={[
          { label: "Home", href: "/" },
          { label: "Rescue", href: "/rescue" },
          { label: "Build", href: "/build" },
        ]}
        contactTitle="Contact"
        contactLinks={[
          { label: "Telegram", href: TELEGRAM_URL, external: true },
          { label: "Book a Call", href: CALENDLY_URL, external: true },
        ]}
        telegramUrl={TELEGRAM_URL}
        bottomText="Built with AI from Bali"
      />
    </div>
  );
}
