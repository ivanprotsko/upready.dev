---
title: "Migrate from HubSpot to Twenty CRM: Cut Your CRM Bill by 98%"
description: "A practical step-by-step guide to migrating from HubSpot to Twenty CRM, the open-source CRM with 30K+ GitHub stars. Covers data export, CSV import, field mapping, pipeline setup, and honest limitations. With real cost comparisons for teams of 5, 10, and 25."
slug: migrate-hubspot-to-twenty-crm
keywords:
  - hubspot alternative open source
  - hubspot to twenty crm migration
  - twenty crm migration guide
  - self-hosted crm
  - hubspot too expensive
  - open source crm
  - hubspot migration
  - crm data migration
  - twenty crm review
  - how to switch from hubspot
date: "2026-03-09"
author: "upready.dev"
tags:
  - hubspot alternative
  - twenty crm
  - crm
  - self-hosted
  - migration guide
  - open source
  - data migration
---

# Migrate from HubSpot to Twenty CRM: Cut Your CRM Bill by 98%

> **TL;DR** -- HubSpot Sales Hub Professional costs $100/seat/month with a mandatory $1,500 onboarding fee. A 10-person sales team pays $12,000+/year just for CRM licenses. Twenty CRM is open-source, self-hosted, and covers the core 80% of CRM functionality (contacts, companies, deals, pipelines, notes, tasks, email sync) for the cost of a $15/month VPS. Migration takes 3-8 hours: export CSV from HubSpot, map fields, import into Twenty, recreate your pipeline. This guide walks through every step, including what Twenty genuinely cannot replace yet.

---

## The HubSpot Pricing Problem

HubSpot starts free. That is the hook. The free CRM is legitimately useful for small teams -- up to 5 users, basic contact management, 1 deal pipeline. But the moment you need automation, reporting, or more than the basics, the pricing escalates sharply.

Here is what HubSpot Sales Hub actually costs in March 2026:

| Plan | Per Seat/Month | 5-Person Team (Annual) | 10-Person Team (Annual) |
|------|---------------|----------------------|------------------------|
| Free | $0 | $0 | $0 (5 user limit) |
| Starter | $20/seat | $1,200/year | $2,400/year |
| Professional | $100/seat | $6,000/year + $1,500 onboarding | $12,000/year + $1,500 onboarding |
| Enterprise | $150/seat | $9,000/year + $3,500 onboarding | $18,000/year + $3,500 onboarding |

The Professional plan is where most growing teams land because that is where you get:
- Automation workflows (300 limit)
- Sequences (email automation)
- Salesforce integration
- Custom reporting
- Deal stage automation

And the hidden costs add up:

- **Extra marketing contacts**: $40-50/month per 1,000 contacts on Starter, $150-250/month per 5,000 on Professional
- **Mandatory onboarding**: $1,500 (Professional) or $3,500 (Enterprise) -- non-negotiable
- **Annual lock-in**: HubSpot contracts are typically annual with no pro-rated refunds
- **Add-ons**: Marketing Hub, Service Hub, CMS Hub -- each priced separately and each with per-seat fees

One Hacker News user captured the frustration: "We have 15 people on our team but 90% might only log in once a month... don't want to either have a shared account or to pay $150/month so we stick to a spreadsheet."

Another described the experience bluntly: HubSpot is "frequently misconfigured, poor UX for campaign tracking."

The economics for a real scenario: a 10-person team on HubSpot Sales Pro pays $1,600/month. Twenty self-hosted: $15/month for a VPS. That is $19,000/year saved.

---

## What Is Twenty CRM?

