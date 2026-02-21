"use client";

import Feature from "@/components/shadcn-space/blocks/feature-04/feature";
import { Features } from "@/components/shadcn-space/blocks/feature-04/feature";
import { Layers, Shapes } from "lucide-react";

const featureData: Features = [
  {
    icon: Layers,
    title: "Data Processing",
    content: (
      <>
        Develop a unique and cohesive{" "}
        <strong className="text-foreground">brand identity</strong>, including
        the design.
      </>
    ),
  },
  {
    icon: Shapes,
    title: "Generating a response",
    content: (
      <>
        Develop a unique and cohesive{" "}
        <strong className="text-foreground">brand identity</strong>, including
        the design.
      </>
    ),
  },
];

const Feature04 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature04;
