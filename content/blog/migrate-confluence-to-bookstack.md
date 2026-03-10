---
title: "Migrate from Confluence to BookStack: Save Thousands on Your Knowledge Base"
description: "A complete, step-by-step guide to migrating from Confluence to BookStack. Covers data export, structure mapping, images, permissions, and timeline estimates for teams of any size."
date: 2026-03-09
author: upready.dev
slug: migrate-confluence-to-bookstack
tags:
  - confluence alternative
  - confluence to bookstack
  - self-hosted wiki
  - open source confluence alternative
  - bookstack migration
  - knowledge base
  - self-hosted
  - atlassian alternative
keywords:
  - confluence alternative
  - confluence to bookstack migration
  - self-hosted wiki
  - open source confluence alternative
  - bookstack migration guide
  - confluence pricing
  - bookstack setup
  - wiki migration
---

# Migrate from Confluence to BookStack: Save Thousands on Your Knowledge Base

> **TL;DR:** Confluence costs $6.05/user/month (Standard) and scales to $14,520/year at 200 users. BookStack is free, open source, and handles 90% of what most teams actually use Confluence for. Migration takes 2 days to 4 weeks depending on wiki size. This guide covers the entire process: export, tooling, structure mapping, images, permissions, and timeline. If you want someone to handle it for you, we do it for $1,000-$4,000.

---

## The Confluence Pricing Problem Nobody Talks About

Confluence used to be cheap. You could buy a Server license for $10, install it on a $20/month VPS, and forget about it for years.

That era is over.

Atlassian killed Server licenses in February 2024. If you were running Confluence on your own hardware, you had two choices: migrate to Confluence Cloud (and start paying per user, every month, forever) or migrate to Data Center (minimum 500 users at $27,000/year). For most small and mid-size teams, that meant Cloud.

Here's what Cloud costs in 2026:

| Team Size | Plan     | Monthly Cost | Annual Cost |
|-----------|----------|-------------|-------------|
| 10 users  | Standard | $60.50      | $726        |
| 25 users  | Standard | $151.25     | $1,815      |
| 50 users  | Standard | $302.50     | $3,630      |
| 100 users | Standard | $605        | $7,260      |
| 200 users | Standard | $1,210      | $14,520     |
| 50 users  | Premium  | $575        | $6,900      |
| 200 users | Premium  | $2,300      | $27,600     |

Standard is $6.05/user/month. Premium is $11.50/user/month. And that's just Confluence -- most teams also run Jira, which doubles the bill.

For a 100-person company paying for both Confluence Standard and Jira Standard, you're looking at roughly $15,000-$18,000/year. For a wiki and a task tracker.

But the pricing isn't even the worst part. The worst part is the trajectory. Atlassian has raised Cloud prices multiple times since the Server sunset. In 2023 they bumped Standard by 5%. In 2024, another increase. There's no reason to think 2026 or 2027 will be different. You're on a subscription treadmill with no exit ramp -- unless you build your own exit ramp.

That's where BookStack comes in.

---

## BookStack: The Open Source Confluence Alternative That Actually Works

BookStack is an open-source, self-hosted wiki platform built on PHP (Laravel) with a MySQL or MariaDB database. It's been around since 2015 and has over 15,000 stars on GitHub. MIT license. No usage limits. No per-user fees. Free.

The name gives away the organizing principle: your knowledge is structured as **Shelves > Books > Chapters > Pages**. Think of it like a physical library. A shelf holds books. A book has chapters. A chapter has pages. If you've ever struggled with Confluence's "space > page > child page > child of child page > where am I?" hierarchy, BookStack's model feels immediately logical.

What makes BookStack genuinely good:

