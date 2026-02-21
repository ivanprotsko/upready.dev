"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export interface Cta01Props {
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  subtext?: string;
}

export default function Cta01({
  headline,
  subtitle,
  ctaText,
  ctaHref,
  ctaExternal = true,
  subtext,
}: Cta01Props) {
  return (
    <section>
      <div className="sm:py-20 py-8">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="relative overflow-hidden min-h-96 flex items-center justify-center px-6 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 before:from-accent/10 before:from-40% before:via-background before:via-55% before:to-accent/5 before:to-60% before:bg-linear-to-r before:rounded-full before:-z-10">
            <motion.div
              initial={{ y: "5%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-6 items-center mx-auto"
            >
              <div className="flex flex-col gap-3 items-center text-center">
                <h2 className="text-3xl md:text-5xl font-medium">{headline}</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">{subtitle}</p>
              </div>
              <Button
                asChild
                className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
              >
                {ctaExternal ? (
                  <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 transition-all duration-500">{ctaText}</span>
                    <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                ) : (
                  <a href={ctaHref}>
                    <span className="relative z-10 transition-all duration-500">{ctaText}</span>
                    <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                )}
              </Button>
              {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
