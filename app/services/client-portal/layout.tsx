import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Client Portal — Built on Directus",
  description:
    "Branded document sharing, project status, and file exchange. For agencies, law firms, and consulting. Setup from $2,997.",
  openGraph: {
    title: "Client Portal for Professional Services — Self-Hosted",
    description:
      "Secure portal built on Directus. Granular permissions, REST+GraphQL API, custom dashboards. Used by Bose, Copa Airlines.",
    url: "https://upready.dev/services/client-portal",
  },
  alternates: {
    canonical: "https://upready.dev/services/client-portal",
  },
};

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
