import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Rescue — We Fix AI-Built Apps",
  description:
    "Built with Lovable, Bolt, Cursor, or Replit? Stuck at 80%, breaks in production, or got hacked? Senior developer fixes it in days. Fixed price. Free diagnosis.",
  openGraph: {
    title: "App Rescue — We Fix AI-Built Apps | upready.dev",
    description:
      "Works locally, breaks in production? AI keeps going in circles? A senior developer diagnoses your app for free in 48 hours. Fixed price, no judgment.",
    url: "https://upready.dev/app-rescue",
    images: [
      {
        url: "/api/og?title=App+Rescue+%E2%80%94+We+Fix+AI-Built+Apps&description=Senior+developer+diagnoses+your+broken+app+for+free+in+48+hours.+Fixed+price,+no+judgment.",
        width: 1200,
        height: 630,
        alt: "App Rescue — We Fix AI-Built Apps | upready.dev",
      },
    ],
  },
  alternates: { canonical: "https://upready.dev/app-rescue" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "App Rescue — AI-Built App Repair",
  description:
    "Senior developer fixes broken AI-generated apps (Lovable, Bolt, Cursor, Replit, v0) in 3–7 business days. Free diagnosis, fixed price, full code ownership.",
  url: "https://upready.dev/app-rescue",
  serviceType: "Software Development and Repair",
  category: "AI App Repair",
  areaServed: "Worldwide",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Non-Technical Founders",
  },
  offers: [
    {
      "@type": "Offer",
      name: "App Audit",
      description:
        "Written assessment of every vulnerability and breaking risk. Prioritized issue list, fix-or-rebuild recommendation, 30-min walkthrough call.",
      price: "500",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "App Rescue",
      description:
        "Senior developer fixes root cause, tests in production, deploys. 50% upfront, 50% on delivery.",
      lowPrice: "2000",
      highPrice: "5000",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Emergency Security Response",
      description:
        "Immediate response for hacked apps, exposed API keys, or active data breaches. Security audit, containment, fix, and post-incident hardening.",
      priceCurrency: "USD",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can't I just ask the AI to fix it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can — and you probably already have. The ceiling isn't effort, it's architecture. The AI can't log into your production environment, read your server logs, or see the state of your deployed app. A senior developer with access to your actual environment solves it once.",
      },
    },
    {
      "@type": "Question",
      name: "Why not just hire a freelancer on Upwork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most freelancers haven't worked with AI-generated codebases. They see unfamiliar patterns and either refactor working code or miss what's actually broken. We specialize specifically in Lovable, Bolt, Cursor, Replit, and v0 apps.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know you won't make it worse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We give you a written diagnosis before touching a line of code. You approve the fix before we start. And 50% of the fee is due on delivery — you see it working before you pay the second half.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'you own the code' actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get full access to the repository — every file, every commit. No code is held on our servers. No subscription required to access your own app. The ownership is unconditional.",
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
      name: "App Rescue",
      item: "https://upready.dev/app-rescue",
    },
  ],
};

export default function RescueLayout({
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
