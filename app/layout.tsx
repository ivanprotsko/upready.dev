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
    default: "upready.dev — Fix Your App. Cut Your SaaS Bill. Fixed Prices.",
    template: "%s | upready.dev",
  },
  description:
    "We rescue AI-built apps, build MVPs, and replace expensive SaaS with managed open-source alternatives. Senior developers. Fixed prices. You own everything.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upready.dev",
    siteName: "upready.dev",
    title: "Fix Your App. Cut Your SaaS Bill. Fixed Prices. — upready.dev",
    description:
      "We rescue broken AI-built apps and replace expensive SaaS with open-source alternatives you control. Fixed prices, 48-hour turnaround, full ownership.",
    images: [
      {
        url: "/api/og?title=Fix+Your+App.+Cut+Your+SaaS+Bill.&description=Senior+developers.+Fixed+prices.+You+own+everything.",
        width: 1200,
        height: 630,
        alt: "upready.dev — Fix Your App. Cut Your SaaS Bill.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Your App. Cut Your SaaS Bill. — upready.dev",
    description:
      "We rescue AI-built apps and replace expensive SaaS with open-source alternatives. Fixed prices, fast turnaround, full ownership.",
    images: [
      "/api/og?title=Fix+Your+App.+Cut+Your+SaaS+Bill.&description=Senior+developers.+Fixed+prices.+You+own+everything.",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "upready.dev",
  url: "https://upready.dev",
  logo: "https://upready.dev/logo.png",
  description:
    "Deployment agency that rescues AI-built apps, builds MVPs from scratch, and deploys managed open-source alternatives to HubSpot, DocuSign, Mailchimp, and Shopify — at transparent fixed prices.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@upready.dev",
    availableLanguage: ["English"],
  },
  areaServed: ["US", "GB", "EU"],
  knowsAbout: [
    "AI app rescue and repair",
    "MVP development",
    "Managed open-source software deployment",
    "Self-hosted CRM setup",
    "Self-hosted email marketing",
    "Open-source e-signature platforms",
    "HIPAA-compliant AI assistants",
    "Privacy-first web analytics",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "upready.dev",
  url: "https://upready.dev",
  description:
    "We rescue AI-built apps, build MVPs, and replace expensive SaaS with managed open-source alternatives. Senior developers. Fixed prices. You own everything.",
  publisher: { "@type": "Organization", name: "upready.dev" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
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
