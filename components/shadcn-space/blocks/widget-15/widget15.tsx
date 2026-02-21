"use client";

import { useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "motion/react";
import { EllipsisVertical, ChevronRight } from "lucide-react";

// Animated Counter Component
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isInView = true,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView?: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return (
    <motion.span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

// Motion TableRow Component
const MotionTableBody = motion(TableBody);
const MotionTableRow = motion(TableRow);

const tbodyVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // stagger each row by 0.1s
    },
  },
};

// Row animation variants with custom index
const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.3,
    },
  }),
};

const Widget05 = () => {
  const dropdownItems = ["Action", "Another action", "Something else"];
  const TransactionsData = [
    {
      img: "https://images.shadcnspace.com/assets/svgs/icon-netflix-2.svg",
      title: "Netflix Subscription",
      subtitle: "Today, 09:23am",
      statuscolor: "bg-teal-400/10 text-teal-400",
      statustext: "Approved",
      price: "- $4.58",
      rank: "+5 Bonus",
      rankcolor: "text-red-500",
    },
    {
      img: "https://images.shadcnspace.com/assets/svgs/icon-upwork-2.svg",
      title: "Upwork",
      subtitle: "August 15, 10:35pm",
      statuscolor: "bg-orange-400/10 text-orange-400",
      statustext: "Pending",
      price: "+ $15.60",
      rank: "+30 Bonus",
      rankcolor: "text-teal-400",
    },
  ];

  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.3 });

  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, amount: 0.2 });

  return (
    <div className="lg:py-20 sm:py-16 py-8 px-6">
      <Card className="w-full max-w-2xl gap-6 mx-auto">
        {/* Header */}
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            Payment Methods
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-accent hover:text-accent-foreground cursor-pointer">
                <EllipsisVertical width={22} height={22} />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {dropdownItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="font-normal cursor-pointer"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          {/* Payment Cards */}
          <div ref={gridRef} className="grid grid-cols-12 sm:gap-7 gap-y-6">
            <div className="md:col-span-6 col-span-12">
              <div className="bg-foreground dark:bg-background rounded-md">
                <div className="p-6 bg-[url(https://images.shadcnspace.com/assets/backgrounds/circle-shape.png)] bg-no-repeat bg-bottom-right">
                  <div className="flex justify-between pb-10">
                    <h5 className="text-lg font-semibold text-white">
                      **** 8942
                    </h5>
                    <img
                      src="https://images.shadcnspace.com/assets/svgs/icon-visa.svg"
                      alt="icon"
                      width={44}
                      height={30}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1 text-white/80">
                      Balance
                    </p>
                    <h5 className="text-lg font-semibold text-white">
                      <AnimatedCounter
                        value={26561}
                        prefix="$"
                        isInView={isInView}
                      />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="rounded-md bg-sky-400/10">
                <div className="p-6 bg-[url(https://images.shadcnspace.com/assets/backgrounds/circle-white-shape.png)] bg-no-repeat bg-bottom-right">
                  <div className="flex justify-between pb-10">
                    <h5 className="text-lg font-semibold text-black dark:text-white">
                      **** 8942
                    </h5>
                    <img
                      src="https://images.shadcnspace.com/assets/svgs/icon-master-card-1.svg"
                      alt="icon"
                      width={33}
                      height={28}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1 text-black/80 dark:text-white/80">
                      Balance
                    </p>
                    <h5 className="text-lg font-semibold text-black dark:text-white">
                      <AnimatedCounter
                        value={46561}
                        prefix="$"
                        isInView={isInView}
                      />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {/* Transactions Table */}
          <div className="overflow-x-auto overflow-y-hidden w-full">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="ps-0 text-base font-semibold pb-4 text-foreground">
                    Transactions
                  </TableHead>
                  <TableHead className="text-base font-semibold pb-2"></TableHead>
                  <TableHead className="text-base font-semibold pb-2 text-end pe-0 text-foreground">
                    <a
                      href="#"
                      className="flex items-center justify-end text-sm"
                    >
                      See All
                      <ChevronRight width={16} height={16} />
                    </a>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <MotionTableBody
                ref={tableRef}
                variants={tbodyVariants}
                initial="hidden"
                animate={tableInView ? "visible" : "hidden"}
                className="divide-y divide-border dark:divide-darkborder"
              >
                {TransactionsData.map((item, index) => (
                  <MotionTableRow
                    key={index}
                    custom={index}
                    variants={rowVariants}
                    className="hover:bg-transparent"
                  >
                    <TableCell className="whitespace-nowrap ps-0">
                      <div className="flex gap-3 items-center">
                        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-muted">
                          <img
                            src={item.img}
                            alt="icon"
                            className="h-6 w-6"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="truncat line-clamp-2 text-wrap max-w-56">
                          <h6 className="text-base font-semibold text-foreground">
                            {item.title}
                          </h6>
                          <p className="text-xs font-normal text-muted-foreground">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="pe-0">
                      <div className="flex justify-end pe-0 items-center">
                        <Badge
                          className={`text-xs font-medium ${item.statuscolor}`}
                        >
                          {item.statustext}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-end pe-0">
                      <h6 className="text-base font-semibold text-foreground">
                        {item.price}
                      </h6>
                      <p className={`text-xs font-medium ${item.rankcolor}`}>
                        {item.rank}
                      </p>
                    </TableCell>
                  </MotionTableRow>
                ))}
              </MotionTableBody>
            </Table>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Widget05;
