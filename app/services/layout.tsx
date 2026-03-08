import type { Metadata } from "next";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | upready.dev",
    default: "Services | upready.dev",
  },
  description:
    "Production-ready business tools deployed on your own server. AI assistants, dashboards, CRM, booking, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
