"use client";

import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Check } from "lucide-react";
import { motion, useInView } from "motion/react";

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const contactData = [
    "Access to all core Shadcn UI blocks",
    "Copy-paste ready React Tailwind code",
    "Regular library updates",
  ];

  return (
    <section ref={containerRef} className="overflow-hidden">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 py-8 md:py-20 mx-auto">
        <div className="flex flex-col gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              Get in touch
            </h2>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-6 md:gap-8 md:max-w-md md:pr-12"
            >
              <div className="flex flex-col gap-6">
                <p className="text-lg font-normal text-muted-foreground">
                  Let's collaborate and create something amazing! Tell me about
                  your project—I'm all ears.
                </p>
                <div className="flex flex-col gap-3">
                  {contactData?.map((data, index) => {
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-fit bg-foreground p-1 rounded-full">
                          <Check className="text-background" size={12} />
                        </div>
                        <p className="text-lg text-muted-foreground font-normal">
                          {data}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src="https://images.shadcnspace.com/assets/profiles/jessica.webp"
                    alt={"Jessica"}
                  />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <p className="text-base font-medium text-foreground">
                    Courtney Henry
                  </p>
                  <p className="text-sm font-normal text-muted-foreground">
                    Onboarding & Success Manager
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-full"
            >
              <form className="flex flex-col gap-6">
                <div>
                  <Input className="rounded-lg dark:bg-background" placeholder="Name *" type="text" id="name" />
                </div>
                <div>
                  <Input className="rounded-lg dark:bg-background" placeholder="Email *" type="email" id="email" />
                </div>
                <div>
                  <Textarea className="h-20 rounded-lg dark:bg-background resize-none" placeholder="Tell us about your project" id="message"></Textarea>
                </div>
                <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-full overflow-hidden hover:cursor-pointer">
                  <span className="relative z-10 transition-all duration-500">
                    Submit message
                  </span>
                  <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
