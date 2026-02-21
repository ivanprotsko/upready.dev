import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleSphereAnimation from "@/components/shadcn-space/blocks/about-us-02/particalsphear";

export default function AboutUs02() {
    return (
        <section className="lg:py-20 sm:py-16 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col gap-16">
                    <div className="grid lg:grid-cols-2 col-span-1">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <p className="text-muted-foreground text-sm">
                                    faster, collaborate smarter, and scale confidently
                                </p>
                                <h2 className="sm:text-4xl text-3xl font-medium">
                                    Building powerful, intuitive SaaS solutions that help teams to move faster, collaborate smarter, and scale confidently.
                                </h2>
                            </div>
                            <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden hover:cursor-pointer">
                                <span className="relative z-10 transition-all duration-500">
                                    Learn More
                                </span>
                                <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                                    <ArrowUpRight size={16} />
                                </div>
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute flex justify-center">
                                <ParticleSphereAnimation />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="lg:col-span-4 sm:col-span-6 col-span-12 p-10 rounded-3xl bg-transparent backdrop-blur-xs border border-primary/10">
                            <div className="flex flex-col gap-12">
                                <p className="text-primary/50 text-base">People who have launched their websites</p>
                                <h3 className="text-5xl font-medium">
                                    40K<span className="text-blue-500">+</span>
                                </h3>
                            </div>
                        </div>
                        <div className="lg:col-span-4 sm:col-span-6 col-span-12 p-10 rounded-3xl bg-transparent backdrop-blur-xs border border-primary/10">
                            <div className="flex flex-col gap-12">
                                <p className="text-primary/50 text-base">Experienced professionals ready to assist</p>
                                <h3 className="text-5xl font-medium">
                                    238<span className="text-blue-500">+</span>
                                </h3>
                            </div>
                        </div>
                        <div className="lg:col-span-4 sm:col-span-6 col-span-12 p-10 rounded-3xl bg-transparent backdrop-blur-xs border border-primary/10">
                            <div className="flex flex-col gap-12">
                                <p className="text-primary/50 text-base">
                                    Average end users across all our products based on usage.
                                </p>
                                <h3 className="text-5xl font-medium">
                                    485K<span className="text-blue-500">+</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}