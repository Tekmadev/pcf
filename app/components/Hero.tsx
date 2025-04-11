import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative bg-background-dark py-20 md:py-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Hero Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-primary uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            WE'RE THE BEST HOME SERVICE COMPANY IN OTTAWA
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
            PRECISION FLOORING & CONTRACTING SERVICES
          </h1>
          <p className="text-secondary-light mb-8 max-w-lg">
            Precision Flooring & Contracting is a premier home service company
            specializing in comprehensive renovation and maintenance services.
            We transform your home with expert flooring installations, custom
            painting, and full-scale makeovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary">
              CALL US
            </Button>
            <Button href="/contact" variant="secondary">
              BOOK A FREE CONSULTATION
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative rounded-full overflow-hidden">
          <div className="aspect-ratio-1 bg-gray-200 rounded-full overflow-hidden h-72 w-72 md:h-96 md:w-96 mx-auto relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Placeholder for hero image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
