"use client";

import { BackgroundBeams } from "@/components/shadcn-space/blocks/hero-07/BackgroundBeams";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

type HeroProps = {
  badge?: string;
  heading: string;
  headingHighlight?: string;
  headingSuffix?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  socialProof?: string;
};

const HeroSection = ({
  badge,
  heading,
  headingHighlight,
  headingSuffix,
  description,
  primaryCta,
  secondaryCta,
  socialProof,
}: HeroProps) => {
  return (
    <section className="overflow-y-hidden">
      <div className="relative pt-20 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-sky-400/10 before:via-sky-500/10 before:to-teal-400/10 before:rounded-full before:top-60 before:blur-3xl before:-z-10 after:absolute after:w-full after:h-full after:bg-linear-to-b after:from-sky-500/10 after:via-transparent after:to-sky-500/10 after:rounded-full after:-top-10 after:blur-xl after:-z-10 after:left-1/2 after:-translate-x-1/2">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 z-20 relative flex flex-col gap-3">
          <div className="flex flex-col gap-8 pb-10">
            <div className="flex flex-col gap-5 items-center justify-center">
              {badge && (
                <div className="bg-background border ps-4 pe-4 py-1.5 rounded-full w-fit">
                  <p className="text-sm font-normal text-muted-foreground">
                    {badge}
                  </p>
                </div>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center max-w-4xl mx-auto">
                {heading}{" "}
                {headingHighlight && (
                  <span className="text-primary">{headingHighlight}</span>
                )}{" "}
                {headingSuffix}
              </h1>
              <p className="text-base sm:text-lg font-normal text-muted-foreground text-center leading-7 max-w-lg mx-auto">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Button asChild className="h-12 px-6 py-3.5 rounded-lg gap-2">
                <a href={primaryCta.href}>
                  {primaryCta.label} <ArrowUpRight size={16} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 py-3.5 rounded-lg gap-2 dark:bg-background dark:hover:bg-muted"
              >
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            </div>
            {socialProof && (
              <p className="text-sm text-muted-foreground text-center">
                {socialProof}
              </p>
            )}
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default HeroSection;
