"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUp, Link2, LucideIcon, Settings, Zap } from "lucide-react";
import { motion } from "motion/react";

export type Features = {
  icon: LucideIcon;
  content: string;
}[];

export type PortfolioData = {
  image: string;
  name: string;
}[];

const featureData: Features = [
  {
    icon: Link2,
    content: "Designed for crypto trading platforms"
  },
  {
    icon: Zap,
    content: "Kickstart your crypto website today"
  },
  {
    icon: Settings,
    content: "Launch your blockchain platform today"
  }
];

const Feature = ({
  portfolioData,
}: {
  portfolioData: PortfolioData;
}) => {
  return (
    <section className="dark bg-background">
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16 py-10 sm:py-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 sm:gap-8"
            >
              <div className="flex flex-col gap-4">
                <p className="text-base font-normal text-foreground">
                  Why choose <span className="text-teal-400">shadcnspace.</span>
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
                  Features of the crypto framer mobile application
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featureData.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-teal-400/10 rounded-full">
                      <feature.icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <p className="text-base font-normal text-muted-foreground max-w-44">
                      {feature.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative flex items-center justify-center">
              <motion.div animate={{ y: [0, -8, 0],}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut",}}
                className="max-w-xl w-full h-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              >
                <img
                  src="https://images.shadcnspace.com/assets/feature/feature-9-vector.png"
                  alt="vector-img"
                  width={564}
                  height={311}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="relative z-10 w-full flex justify-center">
                <Card className="max-w-2xs sm:max-w-sm w-full py-5 sm:py-8 bg-white/5 backdrop-blur-xl gap-8 border border-white/10">
                  <CardHeader className="px-5 sm:px-8">
                    <p className="text-base font-medium text-foreground">
                      Your portfolio is up{" "}
                      <span className="text-teal-400">2.31%</span>
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center gap-4 sm:gap-8">
                      {portfolioData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between w-full"
                          >
                            <div className="flex items-center gap-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                width={44}
                                height={44}
                                className="w-7 h-7 sm:w-12 sm:h-12"
                              />
                              <div>
                                <p className="text-xs sm:text-base font-medium text-foreground">
                                  {item.name}
                                </p>
                                <span className="text-xs font-normal text-muted-foreground">
                                  BTC/USD
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-xs sm:text-base font-medium text-teal-400">
                                1.05%
                              </p>
                              <ArrowUp size={20} className="text-teal-400" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
