"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  company: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Before switching, our team struggled with scattered tools and limited visibility. Now everything lives in one platform — collaboration is smoother, campaigns launch faster, and our productivity has noticeably improved.",
    author: "Jessica Thompson",
    role: "Director of Marketing at BL",
    image: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg",
  },
  {
    quote:
      "Implementation was surprisingly fast, and the impact was immediate. We gained real-time insight into our workflows and eliminated bottlenecks that had slowed us down for years.",
    author: "Linda Brown",
    role: "VP of Operations at NT",
    image: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
  },
  {
    quote:
      "What stood out instantly was the simplicity. The platform is powerful without being complicated, which made adoption across our teams effortless.",
    author: "Albert Flores",
    role: "Head of Product at SF",
    image: "https://images.shadcnspace.com/assets/profiles/albert.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg",
  },
  {
    quote:
      "Security, reliability, and performance were our top priorities — and this platform delivered on all three. It has become a critical part of our daily operations.",
    author: "Robert Fox",
    role: "Chief Technology Officer",
    image: "https://images.shadcnspace.com/assets/profiles/rough.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg",
  },
  {
    quote:
      "This is more than just software — it's an operational advantage. We’re making faster decisions, aligning teams better, and scaling without the growing pains.",
    author: "Jenny Wilson",
    role: "Marketing Manager ",
    image: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg",
  },
  {
    quote:
      "Implementation was surprisingly fast, and the impact was immediate. We gained real-time insight into our workflows and eliminated bottlenecks that had slowed us down for years.",
    author: "Linda Brown",
    role: "VP of Operations at NT",
    image: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
  },
  {
    quote:
      "Before switching, our team struggled with scattered tools and limited visibility. Now everything lives in one platform — collaboration is smoother, campaigns launch faster, and our productivity has noticeably improved.",
    author: "Jessica Thompson",
    role: "Director of Marketing at BL",
    image: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg",
  },
  {
    quote:
      "Implementation was surprisingly fast, and the impact was immediate. We gained real-time insight into our workflows and eliminated bottlenecks that had slowed us down for years.",
    author: "Linda Brown",
    role: "VP of Operations at NT",
    image: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
  },
  {
    quote:
      "What stood out instantly was the simplicity. The platform is powerful without being complicated, which made adoption across our teams effortless.",
    author: "Albert Flores",
    role: "Head of Product at SF",
    image: "https://images.shadcnspace.com/assets/profiles/albert.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg",
  },
  {
    quote:
      "Security, reliability, and performance were our top priorities — and this platform delivered on all three. It has become a critical part of our daily operations.",
    author: "Robert Fox",
    role: "Chief Technology Officer",
    image: "https://images.shadcnspace.com/assets/profiles/rough.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg",
  },
  {
    quote:
      "This is more than just software — it's an operational advantage. We’re making faster decisions, aligning teams better, and scaling without the growing pains.",
    author: "Jenny Wilson",
    role: "Marketing Manager ",
    image: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg",
  },
  {
    quote:
      "Implementation was surprisingly fast, and the impact was immediate. We gained real-time insight into our workflows and eliminated bottlenecks that had slowed us down for years.",
    author: "Linda Brown",
    role: "VP of Operations at NT",
    image: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    company: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-14">
      <Carousel opts={{ align: "start" }} className="overflow-visible">
        <div className="flex flex-col sm:gap-10 gap-12">
          <div className="max-w-7xl mx-auto sm:px-16 px-4 w-full flex lg:flex-row flex-col lg:items-end justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: -32 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }
                }
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="flex flex-col gap-2 sm:gap-4"
              >
                <h2 className="text-foreground text-3xl sm:text-4xl font-semibold">
                  Real stories. Real impact.
                </h2>
                <p className="text-muted-foreground text-lg font-normal">
                  See why high-performing teams rely on our platform to operate
                  smarter and grow faster.
                </p>
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static h-12 w-12 translate-y-0 hover:cursor-pointer" />
              <CarouselNext className="static h-12 w-12 translate-y-0 hover:cursor-pointer" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            <CarouselContent className="overflow-visible lg:-mx-58 md:-mx-32 -mx-3 md:px-0 sm:px-16">
              {defaultTestimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 basis-[85%]   py-1 pl-0 px-3"
                >
                  <Card className="h-full py-0 rounded-3xl gap-0">
                    <CardContent className="lg:px-10 px-6 lg:py-12 py-6 h-auto">
                      <div className="flex flex-col gap-10 ">
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center gap-4">
                            <img
                              src={testimonial.image}
                              alt="user"
                              className="h-12 w-12 rounded-full"
                            />
                            <div>
                              <h6 className="font-medium text-lg">
                                {testimonial.author}
                              </h6>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                          <p className="text-foreground text-base font-normal">
                            "{testimonial.quote}"
                          </p>
                        </div>
                        <div>
                          <img
                            src={testimonial.company}
                            alt="company logo"
                            className="h-6 dark:brightness-0
  dark:invert
  dark:opacity-70"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
