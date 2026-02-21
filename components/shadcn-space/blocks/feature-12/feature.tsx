"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import { motion } from "motion/react";

const Feature = () => {
  const features = [
    { label: "Routing Setup", active: false },
    { label: "Layout System", active: false },
    { label: "Markdown Support", active: false },
    { label: "Dark Mode", active: false },
    { label: "Utility Styling", active: true },
    { label: "SEO Defaults", active: false },
    { label: "404 page", active: false },
    { label: "GitHub Links", active: false },
    { label: "Custom 404 Page", active: false },
    { label: "Deployment", active: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16 py-10 sm:py-16 overflow-hidden"
        >
          <div className="flex flex-col gap-8 md:gap-12">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-semibold text-center"
            >
              Designed for developer flow
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row lg:flex-col h-full gap-2 sm:gap-6">
                <motion.div variants={itemVariants} className="h-full">
                  <Card className="py-10 h-full shadow-xs">
                    <CardContent className="flex flex-col gap-4 sm:gap-8 px-10">
                      <img
                        src="https://images.shadcnspace.com/assets/svgs/feature-11-icon-1.svg"
                        alt="icon"
                        width={32}
                        height={32}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-xl font-semibold">
                          Built with Tailwind
                        </p>
                        <p className="text-sm sm:text-lg font-normal text-muted-foreground">
                          Fully customizable styling with utility-first CSS.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants} className="h-full">
                  <Card className="py-10 h-full shadow-xs">
                    <CardContent className="flex flex-col gap-4 sm:gap-8 px-10">
                      <img
                        src="https://images.shadcnspace.com/assets/svgs/feature-11-icon-2.svg"
                        alt="icon"
                        width={32}
                        height={32}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-xl font-semibold">Write in MDX</p>
                        <p className="text-sm sm:text-lg font-normal text-muted-foreground">
                          Mix Markdown and JSX for expressive documentation.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <Card className="p-0 gap-0 shadow-xs overflow-hidden">
                  <CardHeader className="bg-sky-400/3 ps-8 py-10 pr-0">
                    <div className="flex flex-wrap gap-3 min-w-sm sm:min-w-2xl">
                      {features.map((item, index) => (
                        <Badge
                          key={index}
                          className={`h-auto [&>svg]:size-5! text-base font-medium text-muted-foreground bg-muted px-4 py-1.5 flex items-center gap-2 ${
                            item.active
                              ? "border border-blue-500 bg-background text-blue-500"
                              : ""
                          }`}
                        >
                          <CircleCheck
                            className={
                              item.active
                                ? "size-5 fill-blue-500 stroke-background"
                                : "size-5 fill-foreground/20 stroke-muted"
                            }
                          />
                          <span>{item.label}</span>
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 sm:gap-8 px-10 py-8 border-t border-border">
                    <img
                      src="https://images.shadcnspace.com/assets/svgs/feature-11-icon-3.svg"
                      alt="icon"
                      width={32}
                      height={32}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-semibold">Fast Setup</p>
                      <p className="text-sm sm:text-lg font-normal text-muted-foreground">
                        Get up and running in minutes with built-in routing,
                        layouts, SEO, and styling—all preconfigured and ready.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
