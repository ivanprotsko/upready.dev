"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, Check, Globe, Instagram, KeyRound, Linkedin, Mail, Tag } from "lucide-react";

export type team = {
  id: string;
  img: string;
  since: string;
  name: string;
  position: string;
  sale: number;
  rent: number;
  stats: string[];
};

const Team = ({ teamData }: { teamData: team[] }) => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 py-8 lg:py-12 w-full">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground"
            >
              Our Agents
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {teamData?.map((data, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Card className="py-0 border-0 ring-0 shadow-none rounded-none">
                      <CardContent className="flex flex-col sm:flex-row items-center gap-6 px-0">
                        <div className="relative w-full h-full">
                          <img
                            src={data.img}
                            alt="image"
                            width={270}
                            height={330}
                            className="rounded-xl object-cover w-full h-full"
                          />
                          <div className="absolute bottom-0 left-0 rounded-lg flex items-center gap-4 bg-background px-4 py-3 m-4">
                            <a href="#">
                              <Globe
                                size={20}
                                className="hover:stroke-blue-500 transition-all duration-300"
                              />
                            </a>
                            <a href="#">
                              <Instagram
                                size={20}
                                className="hover:stroke-blue-500 transition-all duration-300"
                              />
                            </a>
                            <a href="#">
                              <Linkedin
                                size={20}
                                className="hover:stroke-blue-500 transition-all duration-300"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                          <div className="flex flex-col gap-2">
                            <Badge className="bg-blue-500/10 text-blue-500 h-auto px-2 py-0.5 w-fit">
                              Est. Since {data.since}
                            </Badge>
                            <div className="flex flex-col gap-0.5">
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-xl font-semibold text-foreground">
                                  {data.name}
                                </h3>
                                <BadgeCheck
                                  size={22}
                                  className="stroke-background fill-blue-500"
                                />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {data.position}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <Tag className="stroke-blue-500" size={16} />
                              <span className="text-base font-normal">
                                <strong className="font-semibold">
                                  {data.sale}
                                </strong>{" "}
                                Sale
                              </span>
                            </div>
                            <div className="h-4 w-px mx-3 bg-border" />
                            <div className="flex items-center gap-2">
                              <KeyRound className="stroke-teal-400" size={16} />
                              <span className="text-base font-normal">
                                <strong className="font-semibold">
                                  {data.rent}
                                </strong>{" "}
                                Rent
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              className="h-auto p-3 border border-border w-fit rounded-lg hover:cursor-pointer"
                            >
                              <Mail size={16} />
                            </Button>
                            <Button className="group/btn flex items-center gap-2 h-auto px-5! py-2.5 rounded-lg hover:cursor-pointer">
                              <span>Contact Agent</span>
                              <ArrowRight
                                size={16}
                                className="group-hover/btn:translate-x-1 transition-all duration-300"
                              />
                            </Button>
                          </div>
                          <div>
                            <div className="flex flex-col gap-2">
                              {data.stats?.map((stat, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2"
                                  >
                                    <Check size={16} />
                                    <p className="text-base font-normal text-muted-foreground">
                                      {stat}
                                    </p>
                                  </div>
                                );
                              })}
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
        </div>
      </div>
    </section>
  );
};

export default Team;