[Twenty](https://twenty.com) is an open-source CRM built with a modern tech stack (TypeScript, React, NestJS, PostgreSQL). It aims to be the open-source alternative to Salesforce and HubSpot -- not by replicating every feature, but by covering the core CRM workflow most businesses actually use.

Key facts:
- **30K+ GitHub stars**, active development, backed by Y Combinator
- **Self-hosted**: Free, open-source (AGPL v3). Deploy on your own infrastructure.
- **Cloud option**: Pro at $9/user/month, Organization at $19/user/month
- **GraphQL and REST APIs**: Well-documented for custom integrations
- **Custom objects**: Extend the data model beyond standard contacts/companies/deals

### Core Capabilities

- **People and Companies** -- Contact and company management with custom fields
- **Deals/Opportunities** -- Pipeline management with customizable stages
- **Tasks and Notes** -- Activity tracking tied to contacts and deals
- **Email sync** -- Connect Gmail or Outlook to see email history on contact records
- **Calendar sync** -- Google Calendar integration
- **Custom objects** -- Create your own data types beyond the defaults
- **CSV import with field mapping** -- Native import UI for contacts, companies, deals
- **Views** -- Board, table, kanban views with filters and sorting
- **API** -- Full GraphQL and REST API for automation and integration

### What Twenty Does Not Do (Yet)

This is critical to understand before migrating:

- **No built-in email campaigns** -- Twenty syncs emails but does not send marketing emails. Use Listmonk or another tool for newsletters and sequences.
- **No marketing automation** -- No workflows, drip campaigns, lead scoring, or nurture sequences. If HubSpot's automation is core to your sales process, Twenty alone is not a replacement.
- **No built-in reporting/analytics** -- Twenty does not have dashboards showing pipeline performance, sales velocity, or team metrics. You will need external tools (Metabase, Budibase) or custom queries.
- **Limited permission model** -- As of early 2026, role-based access control is basic. "Everyone has the same access to all the data" was a common community complaint. This is actively being developed.
- **No quotes/invoicing** -- No document generation for proposals, quotes, or NDAs from within the CRM.
- **No phone integration** -- No built-in dialer or call logging (HubSpot integrates with calling tools natively).
- **Younger software** -- Twenty launched in 2023. It is improving rapidly, but you will encounter rough edges that do not exist in a 20-year-old product like Salesforce or a 10-year-old product like HubSpot.

One honest community reviewer put it: "just a little too quirky and basic for now. It's going to take a while for Twenty to catch up."

The key question: **does your team use 20% or 80% of HubSpot's features?** If you primarily use HubSpot for contact management, deal tracking, and email logging -- and you are paying Professional prices for it -- Twenty covers that core workflow at a fraction of the cost. If you depend on HubSpot's marketing automation, reporting dashboards, and deep integrations, you need a more comprehensive replacement strategy (possibly Twenty + Listmonk + Metabase).

---

## Cost Comparison: HubSpot vs. Twenty CRM

| | 5 Users | 10 Users | 25 Users |
|---|---|---|---|
| **HubSpot Starter** | $1,200/year | $2,400/year | $6,000/year |
| **HubSpot Professional** | $7,500/year* | $13,500/year* | $31,500/year* |
| **HubSpot Enterprise** | $12,500/year* | $21,500/year* | $48,500/year* |
| **Twenty (self-hosted)** | ~$180/year | ~$180/year | ~$180/year |
| **Twenty Cloud Pro** | $540/year | $1,080/year | $2,700/year |

*Includes mandatory onboarding fee amortized over first year.

Self-hosted Twenty cost breakdown:
- VPS (Hetzner CAX21, 4 vCPU, 8GB RAM): ~$10-15/month
- No per-user fees
- No contact limits
- No feature gates
- **Total: ~$180/year regardless of team size**

The per-user economics are staggering. A 10-person team on HubSpot Professional pays $13,500 in year one. On self-hosted Twenty, they pay $180. That is a 98.7% cost reduction.

Even comparing against Twenty Cloud Pro ($9/user/month), a 10-person team pays $1,080/year -- still 92% cheaper than HubSpot Professional.

---

## Migration Step-by-Step

### Prerequisites

- HubSpot account with export permissions
- A deployed Twenty CRM instance (self-hosted or cloud)
- Basic spreadsheet skills (for CSV cleanup)

### Step 1: Plan Your Field Mapping

Before exporting anything, map your HubSpot properties to Twenty fields. This saves hours of confusion later.

**Standard field mapping:**

| HubSpot Property | Twenty Field | Notes |
|-----------------|-------------|-------|
| Email | Email (Person) | Primary identifier |
| First Name + Last Name | Name (Person) | Combine into single field |
| Company Name | Name (Company) | |
| Phone Number | Phone (Person) | |
| Job Title | Job Title (Person) | |
| City | City (Person) | |
| Deal Name | Name (Opportunity) | |
| Deal Stage | Stage (Opportunity) | Map stages manually |
| Deal Amount | Amount (Opportunity) | |
| Close Date | Close Date (Opportunity) | |
| Deal Owner | Owner (Opportunity) | Map to Twenty users |
| Lifecycle Stage | Custom field | Twenty uses custom fields |
| Lead Source | Custom field | |

**Custom fields**: Any HubSpot custom properties can be mapped to Twenty custom fields. Twenty supports text, number, date, boolean, select, multi-select, relation, and currency field types.

### Step 2: Export from HubSpot

HubSpot allows CSV export for each object type separately.

#### Export Contacts

1. Go to **Contacts > Contacts**
2. Select **All contacts** (or use a filter for active contacts only)
3. Click **Export** (top right)
4. Select **CSV** format
5. Choose properties to include -- select all you want to migrate
6. Click **Export**
7. Download the CSV from the notification or email (link expires in 30 days)

#### Export Companies

1. Go to **Contacts > Companies**
2. Click **Export** > CSV
3. Select relevant properties
4. Download

#### Export Deals

1. Go to **Sales > Deals**
2. Click **Export** > CSV
3. Include: Deal Name, Amount, Stage, Close Date, Associated Contact, Associated Company
4. Download

**Important**: Export companies first, then contacts, then deals. This matters for the import order.

### Step 3: Clean and Prepare CSVs

Open each CSV in a spreadsheet application and clean the data:

1. **Remove unnecessary columns** -- HubSpot exports include internal IDs, analytics data, and tracking fields you do not need in Twenty
2. **Combine name fields** -- If HubSpot exports First Name and Last Name separately, combine them: `=CONCAT(B2, " ", C2)`
3. **Standardize phone numbers** -- Remove formatting inconsistencies
4. **Handle empty values** -- Remove rows with no email address (contacts) or no company name (companies)
5. **Map deal stages** -- Create a mapping document that translates HubSpot deal stages to the stages you will create in Twenty

Save cleaned files as:
- `companies_import.csv`
- `contacts_import.csv`
- `deals_import.csv`

### Step 4: Deploy Twenty CRM

#### Self-Hosted (Docker)

```bash
# Clone Twenty
git clone https://github.com/twentyhq/twenty.git
cd twenty

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
# Key settings:
#   SERVER_URL=https://crm.yourdomain.com
#   FRONT_BASE_URL=https://crm.yourdomain.com
#   POSTGRES_ADMIN_PASSWORD=your-secure-password
#   APP_SECRET=your-random-secret

# Start all services
docker compose up -d
```

**Minimum requirements**: 4GB RAM, 2 vCPU. PostgreSQL runs alongside the app.

Access at `http://your-server-ip:3000` and create your workspace.

#### Cloud Option

Sign up at [twenty.com](https://twenty.com) and create a workspace. The import process is identical.

### Step 5: Configure Twenty Before Importing

Before importing data, set up your CRM structure:

#### Create Pipeline Stages

1. Go to **Settings > Data model > Opportunities**
2. Find the Stage field and customize the options
3. Add stages matching your sales process:
   - e.g., Lead, Qualified, Proposal, Negotiation, Closed Won, Closed Lost
4. Map these to your HubSpot stage mapping document from Step 3

#### Create Custom Fields

1. Go to **Settings > Data model**
2. Select the object (Person, Company, or Opportunity)
3. Click **Add field**
4. Create custom fields for any HubSpot properties you want to preserve (Lead Source, Industry, etc.)

#### Create Users

1. Go to **Settings > Members**
2. Invite team members with their email addresses
3. Note who maps to which HubSpot owner -- you will need this for deal assignment

### Step 6: Import Data

Import in this order: **Companies first, then Contacts (People), then Deals (Opportunities)**. This maintains the relationship hierarchy -- contacts need companies to exist before they can be linked.

#### Import Companies

1. Go to **Companies** view
2. Click the **Import** button (or use Settings > Data model > Companies > Import)
3. Upload `companies_import.csv`
4. Twenty shows an interactive column mapping screen
5. Map each CSV column to the corresponding Twenty field
6. Review the preview and click **Import**

#### Import Contacts (People)

1. Go to **People** view
2. Click **Import**
3. Upload `contacts_import.csv`
4. Map columns -- make sure email maps to Email, name maps to Name
5. If your CSV includes a Company column, map it to the Company relation field
6. Import

#### Import Deals (Opportunities)

1. Go to **Opportunities** view
2. Click **Import**
3. Upload `deals_import.csv`
4. Map columns including Stage, Amount, Close Date
5. Map the associated contact/company columns to relation fields
6. Import

#### For Large Datasets (10K+ Records)

Use Twenty's API for bulk imports:

```bash
# Example: Import contacts via GraphQL API
curl -X POST https://your-twenty-instance.com/api \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "mutation CreatePerson($data: PersonCreateInput!) { createPerson(data: $data) { id } }",
    "variables": {
      "data": {
        "name": { "firstName": "John", "lastName": "Doe" },
        "email": "john@example.com",
        "phone": "+1234567890"
      }
    }
  }'
```

For batch operations, write a script that reads your CSV and calls the API in a loop. The API is well-documented and supports both REST and GraphQL.

### Step 7: Verify the Import

After import:

- [ ] Compare record counts: HubSpot contacts vs. Twenty People, HubSpot companies vs. Twenty Companies, HubSpot deals vs. Twenty Opportunities
- [ ] Open 10-15 random records and verify all fields transferred correctly
- [ ] Check that Company-Contact relationships are intact
- [ ] Verify deal pipeline stages mapped correctly
- [ ] Confirm deal amounts and close dates
- [ ] Test search to find specific contacts
- [ ] Verify custom fields populated correctly

### Step 8: Set Up Email Sync

Twenty can sync with Gmail and Outlook to pull email history into contact records:

1. Go to **Settings > Accounts**
2. Click **Connect** for Google or Microsoft
3. Authorize access
4. Twenty will begin syncing emails associated with your contacts

**Known limitation**: Some users have reported issues with email sync on recent versions. From the community: "On v1.13, connecting Google account reports 'Synced' but no email messages imported." Check the current release notes and GitHub issues before relying on this feature.

### Step 9: Update Integrations

Any tools that connect to HubSpot need to be redirected:

- **Website forms**: Update form submissions to use Twenty's API or a webhook
- **Zapier/Make automations**: Recreate with Twenty API endpoints (or use n8n for self-hosted automation)
- **Calendar booking tools**: If using HubSpot meeting links, switch to Cal.com or similar
- **Email sequences**: Move to a dedicated tool (Listmonk for newsletters, or keep a minimal HubSpot Starter for sequences if needed during transition)

---

## Common Gotchas and Solutions

### 1. Import Order Matters

**Problem**: Contacts imported before companies cannot be linked to companies automatically.
**Solution**: Always import Companies first, then People, then Opportunities. Twenty uses the "one" side of the relationship to link records.

### 2. Deal Stage Mapping

**Problem**: HubSpot deal stages do not match Twenty's default stages.
**Solution**: Configure Twenty's pipeline stages before importing. Use your mapping document to ensure every HubSpot stage has a Twenty equivalent.

### 3. Custom Field Types

**Problem**: HubSpot multi-select properties do not map cleanly to Twenty's field types.
**Solution**: Convert multi-select values to comma-separated text in your CSV, then import as text fields. You can create proper multi-select fields in Twenty and update records later.

### 4. Duplicate Records

**Problem**: HubSpot may have duplicate contacts that become more visible after import.
**Solution**: Deduplicate in the spreadsheet before importing. Sort by email address and remove exact duplicates. Twenty's duplicate detection is still basic compared to HubSpot's.

### 5. Historical Activity Data

**Problem**: HubSpot activity history (calls, meetings, email opens, form submissions) does not export cleanly to CSV.
**Solution**: Accept that historical activity data largely stays in HubSpot. Export a summary for key deals if needed. Going forward, activity tracking in Twenty starts fresh. Keep read-only HubSpot access for 3-6 months if your team needs to reference old activity.

### 6. Team Permissions

**Problem**: HubSpot has granular permissions (deal ownership, contact assignment, field-level access). Twenty's permission model is simpler.
**Solution**: Currently, "everyone has the same access to all the data" in Twenty. If territory-based or role-based access is critical for your team, this may be a dealbreaker today. The Twenty team is actively developing permissions -- check the latest release.

---

## Migration Checklist

### Pre-Migration

- [ ] Audit HubSpot usage: which features does your team actually use daily?
- [ ] Map HubSpot properties to Twenty fields (use the table above as a starting point)
- [ ] Identify integrations that connect to HubSpot and plan replacements
- [ ] Decide: self-hosted or Twenty Cloud?
- [ ] Set up hosting infrastructure (if self-hosted)

### Data Export

- [ ] Export Companies CSV from HubSpot
- [ ] Export Contacts CSV from HubSpot
- [ ] Export Deals CSV from HubSpot
- [ ] Export Notes/Activities summary (optional, for reference)
- [ ] Clean all CSVs: remove unnecessary columns, standardize formats, deduplicate

### Twenty Setup

- [ ] Deploy Twenty (Docker or cloud signup)
- [ ] Create workspace and invite team members
- [ ] Configure pipeline stages to match your sales process
- [ ] Create custom fields for non-standard HubSpot properties
- [ ] Import Companies, then Contacts, then Deals (in order)
- [ ] Verify import accuracy (counts, field mapping, relationships)

### Post-Migration

- [ ] Connect email accounts (Gmail/Outlook sync)
- [ ] Update website forms to submit to Twenty API
- [ ] Recreate essential automations (use n8n or Zapier alternative)
- [ ] Train team on Twenty's interface (1 hour session is usually sufficient)
- [ ] Run both systems in parallel for 2-4 weeks
- [ ] Monitor for missing data or broken workflows
- [ ] Archive HubSpot export data for compliance
- [ ] Downgrade or cancel HubSpot subscription

---

## Who Should (and Should Not) Migrate

### Migrate to Twenty if:

- You primarily use HubSpot for contact management, deal tracking, and pipeline visualization
- Your CRM bill exceeds the value you extract from it
- You have 80% of your data in contacts, companies, and deals (not marketing automation)
- Data ownership and self-hosting matter to your organization
- You want unlimited users without per-seat pricing
- Your team can manage a Docker deployment (or you hire someone to set it up)

### Stay on HubSpot if:

- Marketing automation (email sequences, lead scoring, workflows) drives your revenue
- You depend on HubSpot's reporting dashboards for sales management decisions
- Deep native integrations (Salesforce sync, calling tools, meeting scheduler) are mission-critical
- Your team needs granular permissions (territory-based access, field-level security)
- You have fewer than 5 users and the free tier meets your needs
- Nobody on your team can manage infrastructure, and the cost savings do not justify hiring for it

### Consider a Hybrid Approach:

- Keep HubSpot Free for marketing features (landing pages, forms, basic email)
- Use Twenty for day-to-day CRM (contacts, deals, pipeline management)
- Connect them via API or n8n for data sync
- This eliminates the per-seat cost for Professional/Enterprise while keeping the marketing tools

---

## What It Costs to Have Us Do It

If you want the migration handled professionally:

- **Basic** (under 1,000 contacts, simple pipeline, no custom fields): **$500-$800**
  - Included in our Twenty CRM deployment package

- **Standard** (1K-10K contacts, custom fields, deal pipeline setup): **$1,000-$2,000**
  - Includes: data export, field mapping, CSV conversion, import, pipeline configuration, email sync setup, 1 training session

- **Complex** (10K+ contacts, multiple pipelines, custom objects, automation replacement): **$2,000-$4,000**
  - Includes: everything above + custom scripting for data transformation, n8n automation setup, parallel running support, 2 training sessions

- **Enterprise** (50K+ records, Salesforce source, custom API integration): **$4,000-$8,000**
  - Includes: full migration project with API-based import, custom field mapping tool, data validation, integration setup, 1 month support

We deploy Twenty on your infrastructure, handle the entire data migration, configure your pipeline, and train your team. The typical 10-person team saves $12,000+/year -- the migration pays for itself in the first month.

[Get a free migration assessment at upready.dev/services/crm](/services/crm)

---

## Further Reading

- [Twenty CRM Documentation](https://docs.twenty.com/)
- [Twenty CRM Data Migration Guide](https://docs.twenty.com/user-guide/data-migration/overview)
- [Twenty CRM GitHub](https://github.com/twentyhq/twenty)
- [HubSpot Export Guide](https://knowledge.hubspot.com/import-and-export/export-records)
- [HubSpot Alternatives 2026: 10 Best Options Including Open Source](/blog/hubspot-alternatives) (coming soon)
- [Twenty CRM vs HubSpot: Full Comparison for Small Business](/blog/twenty-vs-hubspot) (coming soon)
