"use client";

import { Bot, FileText, Globe, MessageSquare, Shield, BarChart3, Users, Briefcase, Building2, ShoppingCart, Stethoscope, HardHat } from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const features = [
  { icon: MessageSquare, title: "Branded Chat Widget", description: "Embed a chat widget on your website with your logo, colors, and greeting. Customers get instant answers without leaving your site." },
  { icon: FileText, title: "Drag-and-Drop Knowledge Base", description: "Upload PDFs, DOCX, CSV, or web pages. The assistant learns your content in seconds and answers only based on your data." },
  { icon: Users, title: "Team Chat with Access Roles", description: "Internal chat interface for your team with role-based access. Different workspaces for different departments." },
  { icon: Globe, title: "AI Agents with Web Search", description: "Advanced agents that can search the web, call external APIs, and perform custom tasks beyond your knowledge base." },
  { icon: Shield, title: "Your Data, Your Server", description: "Deployed on a dedicated server. Documents never leave your infrastructure. No vendor lock-in \u2014 fully open-source." },
  { icon: BarChart3, title: "Usage Analytics", description: "See popular questions, knowledge gaps, and conversation trends. Continuously improve your assistant\u2019s effectiveness." },
];

const useCases = [
  { icon: Briefcase, industry: "Legal", description: "Website bot for initial qualification, template search across contracts and agreements." },
  { icon: HardHat, industry: "Construction", description: "Answer client questions about timelines and materials. Safety knowledge base for crews." },
  { icon: Stethoscope, industry: "Healthcare", description: "FAQ on appointments, procedure preparation, and insurance coverage \u2014 available 24/7." },
  { icon: ShoppingCart, industry: "E-commerce", description: "24/7 support powered by your product catalog, return policies, and shipping rules." },
  { icon: Building2, industry: "Consulting", description: "Between-session assistant for clients. Lead qualification through the chat widget." },
];

const comparisonRows = [
  { label: "Monthly cost", ours: "$199-$499 + ~$30 API", theirs: "$2,000-$4,000", oursHighlight: true },
  { label: "Availability", ours: "24/7/365", theirs: "8 hours, weekdays", oursHighlight: true },
  { label: "Response time", ours: "2-5 seconds", theirs: "5-30 minutes", oursHighlight: true },
  { label: "Concurrent chats", ours: "100+", theirs: "1-3", oursHighlight: true },
  { label: "Training time", ours: "Instant (upload a doc)", theirs: "Weeks", oursHighlight: true },
];

const plans = [
  { name: "Launch", description: "Get started with a branded AI assistant on your own server.", setupPrice: 1997, monthlyPrice: 199, features: ["Dedicated server deployment", "Up to 100 documents, 1 workspace", "Branded chat widget", "SSL + custom domain", "1 onboarding session (60 min)", "Hosting, monitoring, backups"] },
  { name: "Growth", description: "Multi-user setup with AI agents and integrations.", setupPrice: 3997, monthlyPrice: 299, recommended: true, features: ["Everything in Launch", "Up to 500 documents, 5 workspaces", "Multi-user with roles", "AI agents with web search", "1 integration (CRM, Slack, etc.)", "Priority support (4-hour SLA)"] },
  { name: "Scale", description: "Unlimited documents, custom agents, and full analytics.", setupPrice: 6997, monthlyPrice: 499, features: ["Everything in Growth", "Unlimited documents & workspaces", "Custom AI agents for your workflows", "Up to 3 integrations", "Multiple widgets for different pages", "Monthly optimization & dedicated support"] },
];

const faqItems = [
  { question: "Do I need technical knowledge?", answer: "No. Adding a document is as simple as dragging and dropping a file. The interface is designed for non-technical users." },
  { question: "What if the AI answers incorrectly?", answer: "The assistant only answers based on your documents. If it doesn\u2019t have the answer, it honestly says so and suggests contacting a human operator." },
  { question: "Can I update the knowledge base myself?", answer: "Yes. It takes about 30 seconds to upload a new document. Changes are reflected immediately." },
  { question: "How much does the AI model API cost?", answer: "With 100-500 questions per day, expect $20-$80/month in API costs. We help you optimize token usage to keep costs low." },
  { question: "Can I switch AI models?", answer: "Yes. The platform supports multiple AI providers including OpenAI, Anthropic, and open-source models. You can switch anytime." },
];

export default function AiAssistantPage() {
  return (
    <>
      <ServiceHero badge="AI Assistant" title="Your own ChatGPT, trained on your data" description="Deploy a knowledge-base AI assistant that answers customers 24/7, knows your product better than a new hire, and runs on your own server." icon={Bot} ctaText="Get Started" />
      <FeatureGrid title="What you get" subtitle="A complete AI assistant platform built on open-source software trusted by thousands of companies." features={features} />
      <UseCaseSection title="Built for every industry" useCases={useCases} />
      <ComparisonTable title="AI Assistant vs. Human Operator" subtitle="The AI assistant doesn\u2019t fully replace people \u2014 it handles 70-80% of routine questions, freeing your team for complex tasks." ourLabel="AI Assistant" theirLabel="Human Operator" rows={comparisonRows} />
      <PricingSection title="Simple, transparent pricing" plans={plans} timeline="Launch timeline: 3-5 business days" />
      <ServiceFaq items={faqItems} />
      <CTA heading="Ready to automate your support?" description="Book a call and we\u2019ll show you how the AI assistant works with your documents." />
    </>
  );
}
