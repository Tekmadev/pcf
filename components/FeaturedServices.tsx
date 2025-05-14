import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "hardwood-flooring",
    title: "Hardwood Flooring",
    description:
      "Premium hardwood installation with unmatched craftsmanship and attention to detail.",
    image: "/images/stockPics/flooring2.webp",
    href: "/services/hardwood-flooring",
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    description:
      "Professional carpet cleaning services that remove deep stains, allergens, and extend the life of your carpets. Visit our partner ",
    link: {
      text: "Carpet Masters",
      url: "https://www.carpetmasters.co",
    },
    image: "/images/carpet-cleaning.webp",
    href: "/services/carpet-cleaning",
  },
  {
    id: "renovation",
    title: "Home Renovation",
    description:
      "Complete home transformations handled with precision and care from start to finish.",
    image: "/images/stockPics/flooring1.webp",
    href: "/services/home-renovation",
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            OUR SPECIALTIES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary">
            Premium Services For Your Home
          </h3>
          <div className="w-20 h-1 bg-[#d6781c] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t-4 border-[#d6781c]">
                <h4 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h4>
                <p className="text-secondary-light mb-4">
                  {service.id === "carpet-cleaning" ? (
                    <>
                      {service.description}
                      <a
                        href={service.link?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d6781c] font-medium hover:underline"
                      >
                        {service.link?.text}
                      </a>
                      {" for specialized cleaning services."}
                    </>
                  ) : (
                    service.description
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[#d6781c] font-medium hover:text-secondary transition-colors"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
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

                  {/* {service.id === "carpet-cleaning" && (
                    <a
                      href="https://www.carpetmasters.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white bg-[#d6781c] px-4 py-2 rounded-md font-medium hover:bg-[#c66812] transition-colors"
                    >
                      Visit Carpet Masters
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
