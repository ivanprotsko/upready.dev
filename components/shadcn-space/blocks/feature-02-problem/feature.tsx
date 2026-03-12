import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type Features = {
  icon: LucideIcon;
  title: string;
  content: string;
}[];

const ProblemSection = ({
  featureData,
  badgeText = "The Problem",
  heading = "Building an MVP shouldn\u2019t cost a fortune",
}: {
  featureData: Features;
  badgeText?: string;
  heading?: string;
}) => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8 sm:py-12">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
            >
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
                {badgeText}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center tracking-[-1px]">
                {heading}
              </h1>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {featureData.map((value, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                      show: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Card className="py-10 h-full border-t-4 border-t-transparent bg-transparent shadow-none">
                      <CardContent className="px-8 flex flex-col gap-6">
                        <value.icon
                          size={28}
                          className="shrink-0 text-primary"
                        />
                        <div className="flex flex-col gap-3">
                          <h6 className="text-xl font-semibold whitespace-pre-line">
                            {value.title}
                          </h6>
                          <p className="text-base font-normal text-muted-foreground">
                            {value.content}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
