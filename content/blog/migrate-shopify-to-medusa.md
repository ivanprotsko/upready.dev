---
title: "How to Migrate from Shopify to Medusa: Complete 2026 Guide to Open-Source E-Commerce"
description: "Step-by-step guide to migrating your online store from Shopify to Medusa. Covers data migration, storefront rebuild, cost savings at scale, and common pitfalls. Real numbers, no hype."
date: "2026-03-09"
author: "upready.dev"
slug: "migrate-shopify-to-medusa"
tags:
  - shopify alternative
  - medusa ecommerce
  - open source ecommerce
  - headless commerce migration
  - shopify to medusa migration
  - ecommerce migration guide
keywords:
  - shopify alternative
  - shopify to medusa migration
  - open source shopify alternative
  - medusa ecommerce
  - headless commerce migration
  - shopify transaction fees
  - shopify hidden costs
  - medusa open source
---

# How to Migrate from Shopify to Medusa: Complete 2026 Guide to Open-Source E-Commerce

> **TL;DR:** Shopify charges 2.9% + 30 cents on every transaction (plus monthly fees from $39 to $2,300). On a $3M/year store, that's roughly $90,000 in transaction fees alone. Medusa is an open-source, headless commerce platform with zero transaction fees and no vendor lock-in. Its official Shopify Source Plugin migrates your products, customers, orders, and discounts automatically. The full migration takes 2-6 weeks depending on storefront complexity. You can do it yourself or hire someone to handle it for you.

---

## Why Merchants Are Leaving Shopify in 2026

Shopify is a great platform to start with. Nobody is arguing that. But somewhere between "my first sale" and "scaling to seven figures," the math stops working.

Here is why.

### The Transaction Fee Problem

Every Shopify plan charges credit card processing fees. If you use Shopify Payments, you pay 2.9% + 30 cents per transaction on the Basic plan, 2.6% + 30 cents on Shopify, and 2.4% + 30 cents on Advanced. If you use a third-party payment gateway instead, Shopify adds an extra fee on top: 2% on Basic, 1% on Shopify, and 0.5% on Advanced.

Most merchants use Shopify Payments to avoid the extra charge. But even then, the standard processing rates eat into margins fast.

Let's run the numbers at different revenue levels:

| Annual Revenue | Shopify Plan | Monthly Fee | Transaction Fees (est.) | Apps & Themes (est.) | Total Annual Cost |
|---|---|---|---|---|---|
| $500K | Shopify ($105/mo) | $1,260 | $15,500 | $3,600 | ~$20,360 |
| $1M | Advanced ($399/mo) | $4,788 | $27,000 | $6,000 | ~$37,788 |
| $3M | Advanced ($399/mo) | $4,788 | $75,000 | $9,600 | ~$89,388 |
| $10M | Shopify Plus (~$2,300/mo) | $27,600 | $240,000 | $18,000 | ~$285,600 |

*Transaction fee estimates use 2.6% average rate with a $75 average order value. App costs based on typical mid-market store running 8-15 paid apps.*

At $3 million a year, you are paying roughly $89,000 to Shopify. At $10 million, it is nearly $286,000. That money comes straight out of your profit margin.

### Vendor Lock-in Is Real

Shopify controls your checkout. Your theme code runs in Liquid, a proprietary templating language that works nowhere else. Your customer data lives on Shopify's servers. If you decide to leave, you can export CSVs, but your checkout flows, discount logic, and app integrations do not come with you.

This is not a theoretical concern. Shopify has raised prices multiple times. They discontinued Shopify Lite. They changed how apps can access the checkout. When you build on a platform you do not own, you are always one policy change away from scrambling.

### The App Tax

Many features that should be built in require paid apps. Reviews ($15-80/month), subscriptions ($50-300/month), bundles ($20-50/month), advanced SEO ($30-80/month), loyalty programs ($50-200/month). A typical mid-market store runs 8-15 paid apps totaling $300-800 per month.

These apps also add JavaScript to your storefront, slowing it down. And each app is another vendor relationship, another data silo, and another potential point of failure.

