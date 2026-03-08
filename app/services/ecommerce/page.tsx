"use client";

import {
  ShoppingCart,
  CreditCard,
  Package,
  Layers,
  Settings,
  Globe,
  ShoppingBag,
  Shirt,
  Coffee,
  UtensilsCrossed,
  Dumbbell,
  Palette,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  {
    icon: Package,
    title: "Product Catalog",
    description:
      "Manage products, categories, variants, and pricing. Support for digital and physical goods with inventory tracking.",
  },
  {
    icon: ShoppingCart,
    title: "Cart & Checkout",
    description:
      "Conversion-optimized checkout flow. Guest checkout, saved carts, discount codes, and shipping calculation built in.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments",
    description:
      "Accept credit cards, Apple Pay, Google Pay via Stripe. No additional transaction fees from the platform. You keep what you earn.",
  },
  {
    icon: Settings,
    title: "Admin Dashboard",
    description:
      "Full back-office for managing orders, customers, refunds, and inventory. Revenue analytics and order status at a glance.",
  },
  {
    icon: Globe,
    title: "Any Frontend",
    description:
      "Headless architecture means your storefront can be any design. Custom Next.js site, mobile app, or even a kiosk. Total creative freedom.",
  },
  {
    icon: Layers,
    title: "Plugin System",
    description:
      "Modular architecture with plugins for shipping providers, tax calculators, loyalty programs, and more. Extend without rewriting core code.",
  },
];

const useCases = [
  {
    icon: Shirt,
    industry: "Fashion & Apparel",
    description:
      "Size variants, color swatches, lookbook galleries. Manage seasonal collections and run flash sales effortlessly.",
  },
  {
    icon: Coffee,
    industry: "Subscription Boxes",
    description:
      "Recurring orders, subscription management, and flexible billing cycles. Let customers pause, skip, or customize deliveries.",
  },
  {
    icon: UtensilsCrossed,
    industry: "Food & Beverage",
    description:
      "Perishable inventory tracking, local delivery zones, and time-slot scheduling. Integrate with delivery services.",
  },
  {
    icon: Palette,
    industry: "Digital Products",
    description:
      "Sell courses, templates, software, or digital art. Instant delivery with secure download links and license keys.",
  },
  {
    icon: Dumbbell,
    industry: "Health & Fitness",
    description:
      "Supplements, equipment, and memberships in one store. Bundle products with digital content for higher AOV.",
  },
  {
    icon: ShoppingBag,
    industry: "Multi-Brand Retail",
    description:
      "Manage multiple brands and product lines under one admin. Separate storefronts, unified order management.",
  },
];

const comparisonRows = [
  {
    label: "Transaction fees",
    ours: "0% platform fee",
    theirs: "2.9% + 30c per sale",
    oursHighlight: true,
  },
  {
    label: "Monthly cost",
    ours: "$249-$499",
    theirs: "$39-$399 + % fees",
    oursHighlight: true,
  },
  {
    label: "Frontend design",
    ours: "Any design, fully custom",
    theirs: "Theme-based templates",
    oursHighlight: true,
  },
  {
    label: "Data ownership",
    ours: "Your server, your data",
    theirs: "Locked in their cloud",
    oursHighlight: true,
  },
  {
    label: "Source code",
    ours: "Open-source, fully yours",
    theirs: "Proprietary, no access",
    oursHighlight: true,
  },
  {
    label: "Customization",
    ours: "Unlimited via plugins & code",
    theirs: "Limited to app store",
    oursHighlight: true,
  },
];

const plans = [
  {
    name: "Starter",
    description:
      "Launch your first online store with a powerful headless backend.",
    setupPrice: 4997,
    monthlyPrice: 249,
    features: [
      "Product catalog & variants",
      "Cart & checkout flow",
      "Stripe payment integration",
      "Order management dashboard",
      "Basic storefront template",
      "Hosting, monitoring & backups",
    ],
  },
  {
    name: "Full Store",
    description:
      "Complete e-commerce solution for established businesses.",
    setupPrice: 9997,
    monthlyPrice: 499,
    recommended: true,
    features: [
      "Everything in Starter",
      "Custom storefront design",
      "Multi-currency support",
      "Advanced shipping rules",
      "Discount & promotion engine",
      "Customer accounts & order history",
      "Plugin integrations",
      "Priority support",
    ],
  },
];

const faqItems = [
  {
    question: "How is this different from Shopify?",
    answer:
      "Shopify is a hosted platform that charges transaction fees and limits your design to templates. Our solution is a headless, open-source commerce backend deployed on your own server. You get full control over design, data, and margins.",
  },
  {
    question: "Can I migrate my existing Shopify store?",
    answer:
      "Yes. We handle the full migration including products, customers, and order history. Most migrations take 3-5 business days depending on catalog size.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We integrate with Stripe, which supports credit/debit cards, Apple Pay, Google Pay, and dozens of local payment methods across 40+ countries.",
  },
  {
    question: "Do I need a developer to manage the store?",
    answer:
      "No. Day-to-day operations like adding products, processing orders, and running promotions are all handled through an intuitive admin dashboard. No coding required.",
  },
  {
    question: "How does pricing compare to Shopify long-term?",
    answer:
      "On $50K monthly revenue, Shopify takes ~$1,450/month in transaction fees alone, plus their subscription. Our flat monthly fee means the more you sell, the more you save.",
  },
  {
    question: "Can I add custom features later?",
    answer:
      "Absolutely. The plugin architecture lets you add shipping providers, tax engines, loyalty programs, and custom integrations without touching the core platform.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <ServiceHero
        badge="E-Commerce Platform"
        title="Headless e-commerce. Not another Shopify template."
        description="A powerful commerce backend with any frontend design you want. Products, cart, checkout, Stripe payments, and order management. Zero platform transaction fees."
        icon={ShoppingCart}
        ctaText="Get Started"
      />
      <FeatureGrid
        title="Everything you need to sell online"
        subtitle="A complete headless commerce platform built on open-source software. Own your store, your data, and your margins."
        features={features}
      />
      <UseCaseSection title="Built for any type of commerce" useCases={useCases} />
      <ComparisonTable
        title="Your Store vs. Shopify"
        subtitle="Stop giving away your revenue to platform fees. Own your infrastructure and keep 100% of your margins."
        ourLabel="Your Store"
        theirLabel="Shopify"
        rows={comparisonRows}
      />
      <PricingSection
        title="Two plans, transparent pricing"
        subtitle="No transaction fees. No hidden costs. The more you sell, the more you save."
        plans={plans}
        timeline="Launch timeline: 14-21 business days"
      />
      <ServiceFaq items={faqItems} />
      <CTA
        heading="Ready to own your online store?"
        description="Stop paying transaction fees to platforms. Get a headless e-commerce solution built for your business."
      />
    </>
  );
}
