import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Hosted CRM for Growing Teams — Built on Twenty",
  description:
    "Open-source CRM with unlimited contacts, custom fields, REST+GraphQL API. Replace HubSpot at 90% less cost. Setup from $3,497.",
  openGraph: {
    title: "Self-Hosted CRM — Open Source Alternative to HubSpot",
    description:
      "Modern CRM built on Twenty. Custom objects, workflow automation, email sync. Your data stays on your server.",
    url: "https://upready.dev/services/crm",
  },
  alternates: {
    canonical: "https://upready.dev/services/crm",
  },
};

export default function CrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
