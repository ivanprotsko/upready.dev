"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check, Flame } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const TELEGRAM_URL = "https://t.me/ivanprotsko";

const planMeta = [
  { recommended: false, featureCount: 6 },
  { recommended: true, featureCount: 6 },
  { recommended: false, featureCount: 5 },
];

const Pricing = () => {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="bg-background py-10 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 xl:px-16 lg:py-20 sm:py-16 py-8">
        <div className="flex flex-col gap-8 md:gap-12 items-center justify-center w-full">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Badge variant="outline" className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7">{t("badge")}</Badge>
            <div className="max-w-3xs sm:max-w-md mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-medium">{t("headline")}</h2>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">
            {planMeta.map((meta, index) => {
              const isFeatured = meta.recommended;
              return (
                <motion.div key={index} variants={{ hidden: { opacity: 0, x: -60 }, visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.25, duration: 0.6, ease: "easeInOut" } }) }} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} className={cn("relative h-full w-full", isFeatured && "z-10 scale-102")}>
                  {isFeatured && (<div className="absolute -inset-0.5 rounded-2xl overflow-hidden"><div className="absolute -inset-full blur-xs animate-spin [animation-duration:2s] bg-conic from-blue-500 via-red-500 to-teal-400" /><div className="absolute inset-0.5 rounded-2xl bg-card" /></div>)}
                  <Card className={cn("relative h-full rounded-2xl p-8 gap-8", isFeatured ? "border-0 ring-0" : "border border-border")}>
                    <CardHeader className="p-0">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl font-medium text-primary">{t(`plans.${index}.name`)}</CardTitle>
                          {isFeatured && (<Badge className="py-1 px-3 text-sm font-medium h-7 flex items-center gap-1.5 [&>svg]:size-4!"><Flame size={16} /> {t("mostPopular")}</Badge>)}
                        </div>
                        <CardDescription className="text-base font-normal">{t(`plans.${index}.description`)}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1 gap-8 p-0">
                      <div className="flex items-baseline gap-1">
                        <span className="text-foreground text-4xl sm:text-5xl font-medium">{t(`plans.${index}.price`)}</span>
                        <span className="text-muted-foreground text-base font-normal">{t(`plans.${index}.period`)}</span>
                      </div>
                      <Separator />
                      <ul className="flex flex-col gap-4 flex-1">
                        {Array.from({ length: meta.featureCount }, (_, i) => (
                          <li key={i} className="flex items-center gap-3 text-base text-muted-foreground"><Check className="size-4 text-primary shrink-0" />{t(`plans.${index}.features.${i}`)}</li>
                        ))}
                      </ul>
                      <Button asChild className="w-full h-12" variant={isFeatured ? "default" : "outline"}>
                        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">{t("cta")}</a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground">{t("footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
