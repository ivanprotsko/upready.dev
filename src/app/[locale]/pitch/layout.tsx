import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "zeno.team — Video Production Pitch Deck",
  description:
    "Подписочное видео-агентство для Европы и СНГ. Исследование рынка, бизнес-модель и финансовые проекции.",
};

export default function PitchLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-dvh overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {children}
    </div>
  );
}
