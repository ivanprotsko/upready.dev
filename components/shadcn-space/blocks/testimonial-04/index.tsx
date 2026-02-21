import Testimonials from "@/components/shadcn-space/blocks/testimonial-04/testimonial";
import type { TestimonialType } from "@/components/shadcn-space/blocks/testimonial-04/testimonial";

export const TestimonialsData: TestimonialType[] = [
  {
    id: 1,
    quote:
      "Our teams finally have a single source of truth. We’ve eliminated guesswork, improved collaboration, and can make faster decisions backed by real-time insights.",
    name: "Jessica Thompson",
    role: "Head of Operations",
    image: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    performance: {
      value: "42%",
      label: "Reduction in operational inefficiencies",
    },
    performance2: {
      value: "3x",
      label: "Faster cross-team decision-making",
    },
  },
  {
    id: 2,
    quote:
      "Our workflow is finally streamlined. What used to take hours now happens automatically, giving our team more time to focus on strategic work.",
    name: "Jenny Wilson",
    role: "VP of Product",
    image: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    performance: {
      value: "32%",
      label: "Reduction in operational inefficiencies",
    },
    performance2: {
      value: "2x",
      label: "Faster cross-team decision-making",
    },
  },
  {
    id: 3,
    quote:
      "This platform replaced multiple tools for us. The visibility, speed, and control we now have across projects is a game changer.",
    name: "Linda Brown",
    role: "Chief Technology Officer",
    image: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    performance: {
      value: "25%",
      label: "Reduction in operational inefficiencies",
    },
    performance2: {
      value: "1.5x",
      label: "Faster cross-team decision-making",
    },
  },
];

export default function TestimonialsDemo() {
  return (
    <>
      <Testimonials testimonials={TestimonialsData} />
    </>
  );
}
