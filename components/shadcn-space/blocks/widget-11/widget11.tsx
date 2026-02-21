"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useMotionValue, animate, useTransform, useInView } from "motion/react";
import { cn } from "@/lib/utils";

// -------------------- Animated Counter --------------------
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isInView = true,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView?: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setCurrent(Math.round(latest));
        },
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

// -------------------- Animated Progress --------------------
const AnimatedProgress = ({
  value,
  color,
}: {
  value: number;
  color: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const progress = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(progress, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          setCurrent(latest);
        },
      });
      return controls.stop;
    }
  }, [isInView, value, progress]);

  return (
    <div ref={ref}>
      <Progress
        value={current}
        className={`h-1.5 ${color} transition-all duration-500 ease-out`}
      />
    </div>
  );
};

const Widget11 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <Card
        ref={ref}
        className="w-full max-w-xs mx-auto relative p-6 bg-sky-400/20 overflow-hidden border-none"
      >
        <div
          className={`h-12 w-12 rounded-full flex justify-center items-center bg-sky-400`}
        >
          <img
            src={"https://images.shadcnspace.com/assets/svgs/icon-idea.svg"}
            className="h-6 w-6"
            alt="image"
          />
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h6 className="text-base font-semibold">New Goals</h6>
            <p className="font-normal text-sky-400">
              <AnimatedCounter value={83} suffix="%" isInView={isInView} />
            </p>
          </div>
          <AnimatedProgress
            value={83}
            color={cn("w-full", "**:data-[slot=progress-indicator]:bg-sky-400")}
          />
        </div>
        <img
          src={
            "https://images.shadcnspace.com/assets/backgrounds/top-info-shape.png"
          }
          className="absolute top-0 end-0 rtl:transform rtl:scale-x-[-1]"
        />
      </Card>
    </div>
  );
};

export default Widget11;
