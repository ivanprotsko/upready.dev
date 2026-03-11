import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  DollarSign,
  Users,
  Building2,
  Mail,
  FileSignature,
  Calendar,
  Layout,
  BarChart3,
  BookOpen,
  Bot,
  FileText,
  ShoppingCart,
  Monitor,
  Globe,
  CircleOff,
  Bug,
  KeyRound,
  RefreshCcw,
  TrendingUp,
  Lock,
  Layers,
  Package,
  Megaphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceFaq from "@/components/services/service-faq";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";

const services = [
  {
    headline: "Stuck at 80%? App got hacked?",
    body: "Your AI-built app works locally and breaks in production. Or it got hacked. Or the AI has been going in circles for weeks. A senior developer diagnoses it in 48 hours and fixes it at a fixed price.",
    stat: "From $500 \u00B7 3\u20137 days \u00B7 No judgment",
    cta: "Fix my app \u2192",
    href: "/app-rescue",
  },
  {
    headline: "Not sure if it's ready to launch?",
    body: "A senior developer reviews your entire app and gives you a written report of every vulnerability, deployment risk, and code issue \u2014 in plain English. Know what's broken before it breaks in production.",
    stat: "$500 flat \u00B7 48-hour turnaround \u00B7 Credited toward rescue",
    cta: "Get the audit \u2192",
    href: "/tech-audit",
  },
  {
    headline: "Have an idea and no developer to trust?",
    body: "From spec to launch in 1\u20134 weeks. Fixed scope, fixed price, weekly demos, and full repo access from Day 1. You own every line of code \u2014 and you can fire us any time and keep everything built so far.",
    stat: "From $2,500 \u00B7 1\u20134 weeks \u00B7 You own the repo",
    cta: "Start building \u2192",
    href: "/mvp-build",
  },
];

const problemsVibeCoding = [
  {
    icon: CircleOff,
    title: "Works locally, breaks in production",
    desc: "The app runs fine on your machine but fails the moment it hits a real server.",
  },
  {
    icon: Bug,
    title: "Every fix creates a new bug",
    desc: "Payments fail. Features break. The AI goes in circles because it can\u2019t access your server, logs, or live database.",
  },
  {
    icon: KeyRound,
    title: "API keys exposed in frontend",
    desc: "Hardcoded secrets get scraped within hours. Accounts get hacked.",
  },
  {
    icon: RefreshCcw,
    title: "AI can\u2019t escape the loop",
    desc: "This isn\u2019t a prompting problem \u2014 it\u2019s an access problem. A developer in your real environment solves it in days.",
  },
];

const problemsSaasTrap = [
  {
    icon: TrendingUp,
    title: "Per-user pricing compounds fast",
    desc: "HubSpot: $890/month. Mailchimp: $500/month. Calendly: $16/user/month. Combined: $2,000\u2013$3,000/month.",
  },
  {
    icon: Lock,
    title: "Vendor lock-in traps your data",
    desc: "Features move to \u201cPro\u201d plans. Annual renewals double. Export is painful or impossible.",
  },
  {
    icon: DollarSign,
    title: "Open-source equivalents exist",
    desc: "The difference: you own the instance. No per-user fees, ever.",
  },
];

