import Feature from "@/components/shadcn-space/blocks/feature-08/feature";
import { Features } from "@/components/shadcn-space/blocks/feature-08/feature";

const featureData: Features = [
  {
    tab_title: "Real time collaboration",
    tab_description: "Work together seamlessly with shared workflows, instant updates, and full visibility across projects.",
    content: "Our platform helps teams simplify operations, improve visibility, and unlock smarter decision-making.",
    percentage: "95",
  },
  {
    tab_title: "Task automation",
    tab_description: "Automate repetitive workflows to reduce manual effort, eliminate errors, and save valuable time.",
    content: "Smart automation keeps work moving faster while your team focuses on higher-impact initiatives.",
    percentage: "98",
  },
  {
    tab_title: "Centralized workspace",
    tab_description: "Manage files, conversations, and tasks in one unified workspace with complete project visibility.",
    content: "A single source of truth helps teams stay organized and collaborate without friction.",
    percentage: "99",
  },
  {
    tab_title: "Secure access control",
    tab_description: "Control permissions with role-based access to keep data secure and collaboration intentional.",
    content: "Built-in security ensures the right people have the right access at every stage of work.",
    percentage: "94",
  },
];

const Feature08 = () => {
  return <Feature featureData={featureData} />;
};

export default Feature08;
