"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "@/components/shadcn-space/blocks/feature-05/Sparkles";
import { CircleCheck } from "lucide-react";

const RatingCard = () => {
  return (
    <Card className="ps-5 pe-6 py-4 bg-background">
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <img
            src="https://images.shadcnspace.com/assets/profiles/user-1.jpg"
            alt="rating"
            width={30}
            height={30}
            className="object-cover rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p className="text-xs font-normal text-muted-foreground">
              20k+ reviews
            </p>
            <img
              src="https://images.shadcnspace.com/assets/feature/feature-05-rating.svg"
              alt="rating"
              width={70}
              height={14}
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BookSlot = () => {
  return (
    <Card className="px-3.5 py-5 bg-background">
      <CardContent className="p-0">
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://images.shadcnspace.com/assets/profiles/user-2.jpg"
            alt="rating"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
          <div className="text-center">
            <p className="text-xs font-normal leading-relaxed">
              Get consultancy
            </p>
            <p className="text-xs font-normal text-muted-foreground max-w-32 leading-normal">
              Get in touch with best SEO experts
            </p>
          </div>
          <Button
            size={"xs"}
            className="w-fit rounded-full px-3.5 py-1.5 text-xs leading-0 hover:cursor-pointer"
          >
            Book a slot
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Feature = ({ featureData }: { featureData: string[] }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 lg:gap-6">
            {/* Content Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8 sm:gap-10 lg:pe-12"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-5">
                  <motion.div variants={itemVariants}>
                    <Badge
                      variant={"outline"}
                      className="px-3 py-1 h-7 text-sm font-normal"
                    >
                      Improved quality
                    </Badge>
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl font-semibold"
                  >
                    Leading the way with great innovative solution.
                  </motion.p>
                  <motion.p
                    variants={itemVariants}
                    className="text-base font-normal text-muted-foreground"
                  >
                    Power your business with real-time analytics, seamless
                    integrations, and cloud-ready architecture designed to
                    reduce costs, boost productivity, and deliver exceptional
                    user experiences at scale.
                  </motion.p>
                </div>
                <motion.div variants={itemVariants}>
                  <Button size={"lg"} className="w-fit rounded-full px-5 py-2">
                    Get Started
                  </Button>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <Separator orientation="horizontal" />
              </motion.div>

              {/* Feature List */}
              <motion.div variants={itemVariants}>
                <div className="flex flex-col gap-4">
                  {featureData.map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <CircleCheck
                        size={20}
                        className="shrink-0 text-foreground"
                      />
                      <p className="text-base text-muted-foreground">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center relative"
            >
              <div className="w-full aspect-square max-h-[456px] max-w-[456px] bg-primary/10 rounded-full flex items-center justify-center relative">
                <img
                  src="https://images.shadcnspace.com/assets/feature/feature-05-user.webp"
                  alt="user-img"
                  className="w-full h-full object-cover rounded-full absolute"
                />
                {/* rating */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-20 -left-5 scale-80 sm:scale-100"
                >
                  <RatingCard />
                </motion.div>
                {/* book slot */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-10 -right-10 hidden sm:block"
                >
                  <BookSlot />
                </motion.div>
                {/* icon */}
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  src="https://images.shadcnspace.com/assets/feature/feature-05-shield.svg"
                  alt="icon"
                  width={80}
                  height={80}
                  className="object-cover absolute bottom-0 sm:bottom-10 left-8 scale-80 sm:scale-100"
                />
                {/* chart */}
                <motion.img
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  src="https://images.shadcnspace.com/assets/feature/feature-05-chart.svg"
                  alt="icon"
                  width={149}
                  height={119}
                  className="object-cover absolute bottom-0 right-0 sm:bottom-5 sm:right-5 rounded-2xl scale-80 sm:scale-100"
                />
                {/* sparkles */}
                <Sparkles
                  sparkles={[
                    {
                      position: "top-left",
                      color: "var(--primary)",
                    },
                    {
                      position: "middle-left",
                      color: "var(--destructive)",
                    },
                    {
                      position: "bottom-right",
                      color: "var(--color-amber-300)",
                    },
                  ]}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
