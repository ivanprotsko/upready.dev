"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const FAQ_COUNT = 6;

export default function Faq() {
  const t = useTranslations("faq");

  return (
    <section id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center">
          <Badge variant="outline" className="text-sm h-auto py-1 px-3 border-0 outline outline-border">{t("badge")}</Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">{t("headline")}</h2>
        </div>
        <Accordion type="single" collapsible className="w-full flex flex-col gap-6">
          {Array.from({ length: FAQ_COUNT }, (_, index) => (
            <AccordionItem key={index} value={`item-${index}`} className={cn("p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent/10 transition-colors")}>
              <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                {t(`items.${index}.question`)}
                <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="p-0 text-muted-foreground text-base">{t(`items.${index}.answer`)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
