import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Project Assistant — Coming Soon",
  description:
    "An AI assistant that scopes your project, answers technical questions, and helps you get a quote — before talking to a human.",
};

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
