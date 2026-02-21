"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const STAGGER_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type PortfolioData = {
  portfolio_image: string;
  portfolio_title: string;
  portfolio_description: string;
  portfolio_tags: string;
};

const portfolioData: PortfolioData[] = [
  {
    portfolio_image: "https://images.shadcnspace.com/assets/portfolio/portfolio-2-img-1.webp",
    portfolio_title: "Cypgo - Secure digital asset",
    portfolio_description: "Crypgo is a next-generation cryptocurrency platform designed for fast, secure, and transparent trading. With advanced encryption, real-time market data, and an intuitive interface, it empowers users to trade confidently.",
    portfolio_tags: "Crpyto Project",
  },
  {
    portfolio_image: "https://images.shadcnspace.com/assets/portfolio/portfolio-2-img-2.webp",
    portfolio_title: "Awake - Agency template",
    portfolio_description: "Awake is a modern agency template designed to help you showcase your agency's work and services. With a clean and professional design, it's perfect for any agency looking to make a strong impression.",
    portfolio_tags: "Awake Project",
  },
  {
    portfolio_image: "https://images.shadcnspace.com/assets/portfolio/portfolio-2-img-3.webp",
    portfolio_title: "Optura - Agency template",
    portfolio_description:  "Optura is a modern agency template designed to help you showcase your agency's work and services. With a clean and professional design, it's perfect for any agency looking to make a strong impression.",
    portfolio_tags: "Optura Project",
  },
];

const Portfolio = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const progress = (current / count) * 100;

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border px-5 md:px-8 py-8 md:py-12 overflow-hidden">
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center md:justify-end gap-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground m-1.5" />
            <span className="text-base font-normal text-muted-foreground">
              Featured Projects
            </span>
          </motion.div>
        </div>
      </div>
      <Carousel setApi={setApi} className="border-y border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <div className="border-x border-border overflow-hidden">
            <CarouselContent>
              {portfolioData?.map((item, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6">
                      <motion.div
                        variants={STAGGER_CONTAINER_VARIANTS}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="px-5 md:px-8 py-5 flex flex-col gap-4 md:gap-6 md:max-w-2/5"
                      >
                        <motion.div
                          variants={FADE_UP_ANIMATION_VARIANTS}
                          className="flex items-center gap-1.5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground m-1.5" />
                          <span className="text-base font-normal text-muted-foreground">
                            {item.portfolio_tags}
                          </span>
                        </motion.div>
                        <motion.h2
                          variants={FADE_UP_ANIMATION_VARIANTS}
                          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground tracking-tight"
                        >
                          {item.portfolio_title}
                        </motion.h2>
                        <motion.p
                          variants={FADE_UP_ANIMATION_VARIANTS}
                          className="text-muted-foreground text-base font-normal leading-relaxed"
                        >
                          {item.portfolio_description}
                        </motion.p>
                        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
                          <Button
                            variant="outline"
                            className="w-fit h-auto px-6 py-3.5 rounded-lg hover:cursor-pointer"
                          >
                            Learn More
                          </Button>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="w-full h-auto overflow-hidden"
                      >
                        <img
                          src={item.portfolio_image}
                          alt="portfolio-img"
                          width={662}
                          height={561}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border p-5 md:p-8 lg:p-12 overflow-hidden">
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-border hover:bg-muted/50 transition-colors hover:cursor-pointer"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm font-normal text-foreground hidden sm:inline">
                Previous
              </span>
            </div>

            <div className="flex-1 max-w-24 sm:max-w-52 h-[0.5px] bg-border relative rounded-xs">
              <div
                className="absolute h-1 rounded-full left-0 top-1/2 -translate-y-1/2 bg-foreground transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-normal text-foreground hidden sm:inline">
                Next
              </span>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-border hover:bg-muted/50 transition-colors hover:cursor-pointer"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


