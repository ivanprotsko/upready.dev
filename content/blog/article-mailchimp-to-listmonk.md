---
title: "Migrate from Mailchimp to Listmonk: Save 90% on Email Marketing"
description: "A complete step-by-step guide to migrating from Mailchimp to Listmonk, the self-hosted email marketing platform. Covers subscriber export, CSV conversion, SMTP setup, template migration, and deliverability. With real cost comparisons at 10K, 50K, and 100K contacts."
slug: migrate-mailchimp-to-listmonk
keywords:
  - mailchimp to listmonk migration
  - mailchimp alternative self-hosted
  - listmonk migration guide
  - self-hosted email marketing
  - mailchimp too expensive
  - listmonk setup guide
  - email marketing without monthly fees
  - open source email marketing
date: "2026-03-09"
author: "upready.dev"
tags:
  - mailchimp alternative
  - listmonk
  - email marketing
  - self-hosted
  - migration guide
  - open source
---

# Migrate from Mailchimp to Listmonk: Save 90% on Email Marketing

> **TL;DR** -- Listmonk is a free, open-source email marketing platform that handles millions of subscribers on a single $5-10/month VPS. Migrating from Mailchimp takes 2-4 hours for most lists. You export your subscribers as CSV, convert the format with a one-liner, import into Listmonk, and connect an SMTP provider like Amazon SES ($0.10 per 1,000 emails). A business sending weekly campaigns to 50,000 subscribers goes from $350+/month on Mailchimp to roughly $25/month. This guide covers the entire process: export, conversion, import, SMTP setup, template recreation, deliverability, and the things Listmonk genuinely cannot do yet.

---

## Why People Are Leaving Mailchimp

Mailchimp was the default choice for email marketing for over a decade. Then Intuit acquired it in 2021, and the pricing trajectory changed.

Here is what Mailchimp costs in March 2026:

| Contacts | Mailchimp Plan | Monthly Cost |
|----------|---------------|-------------|
| 250 | Free | $0 (500 sends/month limit) |
| 10,000 | Essentials | ~$49/month |
| 50,000 | Standard | ~$350/month |
| 100,000 | Standard | ~$800-$1,075/month |
| 200,000 | Standard | ~$1,190/month |

The free tier has been gutted -- from 2,000 contacts (pre-2023) to 500 contacts (2023) to 250 contacts (January 2026). And since April 2024, Mailchimp charges for all contacts in your account, including unsubscribed and non-subscribed contacts.

As one user on Hacker News put it:

> "MailChimp = $1,190/month for 200K contacts; SendGrid = $90/month. ListMonk+SendGrid worth it."
> -- buro9, Hacker News

And from r/selfhosted:

> "I was paying Mailchimp $150/mo for 12K subscribers. Now I pay $10/mo for a VPS running Listmonk + Amazon SES at $0.10 per 1,000 emails. Same list, same open rates, $140/mo saved."

The pattern is consistent: once your list grows past a few thousand contacts, Mailchimp's per-subscriber pricing becomes the single largest line item in your marketing budget. As one blogger wrote: "paying more for a newsletter tool than what I pay for rent feels a bit much."

---

## What Is Listmonk?