- **WYSIWYG and Markdown editors.** Switch between them freely. The WYSIWYG editor handles tables, code blocks, images, callouts, and embedded content without fighting you.
- **Full-text search that works.** Confluence Cloud search has been a meme in the sysadmin community for years. BookStack's search is fast, accurate, and supports exact-match and tag filters.
- **Built-in diagramming.** BookStack ships with diagrams.net (formerly draw.io) integration out of the box. No marketplace plugin needed.
- **Granular permissions.** Role-based access with per-book and per-shelf overrides. Not as complex as Confluence's permission model -- which, depending on your perspective, is a feature.
- **REST API.** Full CRUD operations on shelves, books, chapters, pages, attachments, and users. Everything you need for automation and migration.
- **Low maintenance.** It's a standard LAMP stack. A $10-$20/month VPS handles hundreds of users. Updates are `git pull` + `composer install` + `php artisan migrate`. If you can run WordPress, you can run BookStack.
- **Active development.** Dan Brown (the developer, not the novelist) has been maintaining and improving BookStack for over a decade. The project ships regular updates, has responsive community support, and doesn't rely on VC funding that might evaporate.

The total cost of running BookStack for a 200-person team: $10-$40/month for server hosting. Compare that to $14,520/year for Confluence Standard. The math isn't complicated.

---

## Confluence vs. BookStack: Feature Comparison

Before you migrate, you need to know what you're gaining and what you're giving up. Here's an honest comparison:

| Feature | Confluence Cloud | BookStack |
|---------|-----------------|-----------|
| **Price** | $6.05/user/mo (Standard) | Free (MIT license) |
| **Hosting** | Atlassian Cloud | Self-hosted (VPS, Docker, or bare metal) |
| **Content Hierarchy** | Spaces > Pages > Child Pages (unlimited nesting) | Shelves > Books > Chapters > Pages (3 levels) |
| **WYSIWYG Editor** | Yes (new editor since 2023) | Yes (TinyMCE-based) |
| **Markdown Editor** | Limited (mostly WYSIWYG) | Yes (full Markdown support) |
| **Real-time Collaboration** | Yes (Google Docs-style co-editing) | No (single-user editing with draft autosave) |
| **Full-text Search** | Yes (often slow/unreliable on Cloud) | Yes (fast, local MySQL full-text) |
| **Diagrams** | draw.io via marketplace add-on | draw.io built-in |
| **Templates** | Yes (space and global templates) | Yes (page templates) |
| **Page Comments** | Yes | Yes |
| **Version History** | Yes | Yes (with diff view) |
| **REST API** | Yes | Yes |
| **Permissions** | Complex (space, page, group, user-level) | Role-based + per-book/shelf overrides |
| **SSO/LDAP** | SAML, OAuth (paid plans) | SAML2, OIDC, LDAP, social logins |
| **Export Formats** | PDF, Word | PDF, HTML, Markdown, plain text |
| **Jira Integration** | Native (deep linking, macros) | None built-in |
| **Marketplace/Plugins** | 1,000+ apps on Marketplace | Limited (community extensions) |
| **Mobile App** | Yes (Confluence mobile) | Responsive web (no native app) |
| **Audit Log** | Yes (Premium plan) | Yes (built-in activity log) |
| **Custom Themes** | Limited | Full (Blade templates, CSS overrides) |

### Where BookStack Wins

- **Cost.** This one's obvious. Zero license fees, forever.
- **Simplicity.** BookStack is opinionated about structure, which means less time configuring and more time writing.
- **Search reliability.** If you've spent five minutes searching for a page you know exists in Confluence Cloud, you understand.
- **Diagrams out of the box.** No marketplace plugin, no extra license, no compatibility issues.
- **Self-hosted data ownership.** Your wiki lives on your servers. No vendor lock-in. No "we're changing our privacy policy" emails.
- **Maintenance.** A single sysadmin can keep BookStack running as a side task. Confluence Server/Data Center required a dedicated admin.

### Where Confluence Wins (Be Honest About This)

