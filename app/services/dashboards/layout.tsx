import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Dashboards Without Code — Built on Budibase",
  description:
    "Build KPI dashboards, admin panels, and internal tools without developers. Connect any database. Setup from $2,497.",
  openGraph: {
    title: "No-Code Business Dashboards — Self-Hosted on Your Server",
    description:
      "Internal tools and dashboards built on Budibase. 30+ data connectors, role-based access, enterprise security.",
    url: "https://upready.dev/services/dashboards",
  },
  alternates: {
    canonical: "https://upready.dev/services/dashboards",
  },
};

export default function DashboardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
