"use client";

import {
  CalendarDays,
  Clock,
  CreditCard,
  Bell,
  Users,
  Code,
  Stethoscope,
  Landmark,
  UserCheck,
  Route,
  Workflow,
  MonitorSmartphone,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import ProductShowcase from "@/components/services/product-showcase";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import RelatedServices from "@/components/services/related-services";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  {
    icon: CalendarDays,
    title: "Branded Booking Page",
    description:
      "Your domain, your logo, your colors. A professional scheduling page that looks like part of your website, not a third-party tool.",
  },
  {
    icon: Users,
    title: "Round-Robin & Collective Events",
    description:
      "Distribute bookings fairly across team members with round-robin, or require all participants with collective scheduling. No per-seat fees.",
  },
  {
    icon: Route,
    title: "Routing Forms",
    description:
      "Qualify leads before they book. Route meetings to the right person based on form responses — no manual triage needed.",
  },
  {
    icon: MonitorSmartphone,
    title: "3 Embed Types",
    description:
      "Inline embed, pop-up button, or element-click pop-up. Add scheduling to any page with a no-code customizer for brand colors and themes.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Multi-step workflows for email, SMS, and WhatsApp reminders. Auto-confirm, auto-notify team members, and redirect after meetings.",
  },
  {
    icon: Code,
    title: "API-First Architecture",
    description:
      "Full REST API, webhooks, and Cal Atoms (React components). Build scheduling into your product or connect to any system.",
  },
  {
    icon: Clock,
    title: "Smart Availability",
    description:
      "Buffer time, minimum notice, booking frequency limits, and recurring appointments. Real-time sync across Google Calendar, Outlook, and CalDAV.",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description:
      "Email and SMS reminders before appointments. Reduce no-shows by up to 80% without manual follow-ups.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments",
    description:
      "Collect deposits or full payments at booking time. Money goes directly to your Stripe account — no platform fees.",
  },
];

const useCases = [
  {
    icon: Stethoscope,
    industry: "Healthcare & Therapy",
    description:
      "HIPAA-compliant patient scheduling with custom intake forms, appointment types, automated reminders, and insurance document collection. Setup: $3,000-$6,000.",
  },
  {
    icon: Landmark,
    industry: "Financial Advisory",
    description:
      "Client consultation booking with lead qualification routing, document collection at booking, compliance-ready audit trails, and CRM integration. Setup: $2,000-$5,000.",
  },
  {
    icon: UserCheck,
    industry: "Coaching & Consulting",
    description:
      "Professional booking with group sessions, package-based scheduling, payment collection, and branded client experience. Setup: $2,000-$4,000.",
  },
];

const comparisonRows = [
  {
    label: "Monthly cost (5 users)",
    ours: "$199-$299 flat",
    theirs: "$60-$80/user",
    oursHighlight: true,
  },
  {
    label: "Custom branding",
    ours: "Full control",
    theirs: "Limited or paid add-on",
    oursHighlight: true,
  },
  {
    label: "Payment processing",
    ours: "Stripe (your account)",
    theirs: "Platform fees",
    oursHighlight: true,
  },
  {
    label: "Data ownership",
    ours: "Your server",
    theirs: "Vendor cloud",
    oursHighlight: true,
  },
  {
    label: "Per-seat pricing",
    ours: "None",
    theirs: "$12-$16/seat/mo",
    oursHighlight: true,
  },
  {
    label: "Routing forms",
    ours: "Included",
    theirs: "Enterprise plan only",
    oursHighlight: true,
  },
  {
    label: "API access",
    ours: "Full REST API",
    theirs: "Limited or paid add-on",
    oursHighlight: true,
  },
];

