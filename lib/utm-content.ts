export type HeroContent = {
  headingLine1: string;
  headingLine2: string;
  headingItalic: string;
  subheading?: string;
  buttonText?: string;
};

export const defaultHeroContent: HeroContent = {
  headingLine1: "Your MVP",
  headingLine2: "will be ready",
  headingItalic: "in weeks, not months.",
  subheading: "Your Minimum Value Product will be ready for customers to use in weeks, not months.",
  buttonText: "Discuss Your Idea",
};

/**
 * UTM variant map.
 * Key format: "utm_source/utm_campaign", use "*" as wildcard.
 * Examples:
 *   "google/*"      - any Google traffic
 *   "google/rescue" - Google + rescue campaign
 *   "* /rescue"     - any source + rescue campaign
 *
 * Partial override: only specified fields replace the default.
 */
export const utmVariants: Record<string, Partial<HeroContent>> = {
  "*/rescue": {
    headingLine1: "Broken AI app?",
    headingLine2: "We'll fix it",
    headingItalic: "fast and production-ready.",
    subheading: "We audit, fix, and ship your broken AI product — in weeks, not months.",
    buttonText: "Get a Free Audit",
  },
  "google/*": {
    headingLine1: "Your MVP",
    headingLine2: "built for growth",
    headingItalic: "in weeks, not months.",
  },
  "linkedin/*": {
    headingLine1: "Your MVP",
    headingLine2: "production-ready",
    headingItalic: "in weeks, not months.",
  },
};

export function resolveHeroContent(
  utmSource?: string,
  utmCampaign?: string
): HeroContent {
  const src = (utmSource ?? "*").toLowerCase();
  const cmp = (utmCampaign ?? "*").toLowerCase();

  const candidates = [
    `${src}/${cmp}`,
    `${src}/*`,
    `*/${cmp}`,
  ];

  for (const key of candidates) {
    if (utmVariants[key]) {
      return { ...defaultHeroContent, ...utmVariants[key] };
    }
  }

  return defaultHeroContent;
}
