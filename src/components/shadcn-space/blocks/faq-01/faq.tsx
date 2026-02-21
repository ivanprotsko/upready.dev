"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq01Props {
  id?: string;
  badge: string;
  headline: string;
  items: FaqItem[];
}

export default function Faq01({ id, badge, headline, items }: Faq01Props) {
  return (
    <section id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center">
          <Badge
            variant="outline"
            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
          >
            {badge}
          </Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">{headline}</h2>
        </div>
        <Accordion type="single" collapsible className="w-full flex flex-col gap-6">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={cn(
                "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent/10 transition-colors"
              )}
            >
              <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                {item.question}
                <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="p-0 text-muted-foreground text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
