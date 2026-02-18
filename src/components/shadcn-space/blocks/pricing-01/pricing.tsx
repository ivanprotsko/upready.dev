"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const TELEGRAM_URL = "https://t.me/ivanprotsko";

const planMeta = [
  { bgColor: "bg-blue-500/10", featureCount: 6 },
  { bgColor: "bg-teal-400/20", featureCount: 6 },
  { bgColor: "bg-purple-500/10", featureCount: 6 },
  { bgColor: "bg-amber-400/15", featureCount: 6 },
];

const Pricing = () => {
  const t = useTranslations("pricing");

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.6, ease: "easeInOut" as const },
    }),
  };

  return (
    <section id="pricing" className="bg-background py-10 xl:py-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 lg:py-20 sm:py-16 py-8">
        <div className="flex flex-col gap-8 md:gap-12 justify-center items-center w-full">
          <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-700 ease-in-out">
            <Badge
              variant="outline"
              className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7"
            >
              {t("badge")}
            </Badge>
            <div className="max-w-3xs sm:max-w-md mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-medium">
                {t("headline")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {planMeta.map((meta, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="w-full"
              >
                <Card
                  className={cn(
                    meta.bgColor,
                    "p-8 sm:p-10 rounded-2xl ring-0 w-full h-full"
                  )}
                >
                  <CardContent className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start self-stretch px-0 h-full w-full">
                    <div className="flex flex-col items-start justify-between self-stretch gap-6 sm:min-w-[200px]">
                      <div className="flex flex-col gap-3">
                        <Badge className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7">
                          {t(`plans.${index}.name`)}
                        </Badge>
                        <p className="text-sm font-normal text-muted-foreground max-w-56">
                          {t(`plans.${index}.description`)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-4xl sm:text-5xl font-semibold text-card-foreground flex items-end">
                          {t(`plans.${index}.price`)}
                          <span className="text-base font-normal text-muted-foreground">
                            {t(`plans.${index}.period`)}
                          </span>
                        </p>
                        <Button
                          asChild
                          className="relative bg-white hover:bg-white hover:text-black dark:hover:text-black text-black text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
                        >
                          <a
                            href={TELEGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="relative z-10 transition-all duration-500">
                              {t("cta")}
                            </span>
                            <div className="absolute right-1 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                              <ArrowUpRight size={16} />
                            </div>
                          </a>
                        </Button>
                      </div>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="hidden sm:block"
                    />
                    <Separator
                      orientation="horizontal"
                      className="sm:hidden block"
                    />
                    <div className="flex flex-col items-start gap-3 grow">
                      <p className="text-card-foreground text-base sm:text-xl font-normal sm:font-medium">
                        {t("featuresLabel")}
                      </p>
                      <ul className="flex flex-col items-start self-stretch gap-3">
                        {Array.from({ length: meta.featureCount }, (_, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-card-foreground text-base font-normal tracking-normal"
                          >
                            <Check
                              size={16}
                              aria-hidden="true"
                              className="shrink-0"
                            />
                            {t(`plans.${index}.features.${i}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            {t("footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
