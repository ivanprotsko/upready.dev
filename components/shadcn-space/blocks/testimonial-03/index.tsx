import Testimonials from "@/components/shadcn-space/blocks/testimonial-03/testimonial";
import type { TestimonialType } from "@/components/shadcn-space/blocks/testimonial-03/testimonial-card";

export const TestimonialsData: TestimonialType[] = [
  {
    id: 1,
    type: "text",
    quote:
      "Our workflow is finally streamlined. What used to take hours now happens automatically, giving our team more time to focus on strategic work.",
    name: "Jessica Thompson",
    role: "Head of Operations",
    image: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    theme: "light",
  },
  {
    id: 2,
    type: "media",
    image: "https://images.shadcnspace.com/assets/profiles/emily.webp",
    name: "Emily Davis",
    role: "VP of Product",
    youtubeId: "n6dvjVxy02U",
  },
  {
    id: 3,
    type: "text",
    quote:
      "This platform replaced multiple tools for us. The visibility, speed, and control we now have across projects is a game changer.",
    name: "Linda Brown",
    role: "Chief Technology Officer",
    image: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    theme: "dark",
  },
  {
    id: 4,
    type: "media",
    image: "https://images.shadcnspace.com/assets/profiles/davis.webp",
    name: "Davis Tom",
    role: "Engineer",
    youtubeId: "n6dvjVxy02U",
  },
  {
    id: 5,
    type: "text",
    quote:
      "Our workflow is finally streamlined. What used to take hours now happens automatically, giving our team more time to focus on strategic work.",
    name: "Jessica Thompson",
    role: "Head of Operations",
    image: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    theme: "light",
  },
  {
    id: 6,
    type: "media",
    image: "https://images.shadcnspace.com/assets/profiles/emily.webp",
    name: "Emily Davis",
    role: "VP of Product",
  },
];

export default function TestimonialsDemo() {
  return (
    <>
      <Testimonials testimonials={TestimonialsData} />
    </>
  );
}
