# Blocks Analysis Progress

## Status: COMPLETE (v2)

**Date:** 2026-02-21

## Summary
- **93 blocks** analyzed (all marketing blocks, free + paid)
- **1 block** failed to install (logo-cloud-04 — bug in shadcnspace registry)
- **706 text fields** extracted with character limits
- **113 repeatable groups** (cards, lists, nav links, etc.)
- **18 categories** covered
- Auth blocks (login, register, 2FA, etc.) — not included, not needed for landing page

## Fix Applied
- shadcnspace registry auth was broken with HTTP headers (X-Email, X-License-Key)
- Fixed by switching to **query params** in `components.json` URL:
  `https://shadcnspace.com/r/{name}.json?email=${SHADCN_SPACE_EMAIL}&license_key=${SHADCN_SPACE_LICENSE_KEY}`
- All 100+ paid blocks now accessible

## Files

| File | Description | Blocks |
|------|-------------|--------|
| `specs/blocks-metadata.json` | **Final merged metadata** for all 93 blocks | 93 |
| `specs/blocks-accessibility.json` | Free vs paid access check (outdated — all now accessible) | - |
| `specs/blocks-batch1.json` | hero-01/02/03, navbar-01, logo-cloud-01, feature-01/02, about-us-01, testimonial-01 | 9 |
| `specs/blocks-batch2.json` | testimonial-02, pricing-01/02, blog-01, faq-01, contact-01, newsletter-01, cta-01/02 | 9 |
| `specs/blocks-batch3.json` | team-01/02, portfolio-01, services-01/02, footer-01/02, gallery-01, bento-grid-01 | 9 |
| `specs/blocks-batch4.json` | hero-04..12, pricing-03..06 | 13 |
| `specs/blocks-batch5.json` | testimonial-03..07, feature-03..12 | 15 |
| `specs/blocks-batch6.json` | about-us-02..05, team-03..05, navbar-02, cta-03..05, portfolio-02..05, services-03..06 | 19 |
| `specs/blocks-batch7.json` | contact-02..04, faq-02..04, blog-02..05, footer-03..06, newsletter-02, logo-cloud-02/03/05, gallery-02 | 19 |

## Categories Breakdown

| Category | Count | Block IDs |
|----------|-------|-----------|
| hero | 12 | hero-01..12 |
| feature | 12 | feature-01..12 |
| testimonial | 7 | testimonial-01..07 |
| pricing | 6 | pricing-01..06 |
| footer | 6 | footer-01..06 |
| services | 6 | services-01..06 |
| about-us | 5 | about-us-01..05 |
| blog | 5 | blog-01..05 |
| cta | 5 | cta-01..05 |
| portfolio | 5 | portfolio-01..05 |
| team | 5 | team-01..05 |
| contact | 4 | contact-01..04 |
| faq | 4 | faq-01..04 |
| logo-cloud | 4 | logo-cloud-01..03, 05 (04 broken) |
| gallery | 2 | gallery-01..02 |
| navbar | 2 | navbar-01..02 |
| newsletter | 2 | newsletter-01..02 |
| bento-grid | 1 | bentogrid-01 |

## Metadata Structure (per block)

```json
{
  "block_id": "hero-01",
  "block_title": "Hero 01 - Agency Hero Section",
  "category": "hero",
  "files": ["relative paths to component files"],
  "sections": [
    {
      "section": "section_name",
      "fields": [
        {
          "field_id": "unique_field_id",
          "element": "HTML/React element type",
          "original_text": "the actual text from the block",
          "max_chars": 45,
          "min_chars": 12,
          "type": "heading|subheading|description|inline|button|label|list_item|stat_value|stat_label",
          "notes": "context about styling, position, etc."
        }
      ]
    }
  ],
  "repeatable_items": [
    {
      "item_id": "group_name",
      "count": 4,
      "fields": [{ "field_id", "sample_text", "max_chars", "min_chars" }]
    }
  ]
}
```

## Character Limit Rules
- `max_chars` = exact character count of the original text in the block
- `min_chars` = ceil(max_chars * 0.25) — minimum to avoid empty-looking layouts
- These are guidelines, not hard limits. Going slightly over max may break layout on certain screen sizes.

## Next Steps
- [ ] Select blocks for the final landing page layout
- [ ] Write real copy within character limits
- [ ] Replace placeholder texts in block components
- [ ] Adjust min_chars based on visual testing
