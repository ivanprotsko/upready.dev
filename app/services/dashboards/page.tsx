"use client";

import { LayoutDashboard, BarChart3, Database, Filter, Smartphone, Users, Factory, TrendingUp, ShoppingBag, Truck, GraduationCap } from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: Database, title: "Connect Any Data Source", description: "PostgreSQL, MySQL, REST APIs, Google Sheets \u2014 pull data from anywhere into a single dashboard." },
  { icon: BarChart3, title: "Charts, Tables, KPI Cards", description: "Rich visualization options including line charts, bar charts, tables, and real-time KPI widgets." },
  { icon: Filter, title: "Drag-and-Drop Builder", description: "Build new widgets and reports without code. Drag, drop, configure \u2014 your team can create views themselves." },
  { icon: Users, title: "Role-Based Access", description: "Admin, manager, viewer \u2014 control who sees what. Different dashboards for different teams." },
  { icon: Smartphone, title: "Mobile-Ready", description: "Responsive dashboards that work on any device. Check your KPIs from your phone, anywhere." },
  { icon: LayoutDashboard, title: "Custom Domain", description: "Deployed on your own domain (dashboard.yoursite.com) with SSL. Professional look for your team and stakeholders." },
];

const useCases = [
  { icon: TrendingUp, industry: "SaaS", description: "MRR, churn, LTV, and cohort analysis \u2014 all key metrics in one real-time view for your leadership team." },
  { icon: ShoppingBag, industry: "E-commerce", description: "Sales by channel, inventory levels, return rates, and customer segments \u2014 unified reporting across platforms." },
  { icon: Factory, industry: "Manufacturing", description: "Production output, equipment uptime, quality metrics, and supply chain status on a single screen." },
  { icon: Truck, industry: "Logistics", description: "Fleet tracking, delivery times, route efficiency, and cost per delivery \u2014 operational intelligence at a glance." },
  { icon: GraduationCap, industry: "Education", description: "Enrollment numbers, course completion rates, student engagement, and revenue by program." },
];

const plans = [
  { name: "Starter", description: "Essential dashboard for a small team with basic data needs.", setupPrice: 2497, monthlyPrice: 149, features: ["1-2 data sources", "Up to 5 users", "Pre-built chart templates", "Custom domain + SSL", "Mobile-responsive layout", "Email support"] },
  { name: "Business", description: "Advanced analytics with multiple data sources and more users.", setupPrice: 4497, monthlyPrice: 249, recommended: true, features: ["3-5 data sources", "Up to 20 users", "Drag-and-drop builder", "Scheduled reports (email/Slack)", "Role-based access control", "Priority support (8-hour SLA)"] },
  { name: "Enterprise", description: "Unlimited data sources, users, and full customization.", setupPrice: 7997, monthlyPrice: 399, features: ["Unlimited data sources", "Unlimited users", "Custom SQL queries", "Embedded dashboards (iframe)", "API access for automation", "Dedicated support channel"] },
];

const faqItems = [
  { question: "What data sources can I connect?", answer: "PostgreSQL, MySQL, MongoDB, REST APIs, Google Sheets, Airtable, and more. If your data has an API or database connection, we can connect it." },
  { question: "Can my team build their own reports?", answer: "Yes. The drag-and-drop builder lets non-technical users create charts, tables, and KPI cards without writing code." },
  { question: "Is the data real-time?", answer: "Dashboards refresh on a configurable schedule \u2014 from every 5 minutes to every hour. Real-time streaming is available for Enterprise plans." },
  { question: "Can I embed dashboards in my product?", answer: "Yes, on the Enterprise plan. Dashboards can be embedded via iframe into your own application with custom styling." },
];

export default function DashboardsPage() {
  return (
    <>
      <ServiceHero badge="Dashboards" title="Your business data, one screen" description="Custom dashboards that pull data from all your sources into a single, beautiful interface. Reports, KPIs, and management tools \u2014 built for your team." icon={LayoutDashboard} ctaText="Get Started" />
      <FeatureGrid title="What you get" subtitle="A full-featured dashboard platform deployed on your own server with your branding." features={features} />
      <UseCaseSection title="Built for every industry" useCases={useCases} />
      <PricingSection title="Plans that grow with you" plans={plans} timeline="Launch timeline: 5-10 business days" />
      <ServiceFaq items={faqItems} />
      <CTA heading="Need a dashboard for your business?" description="Tell us about your data sources and KPIs \u2014 we'll design the perfect dashboard." />
    </>
  );
}
