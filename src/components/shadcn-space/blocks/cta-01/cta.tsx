"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const TELEGRAM_URL = "https://t.me/ivanprotsko";

const CTA = () => {
  const t = useTranslations("cta");

  return (
    <section>
      <div className="sm:py-20 py-8">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="relative overflow-hidden min-h-96 flex items-center justify-center px-6 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 dark:before:from-sky-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-300/10 dark:before:to-60% before:bg-linear-to-r before:rounded-full before:-z-10">
            <motion.div initial={{ y: "5%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col gap-6 items-center mx-auto">
              <div className="flex flex-col gap-3 items-center text-center">
                <h2 className="text-3xl md:text-5xl font-medium">{t("headline")}</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">{t("subtitle")}</p>
              </div>
              <Button asChild className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 transition-all duration-500">{t("button")}</span>
                  <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">{t("subtext")}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
