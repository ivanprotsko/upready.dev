"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const portfolioData = [
  {
    id: 1,
    title: "Studiova - Digital Growth Platform",
    description: "Built with flexibility in mind, it supports seamless collaboration, streamlined campaign management, and measurable performance — empowering teams to deliver impactful customer experiences.",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-4-img-1.webp",
    label: "View Platform",
  },
  {
    id: 2,
    title: "DigitalArc - Creative Production Studio",
    description: "A comprehensive solution for creative teams to manage assets, timelines, and client feedback in one place. Designed for efficiency and high-end output.",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-4-img-2.webp",
    label: "Explore Studio",
  },
  {
    id: 3,
    title: "EcoSphere - Sustainability Dashboard",
    description: "Monitor and analyze environmental impact in real-time. Our dashboard provides actionable insights to help organizations achieve their sustainability goals.",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-4-img-3.webp",
    label: "View Dashboard",
  },
  {
    id: 4,
    title: "EcoSphere - Sustainability Dashboard",
    description: "Monitor and analyze environmental impact in real-time. Our dashboard provides actionable insights to help organizations achieve their sustainability goals.",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-4-img-4.webp",
    label: "View Dashboard",
  },
];

const Portfolio = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!api) return;
    const snap = api.selectedScrollSnap();
    setSelectedIndex(snap);
    setCurrent(snap % portfolioData.length);
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  // Re-initialize Embla when slide selection changes to handle width shifts
  React.useEffect(() => {
    if (api) {
      const timer = setTimeout(() => {
        api.reInit();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [api, selectedIndex]);

  const activeData = portfolioData[current];
  const duplicatedData = [...portfolioData, ...portfolioData, ...portfolioData];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border px-5 md:px-8 py-8 lg:py-16">
          <div className="flex flex-row items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground max-w-xl">
              We are making products for the real world use case
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-border/60 hover:bg-accent transition-all hover:cursor-pointer"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-border/60 hover:bg-accent transition-all hover:cursor-pointer"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <div className="border-x border-border p-5 md:p-8 space-y-8">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
                containScroll: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {duplicatedData.map((item, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <CarouselItem
                      key={`${item.id}-${index}`}
                      className={cn(
                        "pl-4 transition-all duration-700 ease-in-out",
                        isActive ? "basis-[75%]" : "basis-[12.5%]"
                      )}
                    >
                      <div className="relative overflow-hidden group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={cn(
                            "w-full h-[300px] md:h-[480px] object-cover transition-all duration-700",
                            !isActive && "brightness-75 grayscale-[0.2]"
                          )}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            {/* Active Slide Metadata */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
              <div className="max-w-2xl">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {activeData.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {activeData.description}
                </p>
              </div>
              <Button 
                variant="outline" 
                className="rounded-xl px-6 py-3.5 h-auto border-border hover:bg-black hover:text-white transition-all group shrink-0 hover:cursor-pointer"
              >
                {activeData.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
