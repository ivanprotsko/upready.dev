"use client";

import {
  ShoppingBag,
  CreditCard,
  Package,
  LayoutGrid,
  Plug,
  Code,
  Globe,
  Shirt,
  Building2,
  MapPin,
  DollarSign,
  Layers,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import ProductShowcase from "@/components/services/product-showcase";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const showcaseStats = [
  { label: "GMV Fee", value: "0%" },
  { label: "GitHub Stars", value: "28K+" },
  { label: "Downloads/yr", value: "2.5M+" },
  { label: "Global GMV", value: "$10B+" },
];

const showcaseScreenshots = [
  {
    src: "/images/services/ecommerce/hero-image.png",
    alt: "Medusa admin dashboard with order management and product catalog",
    priority: true,
  },
  {
    src: "/images/services/ecommerce/product-management.png",
    alt: "Product management interface with variants and bulk editing",
  },
  {
    src: "/images/services/ecommerce/multi-regional.png",
    alt: "Multi-regional settings with currencies and tax configurations",
  },
];

const features = [
  {
    icon: Code,
    title: "Headless Architecture",
    description:
      "API-first commerce engine. Build any storefront with Next.js, React, or mobile. No template limitations -- total design freedom for your brand.",
  },
  {
    icon: Globe,
    title: "Multi-Region & Multi-Currency",
    description:
      "Sell globally from day one. Region-specific pricing, tax rules, shipping providers, and payment methods. Localized storefronts per market.",
  },
  {
    icon: Package,
    title: "Advanced Product Management",
    description:
      "Unlimited variants, product bundles, bulk editor, and rich media. Manage large assortments with categories, collections, and custom attributes.",
  },
  {
    icon: DollarSign,
    title: "Promotion Engine",
    description:
      "Campaigns, percentage and fixed discounts, free shipping rules, buy-X-get-Y, and customer-specific B2B pricing. All configurable from the admin.",
  },
  {
    icon: Plug,
    title: "60+ Integrations",
    description:
      "Stripe, PayPal, ShipStation, Contentful, Segment, Algolia, and more. Modular plugin system for extending any functionality without touching core code.",
  },
  {
    icon: Layers,
    title: "Pluggable Architecture",
    description:
      "Swap out any module -- payments, fulfillment, notifications, storage. Custom workflow framework for order processing, returns, and automations.",
  },
];

const useCases = [
  {
    icon: Shirt,
    industry: "DTC Brands",
    description:
      "Custom Next.js storefront that matches your brand identity. Size/color variants, lookbook galleries, and seasonal collections. Migrate from Shopify and stop paying platform fees. Typical setup: $5K-$15K.",
  },
  {
    icon: Building2,
    industry: "B2B Wholesale",
    description:
      "Customer-specific pricing, bulk ordering, multi-buyer accounts, and net payment terms. Connect to your ERP for automated order processing. Typical setup: $5K-$10K.",
  },
  {
    icon: MapPin,
    industry: "Multi-Region Commerce",
    description:
      "Multiple currencies, localized tax rules, regional shipping providers, and per-market storefronts. One admin dashboard for all regions. Typical setup: $8K-$15K.",
  },
];

const comparisonRows = [
  {
    label: "Transaction fees",
    ours: "Stripe only (2.9%)",
    theirs: "2.9% + 0.5-2% platform fee",
    oursHighlight: true,
  },
  {
    label: "Monthly cost",
    ours: "$249-$499",
    theirs: "$39-$2,300+/mo",
    oursHighlight: false,
  },
  {
    label: "Design freedom",
    ours: "Any frontend (Next.js, React, mobile)",
    theirs: "Template-based with Liquid",
    oursHighlight: true,
  },
  {
    label: "Multi-region",
    ours: "Built-in (currencies, tax, shipping)",
    theirs: "Shopify Markets (limited)",
    oursHighlight: true,
  },
  {
    label: "Data ownership",
    ours: "Your server, your database",
    theirs: "Vendor cloud",
    oursHighlight: true,
  },
  {
    label: "Vendor lock-in",
    ours: "None (MIT open-source)",
    theirs: "High (migration pain)",
    oursHighlight: true,
  },
  {
    label: "Custom functionality",
    ours: "Plugin system + full API",
    theirs: "App store ($1,000+/mo in apps)",
    oursHighlight: true,
  },
];

const plans = [
  {
    name: "Starter",
    description: "Headless e-commerce for businesses launching online.",
    setupPrice: 4997,
    monthlyPrice: 249,
    features: [
      "Product catalog management",
      "Stripe checkout integration",
      "Order management dashboard",
      "Customer accounts",
      "Basic inventory tracking",
      "14-21 business days setup",
    ],
  },
  {
    name: "Full Store",
    description: "Complete e-commerce platform with advanced features.",
    setupPrice: 9997,
    monthlyPrice: 499,
    recommended: true,
    features: [
      "Everything in Starter",
      "Multi-currency support",
      "Advanced inventory management",
      "Discount & promotion engine",
      "Plugin integrations",
      "Custom storefront design",
      "Priority support",
      "14-21 business days setup",
    ],
  },
];

const faqItems = [
  {
    question: "Can I migrate from Shopify?",
    answer:
      "Yes. We handle product, customer, and order data migration. There are dedicated tools for Shopify-to-Medusa migration, and we manage the entire process. A typical migration for a store with 1,000+ products takes 2-3 weeks.",
  },
  {
    question: "What about the frontend/storefront?",
    answer:
      "The platform is headless -- you get a powerful backend and API. We build your storefront in Next.js with your exact design. No template limitations. Complete brand control.",
  },
  {
    question: "How do payments work?",
    answer:
      "Stripe handles all payment processing. You pay Stripe's standard rate (2.9% + $0.30) with no additional platform fees. The platform also supports PayPal, Mollie, Razorpay, and 7+ other payment providers.",
  },
  {
    question: "How much can I save vs. Shopify?",
    answer:
      "A $5M/year Shopify store pays approximately $145K/year in transaction fees alone, plus $39-$2,300+/month in subscription and app fees. With Medusa, you pay zero platform fees -- only Stripe's standard rate. The savings typically pay for the entire setup within months.",
  },
  {
    question: "Can I sell B2B and B2C from one platform?",
    answer:
      "Yes. Multiple sales channels with different rules, pricing, and products. Set up wholesale pricing for B2B buyers alongside your DTC storefront. Customer-specific catalogs and payment terms included.",
  },
  {
    question: "Is this suitable for high-traffic stores?",
    answer:
      "Absolutely. The headless architecture scales horizontally. The API handles thousands of concurrent requests. Heineken and brands processing $10B+ in GMV run on the same engine.",
  },
  {
    question: "What integrations are available?",
    answer:
      "60+ plugins available: payment providers (Stripe, PayPal, Mollie), shipping (ShipStation, SendCloud), CMS (Contentful, Sanity), analytics (Segment, PostHog), search (Algolia, MeiliSearch), and ERP connectors.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <ServiceHero
        badge="E-Commerce"
        title="Stop paying Shopify tax on every sale"
        description="Your $5M store pays $145K/year in Shopify fees. Medusa charges 0% on GMV -- headless commerce with full design freedom, multi-region support, and no vendor lock-in. Your store, your margins."
        icon={ShoppingBag}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Built on Medusa -- the #1 open-source commerce platform"
        subtitle="Powering $10B+ in global GMV. Used by Heineken, Mitsubishi, and thousands of brands who chose ownership over rent."
        projectName="Medusa"
        projectUrl="https://github.com/medusajs/medusa"
        stats={showcaseStats}
        screenshots={showcaseScreenshots}
      />
      <FeatureGrid
        title="A modern commerce engine"
        subtitle="API-first platform with headless architecture, multi-region support, and 60+ integrations. Any design, any frontend, any market."
        features={features}
      />
      <UseCaseSection title="Built for ambitious commerce" useCases={useCases} />
      <ComparisonTable
        title="Your Store vs. Shopify"
        subtitle="Keep more of every sale. Zero platform fees, complete design freedom, full data ownership."
        ourLabel="Your Store"
        theirLabel="Shopify"
        rows={comparisonRows}
      />
      <PricingSection
        title="Invest in your own platform"
        subtitle="One-time setup plus monthly hosting. No transaction fees -- just Stripe's standard rate."
        plans={plans}
        timeline="Setup takes 14-21 business days. Includes product migration, storefront design, and payment integration."
      />
      <ServiceFaq items={faqItems} />
      <CTA
        heading="Own your commerce platform"
        description="Book a call and we'll plan your migration from Shopify to a store you actually own. Stop renting, start building equity."
      />
    </>
  );
}
