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
  Check,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-05/footer-upready";

/* ─── Data ──────────────────────────────────────────────── */

const whatWeReview = [
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
    why: "API key exposure is the #1 silent risk in AI-built apps. One automated scan of your public repo and the keys are gone — we've seen overnight usage bills of $4,000–$12,000 from a single exposed key.",
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
      "An honest recommendation: fix the existing code, rescue specific components, or rebuild from scratch — with a time and cost estimate for each path.",
    why: "Most apps don't need a full rebuild — they need 3–5 targeted fixes. But when a rebuild is the right answer, you're better off knowing before you spend $5,000 on rescue work that won't hold.",
  },
];

const processSteps = [
  {
    icon: Send,
    step: "01",
    title: "Send us the app",
    content:
      "Share your repository link (GitHub, GitLab, or zip) and a brief description of the app. If it's live, share the URL. No technical knowledge required — just paste what you have.",
    detail: "Takes 5 minutes.",
  },
  {
    icon: Clock,
    step: "02",
    title: "Senior developer reviews your codebase",
    content:
      "A senior developer manually reviews your app — not an automated scanner. They look at the actual code, test against production conditions, and document every issue they find.",
    detail: "48-hour turnaround. Human review, not automated.",
  },
  {
    icon: FileText,
    step: "03",
    title: "You receive the written report",
    content:
      "Your report arrives within 48 hours. Every issue is listed, explained in plain English, and prioritized. You'll know exactly what's broken, what's risky, and what to do next — regardless of whether you proceed with us.",
    detail: "Yours to keep. No obligation to proceed.",
  },
];

const auditPlan = [
  {
    plan_name: "App Audit",
    plan_descp: "48-hour turnaround from submission",
    plan_price: "$500",
    plan_feature: [
      "Manual review by a senior developer (not automated scanning)",
      "Written report: security, deployment, code quality, fix-or-rebuild",
      "Prioritized issue list in plain English",
      "Estimated cost and timeline for each fix path",
      "Walkthrough available if needed (call or async)",
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
    question: 'Is this worth it if my app seems to work fine?',
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
    question: "Do I have to give you production access?",
    answer:
      "For the Audit: we need your repository and, if possible, a staging or preview URL. We don't require production database access for the audit — though if you grant it, we can identify more configuration issues. For the Rescue (if you proceed): yes, production access is required to fix root causes.",
  },
  {
    question: "What tech stacks do you know?",
    answer:
      "We specialize in apps built with Lovable, Bolt.new, Cursor, Replit, v0, and Base44. The underlying stacks are typically Next.js, React, Supabase, Firebase, and Node.js. If your app uses a different stack, send us a message and we'll confirm scope within 24 hours.",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function AuditPage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        headingLine1="Know what you have"
        headingLine2=""
        headingItalic="before you bet on it."
        subheading="A senior developer reviews your AI-built app and delivers a written report in 48 hours — every vulnerability, deployment blocker, and code issue, prioritized and explained in plain English."
        buttonText=""
      />

      {/* The Report Mockup — outcome-led, most tangible element */}
      <section>
        <div className="lg:py-20 sm:py-16 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto mb-12"
            >
              <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal">
                The Report
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight">
                What $500 buys, exactly.
              </h2>
              <p className="text-base text-muted-foreground text-center">
                Not a one-pager with vague findings. Every issue documented with location, severity, and the specific fix.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
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
                This is the actual format. Every audit delivers this — not a one-pager with vague recommendations.
                If we find nothing critical, we document that too, with context on any low-priority items to address over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Review — nested checklists, 4 areas */}
      <section>
        <div className="lg:py-20 sm:py-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
            <div className="flex flex-col gap-8 md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
              >
                <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal">
                  What We Review
                </Badge>
                <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight">
                  Four areas. Every issue documented.
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
                {whatWeReview.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Card className="border-border/50 bg-background h-full">
                      <CardContent className="p-8">
                        <item.icon
                          size={28}
                          className="shrink-0 text-primary mb-5"
                        />
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 3 steps */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal mb-6">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Three steps. Starts today. Report in 48 hours.
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
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">{item.content}</p>
                      <p className="text-sm text-primary font-medium">{item.detail}</p>
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
        plans={auditPlan}
        badgeText="Pricing"
        heading="$500. Fixed."
        footnote="Fixed price. Payment upfront. Report delivered within 48 hours of submission. If you proceed to App Rescue, the $500 is credited toward the total — no double payment."
      />

      {/* FAQ */}
      <Faq
        items={faqItems}
        badgeText="FAQ"
        heading="Questions before you order"
      />

      {/* Final CTA */}
      <CTA
        heading="Order the audit. Have answers by tomorrow."
        description="Submit your repository today. A senior developer reviews it and delivers the written report within 48 hours."
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
