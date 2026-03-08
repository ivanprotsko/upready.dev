"use client";

import {
  KanbanSquare, CalendarRange, FileText, Inbox, GitBranch, LayoutDashboard,
  Code, Briefcase, Building2, Layers, BarChart3, Clock, Eye, Workflow,
  Package,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import ProductShowcase from "@/components/services/product-showcase";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const productStats = [
  { label: "Teams", value: "50K+" },
  { label: "Built-in Importers", value: "5" },
  { label: "Products in One", value: "4" },
  { label: "License", value: "Open Source" },
];

const productScreenshots = [
  {
    src: "/images/services/project-management/projects-1.webp",
    alt: "Plane project board with kanban view showing issues, priorities, and assignees across workflow stages",
    priority: true,
  },
  {
    src: "/images/services/project-management/view.webp",
    alt: "Plane multiple views including board, spreadsheet, list, and Gantt chart for flexible project tracking",
  },
  {
    src: "/images/services/project-management/wiki-1.webp",
    alt: "Plane built-in wiki and documentation pages for team knowledge management",
  },
];

const features = [
  { icon: KanbanSquare, title: "Board, List, Gantt, Spreadsheet", description: "Four views for every workflow. Kanban for visual thinkers, spreadsheet for data-driven managers, Gantt for timeline planning, list for quick triage. Same data, your preferred lens." },
  { icon: CalendarRange, title: "Cycles & Sprints", description: "Time-boxed iterations with burndown charts and velocity tracking. Plan sprints, monitor team capacity, and review performance across cycles." },
  { icon: Layers, title: "Modules & Initiatives", description: "Group related work into modules for feature-level tracking. Roll up progress to initiatives and epics with automatic status aggregation." },
  { icon: FileText, title: "Built-In Wiki", description: "Documentation lives next to your tasks. Nested pages, real-time collaboration, and linking between docs and work items. No separate Confluence subscription." },
  { icon: Inbox, title: "Intake & Triage", description: "Incoming requests land in a triage queue. Prioritize, assign, and schedule from a single inbox. Nothing falls through the cracks." },
  { icon: Clock, title: "Time Tracking & Worklogs", description: "Track time spent on any work item. Generate worklogs for billing, capacity planning, and team utilization reports." },
  { icon: GitBranch, title: "GitHub & GitLab Integration", description: "Link commits and pull requests to work items. Auto-update task status on merge. 50+ integrations including Slack and Sentry." },
  { icon: LayoutDashboard, title: "Real-Time Dashboards", description: "Live dashboards tracking velocity, workload distribution, and blockers. No manual setup -- data flows in as your team works." },
  { icon: Eye, title: "Custom Views & Filters", description: "Save filtered views by assignee, priority, label, or any custom field. Share views with your team for consistent workflows." },
  { icon: Workflow, title: "Workflows & Approvals", description: "Define custom statuses, stage gates, and approval processes. Automate handoffs between teams without plugins." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Track project health, team velocity, and sprint completion rates. Identify bottlenecks before they become blockers." },
  { icon: Package, title: "Teamspaces", description: "Organize work by team with dedicated spaces, workflows, and permissions. Cross-team visibility without cross-team noise." },
];

const useCases = [
  { icon: Code, industry: "Software Teams", description: "Sprint planning, bug tracking, feature roadmaps. GitHub integration keeps code and tasks in sync. Built-in importers from Jira, Linear, and Asana. Setup: $3,000-$6,000." },
  { icon: Briefcase, industry: "Agencies", description: "One workspace per client with separate boards, workflows, and access controls. Track retainers, manage cross-team visibility, and keep client work isolated. Setup: $2,000-$5,000." },
  { icon: Building2, industry: "Product Teams", description: "Initiatives, epics, and modules for product roadmap planning. Cycles for sprint execution. Wiki for specs and decisions. Everything in one place. Setup: $3,000-$5,000." },
];

const comparisonRows = [
  { label: "Monthly cost (10 users)", ours: "$149-$199", theirs: "$80-$160/mo", oursHighlight: false },
  { label: "Monthly cost (50 users)", ours: "$149-$199", theirs: "$400-$800/mo", oursHighlight: true },
  { label: "Per-seat pricing", ours: "None (unlimited)", theirs: "$8-$16/user/mo", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "Built-in docs/wiki", ours: "Included", theirs: "Separate product", oursHighlight: true },
  { label: "Built-in importers", ours: "Jira, Asana, Linear, ClickUp, Monday", theirs: "Manual CSV or paid migration", oursHighlight: true },
  { label: "Time tracking", ours: "Included", theirs: "$10-$15/user add-on", oursHighlight: true },
  { label: "Complexity", ours: "Clean, modern UI", theirs: "500+ configuration options", oursHighlight: true },
];

const plans = [
  { name: "Standard", description: "Self-hosted project management for teams of any size.", setupPrice: 2497, monthlyPrice: 149, features: ["Unlimited users", "Kanban, table, timeline views", "Sprint cycles", "Built-in wiki/docs", "Triage inbox", "GitHub integration", "Custom workflows", "5-7 business days setup"] },
  { name: "Professional", description: "Advanced setup with migration and custom configuration.", setupPrice: 3997, monthlyPrice: 199, recommended: true, features: ["Everything in Standard", "Data migration from Jira/Asana", "Custom fields & workflows", "Advanced permissions", "API access", "Priority support", "5-7 business days setup"] },
];

const faqItems = [
  { question: "Can I migrate from Jira, Asana, or Linear?", answer: "Yes. Plane has built-in importers for Jira, Asana, Linear, ClickUp, and Monday.com. We handle the full migration as part of the Professional plan setup, including field mapping and data verification." },
  { question: "Is this as powerful as Jira?", answer: "For most teams, yes -- and significantly simpler. You get sprints, kanban, Gantt, wiki, time tracking, and triage without Jira's overwhelming configuration. Two Fortune 10 companies chose Plane for their Jira migration. If you need SAFe or advanced enterprise compliance, Jira may still be the better fit." },
  { question: "How many users can I add?", answer: "Unlimited. Both plans include unlimited users at no additional cost. No per-seat pricing, no Maximum Quantity Billing surprises." },
  { question: "Does it integrate with GitHub?", answer: "Yes. Plus GitLab, Slack, Sentry, and 50+ other tools. Link repositories, see commit history on tasks, and auto-update task status based on pull request events." },
  { question: "Can different teams have separate boards?", answer: "Yes. Teamspaces let you organize work by team with dedicated boards, workflows, and permissions. Team members can be in multiple projects with cross-team visibility." },
  { question: "Is there a built-in wiki?", answer: "Yes. Plane includes a full wiki with nested pages, real-time collaboration, and linking between docs and work items. No need for a separate Confluence or Notion subscription." },
  { question: "What about time tracking?", answer: "Built-in. Track time on any work item, generate worklogs, and use the data for billing or capacity planning. No add-on fees." },
  { question: "How long does setup take?", answer: "5-7 business days. Includes server deployment, configuration, team onboarding, and data migration if you're on the Professional plan." },
];

export default function ProjectManagementPage() {
  return (
    <>
      <ServiceHero
        badge="Project Management"
        title="Project management your team will actually use"
        description="Teams switch from Jira because it's too complex. They leave Asana because per-seat pricing doesn't scale. Plane gives you sprints, kanban, wiki, and time tracking in one workspace -- self-hosted, unlimited users, flat pricing."
        icon={KanbanSquare}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Built on Plane"
        subtitle="The open-source project management platform trusted by 50,000+ teams, including two Fortune 10 companies that migrated from Jira."
        projectName="Plane"
        projectUrl="https://github.com/makeplane/plane"
        stats={productStats}
        screenshots={productScreenshots}
      />
      <FeatureGrid
        title="Everything your team needs to ship"
        subtitle="Four products in one workspace: projects, wiki, AI, and support. Clean interface, powerful capabilities."
        features={features}
        columns={3}
      />
      <UseCaseSection
        title="Built for teams that ship"
        useCases={useCases}
      />
      <ComparisonTable
        title="Your Platform vs. Jira"
        subtitle="Simpler, cheaper, and self-hosted. At 50 users, you save $200-$600/month compared to Jira or Asana."
        ourLabel="Your Platform"
        theirLabel="Jira / Asana"
        rows={comparisonRows}
      />
      <PricingSection
        title="Flat pricing, unlimited users"
        subtitle="No per-seat fees. One price for your entire organization. The bigger your team, the more you save."
        plans={plans}
        timeline="Setup takes 5-7 business days. Includes deployment, migration, and team onboarding."
      />
      <ServiceFaq items={faqItems} />
      <CTA
        heading="Ditch the per-seat pricing"
        description="We'll deploy your project management platform and migrate your data from Jira, Asana, or Linear in under a week."
      />
    </>
  );
}
