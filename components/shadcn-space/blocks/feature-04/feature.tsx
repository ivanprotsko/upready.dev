"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Features = {
  icon: LucideIcon;
  title: string;
  content: ReactNode;
}[];

const Feature = ({ featureData }: { featureData: Features }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[url('https://images.shadcnspace.com/assets/feature/feature-04.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex items-end sm:items-center justify-center lg:justify-start">
        <div className="max-w-7xl px-4 lg:px-8 xl:px-16 lg:py-20 sm:py-16 py-8 mx-auto w-full">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full h-full max-w-md p-5 sm:p-10 border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <motion.div variants={itemVariants}>
                      <Badge
                        variant={"outline"}
                        className="px-3 py-1 h-7 text-sm font-normal"
                      >
                        Features
                      </Badge>
                    </motion.div>
                    <motion.p
                      variants={itemVariants}
                      className="text-3xl sm:text-4xl font-semibold"
                    >
                      Leading with innovative solution.
                    </motion.p>
                    <motion.p
                      variants={itemVariants}
                      className="text-base font-normal text-muted-foreground"
                    >
                      We're west coast change-makers in a complex world,
                      crafting purposeful and powerful brands with fluidity
                    </motion.p>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="hidden sm:block"
                  >
                    <div className="p-5 border rounded-2xl flex flex-col gap-8">
                      {featureData &&
                        featureData.map((feature, index) => (
                          <React.Fragment key={index}>
                            <div className="flex gap-4">
                              {feature.icon && (
                                <feature.icon size={24} className="shrink-0" />
                              )}
                              <div className="flex flex-col gap-1">
                                <p className="text-lg font-medium">
                                  {feature.title}
                                </p>
                                <p className="text-base text-muted-foreground">
                                  {feature.content}
                                </p>
                              </div>
                            </div>
                            {index !== featureData.length - 1 && (
                              <Separator orientation="horizontal" />
                            )}
                          </React.Fragment>
                        ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button className={"h-12 w-full rounded-full"}>
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
