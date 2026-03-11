import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP Build — From Prototype to Product in 1-4 Weeks | upready.dev",
  description:
    "Turn your idea or broken AI prototype into a working product. Auth, database, payments, deployment — the parts AI tools skip. Flat fee, $2,500-$7,500, you own the code.",
  openGraph: {
    title: "MVP Build — From Prototype to Product in 1-4 Weeks | upready.dev",
    description:
      "Turn your idea or broken AI prototype into a working product. Auth, database, payments, deployment — the parts AI tools skip. Flat fee, $2,500-$7,500, you own the code.",
    url: "https://upready.dev/mvp-build",
  },
  alternates: { canonical: "https://upready.dev/mvp-build" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MVP Build — From Prototype to Product",
  description:
    "Turn your idea or broken AI prototype (Lovable, Bolt, Cursor, Replit, v0) into a working product with real authentication, database, payments, and production deployment. 1-4 weeks, flat fee $2,500-$7,500, full code ownership.",
  url: "https://upready.dev/mvp-build",
  serviceType: "MVP Software Development",
  category: "AI App Development",
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
      name: "Starter MVP",
      description:
        "Validate one core idea. Landing page, one core user action, basic authentication, simple data storage, production deployment.",
      price: "2500",
      priceCurrency: "USD",
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 2,
        unitCode: "WEE",
      },
    },
    {
      "@type": "Offer",
      name: "Standard MVP",
      description:
        "A real product to charge for. Auth with email and Google OAuth, 3-5 core features, user dashboard, role separation, custom domain deployment.",
      price: "5000",
      priceCurrency: "USD",
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        minValue: 2,
        maxValue: 3,
        unitCode: "WEE",
      },
    },
    {
      "@type": "Offer",
      name: "Full MVP",
      description:
        "Production-ready on day one. Full auth, 5-8 core features, Stripe payments, multi-user roles and permissions, admin panel and email notifications.",
      price: "7500",
      priceCurrency: "USD",
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        minValue: 3,
        maxValue: 4,
        unitCode: "WEE",
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
      name: "Can you use my existing prototype, or does everything start over?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We evaluate it first. Most Lovable and Bolt prototypes have salvageable UI code and backend code that's faster to replace than fix. We keep what helps and replace what hurts. You never pay for a rewrite you didn't need.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it actually take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1-4 weeks from scope approval to delivery. Starter: 1-2 weeks. Standard: 2-3 weeks. Full: 3-4 weeks. The scope document takes 24-48 hours to prepare.",
      },
    },
    {
      "@type": "Question",
      name: "Why are you so much cheaper than agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agencies have offices, project managers, account managers, design reviews. You're paying for their structure, not your product. We use AI tools as our primary development stack — same output, 3-4x less cost, 3-4x faster.",
      },
    },
    {
      "@type": "Question",
      name: "What if my requirements change mid-build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We pause and re-scope. Small changes: we absorb them. Large changes: we scope them separately. We'll never surprise you with a bill larger than the original estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own the code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100%. GitHub repo transferred to your account. Supabase under your account. Vercel under your account. Every credential documented. You can hand it to any developer tomorrow. Zero lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js for the frontend, Supabase for database and auth, Vercel for deployment, Stripe for payments. This stack handles most MVPs cleanly and has predictable scaling costs.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two revision rounds are included. For ongoing support, rates start at $50/hr (120+ hrs/month). Most founders come back within 4-8 weeks with the first list of things users are asking for.",
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
      name: "MVP Build",
      item: "https://upready.dev/mvp-build",
    },
  ],
};

export default function BuildLayout({
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
