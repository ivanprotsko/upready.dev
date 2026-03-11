"use client";

import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  Code2,
  GitFork,
  Send,
  Clock,
  FileText,
  Phone,
  Check,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";

/* ─── Data ──────────────────────────────────────────────── */

const whoThisIsFor = [
  {
    icon: Search,
    title: "You're about to launch. You're not sure it's ready.",
    content:
      "You built the app with Lovable, Bolt, or Cursor. It works in the sandbox. You've tested it yourself. But you've read enough horror stories — exposed API keys, auth that breaks under real traffic, payment webhooks that fail silently — to know you don't know what you don't know. The Audit gives you a professional second opinion before real users touch it.",
  },
  {
    icon: AlertTriangle,
    title: "You're already live. Something feels off.",
    content:
      "The app is running. You have users. But there's a bug you can't reproduce, a security warning you don't understand, or a nagging sense that the codebase is more fragile than it should be. You're afraid every deployment is one broken change away from downtime. The Audit tells you exactly where the risk is — and what to do about it.",
  },
];

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
    icon: Send,
    title: "Send us the app",
    content:
      "Share your repository link (GitHub, GitLab, or zip) and a brief description of the app, the tech stack, and any specific concerns you have. If the app is live, share the URL.",
    stat: "Takes 5 minutes · No technical knowledge required",
  },
  {
    icon: Clock,
    title: "Senior developer reviews your codebase",
    content:
      "A senior developer manually reviews your app — not an automated scanner. They look at the actual code, test the live app against production conditions, and document every issue they find.",
    stat: "48-hour turnaround · Human review, not automated",
  },
  {
    icon: FileText,
    title: "You receive the written report",
    content:
      "Your report arrives within 48 hours. Every issue is listed, explained in plain English, and prioritized. You'll know exactly what's broken, what's risky, and what to do next — regardless of whether you proceed with us.",
    stat: "Plain English · Prioritized issue list · Yours to keep",
  },
  {
    icon: Phone,
    title: "30-minute walkthrough (included)",
    content:
      "If you want to talk through the report, ask questions, or understand the severity of specific issues, the walkthrough call is included in the $500. No upsell — just a plain conversation about what we found.",
    stat: "Included · Optional · No commitment to proceed",
  },
];

const auditPlan = [
  {
    plan_name: "App Audit",
    plan_descp: "48-hour turnaround from submission",
    plan_price: "$500",
    plan_feature: [
      "Manual review by a senior developer (not automated scanning)",
      "Written report: security, deployment, code quality, and fix-or-rebuild",
      "Prioritized issue list in plain English",
      "Estimated cost and timeline for each fix path",
      "30-minute walkthrough call (optional, included)",
      "Report is yours to keep — no obligation to proceed",
    ],
    plan_recommended: true,
    plan_badge: "$500 credited toward rescue if you proceed",
    plan_cta: "Order the $500 Audit",
    plan_href: "/contacts?type=audit",
  },
];

const faqItems = [
  {
    question: 'Is this worth it if my app "works"?',
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
      "We specialize in apps built with Lovable, Bolt.new, Cursor, Replit, v0, and Base44. The underlying stacks are typically Next.js, React, Supabase, Firebase, and Node.js. If your app uses a different stack, send us a message and we'll confirm scope within 24 hours.",
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

/* ─── Page ──────────────────────────────────────────────── */

export default function AuditPage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        headingLine1="Launch Without"
        headingLine2="Flying Blind."
        headingItalic="Know what's wrong before something breaks."
        subheading="A senior developer reviews your AI-built app and gives you a written report of every vulnerability, breaking risk, and fix — in plain English. Before something goes wrong in production."
        buttonText="Order the $500 Audit"
      />

      {/* Who This Is For */}
      <Feature
        featureData={whoThisIsFor}
        badgeText="Is This For You?"
        heading="Two types of founders order the audit."
        columns={2}
      />

      {/* What You Get — custom section, no block fits nested check lists */}
      <section>
        <div className="lg:py-20 sm:py-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
            <div className="flex flex-col gap-8 md:gap-16">
              <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto">
                <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm">
                  What We Review
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                  Four areas. Every issue documented. Plain English throughout.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
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
          </div>
        </div>
      </section>

      {/* Process */}
      <Feature
        featureData={processSteps}
        badgeText="How It Works"
        heading="Four steps. Starts today. Report in 48 hours."
        columns={4}
      />

      {/* Deliverables — custom section, pre-formatted code mockup */}
      <section id="deliverables">
        <div className="lg:py-20 sm:py-16 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto mb-12">
              <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm">
                What the Report Looks Like
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                The actual report format. No vague &ldquo;findings summary.&rdquo;
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
  Estimated cost: $2,500–$5,000
  Best if: Foundation is sound, issues are isolated

Option B — Partial rebuild (recommended)
  Estimated effort: 5–10 days
  Estimated cost: $5,000–$7,500
  Best if: Auth and database architecture need redesign

Option C — Full rebuild
  Estimated effort: 1–4 weeks
  Estimated cost: $2,500–$7,500
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
        </div>
      </section>

      {/* Pricing */}
      <Pricing
        plans={auditPlan}
        badgeText="Pricing"
        heading="$500. No surprises."
        footnote="Fixed price. No hourly billing. No scope creep. Payment upfront — you receive the report within 48 hours of submission. The $500 audit fee is credited toward App Rescue if you proceed."
      />

      {/* FAQ */}
      <Faq
        items={faqItems}
        badgeText="FAQ"
        heading="Questions before you order"
      />

      {/* Final CTA */}
      <CTA
        heading="Know what's wrong before something breaks."
        description="A senior developer reviews your app and delivers a written report in 48 hours. Every vulnerability, every deployment risk, every code issue — documented and prioritized. $500 flat."
        buttonText="Order the $500 Audit"
      />

      {/* Related Services */}
      <section className="py-8 sm:py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            You might also need:{" "}
            <Link
              href="/app-rescue"
              className="text-foreground hover:text-primary transition-colors"
            >
              App Rescue →
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
