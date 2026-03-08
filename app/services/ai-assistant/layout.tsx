import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Assistant for Business — Private, Self-Hosted, Built on AnythingLLM",
  description:
    "Deploy a private AI assistant that answers from your documents. HIPAA-ready, 30+ LLM providers, embeddable chat widget. Setup from $1,997. Your server, your data.",
  openGraph: {
    title: "AI Assistant for Business — Self-Hosted on Your Server",
    description:
      "Private AI chatbot built on AnythingLLM. Chat with your documents, automate support, keep data on your infrastructure.",
    url: "https://upready.dev/services/ai-assistant",
  },
  alternates: {
    canonical: "https://upready.dev/services/ai-assistant",
  },
};

export default function AiAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
