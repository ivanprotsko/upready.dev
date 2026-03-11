import type { LucideIcon } from "lucide-react";
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

export type ServiceMeta = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

const serviceMetaMap: Record<string, ServiceMeta> = {
  crm: {
    slug: "crm",
    name: "CRM",
    description: "Open-source CRM on your own server. No per-user fees.",
    icon: Building2,
  },
  "email-marketing": {
    slug: "email-marketing",
    name: "Email Marketing",
    description: "Unlimited subscribers at a flat monthly fee.",
    icon: Mail,
  },
  "e-signature": {
    slug: "e-signature",
    name: "E-Signature",
    description: "Unlimited signatures. No per-envelope charges.",
    icon: FileSignature,
  },
  "ai-assistant": {
    slug: "ai-assistant",
    name: "AI Assistant",
    description: "Private AI on your own server. No data sent externally.",
    icon: Bot,
  },
  ecommerce: {
    slug: "ecommerce",
    name: "E-Commerce",
    description: "Zero transaction fees. Full API access.",
    icon: ShoppingCart,
  },
  booking: {
    slug: "booking",
    name: "Booking",
    description: "Unlimited team members. One fixed price.",
    icon: Calendar,
  },
  analytics: {
    slug: "analytics",
    name: "Analytics",
    description: "GDPR-compliant analytics. Data stays on your server.",
    icon: BarChart3,
  },
  "knowledge-base": {
    slug: "knowledge-base",
    name: "Knowledge Base",
    description: "Self-hosted docs and wiki. No seat-based pricing.",
    icon: BookOpen,
  },
  "project-management": {
    slug: "project-management",
    name: "Project Management",
    description: "Unlimited users. No seat-based pricing.",
    icon: Layout,
  },
  dashboards: {
    slug: "dashboards",
    name: "Dashboards",
    description: "Build internal tools and dashboards. Unlimited users.",
    icon: Monitor,
  },
  "client-portal": {
    slug: "client-portal",
    name: "Client Portal",
    description: "API-first portal. White-label. Any tech stack.",
    icon: Globe,
  },
  forms: {
    slug: "forms",
    name: "Forms & Surveys",
    description: "Unlimited responses. No per-response limits.",
    icon: FileText,
  },
};

const crossLinkMap: Record<string, [string, string, string]> = {
  crm: ["email-marketing", "client-portal", "analytics"],
  "email-marketing": ["crm", "forms", "analytics"],
  "e-signature": ["crm", "client-portal", "forms"],
  "ai-assistant": ["knowledge-base", "client-portal", "crm"],
  ecommerce: ["analytics", "email-marketing", "forms"],
  booking: ["crm", "email-marketing", "client-portal"],
  analytics: ["ecommerce", "email-marketing", "dashboards"],
  "knowledge-base": ["ai-assistant", "client-portal", "project-management"],
  "project-management": ["dashboards", "client-portal", "forms"],
  dashboards: ["analytics", "crm", "project-management"],
  "client-portal": ["crm", "e-signature", "knowledge-base"],
  forms: ["crm", "email-marketing", "e-signature"],
};

export function getRelatedServices(currentSlug: string): ServiceMeta[] {
  const relatedSlugs = crossLinkMap[currentSlug];
  if (!relatedSlugs) return [];

  return relatedSlugs
    .map((slug) => serviceMetaMap[slug])
    .filter((s): s is ServiceMeta => Boolean(s));
}
