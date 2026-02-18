"use client";

import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const tools = [
  { name: "Cursor", icon: "/icons/cursor.svg" },
  { name: "Claude", icon: "/icons/claude.svg" },
  { name: "v0", icon: "/icons/v0.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Vercel", icon: "/icons/vercel.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
];

function BrandSlider() {
  const t = useTranslations("brandSlider");

  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center text-center py-3 md:py-4">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-l dark:from-muted-foreground dark:to-transparent opacity-20" />
                <p className="text-sm font-normal text-muted-foreground text-center">
                  {t("label")}
                </p>
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-r dark:from-muted-foreground dark:to-transparent opacity-20" />
              </div>
            </div>
            <div className="py-4 relative overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s] p-0">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2.5 mr-10 lg:mr-16">
                    <img src={tool.icon} alt={tool.name} width={24} height={24} className="h-6 w-6 opacity-60" />
                    <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
                  </div>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
