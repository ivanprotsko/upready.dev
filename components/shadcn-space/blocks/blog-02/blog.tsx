"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

type BlogData = {
  coverImage: string;
  title: string;
  date: string;
  category: string;
};

const blogData: BlogData[] = [
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-2-img-1.webp",
    title:
      "How SaaS companies can scale faster with smart design and development",
    date: "2026-10-21",
    category: "Insights",
  },
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-2-img-2.webp",
    title: "The ultimate guide to build SaaS app",
    date: "2026-10-24",
    category: "News",
  },
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-2-img-3.webp",
    title: "From idea to launch - learn how to do it",
    date: "2026-10-26",
    category: "Insights",
  },
];

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
      .format(new Date(dateString))
      .toUpperCase();
  };

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto flex flex-col gap-8 md:gap-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span>[06]</span>
              <p className="text-foreground/50">Media center</p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
                Stay updated with the latest news, insights and more
              </h2>
            </div>
          </div>
          <Button variant={"outline"} className="group w-fit h-auto px-5 py-2.5 hover:cursor-pointer">
            <span>View All</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
          </Button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogData.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={cn(index === 0 && "md:col-span-2")}
            >
              <Card className="group hover:-translate-y-0.5 transition-transform duration-300 ease-in-out border-0 ring-0 p-0 shadow-none rounded-none h-fit">
                <CardContent className="p-0">
                  <a href="#" className="flex flex-col gap-6">
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={value?.coverImage}
                        alt="blog-coverimg"
                        width={270}
                        height={200}
                        className="w-full h-full rounded-2xl max-h-52 sm:max-h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-muted dark:bg-gray-100 h-auto px-2 py-0.5 rounded-lg text-foreground dark:text-gray-950 text-sm">
                          {value?.category}
                        </Badge>
                        <div className="h-1 w-1 rounded-full bg-foreground/20" />
                        <p className="text-foreground/50">
                          {formatDate(value?.date)}
                        </p>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                        {value?.title}
                      </h2>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <span>Read more</span>
                        <ChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                        />
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
