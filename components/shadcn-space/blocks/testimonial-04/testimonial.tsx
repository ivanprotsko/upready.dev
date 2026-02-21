"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useInView, motion } from "motion/react";

export type TestimonialType = {
  id?: number;
  quote: string;
  name: string;
  role: string;
  image: string;
  performance?: {
    value: string;
    label: string;
  };
  performance2?: {
    value: string;
    label: string;
  };
};

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  /* ---------------- refs ---------------- */

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  /* ---------------- variants ---------------- */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  /* ---------------- render ---------------- */

  return (
    <section ref={sectionRef} className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-8 sm:gap-12"
          >
            {/* Header */}
            <div className="flex flex-col items-center gap-4">
              <motion.div variants={itemVariants}>
                <Badge
                  variant="outline"
                  className="h-7 px-3 py-1 text-sm font-normal"
                >
                  Testimonials
                </Badge>
              </motion.div>
              <div className="flex flex-col items-center gap-3">
                <motion.h2
                  variants={itemVariants}
                  className="text-center font-medium text-3xl sm:text-4xl lg:text-5xl"
                >
                  Stories from clients
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-center text-lg sm:text-xl text-muted-foreground max-w-xs sm:max-w-max"
                >
                  Discover how forward-thinking organizations use our platform
                </motion.p>
              </div>
            </div>
            {/* Testimonials */}
            <motion.div
              variants={itemVariants}
              className="w-full h-full bg-muted rounded-2xl p-5 sm:p-8"
            >
            {/* carousel */}
            <div>
              <Carousel>
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col lg:flex-row justify-between gap-24"
                    >
                      <div className="flex flex-col justify-between gap-6 sm:gap-20">
                        <div>
                          <p className="text-2xl sm:text-3xl text-foreground max-w-xl">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full"
                          />
                          <div>
                            <p className="text-base font-medium text-foreground">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      {/* content */}
                      <div className="lg:self-end w-full lg:max-w-xs">
                        <Card className="ring-0 shadow-none p-0 rounded-2xl w-full overflow-hidden">
                          <CardContent className="p-0">
                            {testimonial.performance && (
                              <div className="p-8 bg-primary dark:bg-white">
                                <p className="text-4xl font-medium text-white dark:text-background">
                                  {testimonial.performance.value}
                                </p>
                                <p className="text-sm text-white/50 dark:text-background/50">
                                  {testimonial.performance.label}
                                </p>
                              </div>
                            )}
                            {testimonial.performance2 && (
                              <div className="p-8 bg-card">
                                <p className="text-4xl font-medium text-foreground">
                                  {testimonial.performance2.value}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.performance2.label}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute lg:top-5 lg:right-14 lg:bottom-auto lg:left-auto lg:-translate-x-auto sm:bottom-2/5 bottom-[45%] left-1/2 -translate-x-1/2">
                  <CarouselPrevious
                    size={"lg"}
                    className={"w-10 bg-background! hover:bg-background/80! border-none shadow hover:cursor-pointer"}
                  />
                  <CarouselNext
                    size={"lg"}
                    className={"w-10 bg-background! hover:bg-background/80! border-none shadow hover:cursor-pointer"}
                  />
                </div>
              </Carousel>
            </div>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}
