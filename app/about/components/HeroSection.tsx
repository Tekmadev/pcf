import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/stockPics/floorfeet.webp"
          alt="Precision Flooring & Contracting team at work"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Crafting Excellence in{" "}
            <span className="text-[#d6781c]">Every Space</span>
          </h1>
          <p className="text-xl text-secondary mb-8">
            Since 2010, we've transformed Ottawa homes and businesses with
            precision, passion, and an unwavering commitment to quality.
          </p>
        </div>
      </div>
    </div>
  );
}
