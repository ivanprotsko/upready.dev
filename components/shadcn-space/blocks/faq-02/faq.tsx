'use client';
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Faq() {
    const FAQ_DATA = [
        {
            question: "1. What services does your web agency offer?",
            answer:
                "We provide end-to-end digital solutions including website design, development, branding, UI/UX, eCommerce platforms, and ongoing optimization to help businesses scale effectively.",
        },
        {
            question: "2. How long does it take to build a website?",
            answer:
                "Project timelines typically range from 4–8 weeks depending on complexity, features, and feedback cycles. We prioritize both speed and quality to ensure exceptional results.",
        },
        {
            question: "3. Do you create custom designs or use templates?",
            answer:
                "Every brand is unique, which is why we primarily design custom experiences tailored to your goals, audience, and identity — ensuring your website stands out.",
        },
        {
            question: "4. Can you help maintain and update our website?",
            answer:
                "Yes — we offer ongoing support, security updates, performance monitoring, and feature enhancements so your website continues to evolve with your business.",
        },
    ];

    return (
        <section className="lg:py-20 sm:py-16 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:py-0 py-8">
                    <div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                <img src="https://images.shadcnspace.com/assets/backgrounds/cta-03-img-1.webp" alt="Faq-image" className="w-full h-full" />
                            </motion.div>
                            <div className="flex sm:flex-col flex-row gap-6 ">
                                <motion.div className="flex-1" initial={{ opacity: 0, y: -20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.5 }}>
                                    <img src="https://images.shadcnspace.com/assets/backgrounds/cta-03-img-2.webp" alt="Faq-image" className="w-full" />
                                </motion.div>
                                <motion.div className="flex-1" initial={{ opacity: 0, y: 20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.5 }}>
                                    <img src="https://images.shadcnspace.com/assets/backgrounds/cta-03-img-3.webp" alt="Faq-image" className="w-full" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:ps-8 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <Badge className="py-1 px-3 bg-teal-400 text-white rounded-full h-auto">
                                FAQs
                            </Badge>
                            <h2 className="text-5xl font-medium">
                                Frequently asked questions
                            </h2>
                            <p className="text-muted-foreground text-lg ">
                                Choosing the right digital partner is an important decision. Here are answers to common questions.
                            </p>
                        </div>
                        <div>
                            <Accordion className="w-full flex flex-col gap-4">
                                {FAQ_DATA.map((faq, index) => (
                                    <AccordionItem
                                        key={`item-${index}`}
                                        value={`item-${index}`}
                                        className={cn(
                                            "px-5 py-4 bg-muted rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                                            index === 0 && "delay-100",
                                            index === 1 && "delay-200",
                                            index === 2 && "delay-300",
                                            index === 3 && "delay-400",
                                            index === 4 && "delay-500",
                                        )}
                                    >
                                        <AccordionTrigger className="flex items-center justify-between py-0 text-lg font-medium **:data-[slot=accordion-trigger-icon]:hidden underline-offset-4">
                                            <span className="text-lg font-medium">{faq.question}</span>
                                            <ChevronDown width={24} height={24} className="text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-lg pb-0">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}