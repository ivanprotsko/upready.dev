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

export default function ProjectManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
