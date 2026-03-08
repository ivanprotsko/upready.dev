"use client";

import {
  KanbanSquare, CalendarRange, FileText, Inbox, GitBranch, LayoutDashboard,
  Code, Briefcase, Building2, Rocket, Wrench,
} from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: KanbanSquare, title: "Multiple Views", description: "Kanban boards, spreadsheet, timeline, and calendar views. Switch between views with a click — same data, different perspectives." },
  { icon: CalendarRange, title: "Sprints & Cycles", description: "Plan work in sprints or cycles. Track velocity, burndown, and team capacity across iterations." },
  { icon: FileText, title: "Built-In Documents", description: "Wiki pages right next to your tasks. Keep specs, meeting notes, and decisions where work happens." },
  { icon: Inbox, title: "Triage Inbox", description: "Incoming requests land in a triage queue. Prioritize, assign, and schedule — nothing falls through the cracks." },
  { icon: GitBranch, title: "GitHub Integration", description: "Link commits and pull requests to tasks. See development progress without leaving your project board." },
  { icon: LayoutDashboard, title: "Custom Workflows", description: "Define your own statuses, priorities, and labels. The tool adapts to your process, not the other way around." },
];

const useCases = [
  { icon: Code, industry: "Software Teams", description: "Sprint planning, bug tracking, feature requests. GitHub integration keeps code and tasks in sync." },
  { icon: Briefcase, industry: "Agencies", description: "Client project boards, retainer tracking, and cross-team visibility. One workspace per client." },
  { icon: Building2, industry: "Operations", description: "Process tracking, maintenance schedules, and compliance checklists. Triage inbox for incoming requests." },
  { icon: Rocket, industry: "Startups", description: "Move fast with kanban boards. Track OKRs, product roadmap, and engineering sprints in one place." },
  { icon: Wrench, industry: "Construction & Field Work", description: "Job tracking, material requests, and punch lists. Mobile-friendly for on-site updates." },
];

const comparisonRows = [
  { label: "Monthly cost (10 users)", ours: "$149-$199", theirs: "$80-$160/mo", oursHighlight: false },
  { label: "Monthly cost (50 users)", ours: "$149-$199", theirs: "$400-$800/mo", oursHighlight: true },
  { label: "Per-seat pricing", ours: "None (unlimited)", theirs: "$8-$16/user/mo", oursHighlight: true },
  { label: "Data ownership", ours: "Your server", theirs: "Vendor cloud", oursHighlight: true },
  { label: "Built-in docs", ours: "Included", theirs: "Separate product", oursHighlight: true },
  { label: "Complexity", ours: "Clean, modern UI", theirs: "Often overwhelming", oursHighlight: true },
];

const plans = [
  { name: "Standard", description: "Self-hosted project management for teams of any size.", setupPrice: 2497, monthlyPrice: 149, features: ["Unlimited users", "Kanban, table, timeline views", "Sprint cycles", "Built-in wiki/docs", "Triage inbox", "GitHub integration", "Custom workflows", "5-7 business days setup"] },
  { name: "Professional", description: "Advanced setup with migration and custom configuration.", setupPrice: 3997, monthlyPrice: 199, recommended: true, features: ["Everything in Standard", "Data migration from Jira/Asana", "Custom fields & workflows", "Advanced permissions", "API access", "Priority support", "5-7 business days setup"] },
];

const faqItems = [
  { question: "Can I migrate from Jira or Asana?", answer: "Yes. The platform has built-in importers for Jira, Asana, Linear, ClickUp, and Monday. We handle the migration as part of the Professional plan setup." },
  { question: "Is this as powerful as Jira?", answer: "For most teams, yes — and much simpler. You get sprints, kanban, timeline, and triage without Jira's complexity. If you need advanced enterprise features like SAFe, Jira may still be the better fit." },
  { question: "How many users can I add?", answer: "Unlimited. Both plans include unlimited users at no additional cost. No per-seat pricing." },
  { question: "Does it integrate with GitHub?", answer: "Yes. Link repositories, see commit history on tasks, and auto-update task status based on pull request events." },
  { question: "Can different teams have separate boards?", answer: "Yes. Create multiple projects with their own boards, workflows, and access controls. Team members can be in multiple projects." },
];

export default function ProjectManagementPage() {
  return (
    <>
      <ServiceHero badge="Project Management" title="Your own Jira, without the complexity" description="A modern, self-hosted project management tool with kanban boards, sprints, docs, and GitHub integration. Unlimited users, no per-seat fees." icon={KanbanSquare} ctaText="Get Started" />
      <FeatureGrid title="Everything your team needs to ship" subtitle="Clean, modern interface with powerful features. Your team will actually want to use it." features={features} />
      <UseCaseSection title="Built for every team" useCases={useCases} />
      <ComparisonTable title="Your Platform vs. Jira" subtitle="Simpler, cheaper, and self-hosted. The bigger your team, the more you save." ourLabel="Your Platform" theirLabel="Jira / Asana" rows={comparisonRows} />
      <PricingSection title="Flat pricing, unlimited users" subtitle="No per-seat fees. One price for your entire organization." plans={plans} timeline="Setup takes 5-7 business days. Includes deployment, migration, and team onboarding." />
      <ServiceFaq items={faqItems} />
      <CTA heading="Ditch the per-seat pricing" description="We'll deploy your project management platform and migrate your data from Jira or Asana in under a week." />
    </>
  );
}
