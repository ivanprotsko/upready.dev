"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  content: string;
  stat?: string;
  cta?: string;
  href?: string;
};

const Feature = ({
  featureData,
  badgeText = "Features",
  heading = "Why choose us",
  columns = 2,
}: {
  featureData: FeatureItem[];
  badgeText?: string;
  heading?: string;
  columns?: 2 | 3 | 4;
}) => {
  const gridClass =
    columns === 4
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      : columns === 3
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 gap-6";

  return (
    <section>
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
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
                {badgeText}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                {heading}
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
              className={gridClass}
            >
              {featureData.map((value, index) => {
                const cardContent = (
                  <Card className="py-10 h-full border-t-4 border-t-transparent transition-all duration-300 hover:border-t-primary hover:shadow-lg">
                    <CardContent className="px-8 flex flex-col gap-6 h-full">
                      <value.icon
                        className="w-8 h-8 text-primary"
                        strokeWidth={1.2}
                      />
                      <div className="flex flex-col gap-3 flex-1">
                        <h3 className="text-xl font-semibold">
                          {value.title}
                        </h3>
                        <p className="text-base font-normal text-muted-foreground">
                          {value.content}
                        </p>
                        {value.stat && (
                          <p className="text-sm text-primary font-medium mt-auto pt-2">
                            {value.stat}
                          </p>
                        )}
                      </div>
                      {value.cta && value.href && (
                        <Button
                          asChild
                          className="w-full rounded-full"
                          variant="outline"
                        >
                          <span>{value.cta}</span>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );

                return (
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
                    {value.href ? (
                      <Link href={value.href} className="block h-full">
                        {cardContent}
                      </Link>
                    ) : (
                      cardContent
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