const products = [
  {
    replaces: "Replace HubSpot",
    tool: "Twenty CRM",
    keyLine: "$890/mo \u2192 $149/mo. No per-user fees.",
    href: "/services/crm",
    icon: Building2,
  },
  {
    replaces: "Replace Mailchimp",
    tool: "Listmonk",
    keyLine: "Unlimited subscribers. Flat monthly fee.",
    href: "/services/email-marketing",
    icon: Mail,
  },
  {
    replaces: "Replace DocuSign",
    tool: "Documenso",
    keyLine: "Unlimited signatures. No per-envelope charges.",
    href: "/services/e-signature",
    icon: FileSignature,
  },
  {
    replaces: "Replace Calendly",
    tool: "Cal.com",
    keyLine: "Unlimited team members. One fixed price.",
    href: "/services/booking",
    icon: Calendar,
  },
  {
    replaces: "Replace Jira / Asana",
    tool: "Plane",
    keyLine: "Unlimited users. No seat-based pricing.",
    href: "/services/project-management",
    icon: Layout,
  },
  {
    replaces: "Replace Google Analytics",
    tool: "Umami",
    keyLine: "GDPR-compliant. Data never leaves your server.",
    href: "/services/analytics",
    icon: BarChart3,
  },
  {
    replaces: "Replace Confluence",
    tool: "BookStack",
    keyLine: "$8,000/yr \u2192 $149/mo. Same team, more features.",
    href: "/services/knowledge-base",
    icon: BookOpen,
  },
  {
    replaces: "Replace ChatGPT Enterprise",
    tool: "AnythingLLM",
    keyLine: "Private AI on your own server. No data sent to OpenAI.",
    href: "/services/ai-assistant",
    icon: Bot,
  },
  {
    replaces: "Replace Typeform",
    tool: "HeyForm",
    keyLine: "Unlimited responses. No per-response limits.",
    href: "/services/forms",
    icon: FileText,
  },
  {
    replaces: "Replace Shopify",
    tool: "Medusa",
    keyLine: "Zero transaction fees. Full API access.",
    href: "/services/ecommerce",
    icon: ShoppingCart,
  },
  {
    replaces: "Replace Retool / Grafana",
    tool: "Budibase",
    keyLine: "Build internal tools and dashboards. Unlimited users.",
    href: "/services/dashboards",
    icon: Monitor,
  },
  {
    replaces: "Replace custom portals",
    tool: "Directus",
    keyLine: "API-first. White-label. Any tech stack.",
    href: "/services/client-portal",
    icon: Globe,
  },
];

const bundles = [
  {
    icon: Layers,
    name: "Sales Stack",
    tools: ["CRM", "Booking", "E-Signature"],
    price: "From $8,000 setup",
    note: "vs. $9,000 individually",
    href: "/contacts?type=bundle-sales",
    highlight: false,
  },
  {
    icon: Package,
    name: "Ops Stack",
    tools: ["Project Management", "Knowledge Base", "Dashboards"],
    price: "From $7,500 setup",
    note: null,
    href: "/contacts?type=bundle-ops",
    highlight: true,
    badge: "Best Value",
  },
  {
    icon: Megaphone,
    name: "Marketing Stack",
    tools: ["Email Marketing", "Analytics", "Forms"],
    price: "From $6,500 setup",
    note: null,
    href: "/contacts?type=bundle-marketing",
    highlight: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tell us what's broken (or what you need built)",
    body: "Paste an error, share the app URL, or tell us which SaaS tools you want replaced. We respond within 24 hours.",
    detail: "Free \u00B7 24-hour response \u00B7 No commitment",
  },
  {
    step: "02",
    title: "We diagnose it and give you a fixed price",
    body: "Within 48 hours, you get a written assessment: what\u2019s wrong, what it takes to fix, and the exact price. For products: setup timeline and total cost comparison vs. your current SaaS bill. No open-ended billing, no hidden costs.",
    detail: "48-hour turnaround \u00B7 Written deliverable \u00B7 Fixed quote",
  },
  {
    step: "03",
    title: "We fix it. You own it.",
    body: "We do the work \u2014 fix the app, deploy the tools, migrate your data. You see it working before the final payment. Then it\u2019s yours: code, repo, data, configuration. No lock-in, no ongoing dependency on us unless you want it.",
    detail: "You own everything \u00B7 50% upfront, 50% on delivery",
  },
];