const plans = [
  {
    name: "Solo",
    description: "For individual professionals and small practices.",
    setupPrice: 2997,
    monthlyPrice: 199,
    features: [
      "1-3 calendars",
      "Branded booking page",
      "Google Calendar sync",
      "Email reminders",
      "Stripe payments",
      "Custom domain + SSL",
    ],
  },
  {
    name: "Team",
    description: "For teams with multiple practitioners and locations.",
    setupPrice: 4997,
    monthlyPrice: 299,
    recommended: true,
    features: [
      "Unlimited calendars",
      "Round-robin distribution",
      "Google + Outlook sync",
      "Email + SMS reminders",
      "Embeddable widget",
      "Team management & analytics",
    ],
  },
];

const faqItems = [
  {
    question: "How is this different from Calendly?",
    answer:
      "It is your own booking system on your server. No per-seat fees, full data ownership, complete branding control, and no vendor lock-in. Powered by Cal.com — the open-source Calendly successor with 40,000+ GitHub stars and daily active development.",
  },
  {
    question: "Can I accept payments at booking?",
    answer:
      "Yes. Stripe integration lets you collect deposits or full payments when clients book. The money goes directly to your Stripe account with no platform fees.",
  },
  {
    question: "Does it work with my existing calendar?",
    answer:
      "Yes. Two-way sync with Google Calendar, Outlook, and any CalDAV server. Unlimited calendar connections — availability updates across all platforms in real time.",
  },
  {
    question: "Can clients reschedule or cancel themselves?",
    answer:
      "Yes. Clients get a link to manage their booking — reschedule, cancel, or update details — within the rules you set.",
  },
  {
    question: "What about group bookings or classes?",
    answer:
      "The Team plan supports collective events with capacity limits, round-robin distribution, and per-event pricing.",
  },
  {
    question: "Is it HIPAA compliant?",
    answer:
      "Cal.com supports SOC 2, HIPAA, and ISO 27001 compliance. Self-hosted deployment gives you full control over patient data, making it suitable for healthcare providers.",
  },
  {
    question: "Can I embed it on my website?",
    answer:
      "Yes. Three embed options: inline embed, pop-up button, or element-click pop-up. A no-code customizer lets you match brand colors and themes without touching code.",
  },
];

export default function BookingPage() {
  return (
    <>
      <ServiceHero
        badge="Booking"
        title="Stop paying per seat for scheduling"
        description="Your team books clients, calendars stay in sync, payments are collected automatically. One flat price — no matter how many seats you add. All on your server, with your branding."
        icon={CalendarDays}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Powered by the leading open-source scheduling platform"
        subtitle="Cal.com replaces Calendly, Acuity, and SavvyCal with a system you fully own and control."
        projectName="Cal.com"
        projectUrl="https://github.com/calcom/cal.com"
        stats={[
          { label: "GitHub Stars", value: "40.5K+" },
          { label: "Languages", value: "65+" },
          { label: "Integrations", value: "70+" },
        ]}
        screenshots={[
          {
            src: "/images/services/booking/cal-design-system.png",
            alt: "Cal.com design system and booking interface overview",
            priority: true,
          },
          {
            src: "/images/services/booking/cal-banner.png",
            alt: "Cal.com scheduling platform banner",
          },
        ]}
      />
      <FeatureGrid
        title="Everything Calendly does, without the per-seat tax"
        subtitle="Round-robin, routing forms, 3 embed types, workflow automation, and a full API. All included."
        features={features}
      />
      <UseCaseSection
        title="Built for high-value service businesses"
        useCases={useCases}
      />
      <ComparisonTable
        title="Your Booking System vs. Calendly"
        subtitle="Same convenience for clients, better economics and control for you."
        ourLabel="Your System"
        theirLabel="Calendly / Acuity"
        rows={comparisonRows}
      />
      <PricingSection
        title="Two plans, no surprises"
        plans={plans}
        timeline="Launch timeline: 10-14 business days"
      />
      <ServiceFaq items={faqItems} />
      <RelatedServices currentSlug="booking" />
      <CTA
        heading="Ready to own your scheduling?"
        description="Tell us what you need and we'll set up a booking system that works exactly how you want it."
      />
    </>
  );
}