[Listmonk](https://listmonk.app/) is a self-hosted newsletter and mailing list manager. It ships as a single Go binary with a PostgreSQL database -- no other infrastructure required.

Key numbers:
- **19,200+ GitHub stars**, 238 contributors, 39 releases
- Handles **7+ million emails** in a single campaign run with peak RAM usage of 57 MB
- Used in production by organizations like The Markup (500K subscribers) and Fosshost (120K subscribers)

### What Listmonk Does Well

- **Subscriber management** -- Single and double opt-in lists, with SQL-based segmentation
- **Campaign analytics** -- Open rates, click rates, bounces, top links
- **Templating** -- Go templating language with 100+ functions for dynamic content
- **Multi-threaded sending** -- High-throughput queues with rate limiting
- **Transactional emails** -- API endpoint for sending messages using predefined templates
- **Multi-channel** -- HTTP webhooks for SMS, WhatsApp, FCM notifications
- **Privacy controls** -- OIDC SSO, granular roles and permissions, S3-compatible media storage

### What Listmonk Does Not Do (Yet)

Be honest about this before migrating:

- **No drag-and-drop email builder** -- Campaigns are created with HTML, Markdown, or Go templating. If your team relies on Mailchimp's visual editor, this is a real friction point.
- **No marketing automation** -- No drip sequences, lead scoring, or conditional workflows. The Listmonk creator explicitly stated: "This level of automation is not planned for listmonk. A tool like Mautic may be better suited."
- **No native third-party integrations** -- No Zapier or Make integration out of the box. Community nodes exist for n8n, but the ecosystem is thin.
- **Bounce processing requires configuration** -- Works with SES, SendGrid, and Postmark webhooks, but you need to set it up manually.
- **No global tracking disable** -- You must manually audit templates to remove tracking tags if you want zero tracking.

If you need advanced automation (drip campaigns, lead scoring, landing pages), look at Mautic instead -- think of it as self-hosted HubSpot Marketing Hub. But if you send newsletters, announcements, and product updates to a subscriber list, Listmonk covers 90% of what you actually use Mailchimp for.

---

## Cost Comparison: Mailchimp vs. Listmonk + SES

| | 10K Contacts | 50K Contacts | 100K Contacts |
|---|---|---|---|
| **Mailchimp** (Standard) | $49/mo | $350/mo | $800-$1,075/mo |
| **Listmonk + SES** | ~$6/mo | ~$25/mo | ~$50/mo |
| **Annual savings** | $516 | $3,900 | $9,000-$12,300 |

**Listmonk cost breakdown** (50K contacts, 1 weekly send = 200K emails/month):
- VPS hosting (Hetzner 2 vCPU, 4GB RAM): $5/month
- Amazon SES (200K emails x $0.10/1K): $20/month
- **Total: ~$25/month**

The 90% savings number is real. As one r/selfhosted user confirmed: "I've seen businesses go from $200-300/mo on Mailchimp to under $20/mo with Listmonk + SES."

---

## Migration Overview

Here is the full migration process at a glance:

1. **Export subscribers from Mailchimp** (10 minutes)
2. **Convert CSV format for Listmonk** (5 minutes)
3. **Deploy Listmonk** (30 minutes if using Docker)
4. **Configure SMTP provider** (20 minutes)
5. **Import subscribers** (5-15 minutes depending on list size)
6. **Recreate email templates** (1-3 hours depending on complexity)
7. **Set up DNS records** (15 minutes)
8. **Test and send first campaign** (30 minutes)

**Total estimated time: 2-4 hours** for subscribers only, 4-8 hours for a full migration including templates.

---

## Step 1: Export Your Subscribers from Mailchimp

Mailchimp exports your entire audience as a ZIP file containing separate CSV files for each subscriber status.

1. Log into Mailchimp and navigate to **Audience > All contacts**
2. Click **Export Audience** (top right)
3. Mailchimp will email you a download link (can take up to a few minutes for large lists)
4. Download and extract the ZIP file

You will get separate CSVs for:
- **Subscribed members** -- These are the ones you want to import
- **Unsubscribed members** -- Keep for compliance records, do not import
- **Cleaned members** -- Bounced addresses, do not import
- **Non-subscribed members** -- Transactional contacts, import only if needed

**Important**: Mailchimp export links expire after 30 days. Download immediately.

A heads-up from the community: "the hardest part is exporting your subscriber list (Mailchimp makes this deliberately annoying)." Be patient with the export process.

---

## Step 2: Convert the CSV Format

Mailchimp's CSV format does not match Listmonk's expected format. Listmonk expects:

```
email,name,attributes
```

Where `attributes` is a JSON string containing any custom fields.

Mailchimp exports look like:

```
Email Address,First Name,Last Name,Tags,...
john@example.com,John,Doe,"tag1, tag2",...
```

### Option A: Python Script (Recommended for Large Lists)

Save this as `convert.py`:

```python
import csv
import json
import sys

input_file = sys.argv[1] if len(sys.argv) > 1 else "subscribed_members.csv"
output_file = sys.argv[2] if len(sys.argv) > 2 else "listmonk_import.csv"

with open(input_file, "r", encoding="utf-8-sig") as infile, \
     open(output_file, "w", newline="", encoding="utf-8") as outfile:

    reader = csv.DictReader(infile)
    writer = csv.writer(outfile)
    writer.writerow(["email", "name", "attributes"])

    for row in reader:
        email = row.get("Email Address", "").strip()
        first = row.get("First Name", "").strip()
        last = row.get("Last Name", "").strip()
        name = f"{first} {last}".strip()

        # Collect custom fields as attributes
        attrs = {}
        tags = row.get("TAGS", row.get("Tags", "")).strip()
        if tags:
            attrs["tags"] = [t.strip() for t in tags.split(",")]

        # Add any other custom merge fields you want to preserve
        for key in row:
            if key not in ("Email Address", "First Name", "Last Name",
                           "TAGS", "Tags", "UNSUB_CAMPAIGN_ID",
                           "UNSUB_CAMPAIGN_TITLE", "UNSUB_REASON"):
                val = row[key].strip()
                if val:
                    attrs[key.lower().replace(" ", "_")] = val

        writer.writerow([email, name, json.dumps(attrs) if attrs else "{}"])

print(f"Converted {output_file} -- ready for Listmonk import")
```

Run it:

```bash
python3 convert.py subscribed_members_export.csv listmonk_import.csv
```

### Option B: One-Liner for Simple Lists

If you only need email and name (no custom fields):

```bash
awk -F',' 'NR==1{print "email,name,attributes"} NR>1{gsub(/"/, "", $1); gsub(/"/, "", $2); gsub(/"/, "", $3); print $1","$2" "$3",{}"}' subscribed_members.csv > listmonk_import.csv
```

---

## Step 3: Deploy Listmonk

The fastest path is Docker Compose. Create a `docker-compose.yml`:

```yaml
version: "3.7"

services:
  listmonk:
    image: listmonk/listmonk:latest
    container_name: listmonk
    ports:
      - "9000:9000"
    environment:
      - TZ=UTC
    volumes:
      - ./config.toml:/listmonk/config.toml
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    container_name: listmonk-db
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=listmonk
      - POSTGRES_USER=listmonk
      - POSTGRES_DB=listmonk
    volumes:
      - listmonk-data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  listmonk-data:
```

Create `config.toml`:

```toml
[app]
address = "0.0.0.0:9000"
admin_username = "admin"
admin_password = "changeme"

[db]
host = "db"
port = 5432
user = "listmonk"
password = "listmonk"
database = "listmonk"
ssl_mode = "disable"
max_open = 25
max_idle = 25
max_lifetime = "300s"
```

Deploy:

```bash
# Start the database
docker compose up -d db

# Wait for PostgreSQL to be ready
sleep 5

# Run the initial database setup
docker compose run --rm listmonk ./listmonk --install

# Start Listmonk
docker compose up -d
```

Access the dashboard at `http://your-server-ip:9000`. Log in with admin / changeme and **change the password immediately** in Settings.

The most common reaction from new users: "wait, that's it? -- it just works."

---

## Step 4: Configure Your SMTP Provider

Listmonk does not send emails itself -- it needs an SMTP relay. The three most common choices:

### Amazon SES (Cheapest at Scale)

**Cost**: $0.10 per 1,000 emails. First 62,000/month free on AWS Free Tier.

1. Sign up for AWS and navigate to **SES > Identities**
2. Verify your sending domain (add DNS records: DKIM, SPF, DMARC)
3. **Request production access** -- SES starts in sandbox mode (verified emails only). Submit a request explaining your use case. Takes 24-48 hours.
4. Generate SMTP credentials in **SES > SMTP Settings**

In Listmonk, go to **Settings > SMTP** and add:

| Field | Value |
|-------|-------|
| Host | email-smtp.us-east-1.amazonaws.com |
| Port | 587 |
| Auth | Login |
| Username | (from SES SMTP credentials) |
| Password | (from SES SMTP credentials) |
| TLS | STARTTLS |
| Max connections | 10 |

**Gotcha**: "One thing to plan for: SES sandbox mode limits you to verified emails only. You need to request production access which can take 24-48 hours. Don't discover this the day you want to send your first campaign."

### Postmark (Best Deliverability)

**Cost**: $1.25 per 1,000 emails. Higher cost, but known for excellent inbox placement.

### SendGrid (Middle Ground)

**Cost**: ~$15/month for 50K emails. Free tier of 100 emails/day.

---

## Step 5: Import Subscribers

1. In Listmonk, go to **Subscribers > Import**
2. Select **CSV** format
3. Upload your converted `listmonk_import.csv`
4. Choose the target list (create one first if needed under **Lists**)
5. Set the import mode:
   - **Subscribe** -- Add new subscribers
   - **Blocklist** -- If importing unsubscribed contacts for compliance

**Critical note**: Imported subscribers are not auto-confirmed in Listmonk. If you are importing a list that has already opted in via Mailchimp, you need to update their status. Run this SQL against your Listmonk PostgreSQL database:

```sql
UPDATE subscribers
SET status = 'enabled'
WHERE status = 'unconfirmed'
  AND created_at > NOW() - INTERVAL '1 hour';
```

Adjust the time window to match your import. This confirms subscribers without requiring them to double opt-in again (they already opted in through Mailchimp).

For large lists (50K+ contacts), use the API import instead of the UI:

```bash
curl -u 'admin:your-password' \
  -X POST 'http://localhost:9000/api/import/subscribers' \
  -F 'file=@listmonk_import.csv' \
  -F 'mode=subscribe' \
  -F 'lists=[1]'
```

---

## Step 6: Recreate Email Templates

This is the most time-consuming part. Mailchimp templates cannot be imported directly into Listmonk. You have two options:

### Option A: Export HTML from Mailchimp and Adapt

1. In Mailchimp, open a recent campaign
2. Click **Replicate** to create a copy
3. In the editor, click the code icon to view the HTML source
4. Copy the HTML
5. In Listmonk, go to **Templates > New** and paste the HTML
6. Replace Mailchimp merge tags with Listmonk template syntax:

| Mailchimp | Listmonk |
|-----------|----------|
| `*|FNAME|*` | `{{ .Subscriber.Name }}` |
| `*|EMAIL|*` | `{{ .Subscriber.Email }}` |
| `*|UNSUB|*` | `{{ .UnsubscribeURL }}` |
| `*|LIST:NAME|*` | `{{ .Campaign.Name }}` |
| `*|CURRENT_YEAR|*` | `{{ now.Year }}` |

### Option B: Start Fresh with a Clean Template

Honestly, this is often faster. Mailchimp templates are bloated with tracking pixels, conditional blocks, and proprietary markup. A clean responsive HTML email template is 50-100 lines. Here is a minimal starter:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; }
    a { color: #2563eb; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 13px; color: #666; }
  </style>
</head>
<body>
  {{ template "content" . }}
  <div class="footer">
    <p>You're receiving this because you subscribed to {{ .Campaign.Name }}.</p>
    <p><a href="{{ .UnsubscribeURL }}">Unsubscribe</a> | <a href="{{ .ManageURL }}">Manage preferences</a></p>
  </div>
</body>
</html>
```

---

## Step 7: DNS Records for Deliverability

Deliverability is the number one concern people raise about self-hosted email. The good news: if you use an established SMTP provider (SES, Postmark, SendGrid), you inherit their sending reputation. You are not sending from your own IP.

You still need to set up these DNS records for your sending domain:

### SPF Record

```
v=spf1 include:amazonses.com ~all
```

(Replace `amazonses.com` with your SMTP provider's SPF include.)

### DKIM Record

Your SMTP provider will give you a CNAME or TXT record to add. This cryptographically signs your emails.

### DMARC Record

```
v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com
```

Start with `p=quarantine` rather than `p=reject` while you verify everything works.

### Verification

Send a test email to [mail-tester.com](https://www.mail-tester.com/) and aim for a score of 9/10 or higher. Common deductions are missing DMARC records or broken unsubscribe headers.

---

## Step 8: Test and Send Your First Campaign

1. Create a small test list with your own email addresses (Gmail, Outlook, Yahoo -- test all major providers)
2. Create a campaign in **Campaigns > New**
3. Select your template, write your content
4. Send to the test list first
5. Check inbox placement, formatting, links, unsubscribe functionality
6. Once verified, send to your full list

### Rate Limiting

For your first sends to a large list, use Listmonk's built-in rate limiting to warm up gradually:

In **Settings > SMTP**, set:
- **Max connections**: Start with 5, increase gradually
- **Rate limit**: Start with 50 emails/second for SES

SES has a default sending rate of 14 emails/second for new production accounts. Request an increase as needed.

---

## Common Gotchas and Solutions

### 1. SES Sandbox Mode

**Problem**: You can only send to verified email addresses.
**Solution**: Request production access through the SES console. Write a clear description of your use case (newsletter to opted-in subscribers). Usually approved within 24-48 hours.

### 2. Subscriber Status After Import

**Problem**: All imported subscribers show as "unconfirmed."
**Solution**: Run the SQL update described in Step 5, or use the Listmonk API to bulk-update status.

### 3. Bounce Handling

**Problem**: Bounced emails hurt your sender reputation.
**Solution**: Configure bounce webhooks. For SES, set up an SNS topic for bounces and complaints, then configure the webhook URL in Listmonk settings. Listmonk automatically blocklists hard bounces.

**Important**: "Bounce processing -- an average list decays at 2% per month" and it "becomes essential at scale."

### 4. Unsubscribe Compliance

**Problem**: CAN-SPAM and GDPR require working unsubscribe links.
**Solution**: Listmonk includes `{{ .UnsubscribeURL }}` in templates. Always test that it works. Also add a List-Unsubscribe header (Listmonk does this automatically).

### 5. No Visual Email Editor

**Problem**: Marketing team members comfortable with Mailchimp's drag-and-drop builder cannot use Listmonk's HTML/Markdown editor.
**Solution**: Use an external email builder like [MJML](https://mjml.io/) or [Maizzle](https://maizzle.com/) to create responsive templates, then paste the compiled HTML into Listmonk. Or use Markdown mode for simple text newsletters.

### 6. Missing Automations

**Problem**: Mailchimp automation sequences (welcome series, abandoned cart emails) do not transfer.
**Solution**: For simple sequences, use external tools (n8n workflows + Listmonk API). For complex marketing automation, consider Mautic alongside Listmonk. Be realistic: if automation is 50%+ of your email strategy, Listmonk alone is not the right fit.

---

## Advanced: SQL Segmentation

One of Listmonk's most powerful features is SQL-based subscriber segmentation. Where Mailchimp charges $299+/month for advanced segmentation, Listmonk lets you write direct queries:

```sql
-- Subscribers on the 'pro' plan who signed up in the last 30 days
SELECT * FROM subscribers
WHERE attrs->>'plan' = 'pro'
AND created_at > NOW() - INTERVAL '30 days';
```

```sql
-- Subscribers who opened at least one campaign in the last 90 days
SELECT DISTINCT s.* FROM subscribers s
JOIN campaign_views cv ON cv.subscriber_id = s.id
WHERE cv.created_at > NOW() - INTERVAL '90 days';
```

As one user noted: "The SQL segmentation in Listmonk is honestly one of its best features. Being able to write queries gives you power that Mailchimp charges $299/mo for."

This requires SQL knowledge, which may be a barrier for non-technical team members. But for teams with even basic database skills, it is far more flexible than Mailchimp's segment builder.

---

## Migration Checklist

- [ ] Export all Mailchimp audiences (subscribed, unsubscribed, cleaned)
- [ ] Convert subscribed members CSV to Listmonk format
- [ ] Deploy Listmonk (Docker Compose or bare metal)
- [ ] Configure SMTP provider (SES, Postmark, or SendGrid)
- [ ] Set up DNS records (SPF, DKIM, DMARC)
- [ ] Request SES production access (if using SES)
- [ ] Create lists in Listmonk matching your Mailchimp audiences
- [ ] Import subscribers and confirm status
- [ ] Recreate email templates (or build new ones)
- [ ] Configure bounce webhook
- [ ] Send test campaigns to all major email providers
- [ ] Verify unsubscribe flow works end-to-end
- [ ] Archive Mailchimp campaign history (export for records)
- [ ] Update signup forms and website integrations to point to Listmonk API
- [ ] Monitor deliverability for the first 2-4 weeks
- [ ] Cancel Mailchimp subscription

---

## Who Should (and Should Not) Migrate

### Migrate if:

- Your Mailchimp bill is growing faster than your subscriber value
- You primarily send newsletters, announcements, or product updates
- You have someone on your team comfortable with basic server management
- You want to own your subscriber data without vendor lock-in
- You need SQL-level segmentation without paying $299+/month

### Stay on Mailchimp if:

- You rely heavily on drag-and-drop email design with no developer support
- Marketing automation (drip campaigns, lead scoring, A/B workflows) is core to your strategy
- You need deep native integrations with e-commerce platforms, CRMs, etc.
- You have fewer than 1,000 contacts and Mailchimp's free/starter tier is sufficient
- Nobody on your team can manage a Linux server or Docker container

---

## What It Costs to Have Us Do It

If you want the migration handled professionally:

- **Subscriber migration only** (export, convert, import, verify): Included in Listmonk deployment ($0 additional)
- **Full migration** (subscribers + templates + SMTP setup + DNS + deliverability verification): $800-$1,500
- **Complex migration** (50K+ contacts, multiple lists, template recreation, automation replacement with n8n): $1,500-$3,000

We deploy Listmonk on your own infrastructure (or a VPS we set up for you), configure SMTP, handle DNS records, import your subscribers, and verify deliverability. You keep full ownership of your data and infrastructure.

[Get a free migration assessment at upready.dev/services/email-marketing](/services/email-marketing)

---

## Further Reading

- [Listmonk Official Documentation](https://listmonk.app/docs/)
- [Listmonk API Reference](https://listmonk.app/docs/apis/)
- [Amazon SES Getting Started Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email.html)
- [Mailchimp Export Guide](https://mailchimp.com/help/export-back-up-data/)
- [Mailchimp Alternatives 2026: 8 Tools That Won't Charge Per Subscriber](/blog/mailchimp-alternatives) (coming soon)
- [Listmonk vs Mailchimp: Real Cost Comparison at 10K, 50K, and 100K Contacts](/blog/listmonk-vs-mailchimp) (coming soon)
