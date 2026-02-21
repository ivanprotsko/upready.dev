"use client";

import Feature from "@/components/shadcn-space/blocks/feature-06/feature";
import { Features } from "@/components/shadcn-space/blocks/feature-06/feature";

const featureData: Features = [
  {
    record: 35,
    suffix: "M+",
    title: "Users impacted",
    description: "with our work",
  },
  {
    record: 278,
    suffix: "+",
    title: "Projects completed",
    description: "in last 5 years",
  },
];

const Feature06 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature06;
