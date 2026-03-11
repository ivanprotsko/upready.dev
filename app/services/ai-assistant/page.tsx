"use client";

import { Bot, FileText, Globe, MessageSquare, Shield, BarChart3, Users, Briefcase, Building2, Stethoscope, Scale, Landmark, Cpu, Mic, Puzzle, Layers } from "lucide-react";
import ServiceHero from "@/components/services/service-hero";
import ProductShowcase from "@/components/services/product-showcase";
import FeatureGrid from "@/components/services/feature-grid";
import UseCaseSection from "@/components/services/use-case-section";
import ComparisonTable from "@/components/services/comparison-table";
import PricingSection from "@/components/services/pricing-section";
import ServiceFaq from "@/components/services/service-faq";
import RelatedServices from "@/components/services/related-services";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

const productStats = [
  { label: "GitHub Stars", value: "55.9K+" },
  { label: "Contributors", value: "95+" },
  { label: "LLM Providers", value: "30+" },
  { label: "License", value: "MIT" },
];

const productScreenshots = [
  {
    src: "/images/services/ai-assistant/screenshot-main.gif",
    alt: "AnythingLLM chat interface with document context, workspace management, and AI agent capabilities",
    priority: true,
  },
  {
    src: "/images/services/ai-assistant/homepage-screenshot.webp",
    alt: "AnythingLLM dashboard overview showing workspace organization and document management",
  },
];

const features = [
  { icon: FileText, title: "Chat With Your Documents", description: "Upload PDFs, Word docs, CSV files, or entire websites. The AI learns your content instantly and answers only from your data, with citation tracking." },
  { icon: Cpu, title: "30+ LLM Providers", description: "Use OpenAI, Anthropic, Google Gemini, AWS Bedrock, or run fully local with Ollama. Switch providers anytime without reconfiguring your knowledge base." },
  { icon: Puzzle, title: "No-Code AI Agents", description: "Build agents that scrape websites, summarize documents, create charts, run SQL queries, and execute custom tools. Full MCP compatibility included." },
  { icon: Shield, title: "Your Server, Your Data", description: "Deployed on dedicated infrastructure you control. Documents never leave your environment. No vendor lock-in, no data leakage risk. Offline operation supported." },
  { icon: Users, title: "Multi-User Workspaces", description: "Role-based access control with tenant isolation. Separate workspaces for different teams or clients, each with its own document context." },
  { icon: MessageSquare, title: "Embeddable Chat Widget", description: "White-label chat widget for your website with custom branding. Customers get instant answers without leaving your site." },
  { icon: Mic, title: "Voice & Multi-Modal", description: "Built-in speech-to-text and text-to-speech. Handles images and audio alongside text in a single conversation." },
  { icon: Layers, title: "Developer API", description: "Full REST API for custom integrations. Connect to your CRM, Slack, helpdesk, or any internal system. Open-source MIT license." },
  { icon: BarChart3, title: "Usage Analytics", description: "Track popular questions, identify knowledge gaps, and monitor conversation trends. Continuously improve your assistant's effectiveness." },
];

const useCases = [
  { icon: Stethoscope, industry: "Healthcare", description: "HIPAA-compliant medical knowledge base. Patient FAQ on appointments, procedures, and insurance. Reduce front-desk call volume by 60-70%." },
  { icon: Scale, industry: "Law Firms", description: "Case research assistant with document RAG across contracts and precedents. Recover billable hours spent on routine legal questions." },
  { icon: Landmark, industry: "Financial Advisory", description: "Compliance document search across regulatory filings. Automate client reporting and streamline onboarding with instant policy answers." },
  { icon: Building2, industry: "Consulting", description: "Turn methodology libraries into an interactive knowledge base. Accelerate proposal generation and reuse institutional knowledge across engagements." },
  { icon: Briefcase, industry: "Professional Services", description: "Between-session client assistant for ongoing engagements. Lead qualification through intelligent chat. New hire onboarding in days, not months." },
  { icon: Globe, industry: "Multi-Language Support", description: "Deploy customer support in multiple languages from a single knowledge base. Serve international clients 24/7 without hiring multilingual staff." },
];

const comparisonRows = [
  { label: "Monthly cost", ours: "$199-$499 + ~$30 API", theirs: "$2,000-$4,000", oursHighlight: true },
  { label: "Setup cost", ours: "$1,997-$6,997", theirs: "$50,000-$500,000", oursHighlight: true },
  { label: "Availability", ours: "24/7/365", theirs: "8 hours, weekdays", oursHighlight: true },
  { label: "Response time", ours: "2-5 seconds", theirs: "5-30 minutes", oursHighlight: true },
  { label: "Concurrent chats", ours: "100+", theirs: "1-3", oursHighlight: true },
  { label: "Training time", ours: "Instant (upload a doc)", theirs: "Weeks", oursHighlight: true },
  { label: "Data privacy", ours: "Your server, your data", theirs: "Shared SaaS platform", oursHighlight: true },
  { label: "LLM flexibility", ours: "30+ providers, switch anytime", theirs: "Vendor-locked", oursHighlight: true },
];

