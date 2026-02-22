import type { Metadata } from "next";
import Navbar from "@/components/shadcn-space/blocks/navbar-01";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { pricingNavbarData } from "@/components/shadcn-space/blocks/navbar-01/data.pricing";
import { pricingFaqData } from "@/components/shadcn-space/blocks/faq-01/data.pricing";
import { pricingCtaData } from "@/components/shadcn-space/blocks/cta-01/data.pricing";
import { upreadyData as footerData } from "@/components/shadcn-space/blocks/footer-01/data.upready";

export const metadata: Metadata = {
  title: "Pricing — upready.dev",
  description:
    "Transparent pricing for AI app rescue, MVP builds, audits, and retainer. No hidden fees, no surprises. See exactly what each service costs before reaching out.",
};

const rescueRows = [
  { category: "Authentication issues", price: "$2,000 – $2,500", timeline: "2–5 days" },
  { category: "Deployment issues", price: "$2,000 – $2,500", timeline: "2–4 days" },
  { category: "Database issues", price: "$2,000 – $3,000", timeline: "3–5 days" },
  { category: "Payment integration", price: "$2,500 – $3,500", timeline: "3–7 days" },
  { category: "Security vulnerabilities", price: "$2,000 – $3,000", timeline: "3–5 days" },
  { category: "Performance problems", price: "$2,500 – $3,500", timeline: "5–7 days" },
  { category: "Architecture / code drift", price: "$3,000 – $5,000", timeline: "5–10 days" },
];

const buildRows = [
  { tier: "Micro MVP (1–2 core features)", price: "$2,000 – $2,500", timeline: "1–2 weeks" },
  { tier: "Standard MVP (3–5 core features)", price: "$3,000 – $4,000", timeline: "2–3 weeks" },
  { tier: "Full MVP (5–8 core features + payments)", price: "$4,000 – $5,000", timeline: "3–4 weeks" },
];

const retainerRows = [
  { tier: "Starter", price: "$1,500/month", hours: "~8–10 hours", response: "48 hours" },
  { tier: "Growth", price: "$3,000/month", hours: "~16–20 hours", response: "24 hours" },
  { tier: "Scale", price: "$5,000/month", hours: "~30–35 hours", response: "12 hours" },
];

const auditRows = [
  { type: "Quick Triage", price: "$500", turnaround: "1–2 business days" },
  { type: "Security Audit", price: "$1,000", turnaround: "2–3 business days" },
  { type: "Full Audit", price: "$1,500", turnaround: "3–5 business days" },
];

