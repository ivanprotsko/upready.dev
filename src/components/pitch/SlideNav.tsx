"use client";

import { cn } from "@/lib/utils";
import { slideNames } from "@/lib/pitch-data";

interface SlideNavProps {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
}

export function SlideNav({ currentSlide, totalSlides, goToSlide }: SlideNavProps) {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2 items-end">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          onClick={() => goToSlide(i)}
          className="group flex items-center gap-3 py-1"
          aria-label={`Перейти к слайду ${i + 1}: ${slideNames[i]}`}
        >
          <span
            className={cn(
              "text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 text-muted-foreground",
              currentSlide === i && "opacity-100 translate-x-0 text-foreground"
            )}
          >
            {slideNames[i]}
          </span>
          <span
            className={cn(
              "rounded-full transition-all duration-300",
              currentSlide === i
                ? "w-3 h-3 bg-[hsl(var(--accent))]"
                : "w-2 h-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
            )}
          />
        </button>
      ))}
    </nav>
  );
}
