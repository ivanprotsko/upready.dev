"use client";

import { Instrument_Serif, Google_Sans } from "next/font/google";
import SplashCursor from "@/components/shadcn-space/animations/splash-cursor";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["700"],
});


type HeroSectionProps = {
  headingLine1?: string;
  headingLine2?: string;
  headingItalic?: string;
  subheading?: string;
  buttonText?: string;
};

function HeroSection({
  headingLine1 = "Your MVP",
  headingLine2 = "will be ready",
  headingItalic = "in weeks, not months.",
  subheading = "Build your idea 10× faster and cheaper than a traditional agency — with minimal involvement from your side.",
  buttonText = "Discuss Your Idea",
}: HeroSectionProps) {
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
        <div className="relative w-full pt-0 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="lg:text-8xl md:text-7xl text-5xl font-medium leading-14 md:leading-20 lg:leading-24"
                >
                  <span className={`${googleSans.className} tracking-tight`}>{headingLine1}</span>
                  <br />
                  <span className={`${googleSans.className} tracking-tight`}>{headingLine2}</span>
                  <br />
                  <span
                    className={`${instrumentSerif.className} tracking-tight`}
                  >
                    {headingItalic}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="text-base font-normal max-w-2xl text-muted-foreground"
                >
                  <span className="flex  text-balance">
                  {subheading}
                  </span>
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <Button asChild className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden">
                  <a href="/contacts" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <span className="relative z-10 transition-all duration-500">
                      {buttonText}
                    </span>
                    <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
