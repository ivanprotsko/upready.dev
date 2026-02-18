"use client";

import { Instrument_Serif } from "next/font/google";
import SplashCursor from "@/components/shadcn-space/animations/splash-cursor";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const TELEGRAM_URL = "https://t.me/ivanprotsko";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section>
      <div className="w-full h-full relative">
        <div className="absolute inset-0 -z-1 pointer-events-none">
          <SplashCursor
            SIM_RESOLUTION={128}
            DYE_RESOLUTION={1440}
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
          />
        </div>
        <div className="relative w-full pt-0 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-sm font-medium tracking-widest text-accent uppercase"
                >
                  {t("badge")}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="lg:text-8xl md:text-7xl text-5xl font-medium leading-14 md:leading-20 lg:leading-24"
                >
                  {t("headline1")}{" "}
                  <span className={`${instrumentSerif.className} tracking-tight`}>
                    {t("headline2")}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="text-base font-normal max-w-2xl text-muted-foreground"
                >
                  {t("subtitle")}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center flex-col md:flex-row justify-center gap-4"
              >
                <Button asChild className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden">
                  <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 transition-all duration-500">{t("primaryCta")}</span>
                    <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </Button>
                <Button variant="outline" asChild className="rounded-full h-12 px-6">
                  <a href="#pricing">{t("secondaryCta")}</a>
                </Button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-center text-sm text-muted-foreground"
              >
                {t("subtext")}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
