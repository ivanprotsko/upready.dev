"use client"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function CTA() {

    const features = [
        "Cancel anytime",
        "Access to all content",
        "Expert support",
    ];

    return (
        <section className="bg-linear-to-b from-background to-blue-500/20 flex items-center justify-center">
            <div className="max-w-7xl mx-auto sm:px-16 px-4 pt-20 w-full flex flex-col gap-12 justify-between">
                <div className="text-center">
                    <p className="text-sm font-medium text-blue-500 mb-4">5 STAR CUSTOMER • SUPPORT</p>
                    <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
                        <motion.h2
                            className="sm:text-5xl text-3xl font-semibold"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.012,
                                    },
                                },
                            }}
                        >
                            {"Advertise smarter and win in today’s mobile-first world."
                                .split("")
                                .map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: { duration: 0.2 },
                                            },
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                        </motion.h2>
                        <div className="flex items-center justify-center md:flex-row flex-col gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: index * 0.15,
                                    }}
                                >
                                    <Check className="text-blue-500" width={20} height={20} />
                                    <p className="text-base font-medium">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                        <Button className="w-fit h-auto bg-blue-500 text-white text-sm font-medium py-3.5 px-6 rounded-lg hover:bg-blue-500/80 hover:cursor-pointer">
                            Start my free 14-day trial
                            <ArrowRight width={16} height={16} />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src="https://images.shadcnspace.com/assets/backgrounds/cta-04-img-1.webp" className="w-full h-full object-contain" alt="cta-04-img-1" width={956}
                        height={613} />
                </div>
            </div>
        </section>
    )
}