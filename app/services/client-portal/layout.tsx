import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Hosted Client Portal — Branded, Secure, Unlimited Clients",
  description:
    "Give clients their own branded portal for files, projects, and communication. Deployed on your server — your brand, your domain, no platform fees. Setup from $2,497.",
  openGraph: {
    title: "Self-Hosted Client Portal — White-Label, Unlimited Clients",
    description:
      "Your own client portal on your server. File sharing, project updates, messaging — all under your brand with your domain.",
    url: "https://upready.dev/services/client-portal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Hosted Client Portal — Branded, Unlimited Clients",
    description: "Deploy your own client portal. Files, projects, messaging — under your brand, on your server.",
  },
  alternates: { canonical: "https://upready.dev/services/client-portal" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Client Portal — Directus",
  alternateName: "White-Label Client Portal Platform",
  description:
    "Managed deployment of Directus client portal. White-label branding, granular permissions, REST+GraphQL API. For agencies, law firms, and consulting.",
  url: "https://upready.dev/services/client-portal",
  category: "Client Portal Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "2997",
      priceCurrency: "USD",
      description:
        "White-label portal, file sharing, activity logs, role-based access. $199/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "5497",
      priceCurrency: "USD",
      description:
        "Everything in Starter + custom workflows, CRM integration, SSO, advanced dashboards. $349/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can my clients access the portal on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The portal is fully responsive and works on any device. Clients can view projects, download files, and leave comments from their phone or tablet.",
      },
    },
    {
      "@type": "Question",
      name: "How does authentication work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clients receive an email invitation to create their account. You can also enable SSO (OAuth, OpenID, LDAP) or magic link authentication for a passwordless experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I connect it to my existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The portal exposes both REST and GraphQL APIs. Connect it to your CRM, project management, invoicing, or any system with an API.",
      },
    },
    {
      "@type": "Question",
      name: "What about data security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The portal runs on your own server with SSL encryption. File access is controlled by granular role-based permissions, and every action is logged in an activity trail.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own the data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100%. The portal runs on your infrastructure with a standard SQL database. You have full database access and can export everything at any time.",
      },
    },
    {
      "@type": "Question",
      name: "What can be white-labeled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Everything visible to your clients. Logos, colors, fonts, login screen background, light/dark themes, and custom CSS. White-labeling takes under 90 seconds to configure.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from building a custom portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom portal development typically costs $20K-$50K and takes months. We deploy a production-ready platform in 7-10 days for a fraction of the cost.",
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
      name: "Client Portal",
      item: "https://upready.dev/services/client-portal",
    },
  ],
};

export default function ClientPortalLayout({
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
