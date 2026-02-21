"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export interface ServiceItem {
  heading: string;
  descp: string;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    heading: "Genetic screening",
    descp: "Identify potential health risks early with precise genetic testing. Our advanced diagnostics help clinicians create personalized.",
    image: "https://images.shadcnspace.com/assets/services/services-5-img-1.webp",
  },
  {
    heading: "Laboratory diagnostics",
    descp: "Our state-of-the-art laboratories deliver fast, accurate results to support timely medical decisions, improving patient.",
    image: "https://images.shadcnspace.com/assets/services/services-5-img-2.webp",
  },
  {
    heading: "Fertility & reproductive Care",
    descp: "Combining innovative technology with compassionate care, we support individuals and families throughout their fertility.",
    image: "https://images.shadcnspace.com/assets/services/services-5-img-3.webp",
  },
  {
    heading: "Preserving a woman's eggs for future",
    descp: "Preserving a woman's eggs offers the freedom to plan for the future with confidence.Using advanced medical techniques and personalized care",
    image: "https://images.shadcnspace.com/assets/services/services-5-img-4.webp",
  },
];

const Services = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="bg-muted dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 md:py-20 py-8">
        <div className="flex flex-col gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-foreground max-w-xl">
              Comprehensive care, designed for you
            </h2>
            <div className="flex flex-col items-start gap-4 sm:gap-8 max-w-md">
              <p className="text-muted-foreground text-base">
                We deliver advanced medical services powered by modern
                technology and compassionate expertise.
              </p>
              <a
                href="#"
                className="text-foreground underline font-medium hover:text-foreground/80 underline-offset-6"
              >
                Explore all services
              </a>
            </div>
          </motion.div>
          
          <Carousel 
            setApi={setApi} 
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6 pb-8 md:pb-16">
              {servicesData.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-auto w-full max-w-md">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Card className="py-0 border-none shadow-none rounded-3xl overflow-hidden h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative aspect-466/345">
                        <img 
                          src={item.image} 
                          alt={item.heading} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-4 sm:gap-8 p-6 sm:p-8 grow">
                        <div className="flex flex-col gap-3">
                          <h6 className="text-2xl md:text-3xl text-foreground font-medium">
                            {item?.heading}
                          </h6>
                          <p className="text-muted-foreground text-base sm:text-lg font-normal">
                            {item?.descp}
                          </p>
                        </div>
                        <div className="mt-auto">
                          <Button className="h-auto w-fit px-5 py-2.5 text-sm font-medium rounded-full bg-black dark:bg-white text-white dark:text-gray-950 hover:bg-black/90 hover:cursor-pointer">
                            Learn more
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex items-center justify-between gap-8 md:gap-12"
            >
              <div className="grow h-0.5 bg-foreground/10 relative overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-foreground transition-all duration-300"
                  style={{ 
                    width: `${(current / count) * 100}%` 
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full border-foreground/10 h-10 w-10 bg-white hover:bg-white shadow-sm hover:cursor-pointer" onClick={() => api?.scrollPrev()} disabled={!api?.canScrollPrev()}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-foreground/10 h-10 w-10 bg-white hover:bg-white shadow-sm hover:cursor-pointer" onClick={() => api?.scrollNext()} disabled={!api?.canScrollNext()}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
