import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://upready.dev";

  const services = [
    "crm",              // Priority #1: self-hosted crm, open source crm
    "email-marketing",  // Priority #2: self hosted email marketing
    "e-signature",      // Priority #3: documenso vs docusign
    "ai-assistant",     // Priority #4: hipaa compliant ai chatbot
    "ecommerce",
    "booking",
    "analytics",
    "knowledge-base",
    "project-management",
    "dashboards",
    "client-portal",
    "forms",
  ];

  const blogSlugs = [
    "article-hubspot-to-twenty-crm",
    "article-mailchimp-to-listmonk",
    "article-jira-confluence-to-plane-bookstack",
    "migrate-shopify-to-medusa",
    "migrate-confluence-to-bookstack",
    "migrate-jira-to-plane",
  ];

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/app-rescue`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/tech-audit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/mvp-build`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contacts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
