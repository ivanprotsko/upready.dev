"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useTransform,
  useInView,
} from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import VectorMap, {
  Layer,
  Tooltip,
  LoadingIndicator,
  Size,
} from "devextreme-react/vector-map";
import "@/components/shadcn-space/blocks/widget-12/styles/style.css";

const markers = [
  {
    coordinates: [-118.245003, 34.053501],
    attributes: { name: "Los Angeles" },
  },
  { coordinates: [-74.007118, 40.71455], attributes: { name: "New York" } },
  { coordinates: [-84.423058, 33.763191], attributes: { name: "Atlanta" } },
  { coordinates: [-87.632408, 41.884151], attributes: { name: "Chicago" } },
];

const mapsData = require("devextreme/dist/js/vectormap-data/usa.js");
const bounds = [-110, 52, -80, 20];

// Tooltip template for map markers
function TooltipTemplate(info: any) {
  return <div>{info.attribute("name")}</div>;
}

// Animated ShadCN Progress Component
const AnimatedProgress = ({
  value,
  color,
}: {
  value: number;
  color: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const progress = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(progress, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          setCurrent(latest);
        },
      });
      return controls.stop;
    }
  }, [isInView, value, progress]);

  return (
    <div ref={ref}>
      <Progress
        value={current}
        className={`h-1 ${color} transition-all duration-500 ease-out`}
      />
    </div>
  );
};

// Animated numeric counter
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
        duration: 1.5,
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

const Widget = () => {
  const SalesFromLocationData = [
    {
      name: "LA",
      percentage: 28,
      color:
        "**:data-[slot=progress-indicator]:bg-sky-400 **:data-[slot=progress-track]:bg-primary/10",
    },
    {
      name: "NY",
      percentage: 21,
      color:
        "**:data-[slot=progress-indicator]:bg-blue-500 **:data-[slot=progress-track]:bg-primary/10",
    },
    {
      name: "KA",
      percentage: 18,
      color:
        "**:data-[slot=progress-indicator]:bg-amber-300 **:data-[slot=progress-track]:bg-primary/10",
    },
    {
      name: "AZ",
      percentage: 12,
      color:
        "**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:bg-primary/10",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="lg:py-20 sm:py-16 py-8 px-6">
      <Card className="w-full max-w-sm gap-5 mx-auto">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Sales from Locations
          </CardTitle>
          <CardDescription className="text-sm font-medium text-muted-foreground">
            United States
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="widget-map">
            <VectorMap id="vector-map" height={260} bounds={bounds}>
              <Size height={230} width="100%" />
              <Layer
                dataSource={mapsData.usa}
                hoverEnabled
                borderColor="#ffffff"
              />
              <Layer dataSource={markers} />
              <LoadingIndicator show={false} />
              <Tooltip enabled={false} contentRender={TooltipTemplate} />
            </VectorMap>
          </div>
          <div className="border-t border-ld pt-8">
            {SalesFromLocationData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-[15px] items-center mb-4"
              >
                <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 col-span-2">
                  <h6 className="text-sm font-semibold text-foreground">
                    {item.name}
                  </h6>
                </div>
                <div className="xl:col-span-8 lg:col-span-6 col-span-7">
                  <AnimatedProgress
                    value={item.percentage}
                    color={item.color}
                  />
                </div>
                <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-3 text-end">
                  <h6 className="text-sm font-semibold text-foreground">
                    <AnimatedCounter
                      value={item.percentage}
                      suffix="%"
                      isInView={isInView}
                    />
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Widget;
