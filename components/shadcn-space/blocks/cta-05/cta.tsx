"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function GetStarted() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="py-8 max-w-7xl mx-auto border-x" />
            <section className="border-y">
                <div className="max-w-7xl mx-auto border-x lg:py-28 py-15 text-center xl:px-0 px-5">
                    <div className="flex flex-col gap-10 justify-center items-center">
                        <h2 className="lg:text-5xl text-3xl font-semibold text-card-foreground uppercase tracking-tighter">
                            A creative video
                            <span className="flex justify-center gap-3">
                                <span className="flex">production</span>
                                <Dialog open={open} onOpenChange={setOpen}>
                                    <DialogTrigger>
                                        <img
                                            src="https://images.shadcnspace.com/assets/backgrounds/cta-5-sml.webp"
                                            alt="video"
                                            className="cursor-pointer"
                                            width={70}
                                            height={50}
                                        />
                                    </DialogTrigger>
                                    <DialogContent className="max-w-5xl! w-full p-0 overflow-hidden rounded-none">
                                        {open && (
                                            <div className="aspect-video">
                                                <iframe
                                                    className="w-full h-full"
                                                    src="https://www.youtube.com/embed/n6dvjVxy02U?autoplay=1&mute=1&rel=0"
                                                    title="YouTube video"
                                                    allow="autoplay; encrypted-media"
                                                    allowFullScreen
                                                />
                                            </div>
                                        )}
                                    </DialogContent>
                                </Dialog>
                                <span className="flex">studio</span>
                            </span>
                        </h2>
                        <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden hover:cursor-pointer">
                            <span className="relative z-10 transition-all duration-500">
                                Get Started
                            </span>
                            <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                                <ArrowUpRight size={16} />
                            </div>
                        </Button>
                    </div>
                </div>
            </section>
            <div className="py-8 max-w-7xl mx-auto border-x" />
        </>
    );
};