import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Hosted Form Builder — HeyForm, GDPR Compliant, No Response Limits",
  description:
    "Typeform alternative on your server. Unlimited responses, no per-submission fees, GDPR compliant. Collect leads, surveys, payments. Setup from $997.",
  openGraph: {
    title: "Self-Hosted Form Builder — No Response Limits, GDPR Ready",
    description:
      "HeyForm deployed on your server: unlimited forms, unlimited responses, custom branding. No per-response pricing ever.",
    url: "https://upready.dev/services/forms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Hosted Forms — Unlimited Responses, No Typeform Fees",
    description: "Deploy HeyForm on your server. Unlimited responses, custom branding, no per-submission fees.",
  },
  alternates: { canonical: "https://upready.dev/services/forms" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Forms & Surveys — HeyForm",
  alternateName: "Open Source Typeform Alternative",
  description:
    "Managed deployment of HeyForm. Unlimited responses, conditional logic, file uploads, Stripe payments. No response limits ever.",
  url: "https://upready.dev/services/forms",
  category: "Online Form Builder Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Standard",
      price: "1497",
      priceCurrency: "USD",
      description:
        "Unlimited forms & responses, conditional logic, conversational mode, webhooks, 34+ integrations. $99/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I migrate from Typeform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We recreate your forms during setup, including conditional logic and integrations. Export your response data from Typeform to keep your history.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a response limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Unlike Typeform and Google Forms, there are no response limits. Collect as many submissions as your server can handle.",
      },
    },
    {
      "@type": "Question",
      name: "Can respondents upload files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. File upload fields support images, documents, and other file types. Files are stored on your server, not a third-party cloud.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All forms are fully responsive. The conversational mode works especially well on mobile devices.",
      },
    },
    {
      "@type": "Question",
      name: "Can I accept payments through forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Built-in Stripe integration lets you collect payments, donations, and order fees directly within any form.",
      },
    },
    {
      "@type": "Question",
      name: "What integrations are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "34+ integrations including HubSpot, Slack, Google Sheets, Zapier, Make, Mailchimp, Salesforce, Stripe, and more. Plus webhooks for custom backends.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export response data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Export responses as CSV or JSON at any time. You also have direct database access for custom queries and reporting.",
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
      name: "Forms",
      item: "https://upready.dev/services/forms",
    },
  ],
};

export default function FormsLayout({
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
