"use client";

import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Feature03Props {
  id?: string;
  badge: string;
  headline: string;
  subtitle?: string;
  steps: Step[];
  showImage?: boolean;
  imageUrl?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Feature03({
  id,
  badge,
  headline,
  subtitle,
  steps,
  showImage = false,
  imageUrl = "https://images.shadcnspace.com/assets/feature/feature-03.webp",
}: Feature03Props) {
  return (
    <section id={id}>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 sm:py-20 overflow-hidden">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className={`grid grid-cols-1 ${showImage ? "lg:grid-cols-2" : ""} gap-8 sm:gap-6`}>
              {showImage && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={imageUrl}
                    alt={headline}
                    className="rounded-2xl w-full h-full object-top object-cover aspect-video lg:aspect-auto"
                  />
                </motion.div>
              )}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`${showImage ? "lg:ps-8" : ""} place-self-center flex flex-col gap-8 sm:gap-10 w-full`}
              >
                <div className="flex flex-col gap-4">
                  <motion.div variants={itemVariants}>
                    <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal">
                      {badge}
                    </Badge>
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
                  >
                    {headline}
                  </motion.p>
                  {subtitle && (
                    <motion.p
                      variants={itemVariants}
                      className="text-lg font-normal text-muted-foreground"
                    >
                      {subtitle}
                    </motion.p>
                  )}
                </div>

                <motion.div variants={itemVariants}>
                  <Card className="p-6 sm:p-8 shadow-none rounded-2xl">
                    <CardContent className="p-0 flex flex-col gap-6 sm:gap-8">
                      {steps.map((step, index) => {
                        const IconComp = step.icon;
                        return (
                          <React.Fragment key={index}>
                            <div className="flex gap-5">
                              <IconComp size={30} className="shrink-0" />
                              <div className="flex flex-col gap-2">
                                <p className="text-xl font-semibold">{step.title}</p>
                                <p className="text-base text-muted-foreground">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                            {index !== steps.length - 1 && <Separator orientation="horizontal" />}
                          </React.Fragment>
                        );
                      })}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
