"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import TechIcons from "@/components/shadcn-space/blocks/hero-10/tech-icons";
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

const CourseSelect = ({
  label,
  defaultValue,
  options,
  className,
}: {
  label: string;
  defaultValue: string;
  options: string[];
  className?: string;
}) => (
  <Select defaultValue={defaultValue}>
    <SelectTrigger
      className={cn(
        "w-full !h-auto md:p-8 px-6 py-4 border-none rounded-none shadow-none transition-all flex-col items-start gap-2 group focus:ring-0 [&>svg]:hidden dark:bg-transparent dark:hover:bg-transparent",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 w-full">
        <span className="text-base font-normal text-muted-foreground">
          {label}
        </span>
        <ChevronDown className="size-5 text-blue-500 transition-transform group-hover:rotate-180 duration-300" />
      </div>
      <div className="text-xl font-medium text-foreground">
        <SelectValue />
      </div>
    </SelectTrigger>
    <SelectContent>
      {options.map((option) => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const HeroSection = ({ avatarList }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const courseOptions = [
    "Ux and UI Design",
    "Frontend Development",
    "Backend Development",
    "Fullstack Engineering",
  ];

  const hourOptions = [
    "20hrs in a Month",
    "40hrs in a Month",
    "60hrs in a Month",
    "80hrs in a Month",
  ];

  return (
    <section ref={sectionRef} className="dark:bg-background relative">
      <div className="py-8 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 z-20 relative flex flex-col gap-12 md:gap-20">
          {/* content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 items-center justify-center">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-center max-w-3xl mx-auto"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.008,
                    },
                  },
                }}
              >
                {"Advance your engineering skills with our courses"
                  .split("")
                  .map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { duration: 0.008 },
                        },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </motion.h1>

              <p className="text-base text-center max-w-md mx-auto text-muted-foreground">
                Learn from experts in product, growth, tech, data, expertly
                become top 1% fast, career-focused, and effectively.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              {/*  */}
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                <AvatarGroup>
                  {avatarList.map((avatar, index) => (
                    <Avatar key={index} className="size-12 ">
                      <AvatarImage src={avatar.image} alt="Avatar" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                  <AvatarGroupCount className="size-12 text-base font-semibold">
                    +4K
                  </AvatarGroupCount>
                </AvatarGroup>
                <Separator
                  orientation="vertical"
                  className="h-8 data-[orientation=vertical]:self-center max-lg:hidden"
                />
                <div className="gap-1 flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-semibold text-foreground">
                      4.6
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img
                          key={index}
                          src="https://images.shadcnspace.com/assets/svgs/icon-star.svg"
                          alt="star"
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-normal text-muted-foreground">
                    Rated by 25k on google.
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/* dropdowns of courses */}
          <div className="w-full md:max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden bg-background relative z-30 items-stretch">
              <div className="flex-1">
                <CourseSelect
                  label="What do you want to learn?"
                  defaultValue="Ux and UI Design"
                  options={courseOptions}
                />
              </div>
              <Separator
                orientation="vertical"
                className="h-auto hidden md:block"
              />
              <Separator orientation="horizontal" className="md:hidden" />
              <div className="flex-1">
                <CourseSelect
                  label="Hours you going to invest"
                  defaultValue="20hrs in a Month"
                  options={hourOptions}
                />
              </div>
              <Separator
                orientation="vertical"
                className="h-auto hidden md:block"
              />
              <Separator orientation="horizontal" className="md:hidden" />
              <div className="md:px-8 px-6 py-4 flex items-center justify-center">
                <Button
                  size="lg"
                  className="px-5 py-2.5 text-small font-medium rounded-lg bg-primary text-primary-foreground w-full"
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechIcons />
    </section>
  );
};

export default HeroSection;
