"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import "./style.css";

const Team = () => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 py-8 lg:py-12 w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col gap-4 sm:gap-8 max-w-md lg:pr-4"
            >
              <Badge variant={"outline"} className="h-auto px-3 py-1 text-sm">
                Our Leadership
              </Badge>
              <div className="flex flex-col gap-4 sm:gap-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-foreground">
                  Meet the experts behind the Shadcn Space web
                </h2>
                <p className="text-base sm:text-lg font-normal text-muted-foreground">
                  Our success is driven by a passionate team committed to
                  building reliable, scalable solutions. Their expertise,
                  innovation, and customer-first mindset help grow with
                  confidence.
                </p>
              </div>
              <Button className="group w-fit flex items-center gap-2 h-auto px-6! py-3.5 rounded-full hover:cursor-pointer">
                <span>Meet the Team</span>
                <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            </motion.div>
            <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
              <motion.div
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 w-full"
              >
                <img
                  src="https://images.shadcnspace.com/assets/team/team-5-img-1.webp"
                  alt="team-img-1"
                  width={270}
                  height={280}
                  className="rounded-2xl object-cover w-full max-h-72"
                />

                <Card className="relative bg-teal-400/10 flex flex-col border-none ring-0 shadow-none rounded-2xl w-full overflow-hidden">
                  <CardContent className="relative z-10 flex-1 flex flex-col gap-2 items-center justify-center text-center p-6">
                    <h6 className="text-3xl font-bold text-foreground">
                      A team you can always rely on
                    </h6>
                    <p className="text-sm font-normal text-muted-foreground">
                      Experienced, proactive, and dedicated to delivering
                      technology
                    </p>
                  </CardContent>
                  <div className="team-04-micro" />
                </Card>
              </motion.div>
              <motion.div initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
                <img
                  src="https://images.shadcnspace.com/assets/team/team-5-img-2.webp"
                  width={205}
                  height={250}
                  alt="team-img-2"
                  className="rounded-2xl object-cover w-full h-auto max-h-64"
                />
                <img
                  src="https://images.shadcnspace.com/assets/team/team-5-img-3.webp"
                  width={205}
                  height={250}
                  alt="team-img-3"
                  className="rounded-2xl object-cover w-full h-auto max-h-64"
                />
                <img
                  src="https://images.shadcnspace.com/assets/team/team-5-img-4.webp"
                  width={205}
                  height={250}
                  alt="team-img-4"
                  className="rounded-2xl object-cover w-full h-auto max-h-64"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;