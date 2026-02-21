"use client";

import Feature from "@/components/shadcn-space/blocks/feature-05/feature";

const featureData: string[] = [
  "Built with responsiveness in mind, ensuring your app looks great on all devices with RTL language support.",
  "Apply your design decisions with unlimited themes, all without adding new class names.",
];

const Feature05 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature05;
