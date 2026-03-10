import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Server,
  RotateCw,
  ShieldAlert,
  Lock,
  CreditCard,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceFaq from "@/components/services/service-faq";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";

const painPoints = [
  {
    icon: Server,
    quote: '"It works locally. It breaks the second I deploy."',
    body: "Environment variables missing, CORS errors, 404s on refresh. The AI's preview sandbox hides every production problem until it's live — in front of your users.",
  },
  {
    icon: RotateCw,
    quote: '"I\'ve been going in circles for weeks. Every fix creates a new bug."',
    body: "You're 100+ prompts deep. The AI responds to your latest message without remembering everything it built before. The codebase has contradictions the AI can't see.",
  },
  {
    icon: ShieldAlert,
    quote: '"Auth worked yesterday. Now nobody can log in."',
    body: "OAuth redirect loops, sessions not persisting after deploy, Supabase RLS quietly blocking everyone. The AI can't access your Google Cloud Console or your Supabase dashboard.",
  },
  {
    icon: Lock,
    quote: '"My app got hacked. API keys exposed, usage maxed out overnight."',
    body: "API keys hardcoded in frontend code, environment variables committed to a public repo, no rate limiting. One scan and the keys are gone. This is the #1 silent risk in AI-built apps.",
  },
  {
    icon: CreditCard,
    quote: '"Everything was fine until I tried to add payments."',
    body: "The AI can build UI. It struggles with Stripe webhooks, auth flows that interact with billing, and anything that touches real money. These aren't prompting problems — they're architectural gaps.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tell us what's broken",
    description:
      "Describe the problem in plain language. No technical knowledge required — paste the error, share the app URL, or just explain what stopped working. We'll do the rest.",
    detail: "Free · 30 minutes · No commitment",
  },
  {
    step: "02",
    title: "We tell you exactly what's wrong",
    description:
      "Within 48 hours, you receive a written diagnosis: what's broken, why it broke, what it takes to fix, and the exact price. Not a sales pitch — a real technical assessment with a fixed quote.",
    detail: "Delivered in 48 hours · Fixed quote included · $500 credited toward rescue",
  },
  {
    step: "03",
    title: "We fix it. You ship.",
    description:
      "A senior developer accesses your production environment, fixes the root cause, tests against real conditions, and deploys. You see it working before the second payment clears.",
    detail: "3–7 business days · 50% upfront, 50% on delivery · You own everything",
  },
];

const platforms = [
  {
    name: "Lovable",
    issue:
      "Production deploys fail silently. Auth works in preview, breaks live. API keys exposed in client-side code.",
  },
  {
    name: "Bolt.new",
    issue:
      "Environment variable handling. Backend logic that works in the sandbox breaks on real infrastructure.",
  },
  {
    name: "Cursor",
    issue:
      "Codebase accumulates contradictions across long sessions. Works locally, fails on any real deployment target.",
  },
  {
    name: "Replit",
    issue:
      "Deployments are fragile. Database connections drop. SSL and custom domains cause persistent errors.",
  },
  {
    name: "v0",
    issue:
      "UI-layer only — the moment you need data persistence or auth, you're on your own.",
  },
  {
    name: "Base44",
    issue:
      "Scaling beyond the prototype hits database and API design limits quickly.",
  },
];

const stats = [
  { value: "50+", label: "Founders rescued", icon: Users },
  { value: "48h", label: "Diagnosis turnaround", icon: Clock },
  { value: "$2K", label: "Rescue starts at", icon: DollarSign },
  { value: "3–7", label: "Days avg fix time", icon: Clock },
  { value: "100%", label: "Code owned by you", icon: CheckCircle2 },
];

