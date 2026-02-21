import Feature from "@/components/shadcn-space/blocks/feature-07/feature"
import { Features } from "@/components/shadcn-space/blocks/feature-07/feature";

const featureData: Features = [
  {
    tab_name: "Performance Tracking",
    tab_badge: "Live analytics",
    tab_title: "Performance Tracking",
    tab_description:
      "Monitor KPIs, revenue trends, and team output with live dashboards that update as your data changes. Stay informed, spot issues early, and make confident decisions backed by real numbers.",
    tab_image: "https://images.shadcnspace.com/assets/feature/tab-2-img.png",
  },
  {
    tab_name: "Sales Reporting",
    tab_badge: "Year to year reports",
    tab_title: "Sales Reporting",
    tab_description: "Shadcn Space equips your team with everything needed to stay aligned, monitor performance, and scale with confidence — all from a single platform. Move faster, collaborate smarter, and build without friction. Get started now for free.",
    tab_image: "https://images.shadcnspace.com/assets/feature/tab-2-img.png",
  },
  {
    tab_name: "Email Automation",
    tab_badge: "Smart workflows",
    tab_title: "Email Automation",
    tab_description:
      "Design intelligent email workflows that engage users at the right moment. Automate follow-ups, onboarding, and campaigns while maintaining a personal touch.",
    tab_image: "https://images.shadcnspace.com/assets/feature/tab-2-img.png",
  },
  {
    tab_name: "Powerful Integration",
    tab_badge: "Connect your tools",
    tab_title: "Powerful Integration",
    tab_description:
      "Integrate effortlessly with the tools your team already uses. Sync data across platforms, reduce manual work, and create a unified workflow without complexity.",
    tab_image: "https://images.shadcnspace.com/assets/feature/tab-2-img.png",
  },
];


const Feature07 = () => {
  return (
    <Feature featureData={featureData} />
  )
}

export default Feature07