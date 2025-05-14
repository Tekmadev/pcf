import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#d6781c]/20 rounded-full"></div>
              <Image
                src="/images/stockPics/flooring2.webp"
                alt="Precision Flooring & Contracting team"
                width={600}
                height={450}
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#d6781c]/10 rounded-full"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-block">
              <span className="text-sm font-medium text-[#d6781c] uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
                From Passion to Excellence
              </h2>
              <div className="w-20 h-1 bg-[#d6781c] mt-4"></div>
            </div>

            <p className="text-secondary/90 mb-6">
              Precision Flooring & Contracting began with a simple yet powerful
              vision: to bring exceptional craftsmanship and uncompromising
              quality to every home improvement project in Ottawa. Founded by
              master craftsman Michael Thompson after 5 years in the industry,
              PCF was born from the frustration of seeing too many projects
              completed with shortcuts and compromises.
            </p>

            <p className="text-secondary/90 mb-6">
              What started as a small team focused exclusively on premium
              flooring installations has grown into a comprehensive home
              improvement company with expertise spanning multiple trades.
              Through economic ups and downs, we've maintained our core promise:
              quality that exceeds expectations, service that feels personal,
              and results that stand the test of time.
            </p>

            <p className="text-secondary/90 font-medium">
              Today, our portfolio includes hundreds of successful projects
              across Ottawa, from heritage home restorations to modern
              commercial renovations, each completed with the same attention to
              detail and commitment to excellence that has defined us from day
              one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
