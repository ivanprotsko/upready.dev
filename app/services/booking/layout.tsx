import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Booking System — Self-Hosted Cal.com",
  description:
    "Appointment scheduling with custom branding, payments, and round-robin. Replace Calendly with unlimited seats. Setup from $997.",
  openGraph: {
    title: "Self-Hosted Booking System — Open Source Calendly Alternative",
    description:
      "Scheduling built on Cal.com. Embeddable widgets, routing forms, 65+ languages. No per-seat fees.",
    url: "https://upready.dev/services/booking",
  },
  alternates: {
    canonical: "https://upready.dev/services/booking",
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
