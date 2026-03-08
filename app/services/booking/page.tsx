"use client";

import { CalendarDays, Clock, CreditCard, Bell, Users, Code, Scissors, Stethoscope, Dumbbell, GraduationCap, Camera } from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: CalendarDays, title: "Branded Booking Page", description: "Professional scheduling page with your logo, colors, and domain. Clients book directly \u2014 no back-and-forth." },
  { icon: Clock, title: "Calendar Sync", description: "Two-way sync with Google Calendar and Outlook. Never double-book again \u2014 availability updates in real time." },
  { icon: Users, title: "Round-Robin Distribution", description: "Automatically distribute bookings across your team members. Fair load balancing with smart availability rules." },
  { icon: Bell, title: "Automatic Reminders", description: "Email and SMS reminders before appointments. Reduce no-shows by up to 80% without manual follow-ups." },
  { icon: Code, title: "Embeddable Widget", description: "Add a booking widget to any page on your website. Clients schedule without leaving your site." },
  { icon: CreditCard, title: "Stripe Payments", description: "Collect deposits or full payments at booking time via Stripe. Reduce cancellations and secure revenue upfront." },
];

const useCases = [
  { icon: Scissors, industry: "Beauty & Wellness", description: "Salon appointments, spa bookings, and service selection with staff assignment and payment." },
  { icon: Stethoscope, industry: "Healthcare", description: "Patient scheduling with intake forms, appointment types, and automated reminders." },
  { icon: Dumbbell, industry: "Fitness", description: "Class scheduling, personal training slots, and membership-based booking access." },
  { icon: GraduationCap, industry: "Education & Tutoring", description: "Lesson scheduling with recurring slots, timezone handling, and group session support." },
  { icon: Camera, industry: "Photography", description: "Session booking with deposit collection, location selection, and package options." },
];

const comparisonRows = [
  { label: "Monthly cost (5 users)", ours: "$199-$299 flat", theirs: "$60-$80/user", oursHighlight: true },
  { label: "Custom branding", ours: "Full control", theirs: "Limited or paid add-on", oursHighlight: true },
  { label: "Payment processing", ours: "Stripe (your account)", theirs: "Platform fees", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "Per-seat pricing", ours: "None", theirs: "$12-$16/seat/mo", oursHighlight: true },
];

const plans = [
  { name: "Solo", description: "For individual professionals and small practices.", setupPrice: 2997, monthlyPrice: 199, features: ["1-3 calendars", "Branded booking page", "Google Calendar sync", "Email reminders", "Stripe payments", "Custom domain + SSL"] },
  { name: "Team", description: "For teams with multiple practitioners and locations.", setupPrice: 4997, monthlyPrice: 299, recommended: true, features: ["Unlimited calendars", "Round-robin distribution", "Google + Outlook sync", "Email + SMS reminders", "Embeddable widget", "Team management & analytics"] },
];

const faqItems = [
  { question: "How is this different from Calendly?", answer: "It's your own booking system on your server. No per-seat fees, full data ownership, complete branding control, and no vendor lock-in. Same functionality, you own everything." },
  { question: "Can I accept payments at booking?", answer: "Yes. Stripe integration lets you collect deposits or full payments when clients book. The money goes directly to your Stripe account." },
  { question: "Does it work with my existing calendar?", answer: "Yes. Two-way sync with Google Calendar and Outlook means your availability is always up to date across all platforms." },
  { question: "Can clients reschedule or cancel themselves?", answer: "Yes. Clients get a link to manage their booking \u2014 reschedule, cancel, or update details \u2014 within the rules you set." },
  { question: "What about group bookings or classes?", answer: "The Team plan supports group events with capacity limits, waitlists, and per-class pricing." },
];

export default function BookingPage() {
  return (
    <>
      <ServiceHero badge="Booking" title="Your own Calendly, without the monthly fees" description="Clients book themselves, calendars stay in sync, payments are collected automatically. All on your server, with your branding." icon={CalendarDays} ctaText="Get Started" />
      <FeatureGrid title="What you get" subtitle="A complete booking platform that replaces Calendly, Acuity, and other scheduling tools." features={features} />
      <UseCaseSection title="Built for every industry" useCases={useCases} />
      <ComparisonTable title="Your Booking System vs. Calendly" subtitle="Same convenience for clients, better economics for you." ourLabel="Your System" theirLabel="Calendly / Acuity" rows={comparisonRows} />
      <PricingSection title="Two plans, no surprises" plans={plans} timeline="Launch timeline: 10-14 business days" />
      <ServiceFaq items={faqItems} />
      <CTA heading="Ready to own your scheduling?" description="Book a call and we'll set up a booking system that works exactly how you need it." />
    </>
  );
}
