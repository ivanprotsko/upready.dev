import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  DollarSign,
  FolderOpen,
  MessageSquare,
  Package,
  Shield,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/shadcn-space/blocks/footer-05/footer-upready";

const principles = [
  {
    icon: DollarSign,
    title: "Fixed pricing",
    description:
      "Every project has a clear price before work starts. No hourly billing, no scope creep surprises, no invoices that keep growing. You know the number on day one.",
  },
  {
    icon: FolderOpen,
    title: "Full code ownership",
    description:
      "You own everything we build. The code, the infrastructure, the data. No vendor lock-in, no recurring fees for access to your own product. Walk away with the keys any time.",
  },
  {
    icon: Package,
    title: "Open-source preference",
    description:
      "We deploy proven open-source tools instead of expensive SaaS when the quality matches. You get the same functionality at a fraction of the cost, running on infrastructure you control.",
  },
  {
    icon: MessageSquare,
    title: "Async-first communication",
    description:
      "No unnecessary meetings. Status updates, decisions, and deliverables happen in writing. We schedule calls when they actually save time, not as a default.",
  },
  {
    icon: Shield,
    title: "Honest assessments",
    description:
      "If your app needs 3 targeted fixes, we tell you that. If it needs a full rebuild, we tell you that too. We don't manufacture work. The audit report is yours to keep regardless.",
  },
  {
    icon: Code2,
    title: "Senior developers only",
    description:
      "No juniors, no interns, no outsourcing chain. The person reviewing your code and writing your fixes has years of production experience with the exact stack you're running.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <Badge variant="outline" className="mb-6 px-3 py-1 h-auto text-sm">
            About
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            The studio behind{" "}
            <span className="text-primary">your next launch.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            upready.dev is an AI product studio. We rescue broken AI-built apps,
            build MVPs from scratch, and deploy open-source alternatives to
            expensive SaaS — at fixed prices, with full code ownership.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              What We Do
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Three things. Done well.
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">Rescue broken apps.</strong>{" "}
                AI tools like Lovable, Bolt, and Cursor build fast — but they
                also break fast. Exposed API keys, auth that fails under real
                traffic, deployments that work locally and crash in production. A
                senior developer diagnoses the problem and fixes it at a fixed
                price.
              </p>
              <p>
                <strong className="text-foreground">Build MVPs.</strong>{" "}
                You have an idea and need a working product — not a pitch deck.
                We go from concept to deployed app in 1-4 weeks. Real backend,
                real auth, real payments. Production-ready from day one.
              </p>
              <p>
                <strong className="text-foreground">
                  Deploy open-source alternatives.
                </strong>{" "}
                CRM, email marketing, e-signature, analytics, booking, knowledge
                base — there&apos;s a production-grade open-source tool for each
                one. We deploy it on your infrastructure, configure it for your
                business, and hand you the keys. No $200/month SaaS bills. No
                vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              How We Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Six principles.{" "}
              <span className="text-primary">No exceptions.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((principle) => (
              <Card
                key={principle.title}
                className="border-border/50 bg-background"
              >
                <CardContent className="p-8">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Who we work with
            </h2>
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Most of our clients are non-technical founders who built
                something with AI tools and hit a wall. The app works in the
                sandbox but breaks in production. Or it&apos;s live but
                fragile — every deployment feels like a gamble.
              </p>
              <p>
                Some come to us after burning through their budget on freelancers
                who couldn&apos;t diagnose the real problem. Others are paying
                $500-$2,000/month for SaaS tools they could own outright for
                a one-time deployment fee.
              </p>
              <p>
                They don&apos;t need a CTO. They don&apos;t need an agency
                retainer. They need a specific problem solved by someone who
                understands the stack, charges a fair price, and delivers on
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="relative overflow-hidden min-h-80 flex items-center justify-center px-6 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 before:bg-linear-to-r before:from-sky-100 before:from-15% before:via-white before:via-55% before:to-amber-100 before:to-90% before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-sky-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-300/10 dark:before:to-60% dark:before:rounded-full dark:before:-z-10 py-16">
            <div className="flex flex-col gap-6 items-center mx-auto text-center max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Have a project?{" "}
                <span className="text-primary">Let&apos;s talk.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Tell us what you&apos;re building, what&apos;s broken, or what
                SaaS you want to replace. We&apos;ll respond within 24 hours
                with an honest assessment and a clear price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-13 text-base"
                >
                  <Link href="/contacts">
                    Get in Touch
                    <ArrowUpRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Browse all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