const plans = [
  { name: "Launch", description: "Get started with a branded AI assistant on your own server.", setupPrice: 1997, monthlyPrice: 199, features: ["Dedicated server deployment", "Up to 100 documents, 1 workspace", "Branded chat widget", "SSL + custom domain", "1 onboarding session (60 min)", "Hosting, monitoring, backups"] },
  { name: "Growth", description: "Multi-user setup with AI agents and integrations.", setupPrice: 3997, monthlyPrice: 299, recommended: true, features: ["Everything in Launch", "Up to 500 documents, 5 workspaces", "Multi-user with roles", "AI agents with web search", "1 integration (CRM, Slack, etc.)", "Priority support (4-hour SLA)"] },
  { name: "Scale", description: "Unlimited documents, custom agents, and full analytics.", setupPrice: 6997, monthlyPrice: 499, features: ["Everything in Growth", "Unlimited documents & workspaces", "Custom AI agents for your workflows", "Up to 3 integrations", "Multiple widgets for different pages", "Monthly optimization & dedicated support"] },
];

const faqItems = [
  { question: "Do I need technical knowledge to manage this?", answer: "No. Adding documents is drag-and-drop. The interface is designed for non-technical business owners. We handle all server setup, configuration, and maintenance." },
  { question: "How is my data protected?", answer: "Your assistant runs on a dedicated server that you control. Documents are never sent to third-party services beyond the LLM API call itself. You can also run fully local models with zero external data transfer." },
  { question: "What if the AI gives wrong answers?", answer: "The assistant only answers based on your uploaded documents. When it doesn't have the information, it says so and suggests contacting your team. You can review and refine responses through the analytics dashboard." },
  { question: "Can I use this for HIPAA-compliant workflows?", answer: "Yes. With a self-hosted deployment and local LLM models, your data never leaves your infrastructure. We configure the environment to meet healthcare data handling requirements." },
  { question: "How much does the AI model API cost?", answer: "With 100-500 questions per day, expect $20-$80/month in API costs using cloud models like GPT-4o or Claude. You can also use free local models via Ollama to eliminate API costs entirely." },
  { question: "Can I switch AI models later?", answer: "Yes. The platform supports 30+ providers including OpenAI, Anthropic, Google Gemini, AWS Bedrock, and local models. Switch anytime without reconfiguring your knowledge base." },
  { question: "How long does setup take?", answer: "3-5 business days from kickoff to a working assistant with your documents loaded. Complex integrations (CRM, helpdesk) may add 2-3 days." },
  { question: "What happens if I want to cancel?", answer: "You own your data and your server. Since the software is open-source (MIT license), you can continue running it independently. There is no vendor lock-in." },
];

export default function AiAssistantPage() {
  return (
    <>
      <ServiceHero
        badge="AI Assistant"
        title="Stop losing revenue to unanswered questions"
        description="Your team spends hours searching for answers that already exist in your documents. Deploy a private AI assistant that knows your business inside out, responds in seconds, and runs on your own server."
        icon={Bot}
        ctaText="Get Started"
      />
      <ProductShowcase
        title="Built on AnythingLLM"
        subtitle="The most popular open-source AI knowledge platform. Trusted by thousands of companies worldwide."
        projectName="AnythingLLM"
        projectUrl="https://github.com/Mintplex-Labs/anything-llm"
        stats={productStats}
        screenshots={productScreenshots}
      />
      <FeatureGrid
        title="Everything you need, nothing you don't"
        subtitle="A complete AI assistant platform with enterprise capabilities at a fraction of enterprise cost."
        features={features}
      />
      <UseCaseSection
        title="High-value use cases by industry"
        useCases={useCases}
      />
      <ComparisonTable
        title="AI Assistant vs. Enterprise Alternatives"
        subtitle="Enterprise AI chatbot implementations cost $50K-$500K+. We deliver the same capabilities on open-source infrastructure, starting at $1,997."
        ourLabel="upready AI Assistant"
        theirLabel="Enterprise Solutions"
        rows={comparisonRows}
      />
      <PricingSection
        title="Simple, transparent pricing"
        subtitle="10-100x less than enterprise AI platforms. Same capabilities, your infrastructure."
        plans={plans}
        timeline="Launch timeline: 3-5 business days"
      />
      <ServiceFaq items={faqItems} />
      <RelatedServices currentSlug="ai-assistant" />
      <CTA
        heading="Your knowledge is trapped. Let's free it."
        description="Describe your use case. We'll show you how the AI assistant works with your actual documents."
      />
    </>
  );
}
