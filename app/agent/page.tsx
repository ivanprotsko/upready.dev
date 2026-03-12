import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shadcn-space/blocks/footer-05/footer-upready";

export default function AgentPage() {
  return (
    <main>
      <section className="py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <Badge variant="outline" className="mb-6 px-3 py-1 h-auto text-sm">
            Coming Soon
          </Badge>
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            AI Project Assistant
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            An AI assistant that understands your project, answers technical
            questions, and helps you scope work — before you talk to a human.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: MessageSquare,
                title: "Instant Scoping",
                desc: "Describe your project, get a preliminary estimate",
              },
              {
                icon: Zap,
                title: "Technical Triage",
                desc: "AI identifies the root cause before we look at code",
              },
              {
                icon: Shield,
                title: "24/7 Available",
                desc: "Get answers anytime, hand off to a human when ready",
              },
            ].map((feature) => (
              <Card key={feature.title} className="border-border/50">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                  <h3 className="text-sm font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contacts">Get Started Now</Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              While the AI assistant is being built, reach us directly at{" "}
              <a
                href="mailto:hello@upready.dev"
                className="text-primary underline underline-offset-4"
              >
                hello@upready.dev
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
