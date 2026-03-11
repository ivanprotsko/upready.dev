import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Hosted Booking System — Cal.com Setup, No Per-Seat Fees",
  description:
    "Replace Calendly with your own booking platform. Cal.com deployed on your server: unlimited seats, Stripe payments, custom branding. Setup from $2,997.",
  openGraph: {
    title: "Self-Hosted Cal.com — Unlimited Seats, No Per-Seat Pricing",
    description:
      "Calendly charges per seat. Cal.com doesn't. We deploy and manage your own scheduling system — custom branding, payments at booking, 65+ language support.",
    url: "https://upready.dev/services/booking",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Hosted Booking System — No Per-Seat Fees, Cal.com Setup",
    description: "We deploy Cal.com on your server. Unlimited seats, custom branding, Stripe payments. Setup from $2,997.",
  },
  alternates: { canonical: "https://upready.dev/services/booking" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Booking System — Cal.com",
  alternateName: "Open Source Calendly Alternative",
  description:
    "Managed deployment of Cal.com scheduling platform. No per-seat fees, full branding control, Stripe payments, your own server.",
  url: "https://upready.dev/services/booking",
  category: "Appointment Scheduling Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Individual",
      price: "2997",
      priceCurrency: "USD",
      description:
        "Unlimited booking types, calendar sync, Stripe payments, embed widget. $199/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Team",
      price: "4997",
      priceCurrency: "USD",
      description:
        "Everything in Individual + round-robin, collective events, team management, advanced routing. $299/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is this different from Calendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is your own booking system on your server. No per-seat fees, full data ownership, complete branding control, and no vendor lock-in. Powered by Cal.com — the open-source Calendly successor with 40,000+ GitHub stars.",
      },
    },
    {
      "@type": "Question",
      name: "Can I accept payments at booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Stripe integration lets you collect deposits or full payments when clients book. The money goes directly to your Stripe account with no platform fees.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with my existing calendar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Two-way sync with Google Calendar, Outlook, and any CalDAV server. Unlimited calendar connections — availability updates across all platforms in real time.",
      },
    },
    {
      "@type": "Question",
      name: "Can clients reschedule or cancel themselves?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clients get a link to manage their booking — reschedule, cancel, or update details — within the rules you set.",
      },
    },
    {
      "@type": "Question",
      name: "What about group bookings or classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Team plan supports collective events with capacity limits, round-robin distribution, and per-event pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Is it HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cal.com supports SOC 2, HIPAA, and ISO 27001 compliance. Self-hosted deployment gives you full control over patient data, making it suitable for healthcare providers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I embed it on my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Three embed options: inline embed, pop-up button, or element-click pop-up. A no-code customizer lets you match brand colors and themes without touching code.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://upready.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://upready.dev/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Booking",
      item: "https://upready.dev/services/booking",
    },
  ],
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
