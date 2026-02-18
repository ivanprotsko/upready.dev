"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const techStacks = [
  ["Next.js", "Supabase", "Stripe", "Vercel"],
  ["React", "Python", "OpenAI", "PostgreSQL"],
  ["Next.js", "Prisma", "Stripe Connect", "Vercel"],
];

const Portfolio = () => {
  const t = useTranslations("portfolio");

  return (
    <section id="portfolio" className="bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-8 sm:gap-12 justify-center items-center w-full">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Badge variant="outline" className="py-1 px-3 text-sm font-normal h-7">{t("badge")}</Badge>
            <h2 className="text-foreground text-3xl sm:text-5xl font-semibold text-center max-w-2xl">{t("headline")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {techStacks.map((tech, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.3, duration: 0.6, ease: "easeInOut" }} className="group">
                <Card className="p-0 ring-0 overflow-hidden shadow-none border border-border h-full">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">{t(`projects.${index}.title`)}</span>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="text-foreground text-lg font-semibold tracking-tight">{t(`projects.${index}.title`)}</h3>
                      <p className="text-xs font-medium text-accent">{t(`projects.${index}.tag`)}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t(`projects.${index}.description`)}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {tech.map((name) => (<Badge key={name} variant="outline" className="text-xs font-normal px-2 py-0.5">{name}</Badge>))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
