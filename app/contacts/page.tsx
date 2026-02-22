import type { Metadata } from "next";
import Navbar from "@/components/shadcn-space/blocks/navbar-01";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { contactsNavbarData } from "@/components/shadcn-space/blocks/navbar-01/data.contacts";
import { contactsFaqData } from "@/components/shadcn-space/blocks/faq-01/data.contacts";
import { contactsCtaData } from "@/components/shadcn-space/blocks/cta-01/data.contacts";
import { upreadyData as footerData } from "@/components/shadcn-space/blocks/footer-01/data.upready";

export const metadata: Metadata = {
  title: "Contact — upready.dev",
  description:
    "Get in touch with upready.dev. Chat, email, or book a call — we respond to every message within 24 hours. No forms, no gatekeeping.",
};

const contactMethods = [
  {
    label: "Start a Chat",
    tag: "Primary",
    tagNote: "Fastest",
    description:
      "The fastest way to get a response. Describe your problem or question and we will reply — typically within a few hours during business hours.",
    href: "https://chat.upready.dev",
    linkLabel: "chat.upready.dev",
    bestFor: "Describing your project, getting a quick diagnosis, asking what service fits your situation.",
    response: "Within 4 hours (business hours)",
  },
  {
    label: "Send an Email",
    tag: "Email",
    tagNote: null,
    description:
      "For longer messages, file attachments, NDA requests, or if you prefer email over chat.",
    href: "mailto:hello@upready.dev",
    linkLabel: "hello@upready.dev",
    bestFor: "Detailed project descriptions, sharing documents, anything that benefits from a paper trail.",
    response: "Within 24 hours",
  },
  {
    label: "Book a Call",
    tag: "Call",
    tagNote: "Optional",
    description:
      "If you want to talk synchronously before committing to a project. 15 minutes. Video or audio. No sales pitch — just a quick alignment on fit and scope.",
    href: "https://calendly.com/upready",
    linkLabel: "calendly.com/upready",
    bestFor: "Founders who prefer a verbal conversation before engaging.",
    response: "Book a slot in the calendar",
  },
];

const responseTimes = [
  {
    channel: "Chat",
    time: "Within 4 hours",
    note: "Business hours: 9am–6pm EST, Monday–Friday. Messages outside business hours answered next business day.",
  },
  {
    channel: "Email",
    time: "Within 24 hours",
    note: "If the message requires research or a detailed answer, we acknowledge it immediately and follow up.",
  },
  {
    channel: "Booking",
    time: "Your chosen slot",
    note: "Calendar shows real availability. If the slot you want is not available, email us and we will find a time.",
  },
];

export default function ContactsPage() {
  return (
    <>
      <Navbar data={contactsNavbarData} />

      {/* Hero */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-20 xl:py-32">
          <div className="flex flex-col gap-6 max-w-2xl">
            <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
              Contact
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-medium leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Describe your project, ask a quick question, or just check if we are the right fit.
              We respond to every message within 24 hours — usually much faster.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Methods */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                Channels
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium">Three Ways to Reach Us</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactMethods.map((method, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-5 p-6 rounded-2xl border border-border ${
                    i === 0 ? "ring-1 ring-foreground/20" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{method.label}</span>
                    {method.tagNote && (
                      <span className="text-xs bg-foreground text-background px-2 py-0.5 rounded-full">
                        {method.tagNote}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-foreground hover:underline underline-offset-4 w-fit"
                    >
                      {method.linkLabel} →
                    </a>
                    <div className="flex flex-col gap-1 pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Best for</p>
                      <p className="text-xs text-muted-foreground">{method.bestFor}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Response</p>
                      <p className="text-xs text-foreground">{method.response}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Response Times */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal w-fit h-7">
                Expectations
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium">When to Expect a Response</h2>
            </div>
            <div className="flex flex-col gap-0 rounded-2xl border border-border overflow-hidden">
              {responseTimes.map((row, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 px-6 py-5 ${
                    i < responseTimes.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="sm:w-24 shrink-0">
                    <span className="text-sm font-medium text-foreground">{row.channel}</span>
                  </div>
                  <div className="sm:w-40 shrink-0">
                    <span className="text-sm text-foreground">{row.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{row.note}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              We do not use automated reply bots. Every message is read and answered by a person. If
              you describe a technical problem, the person who reads it understands the technical
              problem.
            </p>
          </div>
        </div>
      </section>

      <Faq data={contactsFaqData} />
      <CTA data={contactsCtaData} />
      <Footer data={footerData} />
    </>
  );
}
