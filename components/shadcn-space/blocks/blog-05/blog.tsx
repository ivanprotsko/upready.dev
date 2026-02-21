"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useInView } from "motion/react";

export function formatDate(date: string | number | Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

const Blog = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const blogData = [
    {
      coverImage: "https://images.shadcnspace.com/assets/blog/blog-5-img-1.webp",
      title: "How AI is reshaping the future of SaaS platforms",
      badge: "AI",
      date: "2026-02-13",
      authorImg: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
      authorName: "Evelyn Hayes",
      publishedDate: "2026-01-15",
    },
    {
      coverImage: "https://images.shadcnspace.com/assets/blog/blog-5-img-2.webp",
      title: "Scaling from startup to enterprise the Founder's view",
      badge: "Startup",
      date: "2026-02-20",
      authorImg: "https://images.shadcnspace.com/assets/profiles/linda.webp",
      authorName: "Elias Thorne",
      publishedDate: "2026-01-20",
    },
    {
      coverImage: "https://images.shadcnspace.com/assets/blog/blog-5-img-3.webp",
      title: "Product-led growth: Why It's dominating SaaS",
      badge: "Strategy",
      date: "2026-02-22",
      authorImg: "https://images.shadcnspace.com/assets/profiles/rough.webp",
      authorName: "Zander Stone",
      publishedDate: "2026-01-25",
    },
  ];

  return (
    <section ref={containerRef} className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 flex flex-col gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
        >
          <div className="flex flex-col items-start gap-4 max-w-xl">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground m-1.5" />
              <span className="text-base font-normal text-muted-foreground">
                Whats new?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
              Stay updated with the latest news, insights
            </h2>
          </div>
          <Button className="group h-auto px-6 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:cursor-pointer">
            <span>View All</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogData?.map((data, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.15, 
                  ease: "easeOut" 
                }}
              >
              <Card key={index} className="bg-muted p-0 border-0 ring-0 shadow-none rounded-2xl hover:-rotate-1 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0 overflow-hidden">
                  <div>
                    <a href="#">
                      <img src={data?.coverImage} alt="blog-coverimg" width={368} height={240} className="w-full h-auto" />
                    </a>
                    <div className="px-4 py-6 sm:p-6 flex flex-col gap-8 sm:gap-16">
                      <div className="flex flex-col items-start gap-4">
                        <a href="#">
                          <h3 className="text-xl font-medium text-foreground">
                            {data?.title}
                          </h3>
                        </a>
                        <div className="flex items-center">
                          <p className="text-sm font-normal text-muted-foreground">
                            {formatDate(data?.date)}
                          </p>
                          <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2" />
                          <Badge className="px-2 py-0.5 text-sm font-normal bg-background text-foreground">
                            {data?.badge}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={data?.authorImg} alt={data?.authorName} />
                          <AvatarFallback>{data?.authorName?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <p className="text-base font-medium text-foreground">{data?.authorName}</p>
                          <p className="text-sm font-normal text-muted-foreground">{formatDate(data?.publishedDate)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
