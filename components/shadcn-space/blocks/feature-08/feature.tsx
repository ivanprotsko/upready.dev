"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export type Features = {
  tab_title: string;
  tab_description: string;
  content: string;
  percentage: string;
}[];

const Feature = ({ featureData }: { featureData: Features }) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return (
    <section className="bg-muted">
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16 py-10 sm:py-16 overflow-hidden">
          <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }} className="flex flex-col gap-6 max-w-3xl">
            <Badge className="bg-teal-400/10 text-muted-foreground text-sm font-normal h-auto px-3 py-1 rounded-lg">
              Why Choose Our Platform
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Discover the core advantages of our SaaS platform
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Carousel setApi={setApi}>
              <CarouselContent>
                {featureData.map((feature, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col lg:flex-row justify-between py-8 sm:py-12 gap-8 lg:gap-32">
                      <div className="flex flex-col justify-between gap-6 lg:gap-16 max-w-sm w-full">
                        <div className="flex flex-col gap-6">
                          <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-medium text-foreground">
                              {feature.tab_title}
                            </h3>
                            <p className="text-base sm:text-lg text-muted-foreground">
                              {feature.tab_description}
                            </p>
                          </div>
                          <Button className="h-auto px-5 py-2.5 sm:px-6 sm:py-3.5 w-fit rounded-full">
                            Learn More
                          </Button>
                        </div>
                        <div className="flex items-center gap-4">
                          {featureData.map((_, index) => {
                            const isActive = current === index;
                            return (
                              <div
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <button
                                  onClick={() => api?.scrollTo(index)}
                                  className={`text-base font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                                >
                                  {String(index + 1).padStart(2, "0")}
                                </button>

                                {index < featureData.length - 1 && (
                                  <span
                                    className={`h-0.5 w-8 transition-colors ${isActive ? "bg-foreground block" : "bg-muted-foreground/40 hidden"}`}
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                        <Card className="w-full rounded-3xl shadow-md justify-between border-0 ring-0 gap-20">
                          <CardContent>
                            <p className="text-xl font-normal">
                              {feature.content}
                            </p>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between">
                            <p className="text-base font-normal">Product Team</p>
                            <a href="#" className="text-base font-medium hover:text-foreground/80">
                              More
                            </a>
                          </CardFooter>
                        </Card>
                        <Card className="w-full rounded-3xl shadow-md py-0 gap-0 border-0 ring-0 overflow-hidden">
                          <div className="grid grid-rows-2">
                          <CardContent className="bg-teal-400 p-6">
                            <p className="text-lg font-medium">
                              Customer Satisfaction
                            </p>
                          </CardContent>
                          <CardFooter className="p-6 flex justify-between items-start">
                            <div className="flex items-end gap-2">
                              <p className="text-8xl font-semibold">
                                {feature.percentage}
                              </p>
                              <span className="text-4xl font-semibold mb-2">%</span>
                            </div>
                            <span className="text-sm font-normal text-muted-foreground">
                              Success <br/>Rate
                            </span>
                          </CardFooter>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
