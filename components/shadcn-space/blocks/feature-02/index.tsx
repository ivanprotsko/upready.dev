"use client";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import {
    Banknote,
    UserX,
    Bug,
    Search,
} from "lucide-react"

const featureData = [
    {
      icon: Banknote,
      title: "Agencies charge $25K-150K",
      content: "3-6 months timeline burns through your pre-seed. You spend your entire runway on v1 that might not even find market fit.",
    },
    {
      icon: UserX,
      title: "Freelancers disappear",
      content: "No unified vision — designer doesn't talk to developer, nobody understands the business. 30-40% of time wasted on coordination.",
    },
    {
      icon: Bug,
      title: "Vibe-coded apps break",
      content: "25% of YC W2025 startups with 95% AI code hit a wall: works locally, won't deploy, security holes everywhere.",
    },
    {
      icon: Search,
      title: "Finding a CTO takes months",
      content: "2-3 months searching, $150-200K/year salary. Before product-market fit, you don't even know if it's worth the investment.",
    }
];

const Feature02 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature02;
