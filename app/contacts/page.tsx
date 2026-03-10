"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Check, Mail, Clock, Shield } from "lucide-react";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";

const serviceTypes = [
  { value: "audit", label: "Tech Audit — $500" },
  { value: "rescue", label: "App Rescue — From $2,000" },
  { value: "build", label: "MVP Build — From $5,000" },
  { value: "retainer", label: "Monthly Retainer — From $2,500/mo" },
  { value: "self-hosted", label: "Self-Hosted Tool Setup" },
  { value: "other", label: "Something else" },
];

function ContactPageInner() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: typeParam,
    appUrl: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open mailto with form data
    const subject = `New inquiry: ${formData.service || "General"}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nApp URL: ${formData.appUrl}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:hello@upready.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
        <section className="py-20 sm:py-32">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-semibold mb-4">
              Your email client should open now
            </h1>
            <p className="text-muted-foreground mb-6">
              If it didn't, send your message directly to{" "}
              <a
                href="mailto:hello@upready.dev"
                className="text-primary underline underline-offset-4"
              >
                hello@upready.dev
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              We respond within 24 hours. Usually faster.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left — Info */}
            <div className="flex flex-col gap-8">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 px-3 py-1 h-auto text-sm"
                >
                  Get Started
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                  Tell us what you need.
                  <br />
                  We'll respond within 24 hours.
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Describe your project or problem in plain language. No
                  technical knowledge required. We'll get back with a fixed
                  price and timeline.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "24-hour response",
                    desc: "We reply within one business day. Usually same day.",
                  },
                  {
                    icon: Shield,
                    title: "Fixed price upfront",
                    desc: "No hourly billing. You know the total before we start.",
                  },
                  {
                    icon: Mail,
                    title: "hello@upready.dev",
                    desc: "Prefer email directly? That works too.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <Card className="border rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">
                  Start a conversation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-sm mb-1.5 block">
                      Your name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm mb-1.5 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-sm mb-1.5 block">
                      What do you need?
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, service: value }))
                      }
                    >
                      <SelectTrigger id="service" className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="appUrl" className="text-sm mb-1.5 block">
                      App URL or repo (optional)
                    </Label>
                    <Input
                      id="appUrl"
                      name="appUrl"
                      placeholder="https://myapp.com or GitHub link"
                      value={formData.appUrl}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm mb-1.5 block">
                      Tell us more
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What's broken? What do you need built? What SaaS are you looking to replace?"
                      value={formData.message}
                      onChange={handleChange}
                      className="h-28 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full"
                  >
                    Send inquiry
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    No commitment. We respond within 24 hours with a fixed
                    quote.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function ContactsPage() {
  return (
    <Suspense>
      <ContactPageInner />
    </Suspense>
  );
}
