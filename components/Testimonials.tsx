import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "PFC transformed our outdated living space into a modern oasis. Their attention to detail with our hardwood flooring installation was impeccable. The team was professional, punctual, and the results exceeded our expectations!",
    image: "/images/stockPics/flooring1.webp",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Property Manager",
    content:
      "We've worked with many contractors over the years, but none have matched the quality and reliability of PFC. From tile installation to complete renovations, they consistently deliver superior results on time and within budget.",
    image: "/images/stockPics/flooring2.webp",
  },
  {
    id: 3,
    name: "Jennifer Williams",
    role: "Interior Designer",
    content:
      "As an interior designer, I need contractors who can execute my vision with precision. PFC is my go-to recommendation for clients. Their craftsmanship is unmatched, and they bring a level of expertise that elevates every project.",
    image: "/images/stockPics/cleanroom.webp",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            CLIENT TESTIMONIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h3>
          <div className="w-20 h-1 bg-[#d6781c] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              {/* Quotation mark decoration */}
              <div className="absolute top-4 right-6 text-[#d6781c] opacity-20">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151C2.232 17.943 4 14.97 4 11.704H0V3h9.983zm13.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151C15.249 17.943 17 14.97 17 11.704h-4V3h10z"
                  />
                </svg>
              </div>

              <p className="text-secondary-light mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mt-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
