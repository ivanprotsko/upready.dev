import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Hosted Project Management — Plane, Open Source Jira Alternative",
  description:
    "Jira Cloud charges per user. Plane on your server: unlimited members, sprints, roadmaps, no per-seat pricing. Your data, your control. Setup from $1,497.",
  openGraph: {
    title: "Self-Hosted Project Management — Plane vs Jira Alternative",
    description:
      "Plane deployed on your server: issues, sprints, roadmaps, cycles — unlimited members at a flat fee. Migrate from Jira or Linear.",
    url: "https://upready.dev/services/project-management",
    images: [{ url: "/api/og?title=Self-Hosted+Project+Management&description=Jira+alternative.+Unlimited+members,+flat+fee.&service=project-management", width: 1200, height: 630, alt: "Self-Hosted Project Management — Plane" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Replace Jira — Self-Hosted Project Management, Unlimited Members",
    description: "Plane on your server: issues, sprints, roadmaps. No Jira per-user fees. Setup from $1,497.",
    images: ["/api/og?title=Self-Hosted+Project+Management&description=Jira+alternative.&service=project-management"],
  },
  alternates: { canonical: "https://upready.dev/services/project-management" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Project Management — Plane",
  alternateName: "Open Source Jira and Linear Alternative",
  description:
    "Managed deployment of Plane project management. Unlimited users, sprints, kanban, Gantt, wiki, time tracking. Import from Jira, Asana, Linear.",
  url: "https://upready.dev/services/project-management",
  category: "Project Management Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Standard",
      price: "2497",
      priceCurrency: "USD",
      description:
        "Unlimited users, issues, sprints, kanban, Gantt, wiki, time tracking. $149/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "3997",
      priceCurrency: "USD",
      description:
        "Everything in Standard + data migration, GitHub/GitLab integration, advanced workflows, priority support. $199/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I migrate from Jira, Asana, or Linear?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Plane has built-in importers for Jira, Asana, Linear, ClickUp, and Monday.com. We handle the full migration as part of the Professional plan setup.",
      },
    },
    {
      "@type": "Question",
      name: "Is this as powerful as Jira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most teams, yes — and significantly simpler. Sprints, kanban, Gantt, wiki, time tracking, and triage without Jira's overwhelming configuration. Two Fortune 10 companies chose Plane for their Jira migration.",
      },
    },
    {
      "@type": "Question",
      name: "How many users can I add?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlimited. Both plans include unlimited users at no additional cost. No per-seat pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Does it integrate with GitHub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Plus GitLab, Slack, Sentry, and 50+ other tools. Link repositories, see commit history on tasks, and auto-update task status based on pull request events.",
      },
    },
    {
      "@type": "Question",
      name: "Can different teams have separate boards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Teamspaces let you organize work by team with dedicated boards, workflows, and permissions.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a built-in wiki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Plane includes a full wiki with nested pages, real-time collaboration, and linking between docs and work items.",
      },
    },
    {
      "@type": "Question",
      name: "What about time tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Built-in. Track time on any work item, generate worklogs, and use the data for billing or capacity planning. No add-on fees.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5-7 business days. Includes server deployment, configuration, team onboarding, and data migration if on the Professional plan.",
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
      name: "Project Management",
      item: "https://upready.dev/services/project-management",
    },
  ],
};

export default function ProjectManagementLayout({
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
