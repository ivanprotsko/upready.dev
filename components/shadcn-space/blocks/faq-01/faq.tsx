import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "Is this really done by one person?",
    answer:
      "Yes. AI tools (Cursor, Claude, v0) allow one experienced engineer to work at the speed of a 3-5 person team. Pieter Levels earns $250K/mo solo. DesignJoy is $1M+ ARR with one designer. This is a proven model.",
  },
  {
    question: "What about quality? Isn’t AI code buggy?",
    answer:
      "AI generates ~46% of the code, but every line goes through manual review by an experienced engineer. I don’t blindly vibe-code — I use AI as an acceleration tool while maintaining control over architecture and security.",
  },
  {
    question: "What if I need to scale after MVP?",
    answer:
      "The MVP is built on a modern stack (Next.js + Supabase/Postgres + Vercel) that handles thousands of users. When it’s time to scale, I can help plan the transition to a full team or continue on the subscription plan.",
  },
  {
    question: "Why no meetings?",
    answer:
      "Because meetings are an illusion of progress. An hour in a meeting = an hour NOT coding. Text + Loom videos = same information, but you can consume it when convenient, re-read it, forward to investors.",
  },
  {
    question: "Is it safe to pay in crypto?",
    answer:
      "Payment via Request Finance — a professional crypto invoicing platform with transparent transaction history. USDT/USDC are stablecoins pegged to USD. Fee: $0.01-2.00 instead of $25-50 bank wire.",
  },
  {
    question: "What if I’m not happy with the result?",
    answer:
      "You see progress every 2-3 days via Loom videos and can adjust direction at any point. The prototype is approved BEFORE development. If after the prototype we realize we’re not aligned — full refund of the deposit.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({
  items = FAQ_DATA,
  badgeText = "FAQs",
  heading = "Frequently asked questions",
}: {
  items?: FaqItem[];
  badgeText?: string;
  heading?: string;
} = {}) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
          <Badge
            variant="outline"
            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
          >
            {badgeText}
          </Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">
            {heading}
          </h2>
        </div>
        <div>
          <Accordion className="w-full flex flex-col gap-6">
            {items.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500",
                )}
              >
                <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                  {faq.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
