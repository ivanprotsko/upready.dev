import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shadcn-space/blocks/navbar-02/navbar";
import Script from "next/script";
import "./globals.css";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upready.dev"),
  title: {
    default: "upready.dev — Production-Ready Business Tools on Your Server",
    template: "%s | upready.dev",
  },
  description:
    "Deploy self-hosted CRM, AI assistants, analytics, email marketing, and more. Managed setup, your server, your data. From $997.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upready.dev",
    siteName: "upready.dev",
    title: "upready.dev — Production-Ready Business Tools on Your Server",
    description:
      "Deploy self-hosted CRM, AI assistants, analytics, email marketing, and more. Managed setup, your server, your data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "upready.dev — Production-Ready Business Tools on Your Server",
    description:
      "Deploy self-hosted CRM, AI assistants, analytics, email marketing, and more. Managed setup, your server, your data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z0TY2WLM3Q" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z0TY2WLM3Q');
        `}</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
