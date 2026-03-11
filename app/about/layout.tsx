import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AI Product Studio for Non-Technical Founders",
  description:
    "upready.dev is an AI product studio that rescues broken AI-built apps, builds MVPs, and deploys open-source alternatives to expensive SaaS. Fixed prices. Full code ownership. Senior developers.",
  openGraph: {
    title: "About — AI Product Studio for Non-Technical Founders | upready.dev",
    description:
      "We rescue broken AI-built apps, build MVPs, and deploy open-source alternatives to expensive SaaS. Fixed prices. You own everything.",
    url: "https://upready.dev/about",
  },
  alternates: { canonical: "https://upready.dev/about" },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About upready.dev",
  description:
    "upready.dev is an AI product studio that rescues broken AI-built apps, builds MVPs from scratch, and deploys managed open-source alternatives to expensive SaaS — at fixed prices with full code ownership.",
  url: "https://upready.dev/about",
  mainEntity: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
    description:
      "AI product studio that rescues broken AI-built apps, builds MVPs, and deploys open-source alternatives to expensive SaaS. Senior developers. Fixed prices. Full code ownership.",
    areaServed: ["US", "GB", "EU"],
    knowsAbout: [
      "AI app rescue and repair",
      "MVP development",
      "Managed open-source software deployment",
      "Self-hosted CRM, email marketing, e-signature, analytics",
      "Technical audits for AI-built applications",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@upready.dev",
      availableLanguage: ["English"],
    },
  },
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
      name: "About",
      item: "https://upready.dev/about",
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
