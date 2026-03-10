import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Hosted Knowledge Base — BookStack, Confluence Alternative",
  description:
    "Confluence Cloud costs $10/user/month. BookStack on your server: unlimited users, flat fee, full data control. Migrate from Confluence. Setup from $997.",
  openGraph: {
    title: "Self-Hosted Knowledge Base — Confluence Alternative, No Per-User Cost",
    description:
      "BookStack deployed on your server. Organize team documentation, wiki, and SOPs — unlimited users, no Atlassian pricing.",
    url: "https://upready.dev/services/knowledge-base",
    images: [{ url: "/api/og?title=Self-Hosted+Knowledge+Base&description=Confluence+alternative.+Unlimited+users,+flat+fee.&service=knowledge-base", width: 1200, height: 630, alt: "Self-Hosted Knowledge Base — BookStack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Replace Confluence — Self-Hosted Knowledge Base, Unlimited Users",
    description: "BookStack on your server. Unlimited users, flat fee. Leave Atlassian's per-user pricing behind.",
    images: ["/api/og?title=Self-Hosted+Knowledge+Base&description=Confluence+alternative.&service=knowledge-base"],
  },
  alternates: { canonical: "https://upready.dev/services/knowledge-base" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Knowledge Base — BookStack",
  alternateName: "Open Source Confluence and Notion Alternative",
  description:
    "Managed deployment of BookStack knowledge base. Unlimited users, WYSIWYG editor, full-text search, role-based access. Replace Confluence or Notion.",
  url: "https://upready.dev/services/knowledge-base",
  category: "Knowledge Base Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "1497",
      priceCurrency: "USD",
      description:
        "Unlimited users, WYSIWYG editor, full-text search, role-based access. $99/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "2497",
      priceCurrency: "USD",
      description:
        "Everything in Starter + SSO/SAML, public-facing help center, API access, custom branding. $149/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I migrate from Notion, Confluence, or Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle content migration as part of setup with formatting preserved. We've migrated teams from Confluence, Notion, Google Docs, SharePoint, and Guru.",
      },
    },
    {
      "@type": "Question",
      name: "Is this better than Notion or Confluence for documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For team knowledge bases, yes. Unlimited users at a flat price, no per-seat costs, full data ownership, and a WYSIWYG editor that non-technical team members prefer.",
      },
    },
    {
      "@type": "Question",
      name: "Can customers and employees use the same system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Public sections for your help center and private sections for internal docs. Same system, different access levels via granular role-based permissions.",
      },
    },
    {
      "@type": "Question",
      name: "What about security and authentication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BookStack supports SAML 2.0, OpenID Connect, and LDAP authentication. Built-in MFA with TOTP and backup codes. All data stays on your server.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my data if I cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's your server and your data. Export everything as PDF, HTML, or Markdown at any time. No vendor lock-in, ever.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical skills to manage content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The WYSIWYG editor works like Google Docs — anyone can create and edit pages. No Markdown or coding required.",
      },
    },
    {
      "@type": "Question",
      name: "How lightweight is the infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BookStack runs on minimal resources — documented running on VPS instances as small as $3/month.",
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
      name: "Knowledge Base",
      item: "https://upready.dev/services/knowledge-base",
    },
  ],
};

export default function KnowledgeBaseLayout({
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
