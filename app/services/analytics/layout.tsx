import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy-First Web Analytics — Self-Hosted Umami",
  description:
    "GDPR-compliant, cookie-free analytics. No consent banners needed. Replace Google Analytics. Setup from $997.",
  openGraph: {
    title: "Self-Hosted Analytics — No Cookies, No Consent Banners",
    description:
      "Privacy-first analytics built on Umami. Real-time dashboard, funnels, user journeys. GDPR compliant out of the box.",
    url: "https://upready.dev/services/analytics",
  },
  alternates: {
    canonical: "https://upready.dev/services/analytics",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Analytics — Umami",
  alternateName: "Privacy-First Google Analytics Alternative",
  description:
    "Managed deployment of Umami analytics on your server. Cookieless tracking, GDPR/CCPA compliant, no cookie banner required.",
  url: "https://upready.dev/services/analytics",
  category: "Web Analytics Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Essential",
      price: "997",
      priceCurrency: "USD",
      description:
        "1 website, real-time dashboard, GDPR-compliant. $49/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "1497",
      priceCurrency: "USD",
      description:
        "Up to 5 websites, REST API, custom events. $79/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Agency",
      price: "2497",
      priceCurrency: "USD",
      description:
        "Unlimited websites, client dashboards, white-label. $99/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is cookieless tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very accurate. Instead of cookies, the system uses a hash of the visitor's IP and user agent, which is discarded daily. This provides reliable unique visitor counts without storing any personal data.",
      },
    },
    {
      "@type": "Question",
      name: "Will this slow down my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The tracking script is under 2KB — roughly 20x smaller than Google Analytics. It loads asynchronously and has zero impact on your page speed or Core Web Vitals.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from Google Analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can run both in parallel during transition. Historical GA data can be exported separately. Most teams find they get clearer insights from the simpler, privacy-focused dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Do I really not need a cookie banner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Correct. Since no cookies or personal data are stored, no consent is required under GDPR, CCPA, or PECR. One less popup for your visitors.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track custom events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Professional and Agency plans include custom event tracking — button clicks, form submissions, file downloads, and any custom interaction you define.",
      },
    },
    {
      "@type": "Question",
      name: "Who uses Umami in production?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Companies like AMD, Accenture, GM, ESPN, Siemens, Intel, and Hulu use Umami. The project has 35.6K GitHub stars, 22M+ downloads, and 340+ contributors.",
      },
    },
    {
      "@type": "Question",
      name: "What about funnels and retention reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All plans include the real-time dashboard and basic analytics. Funnel analysis, user journeys, and retention cohort reports are available on Professional and Agency plans.",
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
      name: "Analytics",
      item: "https://upready.dev/services/analytics",
    },
  ],
};

export default function AnalyticsLayout({
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
