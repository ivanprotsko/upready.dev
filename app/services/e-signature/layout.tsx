import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unlimited E-Signatures — Self-Hosted Documenso",
  description:
    "No per-envelope limits. Unlimited document signing for your team. Replace DocuSign at 90% less cost. Setup from $1,997.",
  openGraph: {
    title: "Self-Hosted E-Signature — Open Source DocuSign Alternative",
    description:
      "Document signing built on Documenso. Unlimited envelopes, API access included, custom branding. SOC 2 compliant.",
    url: "https://upready.dev/services/e-signature",
  },
  alternates: {
    canonical: "https://upready.dev/services/e-signature",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted E-Signature Platform — Documenso",
  alternateName: "Open Source DocuSign Alternative",
  description:
    "Managed deployment of Documenso e-signature platform. Unlimited documents, no per-envelope fees, legally binding with full audit trail.",
  url: "https://upready.dev/services/e-signature",
  category: "Electronic Signature Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "1997",
      priceCurrency: "USD",
      description:
        "Unlimited documents, drag-and-drop fields, audit trail, reusable templates. $99/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "2997",
      priceCurrency: "USD",
      description:
        "Everything in Starter + REST API, custom branding, bulk sending, CRM integration. $199/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are the signatures legally binding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The platform creates a full audit trail with signer identity, timestamp, IP address, and document hash. Cryptographic sealing with PAdES digital signatures. Compliant with eIDAS (EU), ESIGN Act, and UETA (US).",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from DocuSign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your existing templates can be recreated during setup. Document history stays in DocuSign, but all future documents live on your own server. We handle template creation and team onboarding as part of setup.",
      },
    },
    {
      "@type": "Question",
      name: "How many users can I add?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlimited users on both plans. Unlike DocuSign, there are no per-seat fees. Add your entire team at no extra cost. Role-based access control keeps permissions organized.",
      },
    },
    {
      "@type": "Question",
      name: "Can signers use this on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Signing works on any device with a browser. No app installation required for signers. The interface is fully responsive.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF is the primary format. You can also upload DOCX files, which are automatically converted to PDF for signing. The platform supports multi-document envelopes for complex signing packages.",
      },
    },
    {
      "@type": "Question",
      name: "How does API pricing compare to DocuSign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DocuSign charges $300+/month just for API access. Our Professional plan includes full API access at $199/month total, with unlimited documents.",
      },
    },
    {
      "@type": "Question",
      name: "Is the source code available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The platform is built on Documenso, an open-source project with 12,400+ GitHub stars and 3,800+ commits. AGPL-3.0 license. You can audit the codebase, and there are no hidden vulnerabilities or vendor lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5-7 business days from kickoff to a working platform. Includes server deployment, custom branding, domain setup, template creation, and team onboarding.",
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
      name: "E-Signature",
      item: "https://upready.dev/services/e-signature",
    },
  ],
};

export default function ESignatureLayout({
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
