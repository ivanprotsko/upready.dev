"use client";
import { useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
const masterclasses = [
  {
    id: 1,
    title: "Framer Masterclass",
    handle: "@frameabotkins",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-1.jpg",
    category: "Design",
  },
  {
    id: 2,
    title: "Growth Masterclass",
    handle: "@novascaflow",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-2.jpg",
    category: "Marketing",
  },
  {
    id: 3,
    title: "Data Visualisation Masterclass",
    handle: "@viziongraphic",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-3.jpg",
    category: "Data",
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    handle: "@lucaycrafton",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-4.jpg",
    category: "Design",
  },
  {
    id: 5,
    title: "UI/UX Design Masterclass",
    handle: "@lucaycrafton",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-5.jpg",
    category: "Design",
  },
  {
    id: 6,
    title: "Data Visualisation Masterclass",
    handle: "@viziongraphic",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-3.jpg",
    category: "Data",
  },
];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto sm:px-16 px-4">
        <div className="flex flex-col gap-6 max-w-2xl py-12">
          <span className="w-fit px-3 py-1 text-sm font-normal text-muted-foreground bg-teal-400/10 rounded-lg">
            Trusted by 20,000+ Happy Learners
          </span>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
              Rise to the Top 1% with Elite Masterclasses
            </h1>

            <p className="text-base font-normal text-muted-foreground max-w-md">
              Learn from experts in product, growth, tech, data, expertly become
              top 1% fast, career-focused, and effectively.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-5 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-5 w-fit overflow-hidden cursor-pointer">
              <span className="relative z-10 transition-all duration-500">
                View Courses
              </span>
              <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-12 px-6 rounded-full text-foreground cursor-pointer"
            >
              Schedule a call
            </Button>
          </div>
        </div>
      </div>
      <div className="py-5">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {masterclasses.map((masterclass, index) => (
              <CarouselItem
                key={index}
                className="group pl-6 basis-auto flex-none"
              >
                <a
                  href="#"
                  className="relative block w-sm aspect-[368/420] max-w-[calc(100vw-3rem)] rounded-3xl overflow-hidden"
                >
                  <img
                    src={masterclass.image}
                    alt={masterclass.title}
                    className="rounded-3xl w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />

                  <div className="absolute top-0 left-0 right-0 px-6 py-5 w-full h-full flex flex-col items-end justify-between">
                    <div className="flex items-start justify-between gap-3 w-full">
                      <div className="text-left">
                        <p className="text-white font-medium">
                          {masterclass.title}
                        </p>
                        <span className="text-white/50">
                          {masterclass.handle}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="p-1 rounded-full bg-white/20">
                          <Play size={8} className="fill-white stroke-white" />
                        </div>
                        <span className="text-white text-sm">
                          {masterclass.duration}
                        </span>
                      </div>
                    </div>
                    <div className="w-fit flex items-center gap-1.5 py-0.5 px-2 bg-white rounded-full">
                      <Star
                        size={16}
                        className="fill-orange-400 stroke-orange-400"
                      />
                      <span className="text-sm font-medium text-gray-950">
                        {masterclass.rating}
                      </span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