- **Real-time collaborative editing.** If your team regularly has 3-4 people editing the same page simultaneously, BookStack can't do that. This is a legitimate gap. For most teams, though, simultaneous editing happens on maybe 5% of pages.
- **Jira integration.** If your developers live in Jira and embed Jira macros in Confluence pages, there's no equivalent in BookStack. You'll need to link to Jira manually or use Plane (an open-source Jira alternative) alongside BookStack.
- **App ecosystem.** Confluence has 1,000+ marketplace apps. BookStack has a handful of community extensions. If you rely on Gliffy, Balsamiq, or other specific Confluence plugins, check whether BookStack's built-in features cover your needs first.
- **Enterprise compliance features.** Confluence Premium offers advanced compliance tools, retention policies, and IP allowlists. BookStack has basic audit logging. If you're in a heavily regulated industry, evaluate carefully.
- **Permission granularity.** Confluence lets you set permissions at the page level, the space level, per group, per user, with inheritance chains. BookStack's model is simpler: roles define what users can do, and per-book/shelf overrides let you restrict access. For 80% of teams, BookStack's model is actually easier to manage. For the other 20%, it might not be granular enough.

Bottom line: if your team uses Confluence as a wiki -- writing docs, SOPs, runbooks, onboarding guides, meeting notes -- BookStack handles all of that. If your team uses Confluence as part of a tightly integrated Atlassian ecosystem with heavy Jira macros, marketplace apps, and real-time co-editing, the migration will require more trade-offs.

---

## Step 1: Export Your Data from Confluence

Before you can migrate anything, you need to get your content out of Confluence. There are three approaches depending on your instance size and access level.

### Option A: Space HTML Export (Recommended for Most Teams)

This is the most reliable method and works with both Confluence Cloud and Server/Data Center.

1. Go to the space you want to export
2. Click **Space Settings** (gear icon) > **Content Tools** > **Export**
3. Choose **HTML** as the export format
4. Select **Custom Export** if you want to exclude specific pages
5. Click **Export** and download the ZIP file

The ZIP contains HTML files with your page content, embedded images (in an `attachments` directory), and an `index.html` that maps the page hierarchy.

Repeat for each space you want to migrate.

**Important:** Confluence Cloud has export size limits. For large spaces (1,000+ pages), the export may time out or fail. If that happens, use the API-based approach below.

### Option B: XML Export (Server/Data Center Only)

If you're still running Confluence Server or Data Center before the deadline:

1. Go to **Space Settings** > **Content Tools** > **Export**
2. Choose **XML** format
3. This exports everything: pages, comments, attachments, metadata

XML export preserves more metadata but is harder to parse during migration. HTML is generally better for the BookStack community migration tools.

### Option C: API-Based Export (For Large Instances)

For wikis with 5,000+ pages or spaces that fail the HTML export:

```bash
# Get all pages in a space
curl -u username:api-token \
  "https://your-instance.atlassian.net/wiki/rest/api/content?spaceKey=YOURSPACE&limit=100&expand=body.storage,version,ancestors" \
  > pages.json

# Get page content (repeat for each page ID)
curl -u username:api-token \
  "https://your-instance.atlassian.net/wiki/rest/api/content/{pageId}?expand=body.storage,children.attachment" \
  > page-{pageId}.json
```

You'll need to paginate through results (Confluence API returns max 100 items per request) and download attachments separately. This approach gives you the most control but requires scripting.

**Pro tip:** Generate an API token at `id.atlassian.com/manage-profile/security/api-tokens`. Don't use your password -- Atlassian deprecated basic password auth for Cloud.

---

## Step 2: Set Up BookStack

Before importing anything, you need a running BookStack instance. The fastest ways:

### Docker (Recommended)

