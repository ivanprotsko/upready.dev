"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./style.css";

export type Features = {
  tab_name: string;
  tab_badge: string;
  tab_title: string;
  tab_description: string;
  tab_image: string;
}[];

const Feature = ({ featureData }: { featureData: Features }) => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16 py-10 sm:py-16 overflow-hidden flex flex-col items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center gap-3 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-semibold">
              Designed to perform at scale
            </h2>
            <p className="text-base md:text-lg font-normal text-muted-foreground max-w-xl">
              Crafted for exceptional performance, made to deliver superior
              performance at larger scale
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            <Tabs
              defaultValue={featureData[0].tab_name}
              className="w-full h-auto gap-3"
            >
              <div className="flex justify-center">
                <TabsList className="bg-muted/50 p-1 h-auto! rounded-full w-full overflow-x-auto flex-nowrap justify-start sm:justify-center scrollbar-hide">
                  {featureData.map((feature, index) => (
                    <TabsTrigger
                      key={index}
                      value={feature.tab_name}
                      className="px-6 py-2 h-auto rounded-full border-none dark:data-active:bg-background data-active:shadow-sm text-base font-medium transition-all text-foreground shrink-0 hover:cursor-pointer"
                    >
                      {feature.tab_name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <AnimatePresence mode="wait">
                {featureData.map((feature, index) => (
                  <TabsContent
                    key={index}
                    value={feature.tab_name}
                    className="mt-0 outline-none"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Card className="border-none ring-0 shadow-none p-0 rounded-3xl">
                        <CardContent className="bg-muted p-0">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 items-center p-2">
                            <div className="flex flex-col items-start gap-4 p-4 md:py-6 md:px-14">
                              <Badge
                                variant={"outline"}
                                className="h-auto bg-background text-sm font-normal px-2 py-0.5"
                              >
                                {feature.tab_badge}
                              </Badge>
                              <h6 className="text-2xl md:text-4xl font-semibold text-foreground">
                                {feature.tab_title}
                              </h6>
                              <p className="text-sm md:text-base font-normal text-muted-foreground">
                                {feature.tab_description}
                              </p>
                              <Button className="group flex items-center gap-2 h-auto px-5 py-2.5 rounded-full hover:cursor-pointer">
                                <span>Learn More</span>
                                <ArrowRight className="group-hover:translate-x-1 ease-in-out transition-all" />
                              </Button>
                            </div>
                            <div className="bg-[url('https://images.shadcnspace.com/assets/feature/feature-vector-img.png')] object-cover bg-center h-full w-full bg-cover bg-no-repeat px-6 py-10 md:px-9 md:py-16 rounded-2xl">
                              <img
                                src={feature.tab_image}
                                alt={feature.tab_name}
                                width={452}
                                height={237}
                                className="w-full h-full"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
