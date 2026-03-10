import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Hosted Email Marketing — Listmonk Setup, Unlimited Subscribers",
  description:
    "Stop paying per subscriber. Listmonk deployed on your server: send to unlimited contacts for a flat fee. Amazon SES integration included. Setup from $1,497.",
  openGraph: {
    title: "Self-Hosted Email Marketing Without Per-Subscriber Fees — Listmonk",
    description:
      "Mailchimp charges per subscriber. Listmonk doesn't. We deploy and manage your own email marketing platform — unlimited lists, SQL segmentation, zero per-send fees.",
    url: "https://upready.dev/services/email-marketing",
    images: [{ url: "/api/og?title=Self-Hosted+Email+Marketing&description=Unlimited+subscribers.+Flat+fee.+No+Mailchimp+pricing.&service=email-marketing", width: 1200, height: 630, alt: "Self-Hosted Email Marketing — Listmonk by upready.dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Hosted Email Marketing — Unlimited Subscribers, Flat Fee",
    description: "We deploy Listmonk on your server. Send to your entire list for $99/mo — no per-subscriber pricing ever.",
    images: ["/api/og?title=Self-Hosted+Email+Marketing&description=Unlimited+subscribers,+flat+fee.&service=email-marketing"],
  },
  alternates: { canonical: "https://upready.dev/services/email-marketing" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Email Marketing — Listmonk",
  alternateName: "Open Source Mailchimp Alternative",
  description:
    "Managed deployment of Listmonk email marketing platform. Unlimited subscribers, Amazon SES integration, no per-email fees.",
  url: "https://upready.dev/services/email-marketing",
  category: "Email Marketing Software",
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
        "Unlimited subscribers, visual campaign editor, Amazon SES. $99/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "2497",
      priceCurrency: "USD",
      description:
        "Everything in Starter + multi-SMTP, advanced segmentation, API access. $149/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I migrate from Mailchimp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle the full migration as part of setup — subscriber lists, templates, and segments. Export your data from Mailchimp and we'll import everything into your new platform.",
      },
    },
    {
      "@type": "Question",
      name: "How does Amazon SES pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amazon SES charges roughly $0.10 per 1,000 emails sent. You pay Amazon directly. For 100,000 emails per month, that's about $10 — compared to hundreds on Mailchimp.",
      },
    },
    {
      "@type": "Question",
      name: "Will my emails land in spam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We configure SPF, DKIM, and DMARC records during setup. Combined with a dedicated IP option and proper warm-up, deliverability matches or exceeds SaaS platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own SMTP provider instead of SES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the Professional plan supports any SMTP provider — Postmark, SendGrid, your own mail server, or any other service. Multi-SMTP queues let you load-balance across providers.",
      },
    },
    {
      "@type": "Question",
      name: "How does Listmonk handle millions of subscribers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Listmonk is written in Go and benchmarked at 7M+ emails with peak RAM of 57 MB. Multi-threaded queues with rate limiting ensure reliable delivery without overwhelming your infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge to manage it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The platform has a visual editor for creating campaigns. We handle all server setup, DNS configuration, and maintenance. You focus on writing emails and growing your list.",
      },
    },
    {
      "@type": "Question",
      name: "Can I send SMS and WhatsApp messages too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Listmonk supports HTTP messenger webhooks for SMS, WhatsApp, FCM push notifications, and any custom channel.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I want to cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You own your data and your server. Listmonk is open-source (AGPL v3), so you can continue running it independently. Export your subscribers and templates in standard formats anytime.",
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
      name: "Email Marketing",
      item: "https://upready.dev/services/email-marketing",
    },
  ],
};

export default function EmailMarketingLayout({
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
