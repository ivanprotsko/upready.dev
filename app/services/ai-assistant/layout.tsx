import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA-Compliant AI Chatbot — Private AI Assistant, Self-Hosted",
  description:
    "AI chatbot that answers from your documents — patient records, contracts, internal policies. Data never leaves your server. 30+ LLM providers. Setup from $1,997.",
  openGraph: {
    title: "Private AI Assistant for Business — HIPAA-Ready, Self-Hosted",
    description:
      "AnythingLLM deployed on your infrastructure. Chat with your documents, automate support — without sending data to OpenAI or any third party.",
    url: "https://upready.dev/services/ai-assistant",
    images: [{ url: "/api/og?title=HIPAA-Compliant+AI+Chatbot&description=Private+AI+assistant,+data+never+leaves+your+server.&service=ai-assistant", width: 1200, height: 630, alt: "HIPAA-Compliant Private AI Assistant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPAA-Compliant AI Chatbot — Private, Self-Hosted, Your Data",
    description: "Deploy an AI assistant that never sends your data to third parties. HIPAA-ready. Setup from $1,997.",
    images: ["/api/og?title=HIPAA-Compliant+AI+Chatbot&description=Private+AI+assistant,+self-hosted.&service=ai-assistant"],
  },
  alternates: { canonical: "https://upready.dev/services/ai-assistant" },
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
    {
      "@type": "Question",
      name: "What makes this a HIPAA-compliant AI chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HIPAA compliance requires that patient data never leaves your controlled infrastructure. We configure AnythingLLM with a local LLM (via Ollama) so no data is sent to OpenAI, Anthropic, or any external service. The entire AI stack — model, inference, and data — runs on your server. We configure encryption at rest, access controls, and audit logging.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build a HIPAA-compliant AI chatbot without technical staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle the entire setup: server provisioning, LLM configuration, HIPAA-aligned access controls, and team training. Your staff uses a browser-based interface — no technical knowledge required to add documents, create workspaces, or chat with the assistant.",
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
