"use client";

import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquareText, FileCheck, Code2, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [MessageSquareText, FileCheck, Code2, Rocket];

const HowItWorks = () => {
  const t = useTranslations("howItWorks");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="how-it-works">
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 sm:py-20 overflow-hidden">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img
                  src="https://images.shadcnspace.com/assets/feature/feature-03.webp"
                  alt="How it works"
                  className="rounded-2xl w-full h-full object-top object-cover aspect-video lg:aspect-auto"
                />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:ps-8 place-self-center flex flex-col gap-8 sm:gap-10"
              >
                <div className="flex flex-col gap-4">
                  <motion.div variants={itemVariants}>
                    <Badge variant="outline" className="px-3 py-1 h-7 text-sm font-normal">
                      {t("badge")}
                    </Badge>
                  </motion.div>
                  <motion.p variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                    {t("headline")}
                  </motion.p>
                  <motion.p variants={itemVariants} className="text-lg font-normal text-muted-foreground">
                    {t("subtitle")}
                  </motion.p>
                </div>

                <motion.div variants={itemVariants}>
                  <Card className="p-6 sm:p-8 shadow-none rounded-2xl">
                    <CardContent className="p-0 flex flex-col gap-6 sm:gap-8">
                      {icons.map((IconComp, index) => (
                        <React.Fragment key={index}>
                          <div className="flex gap-5">
                            <IconComp size={30} className="shrink-0" />
                            <div className="flex flex-col gap-2">
                              <p className="text-xl font-semibold">{t(`steps.${index}.title`)}</p>
                              <p className="text-base text-muted-foreground">{t(`steps.${index}.content`)}</p>
                            </div>
                          </div>
                          {index !== icons.length - 1 && <Separator orientation="horizontal" />}
                        </React.Fragment>
                      ))}
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
};

export default HowItWorks;