### Who Should Actually Leave

Not everyone should migrate. If you sell under $500K/year, have a simple catalog, and do not need heavy customization, Shopify is probably still the right choice. The convenience is worth the cost at that scale.

But if you are doing $1M+ in annual revenue, need custom checkout flows, operate in multiple regions, or just want to stop paying a percentage of every sale to your platform, it is time to look at alternatives.

---

## What Is Medusa?

Medusa is an open-source, headless commerce platform built with Node.js and TypeScript. It is not a website builder. It is the commerce engine that handles products, orders, payments, inventory, and fulfillment. You bring your own frontend.

Here is what you need to know:

- **Open source and MIT licensed.** The entire codebase is on GitHub. You can read it, modify it, and deploy it however you want. No licensing fees. No GMV tax. Ever.
- **Headless / API-first.** Medusa provides REST APIs (and a full admin dashboard). Your storefront can be built with Next.js, Remix, Gatsby, or anything that can call an API.
- **30,900+ GitHub stars.** Medusa is the most popular open-source commerce project on GitHub. It has 14,000+ community developers and over 2.5 million yearly downloads.
- **YC-backed.** The company went through Y Combinator and has raised funding. This is not a side project. It has a full-time team, a commercial cloud offering, and enterprise customers including Heineken and Mitsubishi.
- **Modular architecture.** Commerce Modules handle cart, products, orders, regions, pricing, promotions, and tax. You can extend or replace any module without touching the rest.
- **60+ integrations.** Stripe, PayPal, ShipStation, Contentful, Sanity, PostHog, Algolia, and dozens more. Payment providers, fulfillment, CMS, analytics, search, and file storage are all pluggable.

Medusa also recently launched Bloom, an AI-powered webshop builder that can generate a complete storefront from a single prompt. And their Medusa Cloud service (starting at $29/month for Hobby, $299/month for Pro) offers managed hosting if you do not want to handle infrastructure yourself.

### What Medusa Is Not

Medusa is not a drag-and-drop store builder. You will not pick a theme from a marketplace and have a store running in an afternoon. Building a Medusa storefront requires frontend development work, either by you, your team, or someone you hire.

If you are a non-technical founder looking for Shopify-level simplicity, Medusa has a steeper learning curve. The trade-off is total control, no transaction fees, and no vendor lock-in. For stores doing serious revenue, that trade-off pays for itself quickly.

---

## Shopify vs Medusa: Feature Comparison

| Feature | Shopify | Medusa |
|---|---|---|
| **Pricing** | $39-$2,300/mo + transaction fees | Free (self-hosted) or $29-$299/mo (Cloud). 0% GMV fee. |
| **Transaction fees** | 2.4-2.9% + 30 cents (Shopify Payments) | 0% platform fee. You pay only processor rates (Stripe: ~2.9% + 30 cents). |
| **Source code** | Proprietary (Liquid themes only) | MIT open source. Full access to everything. |
| **Product management** | Built-in, good for simple catalogs | Advanced: bulk editor, bundles, large assortments |
| **Checkout** | Controlled by Shopify. Customization limited to Shopify Plus. | Fully customizable. You own the checkout. |
| **Payments** | Shopify Payments or third-party (with surcharge) | Stripe, PayPal, Mollie, Razorpay, and 10+ others. No surcharge. |
| **Multi-currency** | Supported (Shopify Markets) | Native multi-regional: currencies, taxes, shipping, pricing per region |
| **Multi-region** | Shopify Markets (limited on lower plans) | Built-in. Different products, prices, and rules per region. |
| **Shipping** | Basic built-in + apps | ShipStation, SendCloud, Colissimo, and more via plugins |
| **Analytics** | Shopify Analytics (basic-good) | PostHog, Segment, Google Analytics, or custom |
| **Discounts & promotions** | Built-in, decent | Advanced promotion engine: campaigns, B2B pricing, free shipping rules |
| **Subscriptions** | Requires paid app ($50-300/mo) | Build via modules or community plugins |
| **B2B commerce** | Shopify Plus only ($2,300/mo) | Native B2B support. Custom pricing, catalogs, approval flows. |
| **Headless / API** | Storefront API available. Limited without Hydrogen. | API-first. Every feature accessible via REST API. |
| **Hosting** | Managed by Shopify | Self-hosted (any cloud) or Medusa Cloud |
| **Vendor lock-in** | High. Proprietary Liquid, controlled checkout, data on Shopify servers. | None. MIT license. Your code, your data, your servers. |

