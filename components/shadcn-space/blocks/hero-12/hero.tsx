"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { CardContainer } from "@/components/ui/3d-card";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="sm:pt-24 bg-[url('https://images.shadcnspace.com/assets/backgrounds/hero-12-rays-bg.webp')] bg-cover bg-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 py-8 sm:py-0 w-full h-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2">
          <div className="flex flex-col gap-6">
            <div
              className="group relative flex w-fit items-center justify-center overflow-hidden rounded-full p-[1px] bg-white/10
             transition-shadow duration-300 hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.6)]
             focus-within:shadow-[0_0_24px_-6px_rgba(59,130,246,0.6)]"
            >
              {/* Animated border */}
              <motion.div
                aria-hidden
                className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_60%,#3b82f6_85%,transparent_100%)]
                transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Content */}
              <div className="relative flex items-center gap-2 rounded-full bg-background backdrop-blur-xl px-2 py-1.5">
                <Badge className="h-6 bg-blue-500 text-xs font-semibold text-white border border-border shadow-sm transition-colors hover:bg-blue-600 leading-0">
                  Top
                </Badge>
                <span className="text-xs font-medium text-foreground tracking-tight whitespace-nowrap">
                  #1 Agency in New York
                </span>
              </div>
            </div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              viewport={{ once: true }}
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
              {"We design powerful, high impact SaaS solutions"
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

            <p className="text-base sm:text-lg text-white/50 max-w-md">
              Where sleek design meets powerful SaaS innovation. Schedule a call
              with us now.
            </p>

            <div className="flex items-center gap-2">
              <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-foreground px-4 py-2.5 sm:px-6 sm:py-3.5 h-10 sm:h-12 rounded-lg w-fit transition-transform active:scale-95 cursor-pointer">
                <Phone size={16} className="shrink-0" /> Book a call
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-gray-950 px-6 py-2.5 sm:px-6 sm:py-3.5 h-10 sm:h-12 rounded-lg w-fit transition-transform active:scale-95 cursor-pointer">
                View Pricing
              </Button>
            </div>
          </div>

          <div className="relative lg:h-screen lg:max-h-[641px]">
            <div className="flex items-center justify-center lg:hidden">
              <img
                src="https://images.shadcnspace.com/assets/backgrounds/hero-12-dash.webp"
                alt="hero"
                width={845}
                height={641}
              />
            </div>
            <CardContainer
              containerClassName="hidden lg:flex"
              className="w-full h-full"
            >
              <img
                src="https://images.shadcnspace.com/assets/backgrounds/hero-12-dash.webp"
                alt="hero"
                width={845}
                height={641}
                className="lg:absolute lg:top-20 lg:-right-40 lg:scale-151"
              />
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
