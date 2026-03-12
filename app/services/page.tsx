import Link from "next/link";
import {
  Building2,
  Mail,
  FileSignature,
  Calendar,
  Layout,
  BarChart3,
  BookOpen,
  Bot,
  FileText,
  ShoppingCart,
  Monitor,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/shadcn-space/blocks/footer-05/footer-upready";

const products = [
  {
    replaces: "Replace HubSpot",
    tool: "Twenty CRM",
    keyLine: "$890/mo → $149/mo. No per-user fees.",
    href: "/services/crm",
    icon: Building2,
  },
  {
    replaces: "Replace Mailchimp",
    tool: "Listmonk",
    keyLine: "Unlimited subscribers. Flat monthly fee.",
    href: "/services/email-marketing",
    icon: Mail,
  },
  {
    replaces: "Replace DocuSign",
    tool: "Documenso",
    keyLine: "Unlimited signatures. No per-envelope charges.",
    href: "/services/e-signature",
    icon: FileSignature,
  },
  {
    replaces: "Replace Calendly",
    tool: "Cal.com",
    keyLine: "Unlimited team members. One fixed price.",
    href: "/services/booking",
    icon: Calendar,
  },
  {
    replaces: "Replace Jira / Asana",
    tool: "Plane",
    keyLine: "Unlimited users. No seat-based pricing.",
    href: "/services/project-management",
    icon: Layout,
  },
  {
    replaces: "Replace Google Analytics",
    tool: "Umami",
    keyLine: "GDPR-compliant. Data never leaves your server.",
    href: "/services/analytics",
    icon: BarChart3,
  },
  {
    replaces: "Replace Confluence",
    tool: "BookStack",
    keyLine: "$8,000/yr → $149/mo. Same team, more features.",
    href: "/services/knowledge-base",
    icon: BookOpen,
  },
  {
    replaces: "Replace ChatGPT Enterprise",
    tool: "AnythingLLM",
    keyLine: "Private AI on your own server. No data sent to OpenAI.",
    href: "/services/ai-assistant",
    icon: Bot,
  },
  {
    replaces: "Replace Typeform",
    tool: "HeyForm",
    keyLine: "Unlimited responses. No per-response limits.",
    href: "/services/forms",
    icon: FileText,
  },
  {
    replaces: "Replace Shopify",
    tool: "Medusa",
    keyLine: "Zero transaction fees. Full API access.",
    href: "/services/ecommerce",
    icon: ShoppingCart,
  },
  {
    replaces: "Replace Retool / Grafana",
    tool: "Budibase",
    keyLine: "Build internal tools and dashboards. Unlimited users.",
    href: "/services/dashboards",
    icon: Monitor,
  },
  {
    replaces: "Replace custom portals",
    tool: "Directus",
    keyLine: "API-first. White-label. Any tech stack.",
    href: "/services/client-portal",
    icon: Globe,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 h-auto text-sm">
              12 Tools. No Per-User Fees. Ever.
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Replace your most expensive SaaS
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Fully deployed, configured, and migrated by us. You get all the
              features, none of the recurring SaaS bill.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <Link key={product.href} href={product.href}>
                <Card className="border-border/50 bg-background hover:border-primary/40 transition-colors h-full">
                  <CardContent className="p-8">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {product.replaces}
                    </p>
                    <h2 className="text-lg font-semibold mb-2">
                      {product.tool}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.keyLine}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
