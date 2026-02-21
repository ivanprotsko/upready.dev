import Testimonials from "@/components/shadcn-space/blocks/testimonial-05/testimonial";
import type { TestimonialType } from "@/components/shadcn-space/blocks/testimonial-05/testimonial";

export const TestimonialsData: TestimonialType[] = [
  {
    id: 1,
    quote:
      "Our website redesign was flawless. They understood our vision perfectly!",
    name: "Albert Flores",
    role: "MasterCard",
    image: "https://images.shadcnspace.com/assets/profiles/albert.webp",
    theme: "light",
    cardColor: "bg-teal-400/20",
  },
  {
    id: 2,
    quote:
      "This platform transformed how we operate. With complete visibility and smarter workflows, our teams execute faster and with far greater confidence.",
    name: "Robert Fox",
    role: "Mitsubishi",
    image: "https://images.shadcnspace.com/assets/profiles/rough.webp",
    theme: "dark",
    cardColor: "bg-primary dark:bg-white",
  },
  {
    id: 3,
    quote:
      "Super smooth process with incredible results. highly recommend!",
    name: "Jenny Wilson",
    role: "Pizza Hut",
    image: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    theme: "light",
    cardColor: "bg-muted",
  },
];

export default function TestimonialsDemo() {
  return (
    <>
      <Testimonials testimonials={TestimonialsData} />
    </>
  );
}
