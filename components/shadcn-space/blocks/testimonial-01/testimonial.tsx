"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "motion/react";
import { LucideIcon } from "lucide-react";

type StatCard = {
  label: string;
  value: string;
  description?: string;
  name?: string;
  role?: string;
  bgClass: string;
  textClass: string;
  subTextClass: string;
  colSpan: string;
  icon?: LucideIcon;
};

const SocialProof = ({
  badgeText = "Social Proof",
  heading = "Trusted by industry leaders",
  cards,
  footnote,
}: {
  badgeText?: string;
  heading?: string;
  cards: StatCard[];
  footnote?: string;
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-10">
      <div className="max-w-7xl mx-auto px-4 xl:px-16">
        <div className="flex flex-col items-center self-stretch gap-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-2 sm:gap-4"
          >
            <Badge
              variant={"outline"}
              className="py-1 px-3 text-sm font-normal h-7"
            >
              {badgeText}
            </Badge>
            <h2 className="text-foreground text-3xl sm:text-5xl font-medium max-w-xs sm:max-w-2xl mx-auto text-center">
              {heading}
            </h2>
          </motion.div>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 1,
                  delay: index < 2 ? 0.2 : 0.5,
                  ease: "easeInOut",
                }}
                className={`col-span-1 ${card.colSpan}`}
              >
                <Card
                  className={`${card.bgClass} border border-border h-full w-full p-8 rounded-2xl`}
                >
                  <CardContent className="flex flex-col items-start justify-between gap-6 p-0 h-full min-h-48">
                    <p className={`${card.subTextClass} text-base font-normal`}>
                      {card.label}
                    </p>
                    <div className="flex flex-col items-start gap-4">
                      {card.icon && (
                        <card.icon className={`w-8 h-8 ${card.textClass}`} />
                      )}
                      <p
                        className={`${card.textClass} text-4xl lg:text-5xl font-medium`}
                      >
                        {card.value}
                      </p>
                      {card.description && (
                        <p
                          className={`${card.textClass} text-xl lg:text-2xl font-medium`}
                        >
                          {card.description}
                        </p>
                      )}
                    </div>
                    {card.name && (
                      <div>
                        <p
                          className={`${card.textClass} text-base font-medium`}
                        >
                          {card.name}
                        </p>
                        {card.role && (
                          <p
                            className={`${card.subTextClass} text-sm font-normal`}
                          >
                            {card.role}
                          </p>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {footnote && (
            <p className="text-sm text-muted-foreground text-center max-w-3xl">
              {footnote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
