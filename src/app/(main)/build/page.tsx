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
  Lightbulb,
  Target,
  Wrench,
  Handshake,
  Check,
  Phone,
  FileText,
  Hammer,
  MessageSquare,
  Rocket,
  User,
  Presentation,
  Building2,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/upready";
const TELEGRAM_URL = "https://t.me/ivanprotsko";

export default function BuildPage() {
  return (
    <>
      <title>Build Your MVP in Weeks, Not Months — UpReady Build</title>
      <div className="relative">
        <Navbar
          logoText="Up"
          logoAccent="Ready"
          logoHref="/"
          navLinks={[
            { title: "Home", href: "/" },
            { title: "Rescue", href: "/rescue" },
          ]}
          ctaText="Book a Call"
          ctaHref={CALENDLY_URL}
          ctaExternal
          langHref="/ru/build"
          langLabel="RU"
        />

        <main>
          <HeroSection
            badge="UpReady Build"
            headline="Your MVP. Built right. Launched fast."
            subtitle="We use AI tools plus real engineering to build production-ready apps in weeks, not months. You get a working product — not a fragile prototype that breaks when real users show up."
            primaryCta={{ text: "Book a Discovery Call", href: CALENDLY_URL, external: true }}
            secondaryCta={{ text: "Tell Us About Your Idea", href: CALENDLY_URL }}
          />

          <Feature02
            badge="The honest truth"
            headline="Why not vibe code it yourself?"
            cards={[
              {
                icon: Lightbulb,
                title: "You can try",
                description:
                  "AI tools are incredible for prototypes. But there\u2019s a gap between \u2018works in preview\u2019 and \u2018ready for real users.\u2019",
              },
              {
                icon: Target,
                title: "The 80/20 problem",
                description:
                  "AI generates 80% of the code fast. The last 20% \u2014 security, authentication, deployment, edge cases \u2014 takes 80% of the effort.",
              },
              {
                icon: Wrench,
                title: "Same tools, different outcome",
                description:
                  "We use the same AI tools you\u2019ve tried: Lovable, Bolt, Cursor. The difference is we know where they break \u2014 and how to finish what they start.",
              },
              {
                icon: Handshake,
                title: "Vision vs engineering",
                description:
                  "You handle the vision. We handle the engineering.",
              },
            ]}
          />

          <Feature03
            badge="Deliverables"
            headline="What you get"
            steps={[
              {
                icon: Check,
                title: "Working app deployed to production",
                description: "Live URL, real users can access it",
              },
              {
                icon: Check,
                title: "Clean, maintainable codebase",
                description:
                  "Not the AI spaghetti you\u2019ve been fighting",
              },
              {
                icon: Check,
                title: "GitHub repo with documentation",
                description: "You own the code, you understand the code",
              },
              {
                icon: Check,
                title: "Properly configured database",
                description: "Supabase with row-level security done right",
              },
              {
                icon: Check,
                title: "Authentication that works",
                description: "Sign up, log in, password reset, the works",
              },
              {
                icon: Check,
                title: "Deployment pipeline",
                description: "Vercel or Netlify with environment configs",
              },
              {
                icon: Check,
                title: "2 weeks of post-launch support",
                description: "Bugs, tweaks, questions \u2014 we\u2019re here",
              },
            ]}
          />

          <Feature02
            badge="Who it's for"
            headline="Ideal for"
            cards={[
              {
                icon: User,
                title: "Solo founders validating an idea",
                description:
                  "You need to test with real users before raising money or quitting your job. Speed matters more than perfection.",
              },
              {
                icon: Presentation,
                title: "Startups needing a demo for investors",
                description:
                  "A working product speaks louder than a pitch deck. Show them something real.",
              },
              {
                icon: Building2,
                title: "Businesses testing a new product line",
                description:
                  "You want to move fast without diverting your engineering team.",
              },
              {
                icon: Wrench,
                title: "Anyone who tried vibe coding and hit the wall",
                description:
                  "You know the tools. You\u2019ve seen what they can do. You need someone to take it the rest of the way.",
              },
            ]}
          />

          <Feature03
            badge="Process"
            headline="How Build works"
            steps={[
              {
                icon: Phone,
                title: "Discovery call \u2014 30 min, free",
                description:
                  "You share your idea. We ask the right questions.",
              },
              {
                icon: FileText,
                title: "Proposal \u2014 within 48 hours",
                description: "Clear scope document, timeline, and fixed price.",
              },
              {
                icon: Hammer,
                title: "Build sprint \u2014 1 to 3 weeks",
                description: "We build. You get daily or weekly updates.",
              },
              {
                icon: MessageSquare,
                title: "Review and iterate",
                description:
                  "You test the app. You give feedback. We adjust.",
              },
              {
                icon: Rocket,
                title: "Launch",
                description:
                  "Deployed. Documented. Handed off. You\u2019re up and ready.",
              },
            ]}
          />

          <Pricing02
            id="pricing"
            badge="Pricing"
            headline="Simple, transparent pricing"
            plans={[
              {
                name: "Starter MVP",
                description:
                  "Landing page + one core feature + authentication + deployment.",
                price: "$2,500",
                period: "from",
                features: [
                  "Landing page + core feature",
                  "Authentication (sign up, login, reset)",
                  "Database setup (Supabase)",
                  "Deployment to Vercel/Netlify",
                  "GitHub repo with docs",
                  "1 week post-launch support",
                ],
                cta: "Get Started",
                href: CALENDLY_URL,
                external: true,
              },
              {
                name: "Full MVP",
                description:
                  "Multiple features, third-party integrations, admin panel.",
                price: "$5,000",
                period: "from",
                features: [
                  "Multiple features & pages",
                  "Third-party integrations",
                  "Admin panel",
                  "Advanced auth & roles",
                  "Full deployment pipeline",
                  "2 weeks post-launch support",
                ],
                featured: true,
                featuredLabel: "Popular",
                cta: "Get Started",
                href: CALENDLY_URL,
                external: true,
              },
              {
                name: "Custom",
                description:
                  "Complex logic, multiple user roles, advanced integrations.",
                price: "Let\u2019s talk",
                features: [
                  "Custom architecture",
                  "Complex business logic",
                  "Multiple user roles",
                  "Advanced integrations",
                  "Scalable infrastructure",
                  "Ongoing support options",
                ],
                cta: "Get Started",
                href: CALENDLY_URL,
                external: true,
              },
            ]}
            footerText="Payment: 50% upfront, 50% on delivery. All projects include full source code ownership."
          />

          <Faq01
            id="faq"
            badge="FAQ"
            headline="Frequently asked questions"
            items={[
              {
                question: "What tech stack do you use?",
                answer:
                  "React/Next.js, Supabase, Tailwind CSS, Vercel.",
              },
              {
                question: "How long does it take?",
                answer: "1\u20133 weeks for most MVPs.",
              },
              {
                question: "What if I want to add features later?",
                answer: "Your codebase is clean and documented.",
              },
              {
                question: "Do I own the code?",
                answer:
                  "100%. The GitHub repo, the database, the deployment \u2014 everything is yours.",
              },
              {
                question:
                  "Can you work with my existing vibe-coded project?",
                answer:
                  "If it\u2019s a broken prototype \u2014 yes. If it needs fixing first, start with Rescue.",
              },
              {
                question: "What if I don\u2019t have a technical spec?",
                answer:
                  "Most of our clients don\u2019t. That\u2019s what the discovery call is for.",
              },
            ]}
          />

          <Cta01
            headline="Have an idea? Let's make it real."
            subtitle="A 30-minute call is all it takes. No pressure. No commitment."
            ctaText="Book a Discovery Call"
            ctaHref={CALENDLY_URL}
          />
        </main>

        <Footer01
          logoText="Up"
          logoAccent="Ready"
          logoHref="/"
          tagline="We build and rescue MVPs so founders can focus on what matters."
          sitemapTitle="Sitemap"
          sitemapLinks={[
            { label: "Home", href: "/" },
            { label: "Build", href: "/build" },
            { label: "Rescue", href: "/rescue" },
          ]}
          contactTitle="Contact"
          contactLinks={[
            { label: "Telegram", href: TELEGRAM_URL, external: true },
            { label: "Book a Call", href: CALENDLY_URL, external: true },
          ]}
          telegramUrl={TELEGRAM_URL}
        />
      </div>
    </>
  );
}
