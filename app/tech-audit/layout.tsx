import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Audit — $500 Written Report in 48 Hours | upready.dev",
  description:
    "A senior developer reviews your AI-built app and delivers a written report of every vulnerability, deployment risk, and code issue. $500. 48-hour turnaround. Plain English.",
  openGraph: {
    title: "App Audit — $500 Written Report in 48 Hours | upready.dev",
    description:
      "A senior developer reviews your AI-built app and delivers a written report of every vulnerability, deployment risk, and code issue. $500. 48-hour turnaround. Plain English.",
    url: "https://upready.dev/tech-audit",
    images: [
      {
        url: "/api/og?title=App+Audit+%E2%80%94+%24500+Written+Report+in+48+Hours&description=Senior+developer+reviews+your+AI-built+app.+Every+vulnerability+documented.+Plain+English.",
        width: 1200,
        height: 630,
        alt: "App Audit — $500 Written Report in 48 Hours | upready.dev",
      },
    ],
  },
  alternates: { canonical: "https://upready.dev/tech-audit" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "App Audit — AI-Built App Technical Review",
  description:
    "Senior developer manually reviews your AI-built app (Lovable, Bolt, Cursor, Replit, v0) and delivers a written report of every security vulnerability, deployment blocker, and code quality issue. $500, 48-hour turnaround.",
  url: "https://upready.dev/tech-audit",
  serviceType: "Software Audit and Code Review",
  category: "AI App Technical Audit",
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
  offers: {
    "@type": "Offer",
    name: "App Audit",
    description:
      "Manual code review by a senior developer. Written report covering security vulnerabilities, deployment blockers, code quality, and fix-or-rebuild recommendation. 30-min walkthrough call included.",
    price: "500",
    priceCurrency: "USD",
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      value: 48,
      unitCode: "HUR",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: 'Is this worth it if my app "works"?',
      acceptedAnswer: {
        "@type": "Answer",
        text: '"Works" means different things. Working locally and working reliably under real traffic with real users are not the same thing. The most common issues we find — exposed API keys, auth edge cases, missing environment variables in production — are invisible to you until they\'re not. The $500 Audit is the cheapest way to find out before a user does.',
      },
    },
    {
      "@type": "Question",
      name: "How is this different from what the AI tells me about my code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI reviews what you paste into the chat. It can't log into your production environment, read your server logs, or see your deployed configuration. A human developer with access to your repository and production environment finds what the AI can't see.",
      },
    },
    {
      "@type": "Question",
      name: "What if you find nothing wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's a good result. You'll receive a report confirming the app is production-ready, noting any low-priority items to address over time. You'll launch with confidence instead of anxiety.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between the Audit and the Rescue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Audit tells you what's wrong. The Rescue fixes it. They're separate products — but the Audit is the right starting point if you're not sure what you're dealing with. The $500 Audit fee is credited toward rescue if you proceed.",
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
      name: "App Audit",
      item: "https://upready.dev/tech-audit",
    },
  ],
};

export default function AuditLayout({
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