const comparisonData = [
  {
    label: "When to use",
    rescue: "Your app is broken",
    build: "You need something built",
    retainer: "Your app is live and needs ongoing work",
    audit: "You need to know what's wrong",
  },
  {
    label: "Price",
    rescue: "$2,000 – $5,000",
    build: "$2,000 – $5,000",
    retainer: "$1,500 – $5,000/mo",
    audit: "$500 – $1,500",
  },
  {
    label: "Timeline",
    rescue: "3–7 business days",
    build: "2–4 weeks",
    retainer: "Ongoing",
    audit: "1–5 business days",
  },
  {
    label: "Payment",
    rescue: "50% upfront / 50% on delivery",
    build: "50% upfront / 50% on delivery",
    retainer: "Monthly subscription",
    audit: "100% upfront",
  },
  {
    label: "Output",
    rescue: "Fixed, deployed app",
    build: "New MVP, deployed",
    retainer: "Features + fixes, monthly",
    audit: "Written report",
  },
  {
    label: "Minimum",
    rescue: "$2,000",
    build: "$2,000",
    retainer: "$1,500/month",
    audit: "$500",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar data={pricingNavbarData} />

      {/* Hero */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-20 xl:py-32">
          <div className="flex flex-col gap-6 max-w-2xl">
            <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
              Pricing
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-medium leading-tight">
              Transparent Pricing.{" "}
              <span className="text-muted-foreground">No Surprises.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Every service, every tier, every payment term — on this page. If you have questions
              the page does not answer, the chat does.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Service Comparison Table */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                Overview
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-medium">
                Four Services. One Clear Comparison.
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-muted-foreground font-normal w-32"></th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">App Rescue</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">MVP Build</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Retainer</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">App Audit</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="px-6 py-4 text-muted-foreground font-normal whitespace-nowrap">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-foreground">{row.rescue}</td>
                      <td className="px-6 py-4 text-foreground">{row.build}</td>
                      <td className="px-6 py-4 text-foreground">{row.retainer}</td>
                      <td className="px-6 py-4 text-foreground">{row.audit}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-border bg-accent/30">
                    <td className="px-6 py-4 text-muted-foreground font-normal">Details</td>
                    <td className="px-6 py-4">
                      <a href="/rescue" className="text-foreground hover:underline">
                        See /rescue →
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a href="/build" className="text-foreground hover:underline">
                        See /build →
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a href="/retainer" className="text-foreground hover:underline">
                        See /retainer →
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a href="/audit" className="text-foreground hover:underline">
                        See /audit →
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Detailed Pricing — App Rescue */}
      <section className="bg-background" id="rescue-pricing">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                App Rescue
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium">Fix What Is Broken</h2>
              <p className="text-muted-foreground max-w-2xl">
                Base price starts at $2,000. Final price depends on the problem category. Free diagnosis
                — we identify the root cause before you commit.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left font-medium text-foreground">Problem Category</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Price Range</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {rescueRows.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0 hover:bg-accent/20 transition-colors">
                      <td className="px-6 py-4 text-foreground">{row.category}</td>
                      <td className="px-6 py-4 text-foreground font-medium">{row.price}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="flex flex-col gap-2 p-5 rounded-xl border border-border">
                <p className="font-medium text-foreground text-sm">Add-ons</p>
                <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <li>Priority delivery (48h turnaround): +50% of base</li>
                  <li>Documentation package: +$500</li>
                  <li>Security audit: +$1,000</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-xl border border-border">
                <p className="font-medium text-foreground text-sm">Always included</p>
                <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <li>Free diagnosis before you commit</li>
                  <li>Fix deployed to production</li>
                  <li>Written summary of root cause</li>
                  <li>Testing confirmation in production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Detailed Pricing — MVP Build */}
      <section className="bg-background" id="build-pricing">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                MVP Build
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium">From Prototype to Product</h2>
              <p className="text-muted-foreground max-w-2xl">
                Flat fee per scope tier. Scope document approved before we start — no surprises.
                You own the code, the repo, and every credential on delivery.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left font-medium text-foreground">Scope Tier</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Price</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {buildRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-border last:border-0 hover:bg-accent/20 transition-colors ${
                        i === 1 ? "bg-accent/30" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-foreground">
                        {row.tier}
                        {i === 1 && (
                          <span className="ml-2 text-xs bg-foreground text-background px-2 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-foreground font-medium">{row.price}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="flex flex-col gap-2 p-5 rounded-xl border border-border">
                <p className="font-medium text-foreground text-sm">Add-ons</p>
                <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <li>Stripe payments: +$500–$1,000</li>
                  <li>Admin dashboard: +$500–$1,000</li>
                  <li>Email notifications: +$500</li>
                  <li>Priority delivery (50% faster): +50% of base</li>
                  <li>Documentation package: +$500</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-xl border border-border">
                <p className="font-medium text-foreground text-sm">Always included</p>
                <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <li>GitHub repo ownership transfer</li>
                  <li>Supabase project ownership</li>
                  <li>Vercel project ownership</li>
                  <li>Scope document upfront</li>
                  <li>2 revision rounds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Detailed Pricing — Retainer */}
      <section className="bg-background" id="retainer-pricing">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                Retainer
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium">Ongoing Development Partnership</h2>
              <p className="text-muted-foreground max-w-2xl">
                Month-to-month. Cancel with 30 days notice. No minimum commitment. Unused hours do
                not roll over. Overflow work billed at $150/hour — pre-approved before starting.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left font-medium text-foreground">Tier</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Monthly Rate</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Included Hours</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Response Time</th>
                  </tr>
                </thead>
                <tbody>
                  {retainerRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-border last:border-0 hover:bg-accent/20 transition-colors ${
                        i === 1 ? "bg-accent/30" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-foreground">
                        {row.tier}
                        {i === 1 && (
                          <span className="ml-2 text-xs bg-foreground text-background px-2 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-foreground font-medium">{row.price}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.hours}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-2 p-5 rounded-xl border border-border max-w-md">
              <p className="font-medium text-foreground text-sm">Always included (all tiers)</p>
              <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                <li>All features and fixes deployed to production</li>
                <li>Monthly status report</li>
                <li>Priority queue access</li>
                <li>Auto-billed on the 1st via Stripe subscription</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Detailed Pricing — App Audit */}
      <section className="bg-background" id="audit-pricing">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                App Audit
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium">Know What Is Wrong Before You Pay to Fix It</h2>
              <p className="text-muted-foreground max-w-2xl">
                100% upfront for all audit types. Full audit fee is credited toward any Rescue or
                MVP Build project if you proceed within 60 days. The audit effectively costs you
                nothing if you move forward.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left font-medium text-foreground">Audit Type</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Price</th>
                    <th className="px-6 py-4 text-left font-medium text-foreground">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {auditRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-border last:border-0 hover:bg-accent/20 transition-colors ${
                        i === 1 ? "bg-accent/30" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-foreground">
                        {row.type}
                        {i === 1 && (
                          <span className="ml-2 text-xs bg-foreground text-background px-2 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-foreground font-medium">{row.price}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Payment Terms */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                Payment
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium">How Payment Works</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border">
                <p className="font-medium text-foreground">Project Work</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Rescue & MVP Build</p>
                <p className="text-sm text-muted-foreground">
                  50% upfront to start. 50% on delivery. Invoiced via Stripe. We do not start until
                  the first payment clears. Delivery means deployed to production and tested — not
                  just done on our end.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border">
                <p className="font-medium text-foreground">Retainer</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Monthly Subscription</p>
                <p className="text-sm text-muted-foreground">
                  Monthly subscription via Stripe. Auto-billed on the 1st of each month. First month
                  pro-rated if you start mid-month. Cancel with 30 days notice — no early termination
                  fees.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border">
                <p className="font-medium text-foreground">Audit</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">100% Upfront</p>
                <p className="text-sm text-muted-foreground">
                  100% upfront. Work begins within 24 hours of payment. If for any reason we cannot
                  complete the audit (access issues, scope out of range), we refund in full.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              All prices are in USD. Stripe handles payment processing. We accept major credit cards
              and ACH (US bank transfer).
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Anchor Pricing — How $2K Compares */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                Context
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium">How $2,000 Compares</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border opacity-60">
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-foreground">Fiverr / Upwork</p>
                  <p className="text-2xl font-semibold text-muted-foreground">$50 – $500</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  A developer who may or may not know AI tools, will charge by the hour, and has no
                  specific expertise in the Lovable/Bolt/Cursor failure patterns causing your problem.
                  If the fix does not work, you start over.
                </p>
                <div className="flex flex-col gap-1 mt-auto">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Risk</p>
                  <p className="text-sm text-foreground">High. No guaranteed outcome. No AI tool expertise. No production testing.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border opacity-60">
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-foreground">Traditional Agency</p>
                  <p className="text-2xl font-semibold text-muted-foreground">$15,000 – $50,000</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  A team with project managers, designers, junior developers, weekly meetings, and
                  3-month timelines. Built for enterprise clients. Overkill for an MVP or a specific
                  bug fix. Most agencies do not work with AI-generated code at all.
                </p>
                <div className="flex flex-col gap-1 mt-auto">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Risk</p>
                  <p className="text-sm text-foreground">Expensive. Slow. Not designed for your situation.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border ring-1 ring-foreground/20">
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-foreground">upready.dev</p>
                  <p className="text-2xl font-semibold text-foreground">$2,000 – $5,000</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  A specialist in AI-generated apps. We know the tools you used, the patterns they
                  produce, and where they fail. Fixed price. Fixed timeline. Async. You own
                  everything.
                </p>
                <div className="flex flex-col gap-1 mt-auto">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Risk</p>
                  <p className="text-sm text-foreground">Clear scope. Known outcome. Tested in production.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Agencies charge $15,000–$50,000 because they have offices, PMs, HR, and 30% margins.
              We have none of that. We use AI tools as our primary stack — the same tools you used —
              which means we build faster and charge less. This is not a race to the bottom. It is a
              different model.
            </p>
          </div>
        </div>
      </section>

      <Faq data={pricingFaqData} />
      <CTA data={pricingCtaData} />
      <Footer data={footerData} />
    </>
  );
}