### Where Shopify Still Wins

Shopify has a massive app ecosystem (8,000+ apps), a simpler setup process, and built-in hosting. If you need to launch fast with minimal technical resources, Shopify gets you there faster. It also has better out-of-the-box analytics and built-in email marketing.

Medusa wins on cost at scale, customization, B2B capabilities, and data ownership. Pick based on what matters to your business right now.

---

## What Data Can You Migrate

Medusa has an **official Shopify Source Plugin** that handles data migration automatically. Here is what it covers:

| Data Type | Migration Support | Notes |
|---|---|---|
| Products | Yes (automatic) | Titles, descriptions, images, SEO metadata |
| Product variants | Yes (automatic) | Options, prices, SKUs, inventory |
| Collections / categories | Yes (automatic) | Mapped to Medusa product categories |
| Customers | Yes (automatic) | Names, emails, addresses |
| Orders | Yes (automatic) | Order history, line items, fulfillment status |
| Discounts / coupons | Yes (automatic) | Discount codes, rules, conditions |
| Inventory levels | Yes (automatic) | Stock quantities, location tracking |
| Product media | Yes (automatic) | Images downloaded and re-hosted |
| Gift cards | Partial | Active gift card balances need manual verification |
| Blog posts | No | Requires separate content migration |
| Theme / storefront design | No | New frontend required (Next.js recommended) |
| App data | No | Each app's data is siloed; replacement plugins needed |
| Custom metafields | Partial | Supported via plugin configuration, but may need mapping |

The plugin connects directly to Shopify's API using your store credentials. It does not just do a one-time import: it supports **scheduled syncing**, so you can run both stores in parallel during your transition without data going stale.

---

## Step-by-Step Migration Using the Shopify Source Plugin

### Prerequisites

Before you start, you will need:

- A Medusa backend up and running (self-hosted or Medusa Cloud)
- Node.js 20+ installed
- A Shopify store with API access (Admin API credentials)
- A Shopify Custom App with read access to products, customers, orders, and inventory

### Step 1: Create a Shopify Custom App

In your Shopify admin, go to **Settings > Apps and sales channels > Develop apps**. Create a new app and grant it these Admin API scopes:

- `read_products`
- `read_customers`
- `read_orders`
- `read_inventory`
- `read_locations`
- `read_discounts`

Install the app and copy the **Admin API access token**.

### Step 2: Install the Shopify Source Plugin

In your Medusa project directory:

```bash
npm install @medusajs/medusa-source-shopify
```

### Step 3: Configure the Plugin

Add the plugin to your `medusa-config.ts` (or `medusa-config.js`):

```typescript
module.exports = {
  // ... other config
  plugins: [
    {
      resolve: "@medusajs/medusa-source-shopify",
      options: {
        domain: "your-store.myshopify.com",
        password: "shpat_your_admin_api_access_token",
      },
    },
  ],
}
```

### Step 4: Run the Initial Migration

Start your Medusa server. The plugin will automatically begin importing data from Shopify:

```bash
npx medusa develop
```

Watch the console output for progress. For a store with 500 products and 5,000 customers, the initial sync typically completes in under 10 minutes.

### Step 5: Verify the Data

Open the Medusa Admin dashboard (usually at `localhost:9000/app`) and verify:

- Products appear with correct titles, descriptions, images, and variants
- Pricing and inventory quantities match Shopify
- Customer records are imported with addresses
- Order history is present
- Discount codes are active

### Step 6: Set Up Scheduled Syncing

