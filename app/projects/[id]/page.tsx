import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { projects, getProjectById } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found | PCF",
      description: "The requested project could not be found.",
    };
  }

  return generatePageMetadata({
    title: `${project.title} - PCF Project Gallery`,
    description: `${project.description.substring(0, 150)}...`,
    keywords: [
      `${project.category} Ottawa`,
      `paver restoration Ottawa`,
      `${project.title}`,
      "PCF projects",
      "paver repair Ontario",
    ],
    path: `/projects/${project.id}`,
    images: [project.afterImage],
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-secondary py-16 md:py-24">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={project.afterImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-[#d6781c] text-white text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 mb-6">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {project.location}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {project.duration}
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* Before/After Images */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8 text-center">
            Before & After Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#292524] text-center">
                Before
              </h3>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} - Before`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#292524] text-center">
                After
              </h3>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={project.afterImage}
                  alt={`${project.title} - After`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Project Description */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">
                Project Overview
              </h2>
              <p className="text-[#292524] text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-6">
                Challenges We Addressed
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-red-500 mr-3 mt-1">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-[#292524]">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-6">
                Our Professional Solutions
              </h3>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-[#d6781c] mr-3 mt-1">
                      <svg
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
                    <p className="text-[#292524]">{solution}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-6">
                Outstanding Results
              </h3>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">
                      <svg
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
                    <p className="text-[#292524]">{result}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Project Details Card */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-[#292524] mb-6">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-[#292524]">
                    Category:
                  </span>
                  <p className="text-[#292524]/80">{project.category}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#292524]">
                    Location:
                  </span>
                  <p className="text-[#292524]/80">{project.location}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#292524]">
                    Duration:
                  </span>
                  <p className="text-[#292524]/80">{project.duration}</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary text-[#292524] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Ready for Your Own Transformation?
              </h3>
              <p className="mb-6">
                Contact us today for a free consultation and quote for your
                paver project.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-secondary text-[#292524] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Outdoor Space
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-[#292524]">
            Ready to bring new life to your pavers? Our expert team is ready to
            help you achieve similar outstanding results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get Started Today
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
