import Image from "next/image";
import Button from "./ui/Button";

const CTASection = () => {
  return (
    <section className="relative py-8 px-4 sm:px-6 lg:px-8 -mb-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-10 sm:px-10 sm:py-12 md:py-16 grid md:grid-cols-3 gap-10 items-center">
            <div className="col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                Book a Free Consultation
              </h2>
              <p className="text-secondary-light">
                Let us transform your home with our expert services
              </p>
            </div>

            <div className="col-span-1 flex justify-center">
              <Button
                href="/contact"
                variant="primary"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md bg-[#d6781c] hover:bg-[#c2410c] shadow-md"
              >
                BOOK NOW
              </Button>
            </div>

            <div className="col-span-1 flex flex-col md:items-end">
              <div className="flex items-center justify-start md:justify-end mb-2">
                <div className="bg-[#d6781c] rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-secondary">
                    Call Now
                  </p>
                  <a
                    href="tel:+16133025268"
                    className="text-xl font-bold text-[#d6781c] hover:text-[#c2410c]"
                  >
                    +1 613-302-5268
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
