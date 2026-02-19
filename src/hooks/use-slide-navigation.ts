"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useSlideNavigation(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    const slideEl = document.getElementById(`slide-${index}`);
    if (slideEl) {
      slideEl.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observers: IntersectionObserver[] = [];

    for (let i = 0; i < totalSlides; i++) {
      const slideEl = document.getElementById(`slide-${i}`);
      if (!slideEl) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSlide(i);
          }
        },
        { root: container, threshold: 0.5 }
      );

      observer.observe(slideEl);
      observers.push(observer);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        const next = Math.min(currentSlide + 1, totalSlides - 1);
        goToSlide(next);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const prev = Math.max(currentSlide - 1, 0);
        goToSlide(prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides, goToSlide]);

  return { currentSlide, totalSlides, goToSlide, containerRef };
}
