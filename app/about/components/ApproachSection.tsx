import Image from "next/image";

export default function ApproachSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-[#d6781c] uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
              The PCF Difference
            </h2>
            <p className="text-secondary/90 mb-8">
              What sets Precision Flooring & Contracting apart isn't just what
              we do, but how we do it. Our unique approach combines old-world
              craftsmanship with modern efficiency to deliver an exceptional
              experience from consultation to completion.
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    Personalized Consultation
                  </h3>
                  <p className="text-secondary/80">
                    We begin with an in-depth consultation to understand your
                    vision, needs, and budget, creating a foundation for a
                    successful project.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    Detailed Planning
                  </h3>
                  <p className="text-secondary/80">
                    Every successful project starts with meticulous planning. We
                    create comprehensive project plans with transparent pricing
                    and realistic timelines.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    Expert Execution
                  </h3>
                  <p className="text-secondary/80">
                    Our skilled craftsmen work with precision and care,
                    following established best practices while adapting to the
                    unique challenges of each project.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-secondary/80">
                    We conduct rigorous quality checks throughout the project,
                    ensuring every detail meets our exacting standards before we
                    consider it complete.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    5
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    Ongoing Support
                  </h3>
                  <p className="text-secondary/80">
                    Our relationship doesn't end at project completion. We
                    provide guidance on maintenance and stand behind our work
                    with comprehensive warranties.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/stockPics/flooring1.webp"
              alt="Precision Flooring & Contracting work sample"
              width={300}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <Image
              src="/images/stockPics/flooring2.webp"
              alt="Precision Flooring & Contracting work sample"
              width={300}
              height={350}
              className="rounded-lg shadow-md w-full h-auto object-cover mt-12"
            />
            <Image
              src="/images/stockPics/tilling.webp"
              alt="Precision Flooring & Contracting work sample"
              width={300}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover mt-12"
            />
            <Image
              src="/images/stockPics/baex1.webp"
              alt="Precision Flooring & Contracting work sample"
              width={300}
              height={350}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