The plugin supports periodic syncing to keep your Medusa instance updated while you are still running both stores. Configure the sync interval in your plugin options:

```typescript
{
  resolve: "@medusajs/medusa-source-shopify",
  options: {
    domain: "your-store.myshopify.com",
    password: "shpat_your_admin_api_access_token",
    // Sync every 6 hours
    sync_interval: 21600,
  },
}
```

This lets you run Shopify and Medusa in parallel during your transition period. New orders and product changes on Shopify flow into Medusa automatically. Once your new storefront is ready, you cut over with zero data gaps.

---

## Handling What Doesn't Migrate Automatically

Data migration is the easy part. The real work is in rebuilding everything around the data.

### 1. Storefront: From Liquid to Next.js

Your Shopify theme (built in Liquid) will not work with Medusa. You need a new frontend. The recommended approach is Next.js using one of Medusa's official starter templates.

Medusa provides a **Next.js Starter** that includes:

- Product listing and detail pages
- Cart and checkout flow
- Customer accounts
- Search
- Multi-region support

You can deploy this starter as-is and customize from there, or build a completely custom frontend using Medusa's API. Either way, plan for 1-4 weeks of frontend development depending on design complexity.

If your current Shopify theme is heavily customized, document every unique feature and page layout before you start. Screenshots help. Make a list of every non-standard element: custom product configurators, bundle builders, quiz-based product finders, lookbook pages, and so on.

### 2. Checkout Customization

On Shopify, checkout customization is locked to Shopify Plus ($2,300/month). On Medusa, the checkout is fully yours. This is actually one of the biggest wins of migrating: you can build exactly the checkout flow your business needs.

Things to rebuild:

- Express checkout buttons (Apple Pay, Google Pay via Stripe)
- Subscription checkout flows
- Custom discount application logic
- Post-purchase upsells
- Address validation

### 3. Apps to Plugins

Every Shopify app needs a Medusa equivalent. Here are common replacements:

| Shopify App | Medusa Alternative |
|---|---|
| Klaviyo (email) | Medusa Notifications + Resend, Mailgun, or Klaviyo plugin |
| Yotpo / Judge.me (reviews) | Product Reviews plugin (2K monthly downloads) |
| ReCharge (subscriptions) | Custom module or community plugin |
| ShipStation | Official ShipStation plugin |
| Algolia (search) | Official Algolia plugin |
| Google Analytics | PostHog or GA4 plugin |

For apps without a direct Medusa equivalent, you have two options: find a community plugin on the Medusa marketplace, or build a custom module. Medusa's plugin architecture makes this more straightforward than you might expect, but budget time for it.

### 4. SEO and Redirects

This is the one people forget, and it can tank your organic traffic.

Shopify uses URL patterns like `/products/product-name` and `/collections/collection-name`. Your new Medusa storefront will almost certainly use different URL structures. You need 301 redirects from every old URL to its new equivalent.

Your SEO migration checklist:

- **Export all Shopify URLs.** Crawl your current site with Screaming Frog or a similar tool.
- **Map old URLs to new URLs.** Create a redirect file or middleware in your Next.js frontend.
- **Preserve meta titles and descriptions.** The Shopify Source Plugin migrates SEO metadata, but verify it is rendering correctly on your new storefront.
- **Submit a new sitemap** to Google Search Console after launch.
- **Monitor 404 errors** in Search Console for the first 4 weeks after cutover.
- **Keep Shopify running** for 2-4 weeks after launch with a redirect from your old domain, if possible.

---

## Timeline and Cost Breakdown

### DIY Migration

If you or your team has the technical skills to handle this, here is a realistic timeline:

| Phase | Duration | What's Involved |
|---|---|---|
| Planning & setup | 3-5 days | Medusa setup, Shopify API credentials, plugin config |
| Data migration | 1-2 days | Run plugin, verify data, set up scheduled sync |
| Storefront development | 2-5 weeks | Design, build, and test Next.js frontend |
| Payment & shipping integration | 3-5 days | Stripe, PayPal, ShipStation, tax config |
| Testing & QA | 3-5 days | End-to-end testing, load testing, edge cases |
| SEO & redirects | 2-3 days | URL mapping, redirects, sitemap, Search Console |
| Cutover | 1 day | DNS switch, final sync, go live |

