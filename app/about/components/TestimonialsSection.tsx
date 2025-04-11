import testimonials, { Testimonial } from "@/data/testimonials";

// Speech bubble icon component
const SpeechBubbleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-[#d6781c]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-[#d6781c] uppercase tracking-wider">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#292524] mt-2 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[#292524]/80">
            The true measure of our success is the satisfaction of our clients
            and the relationships we've built over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 text-[#292524] rounded-lg"
            >
              <div className="flex items-center mb-6">
                <SpeechBubbleIcon />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-[#292524]">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
