import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Hosted CRM for Growing Teams — Built on Twenty",
  description:
    "Open-source CRM with unlimited contacts, custom fields, REST+GraphQL API. Replace HubSpot at 90% less cost. Setup from $3,497.",
  openGraph: {
    title: "Self-Hosted CRM — Open Source Alternative to HubSpot",
    description:
      "Modern CRM built on Twenty. Custom objects, workflow automation, email sync. Your data stays on your server.",
    url: "https://upready.dev/services/crm",
  },
  alternates: { canonical: "https://upready.dev/services/crm" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted CRM Setup — Twenty CRM",
  alternateName: "Open Source HubSpot Alternative",
  description:
    "Managed deployment of Twenty CRM on your own server. Unlimited contacts, custom fields, workflow automation, email sync. Replace HubSpot or Salesforce at 90% less cost.",
  url: "https://upready.dev/services/crm",
  serviceType: "Software Deployment and Configuration",
  category: "CRM Software",
  areaServed: "Worldwide",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Small and Medium Businesses",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      description: "Up to 3 users, kanban + table views, contact & deal management",
      price: "3497",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "CompoundPriceSpecification",
        priceComponent: [
          { "@type": "UnitPriceSpecification", price: "3497", priceCurrency: "USD", unitText: "one-time setup" },
          { "@type": "UnitPriceSpecification", price: "199", priceCurrency: "USD", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
        ],
      },
    },
    {
      "@type": "Offer",
      name: "Growth",
      description: "Up to 10 users, custom pipelines & automations, email integration",
      price: "5497",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "CompoundPriceSpecification",
        priceComponent: [
          { "@type": "UnitPriceSpecification", price: "5497", priceCurrency: "USD", unitText: "one-time setup" },
          { "@type": "UnitPriceSpecification", price: "349", priceCurrency: "USD", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
        ],
      },
    },
    {
      "@type": "Offer",
      name: "Scale",
      description: "Unlimited users, advanced API, custom integrations, dedicated support",
      price: "8997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "CompoundPriceSpecification",
        priceComponent: [
          { "@type": "UnitPriceSpecification", price: "8997", priceCurrency: "USD", unitText: "one-time setup" },
          { "@type": "UnitPriceSpecification", price: "499", priceCurrency: "USD", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
        ],
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I migrate from HubSpot or Salesforce?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We handle the full data migration as part of setup. Export your contacts, deals, and activity history as CSV — we map everything to your new CRM structure and verify data integrity before go-live." },
    },
    {
      "@type": "Question",
      name: "How does this compare to Salesforce for a 10-person team?",
      acceptedAnswer: { "@type": "Answer", text: "Salesforce Pro Suite costs $100/user/month ($1,000/month for 10 users) plus $10K-$25K implementation. With us, you pay a one-time setup of $3,497-$8,997 and $199-$499/month. Over 3 years, you save $20K-$50K+ while owning your data." },
    },
    {
      "@type": "Question",
      name: "Is open-source CRM reliable for business use?",
      acceptedAnswer: { "@type": "Answer", text: "Twenty CRM is backed by Y Combinator (S23 batch), has $5.5M in funding from investors including the HubSpot co-founder and former Pipedrive CEO, and 40K+ GitHub stars with 300+ contributors. It ships monthly releases and is used by growing companies worldwide." },
    },
    {
      "@type": "Question",
      name: "Can I customize the fields and views?",
      acceptedAnswer: { "@type": "Answer", text: "Fully. Create custom objects, fields, relations, and views for any workflow. Build industry-specific data models — property listings, student records, donor profiles — whatever your business needs." },
    },
    {
      "@type": "Question",
      name: "What about mobile access?",
      acceptedAnswer: { "@type": "Answer", text: "The CRM is fully responsive and works on any mobile browser. A dedicated mobile app is on the platform's roadmap." },
    },
    {
      "@type": "Question",
      name: "Do I own the data?",
      acceptedAnswer: { "@type": "Answer", text: "100%. The CRM runs on your own server with direct PostgreSQL database access. Export everything at any time. No vendor lock-in, no data hostage situations." },
    },
    {
      "@type": "Question",
      name: "What integrations are available?",
      acceptedAnswer: { "@type": "Answer", text: "Native Gmail and Outlook email sync, Zapier for no-code automations, Chrome extension for LinkedIn capture, webhooks for event-driven flows, and full REST + GraphQL APIs for custom integrations." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://upready.dev" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://upready.dev/services" },
    { "@type": "ListItem", position: 3, name: "CRM", item: "https://upready.dev/services/crm" },
  ],
};

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
