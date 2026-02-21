"use client";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";

type SocialLink = {
  id: number;
  icon: LucideIcon;
  url: string;
};

type HeroSectionProps = {
  socialLinks?: SocialLink[];
};

export default function HeroSection({ socialLinks }: HeroSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="border-y border-border" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border">
          <div className="relative z-1 px-4 py-10 sm:p-16">
            <div className="relative flex flex-col gap-8 z-1 xl:px-12">
              <div className="relative flex items-center">
                <img
                  src={
                    "https://images.shadcnspace.com/assets/profiles/hero-4-img.png"
                  }
                  alt="user-img"
                  width={112}
                  height={112}
                  className="rounded-full relative z-10"
                />
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                  }}
                  className="flex items-center gap-1.5 ml-2 relative z-0"
                >
                  <motion.div
                    variants={{
                      hidden: { x: 40, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-12 h-28 overflow-hidden shrink-0 -rotate-180"
                  >
                    <div className="w-28 h-28 rounded-full bg-orange-400" />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { x: 60, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-9 h-28 overflow-hidden shrink-0 -rotate-180"
                  >
                    <div className="w-28 h-28 rounded-full bg-orange-400" />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { x: 80, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-5 h-28 overflow-hidden shrink-0 -rotate-180"
                  >
                    <div className="w-28 h-28 rounded-full bg-orange-400" />
                  </motion.div>
                </motion.div>
              </div>
              <div className="space-y-4 max-w-3xl">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-base font-normal text-muted-foreground">
                    Available for hire
                  </p>
                </motion.div>
                <motion.h1
                  className="text-3xl md:text-4xl font-normal tracking-tight"
                  initial="hidden"
                  whileInView="visible"
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
                  {"Hey there. I'm Elena — UX/UI designer based in Brooklyn, "
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: { duration: 0.2 },
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  <motion.span
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.4 } },
                    }}
                    className="bg-[linear-gradient(90deg,rgba(243,202,77,0.4)_0%,rgba(243,202,77,0.05)_100%)]"
                  >
                    currently crafting
                  </motion.span>{" "}
                  {"digital products at Shadcn Space, a react blocks library."
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: { duration: 0.2 },
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                </motion.h1>
              </div>
              <p className="font-normal text-muted-foreground">
                Previously at ABC Studio, and creator of Design Kit and
                Dashboard Kit.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Button className="flex items-center gap-2 h-auto px-6 py-3.5 rounded-full">
                  <Zap size={16} />
                  See My Work
                </Button>
                <div className="flex items-center gap-3">
                  {socialLinks?.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:bg-muted border border-border p-3 rounded-full"
                    >
                      <link.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
