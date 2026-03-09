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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted AI Assistant — AnythingLLM",
  alternateName: "Private ChatGPT Alternative for Business",
  description:
    "Managed deployment of AnythingLLM AI assistant. Chat with your documents, 30+ LLM providers, HIPAA-ready, embeddable widget. Your server, your data.",
  url: "https://upready.dev/services/ai-assistant",
  category: "AI Assistant Software",
  provider: {
    "@type": "Organization",
    name: "upready.dev",
    url: "https://upready.dev",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Launch",
      price: "1997",
      priceCurrency: "USD",
      description:
        "1 workspace, document upload, embeddable chat widget, cloud LLM integration. $199/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Growth",
      price: "3997",
      priceCurrency: "USD",
      description:
        "Multiple workspaces, API access, custom training, advanced RAG configuration. $299/mo hosting.",
    },
    {
      "@type": "Offer",
      name: "Scale",
      price: "6997",
      priceCurrency: "USD",
      description:
        "Everything in Growth + local LLM support, HIPAA configuration, multi-user management, priority support. $499/mo hosting.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need technical knowledge to manage this?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Adding documents is drag-and-drop. The interface is designed for non-technical business owners. We handle all server setup, configuration, and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "How is my data protected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your assistant runs on a dedicated server that you control. Documents are never sent to third-party services beyond the LLM API call itself. You can also run fully local models with zero external data transfer.",
      },
    },
    {
      "@type": "Question",
      name: "What if the AI gives wrong answers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The assistant only answers based on your uploaded documents. When it doesn't have the information, it says so and suggests contacting your team.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this for HIPAA-compliant workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With a self-hosted deployment and local LLM models, your data never leaves your infrastructure. We configure the environment to meet healthcare data handling requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the AI model API cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With 100-500 questions per day, expect $20-$80/month in API costs using cloud models like GPT-4o or Claude. You can also use free local models via Ollama to eliminate API costs entirely.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch AI models later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The platform supports 30+ providers including OpenAI, Anthropic, Google Gemini, AWS Bedrock, and local models. Switch anytime without reconfiguring your knowledge base.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3-5 business days from kickoff to a working assistant with your documents loaded. Complex integrations may add 2-3 days.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I want to cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You own your data and your server. Since the software is open-source (MIT license), you can continue running it independently. There is no vendor lock-in.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://upready.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://upready.dev/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Assistant",
      item: "https://upready.dev/services/ai-assistant",
    },
  ],
};

export default function AiAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