**Total: 4-8 weeks** depending on storefront complexity.

**Costs (DIY):**

| Item | Cost |
|---|---|
| Medusa | $0 (self-hosted) or $29-$299/mo (Cloud) |
| Hosting (self-hosted) | $20-$100/mo (DigitalOcean, Hetzner, AWS) |
| Developer time (if hiring) | $5,000-$15,000 (freelancer) |
| Domain & SSL | ~$15/year |
| Stripe / payment processing | Standard processor rates (no Medusa markup) |

### Managed Migration

If you want someone else to handle the entire process, here is what to expect:

| Provider Type | Cost Range | Timeline | What You Get |
|---|---|---|---|
| Freelance developer | $3,000-$8,000 | 3-6 weeks | Data migration + basic storefront |
| Small studio | $5,000-$15,000 | 2-4 weeks | Full migration + custom storefront + integrations |
| E-commerce agency | $15,000-$60,000+ | 4-12 weeks | Enterprise migration + custom development + ongoing support |

The wide price range reflects the difference between "migrate data and deploy a starter template" and "build a pixel-perfect custom storefront with 15 integrations."

---

## Common Pitfalls and How to Avoid Them

### 1. Launching Without Running Both Stores in Parallel

The Shopify Source Plugin supports scheduled syncing for a reason. Do not plan a "big bang" cutover where you shut down Shopify on Friday and launch Medusa on Monday. Run both stores with data syncing for at least 1-2 weeks. Process orders on Shopify until your Medusa storefront is fully tested.

### 2. Ignoring SEO Redirects

Organic search is probably driving 30-60% of your traffic. If you launch a new storefront without proper 301 redirects, Google will see hundreds or thousands of broken links. Rankings can take months to recover. Map every URL. Test every redirect. Do not skip this.

### 3. Underestimating Storefront Development Time

The data migration takes hours. The storefront takes weeks. Budget accordingly. If your current Shopify store has a heavily customized theme with product configurators, mega menus, and custom landing pages, plan for the upper end of the timeline.

### 4. Forgetting About Email Flows

Shopify handles transactional emails (order confirmation, shipping notification, abandoned cart) out of the box. On Medusa, you need to configure an email provider (Resend, Mailgun, or similar) and set up email templates. If you use Klaviyo for marketing automation, you will need to reconnect it to Medusa via webhooks or the Klaviyo plugin.

### 5. Not Testing Payment Edge Cases

Test every payment scenario before launch: successful payments, declined cards, refunds, partial refunds, subscription charges, and international transactions with currency conversion. Stripe's test mode makes this straightforward, but you actually have to do it.

### 6. Losing Customer Passwords

Shopify stores passwords as hashed values that you cannot export. When customers migrate to your new Medusa store, they will need to reset their passwords. Plan for this: send a pre-migration email explaining the change, and make the password reset flow prominent on your new storefront.

### 7. Skipping Load Testing

If your Shopify store handles 500+ concurrent visitors during sales events, make sure your Medusa infrastructure can too. Self-hosted Medusa needs appropriate server sizing. Run a load test with a tool like k6 or Artillery before your first major traffic event.

---

## Post-Migration Checklist

Complete each item before you consider the migration done:

