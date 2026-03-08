import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Wiki & Knowledge Base — Built on BookStack",
  description:
    "Internal documentation, SOPs, and onboarding materials. Replace Confluence at a fraction of the cost. Setup from $1,497.",
  openGraph: {
    title: "Self-Hosted Knowledge Base — Open Source Confluence Alternative",
    description:
      "Documentation platform built on BookStack. WYSIWYG editor, full-text search, role-based access. Your server, your data.",
    url: "https://upready.dev/services/knowledge-base",
  },
  alternates: {
    canonical: "https://upready.dev/services/knowledge-base",
  },
};

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
