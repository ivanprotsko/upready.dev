"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { useInView, motion } from "motion/react";

const reviews = [
  {
    name: "Ken Masters",
    username: "@kmasters",
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
    socialMedia: "https://images.shadcnspace.com/assets/svgs/icon-google.svg",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun",
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
    socialMedia: "https://images.shadcnspace.com/assets/svgs/icon-reddit.svg",
  },
  {
    name: "Lirael Nassun",
    username: "@lnassun",
    body: "“This is easily one of the most reliable SaaS tools we’ve adopted. The UI is intuitive, integrations are seamless, and it saves us countless hours every week.”",
    profile: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    socialMedia:
      "https://images.shadcnspace.com/assets/svgs/icon-trustpilot.svg",
  },
  {
    name: "Jessica",
    username: "@jessica",
    body: "Switching to this platform streamlined our entire workflow. Setup was effortless, performance improved instantly, and our team now ships features faster without worrying about infrastructure.",
    profile: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    socialMedia:
      "https://images.shadcnspace.com/assets/svgs/icon-trustpilot.svg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "“We evaluated multiple solutions, but this stood out immediately. It’s fast, scalable, and thoughtfully designed for growing teams that need stability without added complexity.”",
    profile: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    socialMedia: "https://images.shadcnspace.com/assets/svgs/icon-google.svg",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun",
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
    socialMedia: "https://images.shadcnspace.com/assets/svgs/icon-reddit.svg",
  },
  {
    name: "Ken Masters",
    username: "@kmasters",
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
    socialMedia: "https://images.shadcnspace.com/assets/svgs/icon-google.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  profile,
  name,
  username,
  body,
  socialMedia,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
  socialMedia: string;
}) => {
  return (
    <Card className="p-6 border ring-0 shadow-none">
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={profile}
              alt={name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-base font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{username}</p>
            </div>
          </div>
          <img src={socialMedia} alt={name} width={24} height={24} />
        </div>
        <Separator />
        <p className="text-lg text-foreground">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  /* ---------------- variants ---------------- */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  /* ---------------- render ---------------- */

  return (
    <section ref={sectionRef} className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col sm:gap-12 gap-8"
        >
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-4">
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="h-7 px-3 py-1 text-sm font-normal"
              >
                Testimonials
              </Badge>
            </motion.div>
            <div className="flex flex-col gap-3 items-center">
              <motion.h2
                variants={itemVariants}
                className="text-center font-medium text-3xl sm:text-4xl lg:text-5xl"
              >
                Real Stories.
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-center text-lg sm:text-xl text-muted-foreground max-w-xs sm:max-w-max"
              >
                Real experiences, genuine feedback—discover how our creative
                solutions
              </motion.p>
            </div>
          </div>
          <motion.div
            variants={itemVariants}
            className="relative w-full h-full max-h-96 flex flex-row items-center justify-center overflow-hidden gap-6"
          >
            <div className="flex flex-row items-center gap-5">
              <Marquee
                pauseOnHover
                vertical
                className="[--duration:20s] p-0 [--gap:1.25rem]"
              >
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                vertical
                className="[--duration:20s] p-0 [--gap:1.25rem] hidden sm:flex"
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                pauseOnHover
                vertical
                className="[--duration:20s] p-0 [--gap:1.25rem] hidden lg:flex"
              >
                {thirdRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
            <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
