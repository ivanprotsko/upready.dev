---
title: "Migrate from Jira + Confluence to Plane + BookStack: The Complete Atlassian Escape Guide"
description: "Step-by-step guide to migrating from Jira and Confluence to Plane and BookStack -- open-source, self-hosted alternatives. Covers built-in importers, data export, cost comparison, and what to expect. For teams forced off Atlassian Server or tired of cloud pricing."
slug: migrate-jira-confluence-to-plane-bookstack
keywords:
  - jira alternative self-hosted
  - confluence alternative open source
  - jira to plane migration
  - confluence to bookstack migration
  - atlassian server end of life
  - self-hosted project management
  - open source jira alternative
  - plane vs jira
  - bookstack vs confluence
  - atlassian migration guide
date: "2026-03-09"
author: "upready.dev"
tags:
  - jira alternative
  - confluence alternative
  - plane
  - bookstack
  - atlassian
  - self-hosted
  - migration guide
  - open source
  - project management
  - knowledge base
---

# Migrate from Jira + Confluence to Plane + BookStack: The Complete Atlassian Escape Guide

> **TL;DR** -- Atlassian killed Jira Server in February 2024 and Data Center hits end-of-life in 2029. If your team is stuck between expensive Cloud pricing and a $42K+/year Data Center minimum, there is a third option: Plane (project management, 45K+ GitHub stars, built-in Jira importer) and BookStack (knowledge base, MIT licensed, free forever). Migration takes 1-4 hours for Jira (automated importer) and 2-8 hours for Confluence (community tool + manual cleanup). A 50-person team saves $10,000-$25,000/year. This guide covers both migrations end-to-end.

---

## The Atlassian Squeeze

If you are reading this, you are probably in one of three situations:

1. **Your Jira Server instance died on February 15, 2024**, and you were forced to Cloud. The bills arrived. They were not pleasant.
2. **You are on Jira Data Center**, watching the 2029 end-of-life date approach while Atlassian raises prices 15% annually (the latest increase hit February 17, 2026).
3. **You are on Jira Cloud** and the per-user pricing is eating your engineering budget for breakfast.

Here is what Atlassian costs for a 50-person team in March 2026:

| Product | Plan | Monthly Cost (50 users) |
|---------|------|------------------------|
| Jira Cloud Standard | $7.91/user/mo | $396/month |
| Jira Cloud Premium | $14.54/user/mo | $727/month |
| Confluence Cloud Standard | $5.42/user/mo | $271/month |
| Confluence Cloud Premium | $10.44/user/mo | $522/month |
| **Jira + Confluence Standard** | | **$667/month ($8,004/year)** |
| **Jira + Confluence Premium** | | **$1,249/month ($14,988/year)** |

And that is before marketplace plugins, Atlassian Guard (SSO), Jira Service Management, or storage overages. As users consistently report: "most teams actually pay $20-$30/user/month after adding Marketplace apps, Confluence, and Atlassian Guard."

For Data Center, the floor is even higher:
- **Jira Data Center 500 users**: ~$42,000/year
- **Confluence Data Center 500 users**: ~$27,000/year
- **Combined**: $69,000/year minimum

A frustrated former customer summed it up: "Cloud felt fine in year one, and then we hit with price increases we could not really push back on."

---

## The Replacement Stack: Plane + BookStack

Instead of one vendor controlling both tools (and the pricing), this guide uses two purpose-built open-source tools:

### Plane -- Project Management

