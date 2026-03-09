import Link from "next/link";
import {
  ArrowUpRight,
  Shield,
  AlertTriangle,
  Code2,
  GitFork,
  Send,
  Clock,
  FileText,
  Phone,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceFaq from "@/components/services/service-faq";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";

const whatYouGet = [
  {
    icon: Shield,
    title: "Security Vulnerabilities",
    checks: [
      "API keys hardcoded in frontend code",
      "Secrets committed to the repository",
      "Authentication and authorization gaps",
      "Exposed endpoints that shouldn't be public",
      "Missing rate limiting on user-facing forms",
    ],
    deliver:
      "Written list of every vulnerability found, severity rating (critical / high / medium), and the exact fix for each.",
    why: "API key exposure is the #1 silent risk in AI-built apps. One automated scan of your public repo and the keys are gone. We've seen overnight usage bills of $4,000–$12,000 from a single exposed key.",
  },
  {
    icon: AlertTriangle,
    title: "Deployment Blockers",
    checks: [
      "Environment variable configuration for production",
      "CORS setup for your actual domain",
      "Build process errors that only appear outside the sandbox",
      "Database connection handling under real load",
      "SSL, custom domain, and redirect configuration",
    ],
    deliver:
      "Step-by-step list of everything that would prevent a clean production deploy — with fixes ranked by priority.",
    why: '"Works locally, breaks in production" is the most common failure pattern we see. The AI\'s preview environment hides every production problem until it\'s live — in front of your users.',
  },
  {
    icon: Code2,
    title: "Code Quality & Maintainability",
    checks: [
      "Logic contradictions accumulated across long AI sessions",
      "Duplicate or dead code that creates confusion",
      "Database query patterns that will slow under real traffic",
      "Error handling gaps (silent failures, no logging)",
      "Hardcoded values that should be configurable",
    ],
    deliver:
      "Prioritized list of quality issues with clear impact ratings — what's a real risk vs. what's cosmetic.",
    why: "AI tools respond to your latest message without remembering the full context of what was built before. Long sessions accumulate contradictions the AI can't see from inside the chat.",
  },
  {
    icon: GitFork,
    title: "Fix-or-Rebuild Recommendation",
    checks: [
      "Architecture soundness for your intended scale",
      "Whether the foundation can support features you plan to add",
      "Total effort estimate for fixing vs. starting clean",
    ],
    deliver:
      "An honest recommendation: fix the existing code, rescue specific components, or rebuild from scratch. With a time and cost estimate for each path.",
    why: "Most apps don't need a full rebuild — they need 3–5 targeted fixes. But when a rebuild is the right answer, you're better off knowing before you spend $5,000 on rescue work that won't hold.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Send,
    title: "Send us the app",
    description:
      "Share your repository link (GitHub, GitLab, or zip) and a brief description of the app, the tech stack, and any specific concerns you have. If the app is live, share the URL.",
    detail: "Takes 5 minutes · No technical knowledge required",
  },
  {
    step: "02",
    icon: Clock,
    title: "Senior developer reviews your codebase",
    description:
      "A senior developer manually reviews your app — not an automated scanner. They look at the actual code, test the live app against production conditions, and document every issue they find.",
    detail: "48-hour turnaround · Human review, not automated",
  },
  {
    step: "03",
    icon: FileText,
    title: "You receive the written report",
    description:
      "Your report arrives within 48 hours. Every issue is listed, explained in plain English, and prioritized. You'll know exactly what's broken, what's risky, and what to do next — regardless of whether you proceed with us.",
    detail: "Plain English · Prioritized issue list · Yours to keep",
  },
  {
    step: "04",
    icon: Phone,
    title: "30-minute walkthrough (included)",
    description:
      "If you want to talk through the report, ask questions, or understand the severity of specific issues, the walkthrough call is included in the $500. No upsell — just a plain conversation about what we found.",
    detail: "Included · Optional · No commitment to proceed",
  },
];

const faqItems = [
  {
    question: "Is this worth it if my app \"works\"?",
    answer:
      '"Works" means different things. Working locally and working reliably under real traffic with real users are not the same thing. The most common issues we find — exposed API keys, auth edge cases, missing environment variables in production — are invisible to you until they\'re not. The $500 Audit is the cheapest way to find out before a user does.',
  },
  {
    question: "How is this different from what the AI tells me about my code?",
    answer:
      "The AI reviews what you paste into the chat. It can't log into your production environment, read your server logs, or see your deployed configuration. It doesn't know what the live app is actually doing. A human developer with access to your repository and production environment finds what the AI can't see.",
  },
  {
    question: "What if you find nothing wrong?",
    answer:
      "That's a good result. You'll receive a report confirming the app is production-ready, noting any low-priority items to address over time. You'll launch with confidence instead of anxiety. The $500 is still the cheapest version of that certainty.",
  },
  {
    question: "What if you find something really serious?",
    answer:
      "We'll tell you clearly — what it is, how severe, and what it takes to fix. If the issue is critical (like exposed API keys on a live app), we'll flag it immediately, before the full report is complete. You'll have everything you need to make a decision, with no pressure from us to hire us for the fix.",
  },
  {
    question: "What tech stacks do you know?",
    answer:
      "We specialize in apps built with Lovable, Bolt.new, Cursor, Replit, v0, and Base44. The underlying stacks are typically Next.js, React, Supabase, Firebase, and Node.js. If your app uses a different stack, book a free 15-minute call first and we'll confirm scope.",
  },
  {
    question: "Do I have to give you production access?",
    answer:
      "For the Audit: we need your repository and, if possible, a staging or preview URL. We don't require production database access for the audit — though if you grant it, we can identify more configuration issues. For the Rescue (if you proceed): yes, production access is required to fix root causes.",
  },
  {
    question: "What's the difference between the Audit and the Rescue?",
    answer:
      "The Audit tells you what's wrong. The Rescue fixes it. They're separate products — but the Audit is the right starting point if you're not sure what you're dealing with or how serious it is. The $500 Audit fee is credited toward rescue if you proceed, so you're not paying double.",
  },
  {
    question: "Can I order the Audit even if I'm not sure I'll do the Rescue?",
    answer:
      "Yes. The report is yours to keep regardless. Many founders use the audit report to get a second opinion from another developer, to brief their own team, or simply to understand their app better before making a decision. There's no obligation to use us for anything after the audit.",
  },
];

export default function AuditPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <Badge variant="outline" className="mb-6 px-3 py-1 h-auto text-sm">
            $500 · 48-Hour Turnaround · Written Deliverable
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Launch Without{" "}
            <span className="text-primary">Flying Blind.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A senior developer reviews your AI-built app and gives you a
            written report of every vulnerability, breaking risk, and fix — in
            plain English. Before something goes wrong in production.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mb-10 text-sm font-medium">
            <span>
              <span className="text-2xl font-bold text-foreground">$500</span>{" "}
              <span className="text-muted-foreground">flat</span>
            </span>
            <span className="text-muted-foreground hidden sm:inline">·</span>
            <span className="text-muted-foreground">48-hour turnaround</span>
            <span className="text-muted-foreground hidden sm:inline">·</span>
            <span className="text-muted-foreground">Written report + walkthrough call</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 h-13 text-base">
              <Link href="/contacts?type=audit">
                Order the $500 Audit
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-13 text-base"
            >
              <Link href="#deliverables">See What&apos;s in the Report</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Fixed price · No ongoing commitment · $500 credited toward rescue if you proceed
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Is This For You?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Two types of founders order the audit.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sam */}
            <Card className="border-border/50 bg-background">
              <CardContent className="p-8">
                <p className="text-base font-semibold mb-4 leading-snug">
                  You&apos;re about to launch. You&apos;re not sure it&apos;s ready.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  You built the app with Lovable, Bolt, or Cursor. It works in the sandbox.
                  You&apos;ve tested it yourself. But you&apos;ve read enough horror stories —
                  exposed API keys, auth that breaks under real traffic, payment webhooks that
                  fail silently — to know you don&apos;t know what you don&apos;t know.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Audit gives you a professional second opinion before real users touch it.
                </p>
              </CardContent>
            </Card>
            {/* Casey */}
            <Card className="border-border/50 bg-background">
              <CardContent className="p-8">
                <p className="text-base font-semibold mb-4 leading-snug">
                  You&apos;re already live. Something feels off.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The app is running. You have users. But there&apos;s a bug you can&apos;t
                  reproduce, a security warning you don&apos;t understand, or a nagging sense
                  that the codebase is more fragile than it should be. You&apos;re afraid
                  every deployment is one broken change away from downtime.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Audit tells you exactly where the risk is — and what to do about it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              What We Review
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Four areas. Every issue documented.{" "}
              <span className="text-primary">Plain English throughout.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatYouGet.map((item, index) => (
              <Card key={index} className="border-border/50 bg-background">
                <CardContent className="p-8">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      What we check
                    </p>
                    <ul className="space-y-1.5">
                      {item.checks.map((check, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{check}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      What we deliver
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.deliver}
                    </p>
                  </div>
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              Four steps. Starts today. Report in 48 hours.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((item) => (
              <Card key={item.step} className="border-none bg-background">
                <CardContent className="p-8">
                  <span className="text-5xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
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

      {/* Deliverables */}
      <section id="deliverables" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              What the Report Looks Like
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              The actual report format.{" "}
              <span className="text-primary">No vague &ldquo;findings summary.&rdquo;</span>
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                App Audit Report — [App Name].md
              </span>
            </div>
            <pre className="p-6 sm:p-8 text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`App Audit Report — [App Name]
Reviewed by: upready.dev
Date: [Date]
Turnaround: 48 hours from submission

─────────────────────────────────────────────

EXECUTIVE SUMMARY
[2–3 paragraphs in plain English. What the app does,
overall health assessment, top 3 issues to address first.]

─────────────────────────────────────────────

SECTION 1: SECURITY VULNERABILITIES

Issue #1 — Exposed API Keys in Client-Side Code
Severity: CRITICAL
Location: /src/lib/openai.ts, line 12
What's happening: Your OpenAI API key is hardcoded directly
into the frontend code. Anyone who opens the browser devtools
can see it. Automated scrapers find these within hours.
Fix: Move to server-side environment variable. Est. time: 30 min.

[Additional security issues...]

─────────────────────────────────────────────

SECTION 2: DEPLOYMENT BLOCKERS
[Same format — issue, severity, location, explanation, fix]

─────────────────────────────────────────────

SECTION 3: CODE QUALITY
[Same format — issue, impact rating, explanation, priority]

─────────────────────────────────────────────

SECTION 4: FIX-OR-REBUILD RECOMMENDATION
Option A — Fix existing code
  Estimated effort: 3–5 days
  Estimated cost: $2,000–$3,500
  Best if: Foundation is sound, issues are isolated

Option B — Partial rebuild (recommended)
  Estimated effort: 5–7 days
  Estimated cost: $3,500–$5,000
  Best if: Auth and database architecture need redesign

Option C — Full rebuild
  Estimated effort: 4–6 weeks
  Estimated cost: $5,000–$15,000
  Best if: Scope has grown beyond original AI-built foundation

─────────────────────────────────────────────

APPENDIX: ISSUE PRIORITY LIST
[All issues sorted by severity — Critical → High → Medium → Low]
[Includes estimated fix time for each]`}
            </pre>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
            This is the actual structure. Every audit delivers this — not a one-pager with vague
            recommendations. If we find nothing critical, we&apos;ll tell you that too, and explain
            what the low-priority items are.
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
              $500. No surprises.
            </h2>
          </div>
          <div className="max-w-md mx-auto">
            <Card className="bg-background border-primary/60 border-2 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              <CardContent className="p-8 sm:p-10 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-1">App Audit</h3>
                  <p className="text-sm text-muted-foreground">48-hour turnaround from submission</p>
                </div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold">$500</span>
                  <span className="text-muted-foreground ml-1">flat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Manual review by a senior developer (not automated scanning)",
                    "Written report: security, deployment, code quality, and fix-or-rebuild",
                    "Prioritized issue list in plain English",
                    "Estimated cost and timeline for each fix path",
                    "30-minute walkthrough call (optional, included)",
                    "Report is yours to keep — no obligation to proceed",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mb-8">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    If you proceed to{" "}
                    <Link href="/rescue" className="text-primary hover:underline">
                      App Rescue
                    </Link>
                    , the full $500 audit fee is credited toward your rescue quote. You&apos;re
                    not paying for a diagnosis on top of the fix.
                  </p>
                </div>
                <Button asChild size="lg" className="w-full rounded-full h-13 text-base">
                  <Link href="/contacts?type=audit">
                    Order the $500 Audit
                    <ArrowUpRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-4 text-center leading-relaxed">
                  Fixed price. No hourly billing. No scope creep. Payment upfront — you receive
                  the report within 48 hours of submission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFaq title="Questions before you order" items={faqItems} />

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="relative overflow-hidden min-h-80 flex items-center justify-center px-6 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 before:bg-linear-to-r before:from-sky-100 before:from-15% before:via-white before:via-55% before:to-amber-100 before:to-90% before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-sky-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-300/10 dark:before:to-60% dark:before:rounded-full dark:before:-z-10 py-16">
            <div className="flex flex-col gap-6 items-center mx-auto text-center max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Know what&apos;s wrong{" "}
                <span className="text-primary">before something breaks.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                A senior developer reviews your app and delivers a written report in 48 hours.
                Every vulnerability, every deployment risk, every code issue — documented and
                prioritized. $500 flat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-13 text-base"
                >
                  <Link href="/contacts?type=audit">
                    Order the $500 Audit
                    <ArrowUpRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Link
                  href="/contacts"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Or start with a free 15-minute call →
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Fixed price · 48-hour turnaround · $500 credited toward rescue if you proceed
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
              href="/rescue"
              className="text-foreground hover:text-primary transition-colors"
            >
              App Rescue →
            </Link>{" "}
            ·{" "}
            <Link
              href="/build"
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