```yaml
# docker-compose.yml
version: '3'
services:
  bookstack:
    image: lscr.io/linuxserver/bookstack:latest
    container_name: bookstack
    environment:
      - PUID=1000
      - PGID=1000
      - DB_HOST=bookstack_db
      - DB_PORT=3306
      - DB_USER=bookstack
      - DB_PASS=your_secure_password
      - DB_DATABASE=bookstackapp
      - APP_URL=https://wiki.yourdomain.com
    volumes:
      - ./bookstack_data:/config
    ports:
      - 6875:80
    depends_on:
      - bookstack_db
    restart: unless-stopped

  bookstack_db:
    image: lscr.io/linuxserver/mariadb:latest
    container_name: bookstack_db
    environment:
      - PUID=1000
      - PGID=1000
      - MYSQL_ROOT_PASSWORD=your_root_password
      - MYSQL_DATABASE=bookstackapp
      - MYSQL_USER=bookstack
      - MYSQL_PASSWORD=your_secure_password
    volumes:
      - ./bookstack_db:/config
    restart: unless-stopped
```

Run `docker-compose up -d` and BookStack is live at `http://localhost:6875`. Default credentials: `admin@admin.com` / `password`. Change them immediately.

### Manual Installation (Ubuntu/Debian)

BookStack provides a one-command install script:

```bash
wget https://raw.githubusercontent.com/BookStackApp/devops/main/scripts/installation-ubuntu-22.04.sh
chmod a+x installation-ubuntu-22.04.sh
sudo ./installation-ubuntu-22.04.sh
```

This installs PHP, MySQL, Apache, Composer, and BookStack itself. Takes about 5 minutes on a fresh Ubuntu server.

### Minimum Server Requirements

- 1 CPU core, 1GB RAM (handles ~50 concurrent users)
- 2 CPU cores, 2GB RAM (handles ~200 concurrent users)
- 10-50GB storage depending on attachments

A $10-$20/month VPS from Hetzner, DigitalOcean, or Linode is more than enough for most teams.

---

## Step 3: Use Community Migration Tools

There's no official Confluence-to-BookStack migration tool. But the community has built several options that handle 80-90% of the work.

### Tool 1: confluence-server-to-bookstack-importer

**GitHub:** `github.com/gloverab/confluence-server-to-bookstack-importer`

This is the most complete community tool for this migration path. It takes a Confluence HTML export and imports it into BookStack via the API.

What it handles:
- Parses Confluence HTML export structure
- Creates BookStack books and pages matching the source hierarchy
- Uploads inline images and updates image references
- Preserves basic formatting (headings, lists, tables, code blocks)

What it doesn't handle:
- Confluence macros (status labels, expand/collapse, Jira links)
- Complex table formatting (merged cells may break)
- Page-level permissions (need to be set manually after import)
- draw.io diagrams embedded via Confluence macro

**Usage:**

```bash
git clone https://github.com/gloverab/confluence-server-to-bookstack-importer.git
cd confluence-server-to-bookstack-importer

# Configure
cp .env.example .env
# Edit .env with your BookStack URL and API token

# Run
python3 importer.py --input /path/to/confluence-export/ --book "Imported Wiki"
```

You'll need a BookStack API token. Create one in BookStack under **Settings > API Tokens**.

### Tool 2: Manual HTML Import via BookStack API

For smaller wikis or when you need more control, you can write a simple script that reads HTML files and creates pages via the BookStack API:

```python
import os
import requests
from bs4 import BeautifulSoup

BOOKSTACK_URL = "https://wiki.yourdomain.com"
TOKEN_ID = "your-token-id"
TOKEN_SECRET = "your-token-secret"

headers = {
    "Authorization": f"Token {TOKEN_ID}:{TOKEN_SECRET}"
}

def create_page(book_id, name, html_content, chapter_id=None):
    data = {
        "book_id": book_id,
        "name": name,
        "html": html_content
    }
    if chapter_id:
        data["chapter_id"] = chapter_id

    response = requests.post(
        f"{BOOKSTACK_URL}/api/pages",
        headers=headers,
        json=data
    )
    return response.json()

# Read Confluence HTML export
for filename in os.listdir("confluence-export/"):
    if filename.endswith(".html"):
        with open(f"confluence-export/{filename}", "r") as f:
            soup = BeautifulSoup(f.read(), "html.parser")
            # Extract page title and content
            title = soup.find("title").text
            content = str(soup.find("div", {"id": "main-content"}))
            create_page(book_id=1, name=title, html_content=content)
```

