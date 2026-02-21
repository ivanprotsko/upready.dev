"use client";

import { motion, useInView } from "motion/react";
import { BackgroundBeams } from "@/components/shadcn-space/blocks/hero-07/BackgroundBeams";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { CardContainer } from "@/components/ui/3d-card";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="overflow-y-hidden" ref={sectionRef}>
      <div className="relative pt-20 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-sky-400/10 before:via-sky-500/10 before:to-teal-400/10 before:rounded-full before:top-60 before:blur-3xl before:-z-10 after:absolute after:w-full after:h-full after:bg-linear-to-b after:from-sky-500/10 after:via-transparent after:to-sky-500/10 after:rounded-full after:-top-10 after:blur-xl after:-z-10 after:left-1/2 after:-translate-x-1/2">
        <div className="max-w-7xl max-h-200 overflow-hidden mx-auto px-4 lg:px-8 xl:px-16 z-20 relative flex flex-col gap-3">
          {/* content */}
          <div className="flex flex-col gap-8 pb-10">
            <div className="flex flex-col gap-5 items-center justify-center">
              <div className="bg-background border ps-2 pe-4 py-1.5 rounded-full w-fit flex items-center gap-2">
                <Badge className="bg-secondary text-secondary-foreground leading-0 px-2 py-0.5 h-5">
                  New
                </Badge>
                <p className="text-sm font-normal text-muted-foreground">
                  Announcing ShadcnSpace 1.0
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center max-w-4xl mx-auto">
                Launch SaaS website in a day. Fast. Beautiful. Focused.
              </h1>
              <p className="text-base sm:text-lg font-normal text-muted-foreground text-center leading-7 max-w-lg mx-auto">
                Launch is a modern, minimal, and highly customizable SaaS
                template for website projects, landings, tools, or libraries.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Button className="h-12 px-6 py-3.5 rounded-lg gap-2">
                Start a Project <ArrowRight />
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 py-3.5 rounded-lg gap-2 dark:bg-background dark:hover:bg-muted"
              >
                Learn More <ArrowRight />
              </Button>
            </div>
          </div>
          {/* image */}

          <div className="flex items-center justify-center lg:hidden">
            <img
              src="https://images.shadcnspace.com/assets/backgrounds/hero-07-dash-1.webp"
              alt="hero"
              width={956}
              height={613}
            />
          </div>
          <CardContainer containerClassName="hidden lg:flex">
            <div className="flex items-center justify-center">
              <img
                src="https://images.shadcnspace.com/assets/backgrounds/hero-07-dash-1.webp"
                alt="hero"
                width={956}
                height={613}
              />
            </div>
          </CardContainer>
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default HeroSection;
