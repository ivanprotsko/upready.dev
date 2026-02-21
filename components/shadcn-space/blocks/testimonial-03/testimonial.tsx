"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  TestimonialCard,
  type TestimonialType,
} from "@/components/shadcn-space/blocks/testimonial-03/testimonial-card";
import { useInView, motion } from "motion/react";
import { cn } from "@/lib/utils";


export default function Testimonials({ testimonials }: { testimonials: TestimonialType[] }) {
  /* ---------------- refs ---------------- */

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  /* ---------------- carousel state ---------------- */

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  /* ---------------- helpers ---------------- */

  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1280) return 3; // xl
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // mobile
  };

  /* ---------------- pagination sync ---------------- */

  useEffect(() => {
    if (!api) return;

    const syncPagination = () => {
      const perView = getSlidesPerView();
      const selectedSnap = api.selectedScrollSnap();

      setTotalPages(Math.ceil(testimonials.length / perView));
      setCurrentPage(Math.floor(selectedSnap / perView));
    };

    syncPagination();

    api.on("select", syncPagination);
    api.on("settle", syncPagination); // important with skipSnaps
    window.addEventListener("resize", syncPagination);

    return () => {
      window.removeEventListener("resize", syncPagination);
    };
  }, [api, testimonials.length]);

  /* ---------------- dot navigation ---------------- */

  const handleDotClick = (pageIndex: number) => {
    const perView = getSlidesPerView();
    api?.scrollTo(pageIndex * perView);
  };

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
          className="flex flex-col gap-8 sm:gap-16"
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="h-7 px-3 py-1 text-sm font-normal"
              >
                Client Testimonials
              </Badge>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="max-w-2xl text-center text-3xl font-medium sm:text-4xl lg:text-5xl text-foreground"
            >
              See how teams are winning with our platform
            </motion.h2>
          </div>

          {/* Carousel */}
          <div className="relative w-full">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
                skipSnaps: true,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent
                className="-ml-4 xl:-ml-6"
              >
                {testimonials.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 xl:pl-6 md:basis-1/2 xl:basis-1/3 flex"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="w-full flex"
                    >
                      <TestimonialCard data={item} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Pagination Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  disabled={currentPage === index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "h-2 rounded-full transition-[width] duration-300 ease-out hover:cursor-pointer",
                    currentPage === index
                      ? "w-6 bg-primary"
                      : "w-2 bg-primary/20"
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
