"use client";

import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Service {
    id: string;
    slug: string;
    thumbnail_img: string;
    service_title: string;
}

export const services: Service[] = [
    {
        id: "1",
        slug: "regular-cleaning",
        thumbnail_img: "https://images.shadcnspace.com/assets/backgrounds/service-4-img-1.webp",
        service_title: "Regular Cleaning",
    },
    {
        id: "2",
        slug: "deep-cleaning",
        thumbnail_img: "https://images.shadcnspace.com/assets/backgrounds/service-4-img-2.webp",
        service_title: "Deep Cleaning",
    },
    {
        id: "3",
        slug: "movein-moveout",
        thumbnail_img: "https://images.shadcnspace.com/assets/backgrounds/service-4-img-3.webp",
        service_title: "Move-in / Move-out",
    },
    {
        id: "4",
        slug: "removal-storage",
        thumbnail_img: "https://images.shadcnspace.com/assets/backgrounds/service-4-img-4.webp",
        service_title: "Removal & Storage",
    },
];

function Services() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} className="bg-linear-to-b from-primary from-65% to-muted to-40% dark:bg-[linear-gradient(to_bottom,#ffffff_70%,#000000_30%)] h-full">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 lg:py-16 py-8 ">
                <div className="flex flex-col sm:gap-16 gap-8 ">
                    <div>
                        <Badge className="font-semibold py-1 px-4 h-auto text-base mb-6" variant="secondary">
                            Services
                        </Badge>
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <div className="max-w-3xs sm:max-w-lg">
                                    <h2 className="text-primary-foreground text-3xl sm:text-5xl font-medium">
                                        Our Professional Cleaning Services
                                    </h2>
                                </div>
                            </div>
                            <div className="max-w-md">
                                <p className="font-normal text-lg text-primary-foreground">
                                    Explore our efficient{" "}
                                    <span className="font-bold">cleaning services</span> designed
                                    to maintain a neat and tidy home environment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                        >
                            <Carousel setApi={setApi} className="w-full flex flex-col sm:gap-16 gap-12">
                                <CarouselContent className="flex gap-6 pb-10" >
                                    {services.map((value, index) => (
                                        <CarouselItem key={index} className="basis-auto">
                                            <div className="relative w-[440px] h-96">
                                                <a href='#'>
                                                    <img
                                                        src={value.thumbnail_img}
                                                        alt="Image"
                                                        width={440}
                                                        height={390}
                                                        className=" w-full h-full object-cover hover:scale-95 transition-transform duration-300 rounded-md"
                                                    />
                                                </a>
                                                <div className="absolute -bottom-10 right-0 flex items-center ">
                                                    <div className="bg-white pl-6 flex items-center rounded-sm ">
                                                        <span className="mr-2 text-primary/50 dark:text-primary-foreground/50 text-sm font-normal">0{value.id}.</span>
                                                        <a href='#' >
                                                            <h6 className="pr-10 font-semibold text-primary dark:text-primary-foreground">
                                                                {value.service_title}
                                                            </h6>
                                                        </a>
                                                        <a href='#' className="w-fit bg-teal-400 p-5 rounded-r-sm ">
                                                            <ArrowRight width={24} height={24} className="text-white" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                    className="flex items-center justify-between gap-8 md:gap-12"
                                >
                                    <div className="grow h-0.5 bg-foreground/10 relative overflow-hidden">
                                        <div
                                            className="absolute left-0 top-0 h-full bg-foreground transition-all duration-300"
                                            style={{
                                                width: `${(current / count) * 100}%`
                                            }}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon" className="rounded-full border-foreground/10 h-10 w-10 bg-white hover:bg-white shadow-xs hover:cursor-pointer" onClick={() => api?.scrollPrev()} disabled={!api?.canScrollPrev()}>
                                            <ArrowLeft width={16} height={16} />
                                        </Button>
                                        <Button variant="outline" size="icon" className="rounded-full border-foreground/10 h-10 w-10 bg-white hover:bg-white shadow-xs hover:cursor-pointer" onClick={() => api?.scrollNext()} disabled={!api?.canScrollNext()}>
                                            <ArrowRight width={16} height={16} />
                                        </Button>
                                    </div>
                                </motion.div>
                            </Carousel>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;