This is a simplified example. A production script needs to handle image uploads, hierarchy mapping, and error recovery. But for a 50-page wiki, something like this takes an hour to write and runs in minutes.

### Tool 3: Copy-Paste (For Very Small Wikis)

If your wiki has fewer than 30-40 pages, don't overthink it. Open each Confluence page, select all, copy, and paste into BookStack's WYSIWYG editor. BookStack handles pasted HTML surprisingly well -- formatting, tables, and inline images usually survive the paste.

For a 30-page wiki, this takes 2-3 hours. Sometimes the simplest approach is the fastest.

---

## Step 4: Map Confluence Structure to BookStack

This is where most migrations get messy. Confluence and BookStack think about hierarchy differently, and forcing one model onto the other creates a confusing result.

### The Structural Difference

**Confluence:**
```
Space
  └── Page
        └── Child Page
              └── Child of Child Page
                    └── (unlimited nesting)
```

**BookStack:**
```
Shelf
  └── Book
        └── Chapter
              └── Page (terminal -- no further nesting)
```

Confluence allows unlimited page nesting. BookStack has exactly three levels below the shelf. This means you need to flatten deep hierarchies.

### Recommended Mapping Strategy

| Confluence | BookStack | Notes |
|-----------|-----------|-------|
| Space | Shelf or Book | Small space = Book. Large space with distinct sections = Shelf containing multiple Books. |
| Top-level Page (no children) | Page in a Book | Direct placement. |
| Top-level Page (with children) | Chapter | The parent page becomes the chapter; child pages become pages within it. |
| Child Pages (level 2) | Pages within a Chapter | Direct mapping. |
| Deeply nested pages (level 3+) | Flatten into Chapter pages | Merge content or split by topic. Use page links for cross-references. |
| Labels/Tags | Tags | BookStack supports tags on books, chapters, and pages. Map Confluence labels to BookStack tags. |

### Example Mapping

**Confluence structure:**
```
Engineering Space
  ├── Getting Started
  │     ├── Local Setup
  │     ├── IDE Configuration
  │     └── Code Review Process
  ├── Architecture
  │     ├── Backend
  │     │     ├── Database Schema
  │     │     └── API Design
  │     └── Frontend
  │           ├── Component Library
  │           └── State Management
  └── Runbooks
        ├── Deploy to Production
        └── Incident Response
```

**BookStack structure:**
```
Engineering (Shelf)
  ├── Getting Started (Book)
  │     └── Onboarding (Chapter)
  │           ├── Local Setup (Page)
  │           ├── IDE Configuration (Page)
  │           └── Code Review Process (Page)
  ├── Architecture (Book)
  │     ├── Backend (Chapter)
  │     │     ├── Database Schema (Page)
  │     │     └── API Design (Page)
  │     └── Frontend (Chapter)
  │           ├── Component Library (Page)
  │           └── State Management (Page)
  └── Runbooks (Book)
        └── Operations (Chapter)
              ├── Deploy to Production (Page)
              └── Incident Response (Page)
```

The deeply nested "Backend > Database Schema" maps naturally to "Backend (Chapter) > Database Schema (Page)." If Confluence had a fourth level -- say, "Database Schema > PostgreSQL > Indexing Strategy" -- you'd flatten it: make "PostgreSQL Indexing Strategy" a separate page in the Backend chapter, or merge it into the Database Schema page with a heading.

### Don't Recreate Confluence in BookStack

The biggest migration mistake: trying to preserve every structural detail from Confluence. BookStack's simpler hierarchy is a feature. If your Confluence space has 6 levels of nesting, that's a sign the content was over-organized. Use the migration as an opportunity to simplify.

---

## Step 5: Handle Images, Attachments, and Embedded Content

Content migration isn't just text. Here's how to handle the files.

### Inline Images

