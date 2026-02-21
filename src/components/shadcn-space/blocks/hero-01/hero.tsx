"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface HeroProps {
  badge: string;
  headline: string;
  headlineAccent?: string;
  subtitle: string;
  primaryCta: { text: string; href: string; external?: boolean };
  secondaryCta?: { text: string; href: string };
  subtext?: string;
}

export default function HeroSection({
  badge,
  headline,
  headlineAccent,
  subtitle,
  primaryCta,
  secondaryCta,
  subtext,
}: HeroProps) {
  return (
    <section>
      <div className="w-full relative">
        <div className="relative w-full pt-8 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-accent/10 before:via-background before:to-accent/5 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-sm font-medium tracking-widest text-accent uppercase"
                >
                  {badge}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="lg:text-7xl md:text-6xl text-4xl font-semibold leading-tight md:leading-tight lg:leading-tight"
                >
                  {headline}
                  {headlineAccent && (
                    <>
                      {" "}
                      <span className="text-accent">{headlineAccent}</span>
                    </>
                  )}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="text-base font-normal max-w-2xl text-muted-foreground"
                >
                  {subtitle}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center flex-col md:flex-row justify-center gap-4"
              >
                <Button
                  asChild
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
                >
                  {primaryCta.external ? (
                    <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 transition-all duration-500">{primaryCta.text}</span>
                      <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </span>
                    </a>
                  ) : (
                    <Link href={primaryCta.href}>
                      <span className="relative z-10 transition-all duration-500">{primaryCta.text}</span>
                      <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  )}
                </Button>
                {secondaryCta && (
                  <Button variant="outline" asChild className="rounded-full h-12 px-6">
                    <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                  </Button>
                )}
              </motion.div>
              {subtext && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-center text-sm text-muted-foreground"
                >
                  {subtext}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
