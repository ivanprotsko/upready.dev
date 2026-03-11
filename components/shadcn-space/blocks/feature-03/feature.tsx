"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

export type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
};

const Feature = ({
  cards,
  badgeText = "Why Us",
  heading = "Everything you need to ship without the friction",
  description = "We've eliminated every obstacle that slows down traditional agencies. No endless meetings, no payment hassle, no waiting. Just fast, focused delivery.",
  footnote = "All projects start with a fixed-price estimate. No hidden costs, no surprise invoices — what you see is what you pay.",
  buttonText = "Get in Touch",
  buttonHref = "/contacts",
}: {
  cards: FeatureCard[];
  badgeText?: string;
  heading?: string;
  description?: string;
  footnote?: string;
  buttonText?: string;
  buttonHref?: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 sm:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-12 sm:gap-16"
          >
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
              <motion.div variants={itemVariants}>
                <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal">
                  {badgeText}
                </Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
              >
                {heading}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg font-normal text-muted-foreground"
              >
                {description}
              </motion.p>
            </div>

            {/* Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {cards.map((card, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full p-6 sm:p-8 shadow-none rounded-2xl bg-transparent">
                    <CardContent className="p-0 flex flex-col gap-4">
                      <card.icon size={28} className="shrink-0" />
                      <p className="text-xl font-semibold">{card.title}</p>
                      <p className="text-base text-muted-foreground">{card.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            {(footnote || buttonText) && (
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-6"
              >
                {footnote && (
                  <p className="text-sm text-muted-foreground text-center max-w-lg">
                    * {footnote}
                  </p>
                )}
                {buttonText && (
                  <Button asChild className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden">
                    <Link href={buttonHref} className="flex items-center">
                      <span className="relative z-10 transition-all duration-500">
                        {buttonText}
                      </span>
                      <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </Button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