Confluence HTML exports include images in an `attachments` or `images` directory within the ZIP. The community migration tools handle image upload automatically -- they find image references in the HTML, upload the files to BookStack's storage, and update the `<img>` tags with new URLs.

If you're migrating manually, use the BookStack image API:

```bash
curl -X POST "https://wiki.yourdomain.com/api/image-gallery" \
  -H "Authorization: Token {id}:{secret}" \
  -F "image=@diagram.png" \
  -F "type=gallery" \
  -F "uploaded_to={page_id}"
```

The response includes the new image URL. Replace the old Confluence URL in your page HTML with the new BookStack URL.

### PDF and File Attachments

Confluence pages often have attached PDFs, spreadsheets, and other documents. BookStack supports file attachments on pages:

```bash
curl -X POST "https://wiki.yourdomain.com/api/attachments" \
  -H "Authorization: Token {id}:{secret}" \
  -F "name=quarterly-report.pdf" \
  -F "uploaded_to={page_id}" \
  -F "file=@quarterly-report.pdf"
```

Attachments appear in a sidebar on the page. If your Confluence page linked to an attached file inline, you'll need to update the link to point to the new BookStack attachment URL.

### draw.io / diagrams.net Diagrams

This is actually good news. BookStack has native diagrams.net integration. But Confluence stores draw.io diagrams as attachments (`.drawio` files or macro data), not as standard images.

**Migration approach:**

