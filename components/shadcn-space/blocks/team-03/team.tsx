"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

type team = {
  name: string;
  role: string;
  image: string;
}[];

const Team = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const teamMembers: team = [
    {
      name: "Courtney Henry",
      role: "Business Growth",
      image: "https://images.shadcnspace.com/assets/team/team-01.webp",
    },
    {
      name: "Guy Hawkins",
      role: "Product Designer",
      image: "https://images.shadcnspace.com/assets/team/team-02.webp",
    },
    {
      name: "Ronald Richards",
      role: "Graphic Designer",
      image: "https://images.shadcnspace.com/assets/team/team-03.webp",
    },
    {
      name: "Jane Cooper",
      role: "Sales & Marketing",
      image: "https://images.shadcnspace.com/assets/team/team-04.webp",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl md:px-16 px-4">
        <div className="border-x px-4 md:px-8 py-12 lg:py-16 flex flex-col gap-8 md:gap-16">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-2 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
              <p className="text-base text-muted-foreground font-normal">
                Who we are
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-semibold text-foreground">
              Team.
            </h2>
          </motion.div>
        </div>
      </div>
      <div className="border-y ">
        <div className="mx-auto max-w-7xl sm:px-16 px-4 ">
          <div className="border-x pt-10">
            <div className="xl:flex grid lg:grid-cols-4 ">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "relative group lg:border-r last:border-r-0",
                    "transition-all duration-500 ease-out",
                    hovered === i ? "lg:flex-[1.1] xl:-mt-10" : "flex-1",
                  )}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-transparent">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={cn(
                        "xl:object-none object-cover h-full w-full  transition-all duration-500",
                        hovered === i
                          ? "scale-105 grayscale-0"
                          : "scale-100 grayscale",
                      )}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex items-center xl:gap-5 gap-3 xl:px-8 lg:px-2 px-4 py-5">
                    <img
                      src="https://images.shadcnspace.com/assets/team/team-black-icon.svg"
                      alt="icon" className="flex dark:hidden"
                    />
                    <img
                      src="https://images.shadcnspace.com/assets/team/team-white-icon.svg"
                      alt="icon" className="hidden dark:flex"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-base text-muted-foreground font-normal">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
