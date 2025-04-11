export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Residential Client",
    content:
      "Precision Flooring & Contracting transformed our outdated kitchen into a stunning, functional space that has become the heart of our home. Their attention to detail and craftsmanship is unmatched, and they went above and beyond to ensure we were happy with every aspect of the project.",
  },
  {
    name: "Robert Chen",
    role: "Commercial Client",
    content:
      "As a business owner, I needed a contractor who could complete our office renovation with minimal disruption. The team at PFC not only delivered exceptional quality but worked around our schedule to ensure our business operations weren't affected. The result is a beautiful, functional space that our employees love.",
  },
  {
    name: "Jennifer & Michael Taylor",
    role: "Whole Home Renovation",
    content:
      "We entrusted PFC with our century home renovation, which required both preserving historical elements while modernizing essential systems. Their knowledge, creativity, and craftsmanship exceeded our expectations. Five years later, the quality of their work still impresses everyone who visits our home.",
  },
];

export default testimonials;
