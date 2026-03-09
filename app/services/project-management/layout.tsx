import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management for Dev Teams — Self-Hosted Plane",
  description:
    "Jira alternative with issues, sprints, and docs. Simple, fast, self-hosted. Import from Jira, Asana, Linear. Setup from $2,497.",
  openGraph: {
    title: "Self-Hosted Project Management — Open Source Jira Alternative",
    description:
      "Project management built on Plane. Kanban, cycles, modules, wiki, time tracking. Used by 50K+ teams.",
    url: "https://upready.dev/services/project-management",
  },
  alternates: {
    canonical: "https://upready.dev/services/project-management",
  },
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
