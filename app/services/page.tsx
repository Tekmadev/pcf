import Link from "next/link";
import Image from "next/image";
import { services, getAllServiceCategories } from "@/data/services";

export const metadata = {
  title: "Our Services | PCF - Precision Flooring & Contracting",
  description:
    "Browse our comprehensive range of flooring, cleaning, and home improvement services in Ottawa. Quality craftsmanship backed by years of experience.",
};

export default function ServicesPage() {
  const categories = getAllServiceCategories();

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-secondary py-20 md:py-28">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Professional <span className="text-[#d6781c]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              From flooring installation to property maintenance, our skilled
              team delivers quality craftsmanship and exceptional results on
              every project.
            </p>
          </div>
        </div>
      </div>

      {/* Services by Category */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {categories.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <h2 className="text-3xl font-bold text-primary mb-8 border-b border-primary/20 pb-2">
              {category} Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((service) => service.category === category)
                .map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-60">
                      <Image
                        src={service.image}
                        alt={service.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {service.label.replace(" Ottawa", "")}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.shortDescription}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link
                          href={service.href}
                          className="inline-flex items-center font-medium text-[#d6781c] hover:text-[#c66812] transition-colors"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-[#292524] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-[#292524]">
            Contact us today for a free consultation and estimate on your next
            home improvement project. Our team is ready to help bring your
            vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
