"use client";

import {
  ShoppingBag, CreditCard, Package, LayoutGrid, Plug, Code,
  Shirt, Wine, Cpu, Palette, Pill,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: Package, title: "Full Catalog Management", description: "Products, categories, variants, and pricing — all managed through an intuitive admin panel. Bulk imports via CSV." },
  { icon: CreditCard, title: "Stripe Checkout", description: "Secure payment processing via Stripe. Support for one-time purchases, subscriptions, and multi-currency." },
  { icon: LayoutGrid, title: "Admin Dashboard", description: "Manage orders, customers, inventory, and fulfillment from a single dashboard. Real-time notifications for new orders." },
  { icon: Code, title: "Headless Architecture", description: "API-first design means any frontend works — Next.js, React, mobile app, or your existing website. Total design freedom." },
  { icon: Plug, title: "Plugin System", description: "Modular plugin architecture for extending functionality — loyalty programs, wishlists, subscriptions, and custom workflows." },
];

const useCases = [
  { icon: Shirt, industry: "Fashion & Apparel", description: "Size/color variants, lookbook galleries, and seasonal collections. Custom storefronts that match your brand." },
  { icon: Wine, industry: "Food & Beverage", description: "Subscription boxes, recurring orders, and inventory management with expiration tracking." },
  { icon: Cpu, industry: "Electronics", description: "Detailed product specs, comparison features, and warranty tracking. Complex catalogs handled elegantly." },
  { icon: Palette, industry: "Handmade & Artisan", description: "Unique product pages with rich media, custom options, and made-to-order workflows." },
  { icon: Pill, industry: "Health & Wellness", description: "Subscription supplements, bundle pricing, and compliance-friendly product descriptions." },
];

const comparisonRows = [
  { label: "Transaction fees", ours: "Stripe only (2.9%)", theirs: "2.9% + platform fee", oursHighlight: true },
  { label: "Monthly cost", ours: "$249-$499", theirs: "$39-$399/mo", oursHighlight: false },
  { label: "Design freedom", ours: "Any frontend", theirs: "Template-based", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "Vendor lock-in", ours: "None (open-source)", theirs: "High (migration pain)", oursHighlight: true },
  { label: "Custom functionality", ours: "Plugin system + API", theirs: "App store (monthly fees)", oursHighlight: true },
];

const plans = [
  { name: "Starter", description: "Headless e-commerce for businesses launching online.", setupPrice: 4997, monthlyPrice: 249, features: ["Product catalog management", "Stripe checkout integration", "Order management dashboard", "Customer accounts", "Basic inventory tracking", "14-21 business days setup"] },
  { name: "Full Store", description: "Complete e-commerce platform with advanced features.", setupPrice: 9997, monthlyPrice: 499, recommended: true, features: ["Everything in Starter", "Multi-currency support", "Advanced inventory management", "Discount & promotion engine", "Plugin integrations", "Custom storefront design", "Priority support", "14-21 business days setup"] },
];

const faqItems = [
  { question: "Can I migrate from Shopify?", answer: "Yes. We handle product, customer, and order data migration. There are dedicated tools for Shopify-to-Medusa migration, and we manage the entire process." },
  { question: "What about the frontend/storefront?", answer: "The platform is headless — you get a powerful backend and API. We build your storefront in Next.js with your exact design. No template limitations." },
  { question: "How do payments work?", answer: "Stripe handles all payment processing. You pay Stripe's standard rate (2.9% + $0.30) with no additional platform fees from us." },
  { question: "Can I add custom functionality?", answer: "Yes. The plugin system lets you extend the platform without touching core code. We can build custom plugins for your specific needs." },
  { question: "Is this suitable for high-traffic stores?", answer: "Absolutely. The headless architecture scales horizontally. The API can handle thousands of concurrent requests." },
];

export default function EcommercePage() {
  return (
    <>
      <ServiceHero badge="E-Commerce" title="Your own online store, no platform fees" description="Headless e-commerce with full design freedom. No template limitations, no transaction fees beyond Stripe, no vendor lock-in. Your store, your rules." icon={ShoppingBag} ctaText="Get Started" />
      <FeatureGrid title="A modern commerce engine" subtitle="API-first e-commerce platform with a powerful admin panel and plugin system. Any design, any frontend." features={features} />
      <UseCaseSection title="Built for every product" useCases={useCases} />
      <ComparisonTable title="Your Store vs. Shopify" subtitle="Keep more of every sale. No platform fees, no design constraints, no lock-in." ourLabel="Your Store" theirLabel="Shopify" rows={comparisonRows} />
      <PricingSection title="Invest in your own platform" subtitle="One-time setup plus monthly hosting. No transaction fees — just Stripe's standard rate." plans={plans} timeline="Setup takes 14-21 business days. Includes product migration, storefront design, and payment integration." />
      <ServiceFaq items={faqItems} />
      <CTA heading="Own your commerce platform" description="Book a call and we'll plan your migration from Shopify to a platform you actually own." />
    </>
  );
}