const stats = [
  { value: "15,000+", label: "GitHub stars \u2014 Twenty CRM", icon: CheckCircle2 },
  { value: "$4M", label: "VC funding \u2014 Twenty CRM", icon: DollarSign },
  { value: "$32M", label: "Raised \u2014 Cal.com", icon: DollarSign },
  { value: "30,000+", label: "GitHub stars \u2014 Plane", icon: CheckCircle2 },
  { value: "50+", label: "Founders we\u2019ve helped", icon: Users },
];

const pricingTiers = [
  {
    name: "App Audit",
    price: "$500",
    timeline: "48-hour turnaround",
    features: [
      "48-hour written report",
      "Every vulnerability, every fix",
      "Fix-or-rebuild recommendation",
      "30-minute walkthrough included",
      "Credited toward rescue if you proceed",
    ],
    cta: "Order the $500 Audit",
    href: "/contacts?type=audit",
    highlight: false,
  },
  {
    name: "App Rescue",
    price: "From $50/hr",
    timeline: "Rate by scope",
    features: [
      "Tech Audit included ($500, credited)",
      "Under 80 hrs \u2014 $100/hr",
      "80+ hrs \u2014 $75/hr",
      "120+ hrs \u2014 $50/hr",
      "Full code ownership \u2014 yours to keep",
    ],
    cta: "Get a Free Diagnosis",
    href: "/contacts",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "MVP Build",
    price: "From $2,500",
    timeline: "1\u20134 weeks",
    features: [
      "Fixed scope, fixed price",
      "Weekly demos from Day 1",
      "Full repo access from Day 1",
      "Modern stack any developer can maintain",
      "30 days support post-launch",
    ],
    cta: "Start a Project",
    href: "/contacts?type=build",
    highlight: false,
  },
  {
    name: "Ongoing Support",
    price: "From $50/hr",
    timeline: "Monthly hours",
    features: [
      "Under 80 hrs/mo — $100/hr",
      "80+ hrs/mo — $75/hr",
      "120+ hrs/mo — $50/hr",
      "We already know your codebase",
      "Cancel anytime, no lock-in",
    ],
    cta: "Start with Support",
    href: "/contacts?type=support",
    highlight: false,
  },
];

