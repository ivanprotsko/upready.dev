"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <main ref={sectionRef}>
      <div className="relative overflow-hidden bg-background">
        <div className="relative z-10 max-w-7xl mx-auto sm:px-16 px-4 w-full">
          {/* Content */}
          <div className="flex flex-col text-center items-center gap-6 max-w-3xl mx-auto py-10 sm:py-16">
            <div className="w-fit border border-border rounded-full p-1 pe-3 flex items-center gap-2">
              <span className="text-sm bg-gray-50 text-gray-950 px-2 rounded-full">
                Live
              </span>
              <span className="text-sm text-foreground">Real-time data</span>
            </div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-medium text-foreground"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.012,
                  },
                },
              }}
            >
              {"Build deeper connections with intelligent insights"
                .split("")
                .map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.2 } },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
            </motion.h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-sm mx-auto">
              Create stronger relationships with smarter Insights, Get started
              now.
            </p>

            <div className="flex gap-2 bg-white/10 p-1.5 rounded-full border border-white/10">
              <Button className="px-5 py-2.5 rounded-full cursor-pointer">Get Started</Button>
              <Button className="bg-gray-950 hover:bg-gray-950/80 text-gray-200 px-5 py-2.5 rounded-full border border-border cursor-pointer">
                How It Works
              </Button>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="relative z-10">
            <img
              src="https://images.shadcnspace.com/assets/hero-img/hero-11-bannerimg.png"
              alt="hero-banner-img"
              className="w-full h-auto"
            />
          </div>
        </div>
        <img
          src="https://images.shadcnspace.com/assets/backgrounds/hero-11-bg.jpg"
          alt=""
          className="absolute bottom-0 left-0 w-full max-h-3/4 h-auto object-cover object-top"
        />
      </div>
    </main>
  );
};

export default HeroSection;
