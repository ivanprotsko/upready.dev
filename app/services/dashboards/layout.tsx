import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Dashboards Without Code — Built on Budibase",
  description:
    "Build KPI dashboards, admin panels, and internal tools without developers. Connect any database. Setup from $2,497.",
  openGraph: {
    title: "No-Code Business Dashboards — Self-Hosted on Your Server",
    description:
      "Internal tools and dashboards built on Budibase. 30+ data connectors, role-based access, enterprise security.",
    url: "https://upready.dev/services/dashboards",
  },
  alternates: {
    canonical: "https://upready.dev/services/dashboards",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Business Dashboards — Budibase",
  alternateName: "Open Source Retool Alternative",
  description:
    "Managed deployment of Budibase. No-code dashboards, admin panels, and internal tools. 30+ data connectors, drag-and-drop builder.",
  url: "https://upready.dev/services/dashboards",
  category: "Business Intelligence Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "2497",
      priceCurrency: "USD",
      description:
        "Drag-and-drop builder, 30+ data connectors, role-based access, SSO. $149/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "4497",
      priceCurrency: "USD",
      description:
        "Everything in Starter + custom dashboard design, advanced automations, API integrations. $249/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "7997",
      priceCurrency: "USD",
      description:
        "Everything in Business + embeddable dashboards, audit logs, air-gapped deployment, priority support. $399/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What data sources can I connect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Over 30 sources including PostgreSQL, MySQL, MongoDB, MSSQL, Oracle, Snowflake, Google Sheets, Airtable, Elasticsearch, REST APIs, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Can my team build their own reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The drag-and-drop builder with 30+ components lets non-technical users create charts, tables, KPI cards, and full internal tools without writing code.",
      },
    },
    {
      "@type": "Question",
      name: "Is the data real-time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dashboards refresh on a configurable schedule — from every 5 minutes to every hour. Real-time streaming is available for Enterprise plans.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISO 27001 certified with free SSO, data encryption, HTTPS/TLS, and quarterly penetration tests. Enterprise plans include audit logs and air-gapped deployment options.",
      },
    },
    {
      "@type": "Question",
      name: "Can I embed dashboards in my product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, on the Enterprise plan. Dashboards can be embedded via iframe into your own application with custom styling.",
      },
    },
    {
      "@type": "Question",
      name: "What makes this different from Retool or Tableau?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fully open-source and self-hosted — no per-seat licensing. You own the code, the data, and the infrastructure. Free SSO that competitors charge enterprise pricing for.",
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
      name: "Dashboards",
      item: "https://upready.dev/services/dashboards",
    },
  ],
};

export default function DashboardsLayout({
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
