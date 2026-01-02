export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar?: string;
}

const Testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "Product Manager",
    message: "Outstanding service and top-quality delivery.",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Startup Founder",
    message: "Professional team with excellent communication.",
  },
  {
    id: 3,
    name: "John Smith",
    role: "CTO",
    message: "Highly reliable and technically strong.",
  },
];

export default Testimonials;