[Plane](https://plane.so) is an open-source project management platform with 45K+ GitHub stars, built-in importers for Jira, Asana, Linear, ClickUp, and Monday, and a UI that does not require a PhD to navigate.

**Pricing**:
- Self-hosted Community Edition: **$0** (AGPL v3, feature parity with Free cloud tier)
- Cloud Free: $0/seat, up to 12 users
- Cloud Pro: $6/seat/month (adds work item types, wiki, time tracking, SAML/OIDC)
- Cloud Business: $13/seat/month (adds project templates, workflows, approvals)

### BookStack -- Knowledge Base

[BookStack](https://www.bookstackapp.com/) is a free, MIT-licensed wiki platform structured around Shelves, Books, Chapters, and Pages.

**Pricing**:
- Self-hosted: **$0 forever**. No tiers, no premium features, no per-user fees. MIT license.
- A $6/month VPS handles teams up to 50 people.

### Combined Cost

| Team Size | Atlassian Cloud Standard | Plane + BookStack (self-hosted) | Annual Savings |
|-----------|------------------------|-------------------------------|---------------|
| 10 users | $1,600/year | ~$120/year (VPS) | **$1,480** |
| 25 users | $4,000/year | ~$120/year | **$3,880** |
| 50 users | $8,004/year | ~$180/year (larger VPS) | **$7,824** |
| 200 users | $32,016/year | ~$360/year | **$31,656** |

There is no per-user fee. You pay for server resources, not seats.

---

## Part 1: Migrating from Jira to Plane

### What Transfers

Plane's built-in Jira importer handles:

- **Projects** -- Mapped to Plane workspaces/projects
- **Issues** -- All fields: title, description, status, priority, assignees, labels
- **Users** -- Mapped to Plane members
- **Issue types** -- Mapped to Plane work item types (Pro plan or self-hosted Pro)
- **Statuses** -- Mapped to Plane states
- **Priorities** -- Mapped directly (Plane uses a similar priority system)
- **Sprints/Iterations** -- Mapped to Plane Cycles

### What Does Not Transfer

Be aware of these gaps before starting:

- **Custom JQL queries and saved filters** -- Rebuild in Plane's filter system (simpler but less powerful)
- **Marketplace plugin data** -- Any data from Tempo, Structure, BigPicture, etc. stays in Jira
- **Automation rules** -- Jira automation workflows must be recreated manually
- **Attachments** -- May need manual re-upload depending on configuration
- **Comments history** -- Check your specific Jira instance; some comment threads may not transfer completely
- **Custom workflows with complex transitions** -- Plane's workflow engine is simpler. If your process has 12 status transitions with approval gates, you may need to simplify.

### Step-by-Step Jira Import

#### Prerequisites

- Jira Cloud instance (the importer connects via API)
- A deployed Plane instance (self-hosted or cloud)
- Jira admin credentials or an API token

#### 1. Deploy Plane (if self-hosted)

```bash
# Clone the Plane repository
git clone https://github.com/makeplane/plane.git
cd plane

# Copy environment file
cp .env.example .env

# Start all services
docker compose up -d
```

Plane requires: PostgreSQL, Redis, MinIO (S3), and the Plane services. The Docker Compose file handles all of this. **Minimum resources**: 4GB RAM, 2 vCPU.

Access your instance at `http://your-server-ip:80` and create your workspace.

#### 2. Run the Jira Importer

1. Navigate to **Workspace Settings > Imports**
2. Select **Jira**
3. Authenticate with your Jira instance:
   - Enter your Jira Cloud URL (e.g., `https://yourteam.atlassian.net`)
   - Provide your email and API token (generate at [id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens))
4. Select the Jira project to import
5. Map users -- Plane will show Jira users and let you match them to Plane members
6. Map statuses and priorities (Plane suggests defaults, but review them)
7. Click **Import**

**Estimated time**: 15 minutes for a project with <1,000 issues. Up to 1 hour for 5,000+ issues.

#### 3. Verify the Import

After import completes:

- [ ] Check issue count matches source
- [ ] Open 5-10 random issues and verify fields transferred correctly
- [ ] Confirm sprint/cycle mapping
- [ ] Check that assignees are correctly mapped
- [ ] Verify priority levels
- [ ] Test search to confirm issues are indexed

#### 4. Repeat for Additional Projects

If you have multiple Jira projects, repeat steps 2-3 for each one. Plane supports importing projects one at a time.

### Known Issues

From the community and GitHub:

- **Free plan limitation**: The free/community edition does not import custom issue types. You need the Pro plan ($6/user/month) or self-hosted Pro for that.
- **Self-hosted import reliability**: GitHub issue #3181 reports occasional issues with the self-hosted Jira importer. If you hit problems, try the cloud version for import, then export to self-hosted.
- **Large projects**: Projects with 10,000+ issues may time out. Break them into smaller imports if possible.

---

## Part 2: Migrating from Confluence to BookStack

Confluence migration is more manual than Jira, but still manageable with the right tools.

### Structural Mapping

Confluence and BookStack organize content differently:

| Confluence | BookStack |
|-----------|-----------|
| Space | Shelf or Book |
| Page (top-level) | Book or Chapter |
| Child page | Chapter or Page |
| Nested child pages | Pages within Chapters |

BookStack uses a strict hierarchy: **Shelf > Book > Chapter > Page**. Confluence allows arbitrary nesting. You will need to flatten deep Confluence hierarchies during migration.

**Rule of thumb**: Each Confluence Space becomes a BookStack Book. Top-level pages become Chapters. Child pages become Pages.

### Step-by-Step Confluence Export

#### 1. Export from Confluence

For Confluence Cloud:

1. Navigate to the Space you want to export
2. Click **Space Settings > Content Tools > Export**
3. Select **HTML** format (not PDF, not XML -- HTML works best for migration)
4. Choose **Normal Export** (includes all pages)
5. Wait for the export to generate and download the ZIP file

For Confluence Server/Data Center:

1. Go to **Space Settings > Export Space**
2. Select **HTML**
3. Download the ZIP

Repeat for each Space you want to migrate.

#### 2. Deploy BookStack

```bash
# Using Docker Compose
mkdir bookstack && cd bookstack

cat > docker-compose.yml << 'EOF'
version: "3"
services:
  bookstack:
    image: lscr.io/linuxserver/bookstack:latest
    container_name: bookstack
    environment:
      - PUID=1000
      - PGID=1000
      - APP_URL=http://your-server-ip:6875
      - DB_HOST=bookstack-db
      - DB_PORT=3306
      - DB_USER=bookstack
      - DB_PASS=bookstack
      - DB_DATABASE=bookstack
    volumes:
      - ./bookstack_data:/config
    ports:
      - "6875:80"
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: mariadb:10
    container_name: bookstack-db
    environment:
      - MYSQL_ROOT_PASSWORD=bookstack
      - MYSQL_DATABASE=bookstack
      - MYSQL_USER=bookstack
      - MYSQL_PASSWORD=bookstack
    volumes:
      - ./bookstack_db:/var/lib/mysql
    restart: unless-stopped
EOF

docker compose up -d
```

Access BookStack at `http://your-server-ip:6875`. Default credentials: `admin@admin.com` / `password`. Change these immediately.

#### 3. Import Using the Community Migration Tool

The community maintains a Confluence-to-BookStack importer:

```bash
# Clone the importer
git clone https://github.com/gloverab/confluence-server-to-bookstack-importer.git
cd confluence-server-to-bookstack-importer

# Install dependencies
npm install

# Configure
cp .env.example .env
```

Edit `.env` with your BookStack API credentials:

```
BOOKSTACK_URL=http://your-server-ip:6875
BOOKSTACK_TOKEN_ID=your-api-token-id
BOOKSTACK_TOKEN_SECRET=your-api-token-secret
CONFLUENCE_EXPORT_PATH=./path-to-extracted-confluence-html
```

Generate a BookStack API token: **Settings > API Tokens > Create Token**.

Run the import:

```bash
node import.js
```

The tool:
- Reads the Confluence HTML export
- Creates Books and Chapters matching the Confluence hierarchy
- Uploads images and updates internal image references
- Converts internal page links to BookStack URLs

**Estimated time**: 1-3 hours for a space with 50-200 pages. A community member reported that migrating a 500-page Confluence space took "about 2 hours including cleanup."

#### 4. Manual Cleanup

After the automated import, expect to spend 1-3 hours on:

- **Fixing complex tables** -- Confluence macros (especially advanced tables, code blocks, and dynamic content) may not convert cleanly to BookStack's WYSIWYG format
- **Re-uploading broken images** -- Some image references may break during HTML conversion. Check pages with screenshots or diagrams.
- **Adjusting hierarchy** -- If your Confluence space had 5+ levels of nesting, you may need to reorganize some content into BookStack's Shelf > Book > Chapter > Page structure
- **Fixing internal links** -- Cross-space links will need manual updating
- **Setting permissions** -- BookStack has granular role-based permissions (Viewer, Editor, Admin). Map your Confluence groups to BookStack roles.

#### 5. Configure Authentication

BookStack supports enterprise authentication out of the box:

- **LDAP/Active Directory** -- Native support, configured in `.env`
- **SAML2** -- For SSO with Okta, Azure AD, OneLogin
- **OIDC** -- For Google Workspace, Auth0
- **Social logins** -- Google, GitHub, Twitter, etc.

This is important because it means your team's existing credentials work without creating new accounts.

---

## What Each Tool Cannot Do (Honest Assessment)

### Plane Limitations vs. Jira

- **No marketplace plugins** -- If your team depends on Tempo (time tracking), Structure (hierarchy), BigPicture (portfolio), or hundreds of other Jira plugins, there is no equivalent ecosystem. Plane has built-in time tracking and dashboards, but the long tail of integrations is not there.
- **Simpler workflow engine** -- Jira supports complex status transitions with validators, conditions, and post-functions. Plane's workflows are straightforward -- if your process has 12 status transitions with approval gates, you may need to simplify.
- **No JQL equivalent** -- Plane has filter views, but nothing as powerful as Jira Query Language for ad-hoc reporting.
- **Newer and less battle-tested** -- Plane launched in 2022. Jira has 24 years of enterprise hardening. You will encounter rough edges.
- **Community Edition limitations** -- OAuth/SSO, advanced importers (issue types), and some features are behind the Pro tier ($6/seat/month) or Business tier ($13/seat/month). Some users view this as a "bait and switch" with the open-source label.

### BookStack Limitations vs. Confluence

- **No real-time collaborative editing** -- This is the most requested missing feature (GitHub issue #395, opened 2017, still unresolved). If two people edit the same page, the last save wins. For teams where multiple people frequently edit the same document simultaneously, this is a blocker.
- **Fixed hierarchy** -- Shelf > Book > Chapter > Page. No arbitrary nesting. Some teams find this limiting; others find the structure helpful.
- **No inline comments** -- You cannot highlight text and leave a comment on a specific paragraph like in Confluence or Google Docs.
- **No Jira integration** -- Confluence's deep Jira ticket embedding does not exist in BookStack. You can link to Plane issues manually, but there is no dynamic embedding.
- **No macros marketplace** -- Confluence's macro ecosystem (charts, diagrams, calendars, databases) has no equivalent. BookStack has built-in diagrams.net integration, but that is about it.

For 90% of documentation use cases -- SOPs, runbooks, knowledge bases, onboarding docs, internal wikis -- BookStack covers it. The 10% it misses (real-time collaboration, deep PM tool integration) usually is not worth $600+/year per user in Confluence licensing. But if your team depends on that 10%, know the tradeoffs before migrating.

---

## Team Training: What Changes

### For Engineers (Jira to Plane)

The transition is smooth. Plane deliberately mirrors familiar concepts:

| Jira Concept | Plane Equivalent |
|-------------|-----------------|
| Issue | Work Item |
| Epic | Module |
| Sprint | Cycle |
| Board | Board View |
| Backlog | Backlog (same) |
| JQL filter | Filter View |
| Dashboard | Dashboard |

Key differences your team will notice:
- **Faster UI** -- "Pages load instantly vs. Jira's loading spinners." Plane is built with modern frontend tech and feels responsive.
- **Keyboard shortcuts** -- Plane has a command palette (Cmd+K / Ctrl+K, called "Hyper Mode") for rapid navigation. Engineers who use Linear will feel at home.
- **Simpler admin** -- No screen schemes, issue type screen schemes, workflow schemes, notification schemes. Configuration is straightforward.

One user described the experience: "Familiar concepts: Issues, sprints, modules, labels, priorities. Your team won't need retraining."

### For Non-Technical Staff (Confluence to BookStack)

BookStack has a gentle learning curve:
- **WYSIWYG editor** -- Similar to Confluence's editor, but faster and simpler
- **Clear navigation** -- Shelves > Books > Chapters > Pages is intuitive for most people
- **Search works** -- Full-text search across all content, and unlike Confluence, "pages load instantly"
- **No admin certification needed** -- BookStack's admin panel is straightforward compared to Confluence's sprawling settings

The biggest adjustment: if your team is used to @mentioning colleagues in Confluence pages and leaving inline comments, those features do not exist in BookStack. Consider using a chat tool (Slack, Teams) for discussion and BookStack for documentation.

---

## Migration Timeline

### Small Team (10-25 users, 1-3 Jira projects, 1-2 Confluence spaces)

| Phase | Task | Time |
|-------|------|------|
| Day 1 AM | Deploy Plane + BookStack | 2 hours |
| Day 1 PM | Import Jira projects | 1 hour |
| Day 1 PM | Import Confluence spaces | 3 hours |
| Day 2 AM | Manual cleanup + verification | 3 hours |
| Day 2 PM | Configure auth (LDAP/SSO) + permissions | 2 hours |
| Day 3 | Team training + parallel running | 1 day |
| Week 2 | Full cutover | -- |
| **Total** | | **~2-3 days** |

### Mid-Size Team (50-100 users, 5-10 Jira projects, 5+ Confluence spaces)

| Phase | Task | Time |
|-------|------|------|
| Week 1 | Deploy and configure infrastructure | 1 day |
| Week 1-2 | Import Jira projects (sequential) | 2-3 days |
| Week 1-2 | Import Confluence spaces (parallel) | 3-5 days |
| Week 2-3 | Cleanup, permission mapping, SSO | 2-3 days |
| Week 3 | Training sessions + documentation | 2 days |
| Week 3-4 | Parallel running (both systems active) | 1-2 weeks |
| Week 5 | Full cutover, Atlassian shutdown | -- |
| **Total** | | **~3-5 weeks** |

---

## Migration Checklist

### Pre-Migration

- [ ] Inventory all Jira projects (list projects, issue counts, custom fields)
- [ ] Inventory all Confluence spaces (list spaces, page counts)
- [ ] Identify marketplace plugins in use and find alternatives or workarounds
- [ ] Decide on hosting: self-hosted VPS vs. Plane Cloud + self-hosted BookStack
- [ ] Set up VPS with minimum 4GB RAM, 2 vCPU, 40GB storage

### Jira Migration

- [ ] Deploy Plane (Docker Compose or cloud signup)
- [ ] Generate Jira API token
- [ ] Import projects one at a time via Plane's built-in importer
- [ ] Verify issue counts, field mapping, user assignment for each project
- [ ] Recreate automation rules manually in Plane
- [ ] Recreate saved filters as Plane Views

### Confluence Migration

- [ ] Deploy BookStack (Docker Compose)
- [ ] Export each Confluence space as HTML ZIP
- [ ] Run the community importer tool for each space
- [ ] Fix broken images and formatting
- [ ] Adjust page hierarchy to fit Shelf > Book > Chapter > Page
- [ ] Update internal cross-space links
- [ ] Configure LDAP/SSO authentication
- [ ] Set up roles and permissions

### Post-Migration

- [ ] Run both systems in parallel for 1-2 weeks
- [ ] Train team on Plane and BookStack basics
- [ ] Redirect any external links to old Confluence/Jira URLs
- [ ] Archive Atlassian export data (keep for compliance)
- [ ] Cancel Atlassian subscriptions
- [ ] Monitor and address team feedback for first month

---

## What It Costs to Have Us Do It

If you want the Atlassian escape handled for you:

- **Small team** (up to 25 users, 1-3 projects, 1-2 wiki spaces): **$1,500-$2,500**
  - Includes: Plane + BookStack deployment, Jira import, Confluence import, cleanup, SSO config, 1 training session

- **Mid-size team** (25-100 users, 5-10 projects, 3-5 wiki spaces): **$3,000-$5,000**
  - Includes: Everything above + multi-project import, complex permission mapping, custom cleanup, 2 training sessions

- **Large team** (100+ users, enterprise requirements): **$5,000-$10,000**
  - Includes: Everything above + dedicated migration project, parallel running support, custom automation setup, ongoing support for 1 month

We deploy everything on your infrastructure (or set it up for you), handle the data transfer, and make sure your team is productive on day one. You own the servers, the data, and the configuration.

The typical ROI: a 50-person team saves $8,000+/year on licensing alone. The migration pays for itself in under 4 months.

[Get a free migration assessment at upready.dev](/services/project-management)

---

## Further Reading

- [Plane Documentation](https://docs.plane.so/)
- [Plane Self-Hosting Guide](https://developers.plane.so/self-hosting/)
- [BookStack Documentation](https://www.bookstackapp.com/docs/)
- [Confluence to BookStack Importer (GitHub)](https://github.com/gloverab/confluence-server-to-bookstack-importer)
- [Atlassian Server End of Life FAQ](https://www.atlassian.com/migration/assess/journey-to-cloud)
- [Jira Alternatives 2026: Project Management That Doesn't Need a PhD](/blog/jira-alternatives) (coming soon)
- [Confluence Alternatives 2026: Simpler Wikis for Growing Teams](/blog/confluence-alternatives) (coming soon)
