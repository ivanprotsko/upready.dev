"use client";

import {
  LayoutDashboard, Database, BarChart3, Filter, Users, Smartphone,
  Workflow, Shield, Plug, Code,
  Factory, HeartPulse, Landmark, Truck, ShoppingBag,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import ProductShowcase from "@/components/services/product-showcase";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import RelatedServices from "@/components/services/related-services";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const showcaseStats = [
  { label: "Teams worldwide", value: "200K+" },
  { label: "GitHub stars", value: "22K+" },
  { label: "Data connectors", value: "30+" },
];

const showcaseScreenshots = [
  {
    src: "/images/services/dashboards/hero-inventory-app.webp",
    alt: "Budibase inventory management dashboard with data tables and filters",
    priority: true,
  },
  {
    src: "/images/services/dashboards/product-internal-db.webp",
    alt: "Budibase internal database interface with drag-and-drop builder",
  },
  {
    src: "/images/services/dashboards/hero-admin-panel.webp",
    alt: "Budibase admin panel for customer license management",
  },
];

const features = [
  { icon: Database, title: "Connect 30+ Data Sources", description: "PostgreSQL, MySQL, MongoDB, REST APIs, Google Sheets, Snowflake, Airtable, and more. Pull data from everywhere into one view." },
  { icon: Filter, title: "Drag-and-Drop App Builder", description: "30+ pre-built components. Auto-generate CRUD apps in 3 clicks or build custom interfaces without writing code." },
  { icon: Workflow, title: "Built-In Automations", description: "20+ triggers and actions for multi-step workflows. Scheduling, webhooks, if/then logic, and integrations with Zapier and Make." },
  { icon: Users, title: "Role-Based Access Control", description: "Admin, manager, viewer -- control who sees what. Different dashboards and permissions for different teams and clients." },
  { icon: Shield, title: "Enterprise-Grade Security", description: "ISO 27001 certified. Free SSO (OIDC, Google), data encryption, quarterly penetration tests, and air-gapped deployment options." },
  { icon: Smartphone, title: "Responsive on Every Device", description: "Dashboards adapt to desktop, tablet, and mobile. Light and dark mode. Your team checks KPIs from anywhere." },
  { icon: Plug, title: "API and Embed Ready", description: "REST API for programmatic access. Embed dashboards via iframe into your own product. Webhooks for external integrations." },
  { icon: Code, title: "Low-Code When You Need It", description: "Optional JavaScript support for advanced logic. Reusable code snippets. Full control without the overhead of custom development." },
];

const useCases = [
  { icon: Factory, industry: "Manufacturing", description: "Production output, equipment uptime, quality metrics, and supply chain status on a single screen. IoT sensor data visualization and compliance reporting." },
  { icon: HeartPulse, industry: "Healthcare", description: "Patient flow tracking, resource utilization, compliance dashboards, and grant reporting. Role-based access keeps sensitive data compartmentalized." },
  { icon: Landmark, industry: "Financial Services", description: "Portfolio performance, risk metrics, regulatory reporting, and client-facing dashboards. Audit logs and encryption for compliance requirements." },
  { icon: Truck, industry: "Logistics", description: "Fleet tracking, delivery times, route efficiency, and cost per delivery. Multi-location KPI comparison across warehouses and distribution centers." },
  { icon: ShoppingBag, industry: "E-commerce", description: "Sales by channel, inventory levels, return rates, and customer segments. Unified reporting across Shopify, WooCommerce, and custom platforms." },
  { icon: BarChart3, industry: "Marketing Agencies", description: "Client reporting dashboards with white-label branding. Campaign performance, ad spend tracking, and ROI visualization across all accounts." },
];

const comparisonRows = [
  { label: "Data ownership", ours: "100% yours", theirs: "Vendor-controlled", oursHighlight: true },
  { label: "Monthly cost (20 users)", ours: "$249/mo flat", theirs: "$200-$1,500+/mo", oursHighlight: true },
  { label: "Data sources", ours: "30+ connectors", theirs: "Limited or extra cost", oursHighlight: true },
  { label: "Customization", ours: "Full (open source)", theirs: "Vendor roadmap only", oursHighlight: true },
  { label: "SSO included", ours: "Free (OIDC, Google)", theirs: "Enterprise tier ($$$)", oursHighlight: true },
  { label: "Self-hosted option", ours: "Yes (Docker/K8s)", theirs: "Cloud-only or extra", oursHighlight: true },
];

const plans = [
  { name: "Starter", description: "Essential dashboard for a small team with basic data needs.", setupPrice: 2497, monthlyPrice: 149, features: ["1-2 data sources", "Up to 5 users", "Pre-built chart templates", "Custom domain + SSL", "Mobile-responsive layout", "Email support"] },
  { name: "Business", description: "Advanced analytics with multiple data sources and more users.", setupPrice: 4497, monthlyPrice: 249, recommended: true, features: ["3-5 data sources", "Up to 20 users", "Drag-and-drop builder", "Scheduled reports (email/Slack)", "Role-based access control", "Priority support (8-hour SLA)"] },
  { name: "Enterprise", description: "Unlimited data sources, users, and full customization.", setupPrice: 7997, monthlyPrice: 399, features: ["Unlimited data sources", "Unlimited users", "Custom SQL queries", "Embedded dashboards (iframe)", "API access for automation", "Dedicated support channel"] },
];

const faqItems = [
  { question: "What data sources can I connect?", answer: "Over 30 sources including PostgreSQL, MySQL, MongoDB, MSSQL, Oracle, Snowflake, Google Sheets, Airtable, Elasticsearch, REST APIs, and more. If your data has an API or database connection, we can connect it." },
  { question: "Can my team build their own reports?", answer: "Yes. The drag-and-drop builder with 30+ components lets non-technical users create charts, tables, KPI cards, and full internal tools without writing code. Auto-generated apps are available in 3 clicks." },
  { question: "Is the data real-time?", answer: "Dashboards refresh on a configurable schedule -- from every 5 minutes to every hour. Real-time streaming is available for Enterprise plans. Built-in automations can trigger alerts on thresholds." },
  { question: "How secure is it?", answer: "ISO 27001 certified with free SSO, data encryption, HTTPS/TLS, and quarterly penetration tests. Enterprise plans include audit logs, environment variables, and air-gapped deployment options." },
  { question: "Can I embed dashboards in my product?", answer: "Yes, on the Enterprise plan. Dashboards can be embedded via iframe into your own application with custom styling. Public API access is also available for programmatic integration." },
  { question: "What makes this different from Retool or Tableau?", answer: "Fully open-source and self-hosted -- no per-seat licensing that scales to thousands per month. You own the code, the data, and the infrastructure. Free SSO that competitors charge enterprise pricing for." },
];

export default function DashboardsPage() {
  return (
    <>
      <ServiceHero
        badge="Dashboards & Internal Tools"
        title="Stop drowning in spreadsheets"
        description="Replace scattered Google Sheets and expensive BI tools with a self-hosted dashboard platform. Connect all your data sources, build internal tools, and give every team the visibility they need."
        icon={LayoutDashboard}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="One platform for dashboards, tools, and workflows"
        subtitle="An open-source, self-hosted platform that replaces Retool, Tableau, and custom-built admin panels at a fraction of the cost."
        projectName="Budibase"
        projectUrl="https://github.com/Budibase/budibase"
        stats={showcaseStats}
        screenshots={showcaseScreenshots}
      />
      <FeatureGrid
        title="Everything you need to run operations"
        subtitle="A full internal tools platform deployed on your server. Dashboards, apps, workflows, and role-based access -- all in one."
        features={features}
        columns={2}
      />
      <UseCaseSection title="Built for high-value industries" useCases={useCases} />
      <ComparisonTable
        title="Self-Hosted vs. SaaS Dashboards"
        subtitle="Own your data and infrastructure. No per-seat licensing, no vendor lock-in."
        ourLabel="Upready (Self-Hosted)"
        theirLabel="Retool / Tableau"
        rows={comparisonRows}
      />
      <PricingSection
        title="Plans that grow with you"
        plans={plans}
        timeline="Launch timeline: 5-10 business days"
      />
      <ServiceFaq items={faqItems} />
      <RelatedServices currentSlug="dashboards" />
      <CTA
        heading="Need dashboards for your business?"
        description="Tell us about your data sources and KPIs. We will design and deploy the perfect dashboard platform for your team."
      />
    </>
  );
}