- [ ] **All products visible and correct** -- spot-check 20+ products across different categories. Verify images, descriptions, variants, and prices.
- [ ] **Customer accounts working** -- test login, password reset, order history, and address management.
- [ ] **Checkout flow tested end-to-end** -- place a real order with a real payment method. Test guest checkout and logged-in checkout.
- [ ] **Payment refunds working** -- process a test refund and verify it appears in Stripe/PayPal.
- [ ] **Shipping rates calculating correctly** -- test multiple shipping addresses including international.
- [ ] **Discount codes active** -- test at least 5 discount codes covering percentage off, fixed amount, free shipping, and buy-X-get-Y.
- [ ] **SEO redirects live and tested** -- spot-check 50+ old URLs. Use Screaming Frog to verify no 404s.
- [ ] **Transactional emails sending** -- verify order confirmation, shipping notification, and password reset emails are delivered (check spam folders).
- [ ] **Analytics tracking confirmed** -- verify pageviews, add-to-cart events, and purchase events are recording in your analytics tool.
- [ ] **Monitoring and alerting set up** -- configure uptime monitoring (UptimeRobot, Checkly) and error tracking (Sentry) on your Medusa backend and storefront.

---

## When to Hire an Expert

You can handle this migration yourself if you:

- Have a developer on your team who is comfortable with Node.js and Next.js
- Run a store with under 1,000 products and straightforward requirements
- Have 4-8 weeks to dedicate to the project
- Are comfortable managing your own hosting infrastructure

You should consider hiring help if:

- You are doing $1M+ in annual revenue and cannot afford extended downtime
- You need a custom storefront design that matches or exceeds your current Shopify store
- You operate in multiple regions with complex tax and shipping rules
- You rely on 10+ Shopify apps that need Medusa replacements
- You need the migration done in 2-3 weeks, not 2 months

At [upready.dev](https://upready.dev), we handle Shopify-to-Medusa migrations starting at $3,000. That covers data migration using the official plugin, storefront setup on Next.js, payment and shipping integration, SEO redirects, and testing. For stores with complex requirements, custom storefronts, and extensive integrations, full migrations run $5,000-$15,000.

We also set up your hosting infrastructure and ongoing monitoring so you do not have to manage servers. [Book a free 15-minute call](https://upready.dev/book) to get a migration estimate for your specific store.

---

## FAQ

### How long does it take to migrate from Shopify to Medusa?

The data migration itself takes under a day using Medusa's official Shopify Source Plugin. The full migration, including storefront development, payment integration, and testing, takes 2-8 weeks depending on store complexity. A simple store with a starter template can be done in 2-3 weeks. A custom-designed storefront with multiple integrations takes 4-8 weeks.

### Will I lose my Google rankings when I migrate from Shopify?

Not if you set up proper 301 redirects from your old Shopify URLs to your new storefront URLs. Google treats 301 redirects as permanent moves and transfers most of the ranking authority. The critical step is mapping every product, collection, and page URL from Shopify to its equivalent on Medusa. Monitor Google Search Console for 404 errors after launch and fix any missed redirects immediately.

### Is Medusa really free?

Yes. Medusa is MIT-licensed open-source software. You can download, modify, and deploy it with zero licensing fees and zero transaction fees. You still pay for hosting (a VPS from $20-$100/month), payment processor fees (standard Stripe/PayPal rates), and any development work. Medusa also offers Medusa Cloud at $29/month (Hobby) or $299/month (Pro) if you prefer managed hosting.

### Can I migrate my customers' passwords from Shopify to Medusa?

No. Shopify stores passwords using one-way hashing that cannot be exported or decrypted. When you migrate to Medusa, your customers will need to create new passwords. The best approach is to send a pre-migration email informing customers about the switch and providing a simple password reset link on your new storefront. Most merchants see 60-80% of active customers reset their passwords within the first two weeks.

### What is the difference between Medusa and WooCommerce as a Shopify alternative?

Medusa is a headless, API-first platform built with Node.js and TypeScript. WooCommerce is a WordPress plugin built with PHP. The key differences: Medusa has no transaction fees, is truly headless (your frontend is completely separate from your backend), and is built for modern development workflows. WooCommerce is easier to set up if you already use WordPress but is monolithic, can be slower at scale, and relies heavily on plugins. Medusa is the better choice if you want a modern, scalable commerce engine. WooCommerce is the better choice if you want something that works with your existing WordPress site.

---

*Last updated: March 2026. Shopify pricing and Medusa features verified against official sources. This guide reflects Medusa v2.*
