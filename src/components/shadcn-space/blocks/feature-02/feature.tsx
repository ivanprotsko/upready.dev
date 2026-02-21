"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Feature02Props {
  id?: string;
  badge: string;
  headline: string;
  cards: FeatureCard[];
  columns?: 2 | 3;
  closingText?: string;
}

export default function Feature02({
  id,
  badge,
  headline,
  cards,
  columns = 2,
  closingText,
}: Feature02Props) {
  return (
    <section id={id}>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8 sm:py-12">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
            >
              <Badge variant="outline" className="px-3 py-1 h-auto text-sm">
                {badge}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                {headline}
              </h2>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""} gap-6`}
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <Card className="py-10 h-full border-t-4 border-t-transparent transition-all duration-300 hover:border-t-primary hover:shadow-lg">
                    <CardContent className="px-8 flex flex-col gap-6">
                      <card.icon
                        className="w-8 h-8 text-primary"
                        strokeWidth={1.2}
                      />
                      <div className="flex flex-col gap-3">
                        <h6 className="text-xl font-semibold">
                          {card.title}
                        </h6>
                        <p className="text-base font-normal text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            {closingText && (
              <p className="text-center text-sm italic text-muted-foreground max-w-2xl mx-auto">
                {closingText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
