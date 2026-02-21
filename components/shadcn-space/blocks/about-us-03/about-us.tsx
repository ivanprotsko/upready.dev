"use client";

import { motion } from "motion/react";

type aboutusData = {
  count: string;
  title: string;
}[];

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8, bounce: 0.2 } },
};

const STAGGER_ANIMATION_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutUs = ({ aboutusData }: { aboutusData: aboutusData }) => {
  return (
    <section>
      <div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <div className="border-x border-border px-5 md:px-8 py-8 md:py-16">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={STAGGER_ANIMATION_VARIANTS}
              className="flex flex-col gap-4"
            >
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground m-1.5" />
                <span className="text-base font-normal text-muted-foreground">
                  Who we are
                </span>
              </motion.div>
              <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground">
                Experiences.
              </motion.h2>
            </motion.div>
          </div>
        </div>
        <div className="border-y border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
            <div className="border-x border-border flex flex-col lg:flex-row items-stretch">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={STAGGER_ANIMATION_VARIANTS}
                className="flex-1 w-full h-full"
              >
                {aboutusData?.map((item, index) => {
                  return (
                    <motion.div 
                      variants={FADE_UP_ANIMATION_VARIANTS}
                      key={index} 
                      className="flex flex-col w-full h-full"
                    >
                      <div className="px-5 py-8 md:p-8 flex flex-col gap-2">
                        <h3 className="text-5xl md:text-6xl font-medium text-foreground">
                          {item.count}
                        </h3>
                        <p className="text-base font-medium text-muted-foreground">
                          {item.title}
                        </p>
                      </div>
                      {index !== aboutusData.length - 1 && (
                        <div className="h-px w-full bg-border" />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="bg-[url('https://images.shadcnspace.com/assets/backgrounds/about-3-banner-img.webp')] bg-center bg-cover bg-no-repeat p-5 md:p-10 flex flex-col justify-between gap-40 lg:max-w-2xl w-full shrink-0">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src="https://images.shadcnspace.com//assets/logo/shadcnspace-logo-white.svg"
                  alt="logo"
                  width={147}
                  height={40}
                />
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl md:text-3xl font-semibold text-white tracking-tight"
                >
                  A creative video production studio creating cinematic visuals,
                  meaningful stories, and impactful content that elevates brands
                  and turns ideas into experiences.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
            <div className="border-x border-border py-8 md:py-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