const faqItems = [
  {
    question: "Can't I just keep prompting the AI to fix it?",
    answer:
      "You can \u2014 and most founders have tried, extensively. The ceiling isn't effort, it's access. The AI can't log into your production environment, read your server logs, or see what's actually happening in your live database. When the problem is in the gap between the local sandbox and the real server, the AI is working blind. A developer with access to your actual environment solves it once.",
  },
  {
    question: "I could deploy these tools myself. Why pay you?",
    answer:
      "You could. The question is whether your time is better spent configuring servers or building your business. Most \"I'll do it myself\" projects stall at server configuration. We handle the deployment, SSL, backups, updates, and migration \u2014 so you get the tool running in 10 days without spending 40 hours on infrastructure.",
  },
  {
    question: "Do I actually own the code?",
    answer:
      "Yes. Unconditionally. You get the full repository \u2014 every file, every commit, every configuration. You can take the code to any developer. No subscription required to access your own app. No code held on our servers. After delivery, you have no dependency on us unless you choose ongoing support.",
  },
  {
    question: "What if my budget is smaller than your minimums?",
    answer:
      "Start with the $500 Audit. It's the lowest-risk entry point \u2014 you get a complete written picture of your app before spending more. If the rescue quote comes back higher than your budget, you'll at least know exactly what's wrong and can plan accordingly. The $500 is credited toward rescue if you proceed.",
  },
  {
    question: "How is this different from hiring a freelancer?",
    answer:
      "Freelancers quote hourly, which means the final bill is unknown. Most haven't worked with AI-generated codebases \u2014 they see unfamiliar patterns and either over-refactor or miss the root cause. We specialize in Lovable, Bolt, Cursor, and Replit apps specifically, and quote a fixed price before touching any code.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <Badge variant="outline" className="mb-6 px-3 py-1 h-auto text-sm">
            Senior Developers · Fixed Prices · You Own Everything
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Senior developers.{" "}
            <span className="text-primary">Fixed prices.</span>{" "}
            You own everything.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We fix AI-built apps, build MVPs from scratch, and replace expensive
            SaaS with open-source alternatives you control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 h-13 text-base">
              <Link href="/app-rescue">
                Fix my app
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-13 text-base"
            >
              <Link href="#products">Cut my SaaS bill</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            50+ founders helped · Fixed price, no surprises · Full repo
            ownership guaranteed
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Three Ways We Help
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              What do you need fixed?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card
                key={service.href}
                className="border-border/50 bg-background flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-3 leading-snug">
                    {service.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {service.body}
                  </p>
                  <p className="text-sm text-primary font-medium mb-6">
                    {service.stat}
                  </p>
                  <Button asChild className="w-full rounded-full" variant="outline">
                    <Link href={service.href}>{service.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section — icon-driven compact grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Why Founders Get Stuck
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Two walls. Most founders hit at least one.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-10">
            {/* Wall 1: Vibe-Coding */}
            <div>
              <h3 className="text-lg font-semibold mb-5">
                AI coding gets you to 80%. The last 20% is where it stops.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {problemsVibeCoding.map((problem) => (
                  <Card
                    key={problem.title}
                    className="border-border/50 bg-background"
                  >
                    <CardContent className="p-5">
                      <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
                        <problem.icon className="w-4 h-4 text-destructive" />
                      </div>
                      <h4 className="text-sm font-semibold mb-1.5 leading-snug">
                        {problem.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {problem.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-5 border-l-4 border-primary/60 pl-5 max-w-xl">
                <p className="text-sm italic text-foreground/80">
                  &ldquo;I tried more than one hundred times to get the AI to
                  fix it.&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  — a founder, two weeks before requesting a diagnosis
                </p>
              </div>
            </div>

            {/* Wall 2: SaaS Trap */}
            <div>
              <h3 className="text-lg font-semibold mb-5">
                Per-user pricing. Annual increases. Vendor lock-in. It compounds.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {problemsSaasTrap.map((problem) => (
                  <Card
                    key={problem.title}
                    className="border-border/50 bg-background"
                  >
                    <CardContent className="p-5">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                        <problem.icon className="w-4 h-4 text-amber-500" />
                      </div>
                      <h4 className="text-sm font-semibold mb-1.5 leading-snug">
                        {problem.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {problem.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products" className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              12 Tools. No Per-User Fees. Ever.
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Replace your most expensive SaaS — on your own private instance.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fully deployed, configured, and migrated by us. You get all the
              features, none of the recurring SaaS bill.
            </p>
          </div>

          {/* 12-tool grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto mb-12">
            {products.map((product) => (
              <Link key={product.href} href={product.href}>
                <Card className="border-border/50 bg-background hover:border-primary/40 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <product.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {product.replaces}
                    </p>
                    <h3 className="text-base font-semibold mb-2">
                      {product.tool}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {product.keyLine}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Bundle comparison cards */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Or get the whole stack at once.
              </h3>
              <p className="text-sm text-muted-foreground">
                We bundle related tools to reduce setup cost and make
                migration simpler.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {bundles.map((bundle) => (
                <Card
                  key={bundle.name}
                  className={`bg-background flex flex-col ${
                    bundle.highlight
                      ? "border-primary/60 border-2 relative overflow-hidden"
                      : "border-border/50"
                  }`}
                >
                  {bundle.highlight && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
                  )}
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <bundle.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-semibold">{bundle.name}</h4>
                          {bundle.badge && (
                            <Badge className="text-xs px-2 py-0.5 h-auto">
                              {bundle.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {bundle.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="outline"
                          className="text-xs px-2 py-0.5 h-auto font-normal"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <div className="mb-4 flex-1">
                      <span className="text-xl font-bold text-primary">
                        {bundle.price}
                      </span>
                      {bundle.note && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {bundle.note}
                        </p>
                      )}
                    </div>
                    <Button
                      asChild
                      className="w-full rounded-full"
                      variant={bundle.highlight ? "default" : "outline"}
                      size="sm"
                    >
                      <Link href={bundle.href}>
                        Get this bundle
                        {bundle.highlight && (
                          <ArrowUpRight size={14} className="ml-1.5" />
                        )}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center mt-6">
              <Button asChild variant="link" className="text-sm">
                <Link href="/services">
                  See all 12 tools and individual pricing →
                </Link>
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Three steps. Same process for every service.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <Card key={step.step} className="border-none bg-background">
                <CardContent className="p-8">
                  <span className="text-5xl font-bold text-primary/20">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {step.body}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {step.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Built on Battle-Tested Open Source
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              The tools we deploy are trusted by millions.
            </h2>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Trust signals */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              All tools are open-source, actively maintained, and backed by
              millions in VC funding. We deploy, configure, and maintain them
              on your own server — so your data never leaves your control.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
              Fixed prices. Published. No &ldquo;contact us for pricing.&rdquo;
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              31 of our competitors hide their prices. We don&apos;t.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`bg-background flex flex-col ${
                  tier.highlight
                    ? "border-primary/60 border-2 relative overflow-hidden"
                    : "border-border/60"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
                )}
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold">{tier.name}</h3>
                      {tier.badge && (
                        <Badge className="text-xs px-2 py-0.5 h-auto">
                          {tier.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tier.timeline}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold">{tier.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full rounded-full"
                    variant={tier.highlight ? "default" : "outline"}
                  >
                    <Link href={tier.href}>
                      {tier.cta}
                      {tier.highlight && (
                        <ArrowUpRight size={14} className="ml-1.5" />
                      )}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              All prices in USD. We estimate hours upfront and hold to the quote.
              Not sure where to start? The $500 Audit is the lowest-risk first step.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFaq title="Questions before you book" items={faqItems} />

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Two paths. Both start with a conversation.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Fix my app */}
            <div className="relative overflow-hidden flex flex-col items-center justify-center px-8 py-12 border border-border rounded-3xl text-center before:absolute before:w-full before:h-4/5 before:bg-linear-to-r before:from-sky-100 before:from-15% before:via-white before:via-55% before:to-amber-100 before:to-90% before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-sky-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-300/10 dark:before:to-60% dark:before:rounded-full dark:before:-z-10">
              <h3 className="text-xl font-semibold mb-3">
                Your app is stuck. Let&apos;s unblock it.
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Describe your problem. A senior developer responds within 24
                hours with a real diagnosis. No commitment, no sales pitch.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-13 text-base mb-3"
              >
                <Link href="/contacts">
                  Get a free diagnosis
                  <ArrowUpRight size={16} className="ml-2" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Free · 24-hour response · Fixed price follows
              </p>
            </div>

            {/* Cut my SaaS bill */}
            <div className="relative overflow-hidden flex flex-col items-center justify-center px-8 py-12 border border-border rounded-3xl text-center before:absolute before:w-full before:h-4/5 before:bg-linear-to-r before:from-emerald-100 before:from-15% before:via-white before:via-55% before:to-teal-100 before:to-90% before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-emerald-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-teal-300/10 dark:before:to-60% dark:before:rounded-full dark:before:-z-10">
              <h3 className="text-xl font-semibold mb-3">
                You&apos;re overpaying for SaaS. Let&apos;s calculate by how much.
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Tell us which tools you&apos;re using and how many users.
                We&apos;ll show you what the open-source equivalent costs on
                your own instance.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-13 text-base mb-3"
              >
                <Link href="/services">See the savings</Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                No commitment · Comparison sent within 24h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-8 sm:py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Services:{" "}
            <Link
              href="/app-rescue"
              className="text-foreground hover:text-primary transition-colors"
            >
              App Rescue →
            </Link>{" "}
            ·{" "}
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
            </Link>{" "}
            ·{" "}
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              All 12 Tools →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
