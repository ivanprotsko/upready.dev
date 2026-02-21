"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type BlogData = {
  coverImage: string;
  title: string;
  descp: string;
};

const blogData: BlogData[] = [
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-3-img-1.webp",
    title: "Digital Strategy & Layouts",
    descp:
      "We create conversion-driven layouts and visual structures that turn visitors into customers while keeping your brand visually powerful.",
  },
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-3-img-2.webp",
    title: "The ultimate guide to build SaaS app",
    descp:
      "We create conversion-driven layouts and visual structures that turn visitors into customers while keeping your brand visually powerful.",
  },
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-3-img-1.webp",
    title: "Digital Strategy & Layouts",
    descp:
      "We create conversion-driven layouts and visual structures that turn visitors into customers while keeping your brand visually powerful.",
  },
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-3-img-2.webp",
    title: "The ultimate guide to build SaaS app",
    descp:
      "We create conversion-driven layouts and visual structures that turn visitors into customers while keeping your brand visually powerful.",
  },
];

const Blog = () => {
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
    <section>
      <div className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <div className="border-x border-border px-5 md:px-8 py-8 md:py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground m-1.5" />
                  <span className="text-base font-normal text-muted-foreground">
                    Whats cooking?
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground">
                  Blogs.
                </h2>
              </motion.div>
            </div>
          </div>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: false }} className="w-full">
          <div className="border-y border-border">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
              <div className="border-x border-border relative">
                <CarouselContent className="ml-0">
                  {blogData.map((blog, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-0 basis-full md:basis-1/2"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                        className="h-full"
                      >
                        <Card className="py-5 border-0 ring-0 shadow-none rounded-none h-full bg-transparent">
                          <CardContent className="p-0 flex flex-col sm:flex-row h-full border-y border-border justify-between">
                            <div className="flex flex-col justify-between gap-6 p-6 xl:p-10 sm:flex-1">
                              <h3 className="text-2xl font-medium text-foreground">
                                {blog?.title}
                              </h3>
                              <p className="text-sm font-normal text-muted-foreground">
                                {blog?.descp}
                              </p>
                            </div>
                            <div className="w-full sm:w-1/2 h-48 sm:h-full border-l border-border">
                              <img
                                src={blog?.coverImage}
                                alt="blog-coverimg"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
            <div className="border-x border-border px-12 py-6">
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
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Blog;
