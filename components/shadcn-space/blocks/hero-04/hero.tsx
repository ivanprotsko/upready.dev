"use client";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import "@/components/shadcn-space/blocks/hero-04/hero.css";

export default function HeroContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto sm:px-16 px-4 w-full py-2 flex items-center lg:h-[calc(100vh-90px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-center">
          <div className="flex flex-col gap-4 lg:gap-6 py-10">
            <div className="flex items-center gap-1 bg-teal-400/10 border border-teal-400 px-3 py-1 rounded-full w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 p-1.5" />
              <span className="text-muted-foreground text-sm font-normal">
                Available for a new project
              </span>
            </div>

            <motion.h1
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight overflow-hidden"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    },
                  },
                }}
                className="flex items-center gap-3"
              >
                I'm Sophia
                <img
                  src="https://images.shadcnspace.com/assets/svgs/wave-icon.svg"
                  alt="wave-icon"
                  className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 inline-block animate-wave origin-bottom-right"
                />
              </motion.span>

              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.21, 0.47, 0.32, 0.98],
                      delay: 0.05,
                    },
                  },
                }}
                className="block"
              >
                UI/UX Designer
              </motion.span>
            </motion.h1>

            <p className="text-base font-normal text-muted-foreground">
              Digital designer crafting high-impact UI systems since 2008.
              Founder of SaaS Platform AB, Dashboard Product & Shadcn Library. I
              blend design precision with frontend performance.
            </p>

            <div className="w-full h-px bg-border my-4" />

            <div className="flex flex-wrap items-center gap-8">
              <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-5 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-5 w-fit overflow-hidden">
                <span className="relative z-10 transition-all duration-500">
                  See My Projects
                </span>
                <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>
              </Button>
              <div className="flex items-center gap-3">
                <Avatar className="size-10 relative">
                  <AvatarImage src="https://images.shadcnspace.com/assets/profiles/user-8.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                  <div className="absolute z-2 -bottom-2 -right-2 p-0.5 border border-border rounded-full bg-background">
                    <Zap size={12} />
                  </div>
                </Avatar>
                <p className="text-xs font-normal text-muted-foreground w-full sm:max-w-44">
                  A 30-minute call to clarify your next steps.{" "}
                  <a href="#">
                    <strong className="underline text-foreground hover:text-foreground/70 font-medium">
                      Schedule now
                    </strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="max-lg:hidden absolute right-0 top-0 h-screen max-w-1/2 w-auto overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="w-full h-full"
            >
              <img
                src="https://images.shadcnspace.com/assets/backgrounds/portfolio-hero-img.png"
                alt="hero-img"
                width={600}
                height={600}
                className="w-full h-full dark:hidden"
              />
              <img
                src="https://images.shadcnspace.com/assets/backgrounds/portfolio-hero-img-dark.png"
                alt="hero-img"
                width={600}
                height={600}
                className="w-full h-full hidden dark:block"
              />
            </motion.div>
          </div>
          <div className="hidden max-lg:block h-full w-full mb-10">
            <img
              src="https://images.shadcnspace.com/assets/backgrounds/portfolio-hero-img.png"
              alt="hero-img"
              width={600}
              height={600}
              className="w-full h-full dark:hidden"
            />
            <img
              src="https://images.shadcnspace.com/assets/backgrounds/portfolio-hero-img-dark.png"
              alt="hero-img"
              width={600}
              height={600}
              className="w-full h-full hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