1. Export the `.drawio` file from Confluence (it's usually in the page attachments)
2. In BookStack, edit the target page
3. Insert a drawing (the draw.io editor opens directly in BookStack)
4. In draw.io, use **File > Import** and load the `.drawio` file
5. Save -- the diagram is now native to BookStack

For pages with many diagrams, this is tedious but straightforward. The diagrams look and behave exactly the same as they did in Confluence because they're using the same rendering engine.

### Confluence Macros

Here's where you'll lose some content. Confluence macros are proprietary and don't have direct equivalents:

| Confluence Macro | BookStack Equivalent |
|-----------------|---------------------|
| Code block / Code snippet | Code block (built-in, with syntax highlighting) |
| Info/Warning/Note panels | Callout blocks (info, warning, danger, success) |
| Expand/Collapse | No direct equivalent -- use separate pages or headings |
| Table of Contents | Automatic TOC sidebar (built-in) |
| Status labels | Tags or inline text with formatting |
| Jira Issue macro | Link to Jira URL (no embedded preview) |
| Page Include | No direct equivalent -- duplicate content or link |
| Children Display | Not needed (BookStack shows chapter contents automatically) |
| Roadmap/Gantt | Not available -- use external tool and embed image |

For most teams, the macros that matter most (code blocks, callout panels, TOC) have direct BookStack equivalents. The ones that don't (Jira embeds, dynamic macros) represent the 10-20% of content that needs manual adjustment.

---

## Step 6: Map Permissions

Confluence has one of the most complex permission models of any wiki. BookStack intentionally keeps it simpler.

### Confluence Permission Model

```
Global Permissions
  └── Space Permissions (per space)
        └── Page Restrictions (per page)
              └── User/Group level (view, edit, delete)
```

Confluence lets you set view and edit restrictions on individual pages, inherited by child pages, overridable at any level. It's powerful. It's also the reason every Confluence admin has a spreadsheet tracking who can see what.

### BookStack Permission Model

```
Roles (system-wide capability sets)
  └── Per-Book / Per-Shelf Overrides (optional)
```

BookStack's built-in roles:

| Role | Can View | Can Create | Can Edit | Can Delete | Admin |
|------|----------|------------|----------|------------|-------|
| Admin | All | All | All | All | Yes |
| Editor | All | Own | Own | Own | No |
| Viewer | All | No | No | No | No |

You can create custom roles with fine-grained permissions (create books, edit pages, manage users, etc.) and then override per shelf or per book. For example, "The HR book is only visible to the HR role and Admins."

### Mapping Strategy

1. **Identify your Confluence groups.** List every group in Confluence (Space Admin > Permissions) and what they can access.
2. **Map to BookStack roles.** Most Confluence groups map to one of three patterns:
   - Full access to everything = Admin or Editor role
   - Read-only access to everything = Viewer role
   - Access to specific spaces only = Custom role + per-book permission overrides
3. **Handle page-level restrictions.** If you had page-level restrictions in Confluence, consider whether you actually need them. Often, page restrictions were used because Confluence spaces were too broad. In BookStack, splitting content into separate books with different permission sets achieves the same result more cleanly.
4. **Set up SSO/LDAP.** If your team uses Active Directory, Okta, or Google Workspace, configure SAML2 or OIDC authentication in BookStack before importing users. This way, users log in with existing credentials and get assigned roles automatically.

**The honest take:** if your Confluence permission model is a 200-row spreadsheet with per-page restrictions, nested group inheritance, and anonymous access rules, BookStack will force you to simplify. For 80% of organizations, this simplification is a relief. For the other 20% -- especially those with strict compliance requirements around document-level access control -- evaluate whether BookStack's model is granular enough before committing to migration.

---

## Step 7: Post-Migration Checklist

After the import is done, run through this list:

- [ ] **Verify page count.** Compare the number of pages in Confluence vs. BookStack. A 5-10% discrepancy is normal (empty pages, attachment-only pages). More than that means the import missed content.
- [ ] **Spot-check formatting.** Open 20 random pages and check that headings, lists, tables, code blocks, and images render correctly.
- [ ] **Test internal links.** Click through cross-page links. The migration tools update some links but not all. Broken links are the most common post-migration issue.
- [ ] **Verify images.** Check that images display correctly, especially screenshots and diagrams. Look for broken image icons.
- [ ] **Review permissions.** Log in as different user roles and verify they can see what they should (and can't see what they shouldn't).
- [ ] **Test search.** Search for 5-10 known terms. Confirm results appear and are relevant.
- [ ] **Set up backups.** Configure automated database and file backups. BookStack stores content in MySQL and images in the filesystem -- back up both.
- [ ] **Configure email notifications.** BookStack can send email notifications for page updates. Set up SMTP in the `.env` file.
- [ ] **Redirect old Confluence URLs.** If people have bookmarked Confluence pages, set up redirects (or at minimum, put a notice on your old Confluence space with the new BookStack URL).
- [ ] **Train your team.** BookStack is simpler than Confluence, but people still need 15 minutes of orientation. Show them: how to search, how to edit, how to create a new page, where the nav is.

---

## Timeline and Effort Estimates

How long does this actually take? It depends on three things: how many pages you have, how much custom Confluence macro usage exists, and how clean your content hierarchy is.

### Small Wiki (Under 500 Pages)

- **Export:** 1-2 hours
- **BookStack setup:** 1-2 hours
- **Import (using community tool):** 2-4 hours
- **Structure cleanup and verification:** 4-8 hours
- **Permission setup:** 1-2 hours
- **Total: 2-3 days**

This is a typical team wiki with engineering docs, onboarding guides, and meeting notes. The community migration tool handles most of the work. You'll spend more time verifying and cleaning up than actually importing.

### Medium Wiki (500-5,000 Pages)

- **Export:** 2-4 hours (may need multiple space exports)
- **BookStack setup:** 2-4 hours (including SSO/LDAP)
- **Import:** 1-2 days (tooling + manual fixes)
- **Structure mapping and reorganization:** 2-3 days
- **Image and attachment verification:** 1-2 days
- **Permission setup and testing:** 1 day
- **Total: 1-2 weeks**

At this size, you'll encounter edge cases: broken macro conversions, malformed HTML, orphan pages, circular page references. Budget time for manual cleanup.

### Large Wiki (5,000+ Pages)

- **Export:** 1-2 days (API-based export, multiple spaces)
- **BookStack setup:** 1 day (high-availability setup, SSO, backup automation)
- **Custom migration scripting:** 3-5 days (you'll likely need to modify the community tools or write your own)
- **Import and iteration:** 3-5 days (run, verify, fix, repeat)
- **Structure reorganization:** 3-5 days
- **Permission setup and audit:** 2-3 days
- **User training and rollout:** 1-2 days
- **Total: 3-4 weeks**

For large wikis, the migration is a project, not a task. Assign a dedicated person (or hire someone -- more on that below).

---

## FAQ

### Can BookStack handle real-time collaborative editing like Confluence?

No. BookStack uses a single-editor model with draft autosave. If two people open the same page, the second person gets a warning that the page is being edited. For most knowledge base use cases -- documentation, SOPs, runbooks -- this isn't a problem because pages are typically authored by one person. If your team does frequent multi-person editing sessions, consider using a collaborative tool like HackMD or Etherpad for drafting, then publishing the final version to BookStack.

### Will my Confluence page URLs break after migration?

Yes. BookStack generates its own URLs based on shelf/book/chapter/page names (e.g., `wiki.yourdomain.com/books/engineering/page/local-setup`). Your old Confluence URLs (`yourcompany.atlassian.net/wiki/spaces/ENG/pages/12345678`) will no longer work once you cancel Confluence. Set up redirects if your team has heavily bookmarked pages, or use a URL mapping document during the transition period.

### How do I handle Confluence page templates after migration?

BookStack has its own template system. You can create template pages and use them when creating new content. However, there's no way to automatically import Confluence templates -- you'll need to recreate them in BookStack. The good news: most teams have 5-10 templates. Recreating them takes an hour.

### Is BookStack secure enough for sensitive internal documentation?

BookStack supports SAML2, OIDC, LDAP, and MFA. It runs on your own infrastructure, which means your data never leaves your servers. For many organizations, self-hosted BookStack is *more* secure than Confluence Cloud because the attack surface is smaller and you control the network layer. That said, you're responsible for server security, updates, and backups. If your team doesn't have the capacity to maintain a Linux server, factor in managed hosting costs.

### Can I try BookStack before committing to migration?

Yes. Spin up a Docker instance in 5 minutes (see the Docker Compose config above), import one Confluence space as a test, and let your team use it for a week. BookStack has a demo site at `demo.bookstackapp.com` where you can explore the interface without installing anything. This is the fastest way to answer the "will my team actually use this?" question.

---

## Don't Want to Do This Yourself?

Migration guides are great. But some teams don't want to spend 1-4 weeks figuring out export formats, debugging Python scripts, and manually fixing broken table formatting.

That's what we do at [upready.dev](https://upready.dev).

We handle the full Confluence-to-BookStack migration:

- **Export and audit** your Confluence content (every space, every attachment)
- **Deploy BookStack** on your infrastructure (Docker or bare metal, your cloud or ours)
- **Migrate all content** with structure mapping, image uploads, and link fixes
- **Set up permissions**, SSO/LDAP, backups, and monitoring
- **Train your team** with a 30-minute walkthrough and a quick-reference guide

**Pricing: $1,000-$4,000** depending on wiki size and complexity.

- Small wiki (under 500 pages): $1,000-$1,500
- Medium wiki (500-5,000 pages): $1,500-$3,000
- Large wiki (5,000+ pages): $3,000-$4,000+

The entire migration takes 3-10 business days. You keep using Confluence until we confirm everything is in BookStack and verified. Zero downtime for your team.

**[Book a free 15-minute call](https://upready.dev/contact)** to get a migration estimate for your wiki. We'll tell you exactly how long it'll take, what the edge cases are, and whether BookStack is the right fit for your team. No sales pitch -- if Confluence is genuinely better for your use case, we'll tell you that too.

---

*This guide was last updated on March 9, 2026. Confluence pricing reflects Atlassian's current published rates. BookStack version referenced: 24.x. Community migration tools may have been updated since publication -- always check the GitHub repos for the latest versions.*
