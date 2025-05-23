import {
  getServiceById,
  getServicesByCategory,
  services,
} from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Generate static params for all services
export function generateStaticParams() {
  return services.map((service) => ({
    service_name: service.id,
  }));
}

// Replace dynamic metadata with static metadata
export const metadata = {
  title: "Service | PCF - Precision Flooring & Contracting",
  description: "Explore our professional flooring and contracting services.",
};

export default function ServicePage({
  params,
}: {
  params: any; // Changed from { service_name: string } to any
}) {
  const service = getServiceById(params.service_name);

  if (!service) {
    notFound();
  }

  // Get related services in the same category
  const relatedServices = getServicesByCategory(service.category || "")
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const isCarpetCleaning = service.id === "carpet-cleaning";

  // Remove "Ottawa" from service label where needed
  const cleanServiceLabel = service.label.replace(" Ottawa", "");

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-secondary py-16 md:py-24">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={service.image}
            alt={service.label}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {service.label}
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
              >
                Get a Free Quote
              </Link>
              {isCarpetCleaning && (
                <Link
                  href="https://www.carpetmasters.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white font-medium hover:text-[#d6781c] transition-colors"
                >
                  <span>Visit Carpet Masters</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">
              Overview
            </h2>
            <p className="text-[#292524] mb-8 text-lg leading-relaxed">
              {service.longDescription}
            </p>

            {/* Features */}
            <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-4">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="text-[#d6781c] mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[#292524]">{feature}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-4">
              Benefits
            </h3>
            <ul className="list-disc pl-6 mb-12 space-y-2 text-[#292524]">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="pl-2">
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Gallery */}
            {/*{service.gallery && service.gallery.length > 0 && (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-6">
                  Our Work
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {service.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-64 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${cleanServiceLabel} - Gallery Image ${
                          index + 1
                        }`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}*/}

            {/* Special link for Carpet Cleaning service */}
            {isCarpetCleaning && (
              <div className="mb-12 p-6 bg-white rounded-lg shadow-md border-l-4 border-[#d6781c]">
                <h3 className="text-xl font-bold text-[#292524] mb-3">
                  Partner Service
                </h3>
                <p className="text-[#292524] mb-4">
                  For specialized carpet cleaning services, we also recommend
                  our trusted partner:
                </p>
                <Link
                  href="https://www.carpetmasters.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-[#d6781c] hover:text-[#c66812] transition-colors"
                >
                  <span>Visit Carpet Masters</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Call to Action Card */}
            <div className="bg-primary text-[#292524] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Contact us today for a free consultation and quote for your{" "}
                {cleanServiceLabel.toLowerCase()} project.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full"
              >
                Request a Quote
              </Link>
            </div>

            {/* FAQ Section */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#292524] mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-[#292524] mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-[#292524]/80">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8 text-center">
              Related Services You Might Be Interested In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <div
                  key={relatedService.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedService.image}
                      alt={relatedService.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#292524] mb-2">
                      {relatedService.label.replace(" Ottawa", "")}
                    </h3>
                    <p className="text-[#292524]/80 mb-4 line-clamp-2">
                      {relatedService.shortDescription}
                    </p>
                    <Link
                      href={relatedService.href}
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
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-secondary text-[#292524] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-[#292524]">
            Our team of experienced professionals is ready to help you with your{" "}
            {cleanServiceLabel.toLowerCase()} needs. Contact us today for a
            consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
