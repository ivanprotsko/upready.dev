"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceHeroProps = {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  ctaText?: string;
  ctaHref?: string;
};

const ServiceHero = ({
  badge,
  title,
  description,
  icon: Icon,
  ctaText = "Get Started",
  ctaHref = "/contacts",
}: ServiceHeroProps) => {
  return (
    <section>
      <div className="pt-12 pb-8 sm:pt-20 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-16">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal">
                {badge}
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-muted"
            >
              <Icon size={32} strokeWidth={1.5} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
              >
                <Link href={ctaHref} className="flex items-center">
                  <span className="relative z-10 transition-all duration-500">{ctaText}</span>
                  <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
