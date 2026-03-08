import type { Metadata } from "next";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | upready.dev",
    default: "Services | upready.dev",
  },
  description:
    "Production-ready business tools deployed on your own server. AI assistants, dashboards, CRM, booking, and more.",
};

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/" },
  { title: "AI Assistant", href: "/services/ai-assistant" },
  { title: "Dashboards", href: "/services/dashboards" },
  { title: "CRM", href: "/services/crm" },
  { title: "Booking", href: "/services/booking" },
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header navigationData={navigationData} buttonText="Book a Call" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
