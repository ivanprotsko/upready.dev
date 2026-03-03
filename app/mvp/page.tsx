import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Zap,
  Rocket,
  Clock,
  DollarSign,
  CheckCircle2,
  Users,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/assets/logo/logo";
import Feature02 from "@/components/shadcn-space/blocks/feature-02";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";
import { upreadyData as footerData } from "@/components/shadcn-space/blocks/footer-03/data.upready";

export const metadata: Metadata = {
  title: "AI Code Rescue & MVP Studio",
  description:
    "Your AI-built app is broken. We fix it in days. Auth failures, blank screens, Stripe errors — fixed by specialists who know Lovable, Bolt, and Cursor inside out.",
};

const painPointsData = {
  badge_text: "Sound Familiar?",
  heading: "The last 30% is where every AI app gets stuck",
  footer_note: "",
  cta_button: "",
  featureCards: [
    {
      icon: "ShieldCheck",
      title: '"Auth worked yesterday. Now nobody can log in."',
      content:
        "OAuth redirect loops, Supabase RLS blocking users, sessions not persisting after deploy. The AI can't see your Google Cloud Console or Supabase settings.",
    },
    {
      icon: "AppWindow",
      title: '"It works in preview. Blank screen in production."',
      content:
        "Environment variables missing, CORS errors, 404s on page refresh. The preview sandbox hides every production problem until you deploy.",
    },
    {
      icon: "RotateCw",
      title: '"Every fix breaks something else."',
      content:
        "100+ prompting sessions later, the codebase has conflicting patterns and dead code. The AI responds to your current prompt without context of everything it already built.",
    },
    {
      icon: "CircleAlert",
      title: '"I hired a freelancer. He made it worse."',
      content:
        "General developers don't understand AI-generated code patterns. They refactor what's working and miss what's actually broken. Weeks lost, nothing shipped.",
    },
  ],
};

const stats = [
  { value: "50+", label: "Founders helped", icon: Users },
  { value: "3–7", label: "Days avg fix time", icon: Clock },
  { value: "$2K", label: "Starting price", icon: DollarSign },
  { value: "100%", label: "Code ownership", icon: CheckCircle2 },
  { value: "AI", label: "Native tooling", icon: TrendingUp },
];

const processSteps = [
  {
    step: "01",
    title: "Tell us what's broken",
    description:
      "Paste the error, share the app URL, or describe what stopped working in plain language. No technical knowledge required.",
    detail: "Takes 2 minutes on your end.",
  },
  {
    step: "02",
    title: "We diagnose & scope (free)",
    description:
      "Within 24 hours, we tell you exactly what's wrong, which category it falls into, and what it costs to fix. Real diagnosis, not a sales call.",
    detail: "Free. Under 24 hours.",
  },
  {
    step: "03",
    title: "We fix it, you ship",
    description:
      "We access your production environment, fix the root cause, test with real conditions, and deploy. You see it working before paying the second half.",
    detail: "3–7 business days.",
  },
];

const platforms = [
  "Lovable",
  "Bolt.new",
  "Cursor",
  "v0",
  "Replit",
  "Supabase",
  "Vercel",
  "Netlify",
];

export default function MvpPage() {
  return (
    <main>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <Logo />
          <Button asChild size="sm" className="rounded-full">
            <Link href="/contacts">Book a Free Call</Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <Badge variant="outline" className="mb-6 px-3 py-1 h-auto text-sm">
            AI App Rescue & MVP Build Studio
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Your AI app is broken.{" "}
            <span className="text-primary">We fix it in days.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            upready.dev repairs AI-generated apps for non-technical founders.
            Built with Lovable, Bolt, or Cursor and stuck at 80%? Broken in
            production? We get it shipped.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contacts">
                Fix My App
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              <Link href="/build">
                Build My MVP
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Trusted by 50+ founders. Flat fee, no retainer, no surprises.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <Feature02 data={painPointsData} />

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              From broken to live in days
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-t-4 border-t-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">App Rescue</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Auth failures, blank screens, Stripe errors, broken
                  deployments. We diagnose for free and fix the root cause in
                  3–7 days.
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold">$2,000</span>
                  <span className="text-muted-foreground">– $5,000</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  3–7 business days · 50% upfront, 50% on delivery
                </p>
                <Button asChild className="w-full rounded-full">
                  <Link href="/contacts">Describe What&apos;s Broken</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-t-4 border-t-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">MVP Build</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Turn your prototype into a production-ready product. Auth,
                  database, payments, deployment — the parts AI tools skip.
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold">$2,000</span>
                  <span className="text-muted-foreground">– $5,000</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  2–4 weeks · Scope approved before we start
                </p>
                <Button asChild className="w-full rounded-full">
                  <Link href="/build">See Build Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((item) => (
              <Card key={item.step} className="border-none bg-background">
                <CardContent className="p-8">
                  <span className="text-4xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
            Platforms We Work With
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
            We speak your stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {platforms.map((platform) => (
              <Badge
                key={platform}
                variant="secondary"
                className="text-base px-5 py-2.5 h-auto"
              >
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        data={{
          heading: "Stop prompting. Start shipping.",
          description:
            "Every week your app stays stuck costs you momentum and users. Go from stalled to deployed in days. Flat fee, no retainer, no surprises.",
          ctaLabel: "Book a Free Call",
          ctaHref: "/contacts",
        }}
      />

      {/* Footer */}
      <Footer data={footerData} />
    </main>
  );
}