const faqItems = [
  {
    question: "Can't I just ask the AI to fix it?",
    answer:
      "You can — and you probably already have. The ceiling isn't effort, it's architecture. The AI can't log into your production environment, read your server logs, check your database configuration, or see the state of your deployed app. It can only see what you paste into the chat. When the problem is in the gap between what you see and what the server sees, the AI is working blind. A senior developer with access to your actual environment solves it once.",
  },
  {
    question: "Why not just hire a freelancer on Upwork?",
    answer:
      "Most freelancers — even good ones — haven't worked with AI-generated codebases. They see unfamiliar patterns and either refactor working code or miss what's actually broken. We've fixed apps that a freelancer touched and made worse. We specialize specifically in Lovable, Bolt, Cursor, Replit, and v0 apps. That's the difference.",
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
    question: "What does \"you own the code\" actually mean?",
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

export default function RescuePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <Badge variant="outline" className="mb-6 px-3 py-1 h-auto text-sm">
            Built with Lovable, Bolt, Cursor, or Replit?
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Your AI-Built App Hit a Wall.{" "}
            <span className="text-primary">We&apos;ll Fix It.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Works locally, breaks in production? AI keeps going in circles? App
            got hacked? A senior developer diagnoses it for free in 48 hours —
            fixed price, no judgment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 h-13 text-base">
              <Link href="/contacts">
                Get a Free Diagnosis
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-13 text-base"
            >
              <Link href="#pricing">See Pricing</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            50+ founders rescued · Fixed price · You own the code
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Sound Familiar?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              You built 80% of it. The last 20% is where AI can&apos;t help.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every one of these has a fix. Most are simpler than you think.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, index) => (
              <Card
                key={index}
                className={`border-border/50 bg-background ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-base mb-3 leading-snug">
                    {point.quote}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
            These aren&apos;t edge cases. They&apos;re the 5 most common failure
            points we&apos;ve seen across 50+ AI-built apps.
          </p>
        </div>
      </section>

      {/* No Judgment Zone */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl border border-blue-500/20 bg-blue-950/20 p-8 sm:p-12">
            <div className="text-center mb-8">
              <Badge
                variant="outline"
                className="mb-4 px-3 py-1 h-auto text-sm border-blue-500/40 text-blue-400"
              >
                No Judgment Zone
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                You didn&apos;t write a single line of code.{" "}
                <span className="text-primary">That&apos;s smart.</span>
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base sm:text-lg">
              <p>
                AI coding tools let you build something real without a computer
                science degree. That&apos;s genuinely impressive. Most people
                with your idea never get past a Notion doc.
              </p>
              <p>
                Every builder hits the wall where the AI can&apos;t close the
                gap. It&apos;s not your fault — it&apos;s the architectural
                limit of how these tools work. They&apos;re great at 80%. The
                last 20% requires human judgment, access to your live
                environment, and knowledge of how production systems actually
                fail.
              </p>
              <p>
                We&apos;ve fixed apps built on $200 worth of AI credits.
                We&apos;ve fixed apps that burned $50,000 before someone called
                us. We&apos;ve seen hacked apps, apps that never deployed, apps
                with 6 months of circular prompting. We don&apos;t judge the
                code. We fix it.
              </p>
            </div>
            <div className="mt-10 border-l-4 border-primary/60 pl-6">
              <p className="text-base sm:text-lg italic text-foreground/80">
                &ldquo;I tried more than one hundred times to get the AI to fix
                it.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — a founder, two weeks before booking a diagnosis call
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Three steps. Fixed price from step two.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((item) => (
              <Card key={item.step} className="border-none bg-background">
                <CardContent className="p-8">
                  <span className="text-5xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Platforms We Know
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Built with one of these? We&apos;ve seen what breaks.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <Card key={platform.name} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {platform.issue}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
            We&apos;ve documented 167 failure patterns across these platforms.
            Most apps hit 3–5 of them. Most are fixable in days.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Fixed prices. No hourly surprises.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tier 1 — App Audit */}
            <Card className="bg-background border-border/60">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-1">App Audit</h3>
                  <p className="text-sm text-muted-foreground">
                    48-hour turnaround
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">$500</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Written assessment of every vulnerability",
                    "Prioritized issue list in plain English",
                    "Fix-or-rebuild recommendation with time estimate",
                    "30-minute walkthrough call included",
                    "$500 credited toward rescue if you proceed",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full">
                  <Link href="/contacts?type=audit">Order the $500 Audit</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tier 2 — App Rescue (highlighted) */}
            <Card className="bg-background border-primary/60 border-2 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">App Rescue</h3>
                    <Badge className="text-xs px-2 py-0.5 h-auto">
                      Most Popular
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    3–7 business days
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">$2,000</span>
                  <span className="text-muted-foreground">– $5,000</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Everything in the Audit",
                    "Senior developer fixes the root cause",
                    "Testing in production conditions before delivery",
                    "50% upfront, 50% on delivery — see it working first",
                    "Full code ownership — you get the repo, you keep it",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full">
                  <Link href="/contacts">
                    Get a Free Diagnosis
                    <ArrowUpRight size={14} className="ml-1.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tier 3 — Emergency */}
            <Card className="bg-background border-border/60">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-1">
                    Emergency Response
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Within 24 hours
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-2xl font-bold">Custom</span>
                  <span className="text-muted-foreground text-sm">
                    — book a call
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Immediate response for hacked apps or active breaches",
                    "Exposed API keys — containment within hours",
                    "Security audit + fix + post-incident hardening",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link href="/contacts?type=emergency">
                    Book an Emergency Call
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
            All prices in USD. Fixed quote after the free diagnosis — no
            open-ended billing. Not sure which tier you need? Start with the
            free diagnosis call and we&apos;ll tell you.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24">
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

      {/* FAQ */}
      <ServiceFaq
        title="Questions we hear before every first call"
        items={faqItems}
      />

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="relative overflow-hidden min-h-80 flex items-center justify-center px-6 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 before:bg-linear-to-r before:from-sky-100 before:from-15% before:via-white before:via-55% before:to-amber-100 before:to-90% before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-sky-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-300/10 dark:before:to-60% dark:before:rounded-full dark:before:-z-10 py-16">
            <div className="flex flex-col gap-6 items-center mx-auto text-center max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Your app is 80% there.{" "}
                <span className="text-primary">Let&apos;s close the gap.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                A 30-minute call costs you nothing. A senior developer looks at
                your app and tells you exactly what&apos;s wrong. No commitment,
                no sales pitch — just a real diagnosis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-13 text-base"
                >
                  <Link href="/contacts">
                    Get a Free Diagnosis
                    <ArrowUpRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Link
                  href="/contacts?type=audit"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Or order the $500 written audit →
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Fixed price · 48-hour turnaround · You own the code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-8 sm:py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            You might also need:{" "}
            <Link
              href="/tech-audit"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tech Audit →
            </Link>{" "}
            ·{" "}
            <Link
              href="/mvp-build"
              className="text-foreground hover:text-primary transition-colors"
            >
              MVP Build →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
