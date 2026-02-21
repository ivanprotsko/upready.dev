"use client";

import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useInView, animate } from "motion/react";
import { ArrowUp } from "lucide-react";

export type Features = {
  record: number;
  suffix?: string;
  title: string;
  description: string;
}[];

const CountUp = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const Feature = ({ featureData }: { featureData: Features }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 sm:py-20 overflow-hidden">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-6">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-5 w-full h-full"
              >
                <img
                  src="https://images.shadcnspace.com/assets/feature/feature-06.webp"
                  alt="feature-img"
                  className="rounded-2xl w-full h-72 sm:h-full object-top object-cover sm:aspect-video lg:aspect-auto"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-7 lg:ps-16 flex flex-col justify-between gap-10"
              >
                {/* content */}
                <div className="flex flex-col gap-4">
                  <motion.div variants={itemVariants}>
                    <Badge
                      variant={"outline"}
                      className="px-3 py-1 h-7 text-sm font-normal"
                    >
                      Features
                    </Badge>
                  </motion.div>
                  <div className="flex flex-col gap-5">
                    <motion.p
                      variants={itemVariants}
                      className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
                    >
                      Leading the way with innovative solutions.
                    </motion.p>
                    <motion.p
                      variants={itemVariants}
                      className="text-lg font-normal text-muted-foreground"
                    >
                      Power your business with real-time analytics, seamless
                      integrations, and cloud-ready architecture designed to
                      reduce costs, boost productivity, and deliver exceptional
                      user experiences.
                    </motion.p>
                  </div>
                  <Button
                    size={"lg"}
                    className={
                      "w-fit px-5 py-2 rounded-full text-base text-primary-foreground mt-2"
                    }
                  >
                    Get Started
                  </Button>
                </div>
                {/* stats */}
                <div className="flex items-center justify-between flex-wrap sm:justify-start lg:justify-between gap-5 sm:gap-12 lg:gap-0 lg:pe-16">
                  {featureData.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col gap-1"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                          <CountUp
                            value={feature.record}
                            suffix={feature.suffix}
                          />
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-400/10 text-teal-400">
                          <ArrowUp size={16} className="shrink-0" />
                        </div>
                      </div>
                      <p className="text-lg sm:text-xl font-medium">
                        {feature.title}
                      </p>
                      <p className="text-base font-normal text-muted-foreground">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
