import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Our Projects | PCF - Paver Restoration & Repair in Ottawa",
  description:
    "View our completed paver restoration, resanding, sealing, and repair projects in Ottawa. See the transformation of patios, walkways, and driveways.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-secondary py-16 md:py-24">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/projects/part1after.jpeg"
            alt="PCF Projects"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Recent Projects
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              Explore our portfolio of paver restoration, resanding, sealing,
              and repair projects throughout Ottawa and surrounding areas.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-4">
            Paver Transformation Projects
          </h2>
          <p className="text-lg text-[#292524]/80 max-w-2xl mx-auto">
            From complete restorations to targeted repairs, see how we transform
            outdoor spaces across Ottawa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "h-[400px]" : "h-[300px]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="inline-block px-3 py-1 bg-[#d6781c] text-white text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-white hover:text-[#d6781c] font-medium transition-colors"
                    >
                      View Project Details
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
            </div>
          ))}
        </div>
      </div>

      {/* Services CTA */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-lg text-[#292524]/80 max-w-2xl mx-auto mb-8">
            Whether you need resanding, sealing, repair, or complete
            restoration, we have the expertise to transform your outdoor space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-[#292524] text-[#292524] hover:bg-[#292524] hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
