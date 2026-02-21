"use client";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Move, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

interface PortfolioItem {
  title: string;
  address: string;
  price: string;
  image: string;
  beds: string;
  baths: string;
  area: string;
}

interface PortfolioProps {
  data: PortfolioItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Portfolio = ({ data }: PortfolioProps) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-8 md:py-10">
        <motion.div
          className="flex flex-col gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-4 md:gap-6 items-center justify-center text-center"
            variants={itemVariants}
          >
            <Badge
              variant="outline"
              className="h-auto py-1 px-3 text-sm text-foreground"
            >
              Properties
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              Discover inspiring designed homes.
            </h2>
            <p className="text-base font-normal text-muted-foreground">
              Curated homes where elegance, style, and comfort unite.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {data.map((item, index) => {
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group p-0 rounded-2xl hover:shadow-lg h-full">
                    <CardContent className="p-0">
                      <a
                        href="#"
                        className="relative block overflow-hidden rounded-t-2xl"
                      >
                        <div className="absolute p-6 flex justify-end top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                          <div className="p-3 bg-background w-fit h-fit rounded-full">
                            <ArrowRight
                              width={16}
                              height={16}
                              className="text-foreground"
                            />
                          </div>
                        </div>
                        <img
                          src={item?.image}
                          alt="portfolio-img"
                          width={368}
                          height={240}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                        />
                      </a>
                      <div className="flex flex-col gap-6 p-5">
                        <div className="flex items-start justify-between gap-2.5">
                          <div>
                            <h3 className="text-lg text-foreground font-medium">
                              {item?.title}
                            </h3>
                            <p className="text-sm font-normal text-muted-foreground">
                              {item?.address}
                            </p>
                          </div>
                          <Badge className="text-sm font-normal h-auto px-3 py-1 text-foreground bg-muted rounded-full">
                            {item?.price}
                          </Badge>
                        </div>

                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <BedDouble size={20} />
                            <span className="text-sm font-normal text-foreground">
                              {item?.beds} Beds
                            </span>
                          </div>
                          <div className="w-px h-5 bg-border mx-5" />
                          <div className="flex items-center gap-2">
                            <Bath size={20} />
                            <span className="text-sm font-normal text-foreground">
                              {item?.baths} Baths
                            </span>
                          </div>
                          <div className="w-px h-5 bg-border mx-5" />
                          <div className="flex items-center gap-2">
                            <Move size={20} />
                            <span className="text-sm font-normal text-foreground">
                              {item?.area}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
