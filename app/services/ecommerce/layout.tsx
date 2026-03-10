import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Shopify Alternative — Medusa E-Commerce, Zero Transaction Fees",
  description:
    "Stop paying Shopify's 2% transaction fee. Medusa deployed on your server: 0% platform fees, full customization, Shopify migration included. Setup from $4,997.",
  openGraph: {
    title: "Self-Hosted E-Commerce — Medusa vs Shopify, Zero Fees",
    description:
      "Shopify charges 2% transaction fees. Medusa doesn't. We deploy your own e-commerce platform with full product, order, and customer data migration from Shopify.",
    url: "https://upready.dev/services/ecommerce",
    images: [{ url: "/api/og?title=Open+Source+Shopify+Alternative&description=Zero+transaction+fees.+Medusa+on+your+server.&service=ecommerce", width: 1200, height: 630, alt: "Open Source Shopify Alternative — Medusa E-Commerce" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Replace Shopify — Zero Transaction Fees, Self-Hosted Medusa",
    description: "We deploy Medusa on your server. 0% platform fees, Shopify migration included. Setup from $4,997.",
    images: ["/api/og?title=Open+Source+Shopify+Alternative&description=Zero+transaction+fees.+Medusa.&service=ecommerce"],
  },
  alternates: { canonical: "https://upready.dev/services/ecommerce" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted E-Commerce Platform — Medusa",
  alternateName: "Open Source Shopify Alternative",
  description:
    "Managed deployment of Medusa e-commerce platform. Zero transaction fees, headless architecture, Shopify migration included.",
  url: "https://upready.dev/services/ecommerce",
  category: "E-Commerce Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Launch",
      price: "4997",
      priceCurrency: "USD",
      description:
        "Full e-commerce backend, Next.js storefront, Stripe payments, Shopify migration. $249/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Scale",
      price: "9997",
      priceCurrency: "USD",
      description:
        "Everything in Launch + B2B support, multi-currency, custom integrations, priority support. $499/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I migrate from Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle product, customer, and order data migration. There are dedicated tools for Shopify-to-Medusa migration, and we manage the entire process. A typical migration for a store with 1,000+ products takes 2-3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What about the frontend/storefront?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The platform is headless — you get a powerful backend and API. We build your storefront in Next.js with your exact design. No template limitations. Complete brand control.",
      },
    },
    {
      "@type": "Question",
      name: "How do payments work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stripe handles all payment processing. You pay Stripe's standard rate (2.9% + $0.30) with no additional platform fees. The platform also supports PayPal, Mollie, Razorpay, and 7+ other payment providers.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save vs. Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A $5M/year Shopify store pays approximately $145K/year in transaction fees alone, plus $39-$2,300+/month in subscription and app fees. With Medusa, you pay zero platform fees — only Stripe's standard rate.",
      },
    },
    {
      "@type": "Question",
      name: "Can I sell B2B and B2C from one platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Multiple sales channels with different rules, pricing, and products. Set up wholesale pricing for B2B buyers alongside your DTC storefront. Customer-specific catalogs and payment terms included.",
      },
    },
    {
      "@type": "Question",
      name: "Is this suitable for high-traffic stores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The headless architecture scales horizontally. The API handles thousands of concurrent requests. Heineken and brands processing $10B+ in GMV run on the same engine.",
      },
    },
    {
      "@type": "Question",
      name: "What integrations are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "60+ plugins available: payment providers (Stripe, PayPal, Mollie), shipping (ShipStation, SendCloud), CMS (Contentful, Sanity), analytics (Segment, PostHog), search (Algolia, MeiliSearch), and ERP connectors.",
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
      name: "E-Commerce",
      item: "https://upready.dev/services/ecommerce",
    },
  ],
};

export default function EcommerceLayout({
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
