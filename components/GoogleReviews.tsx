"use client";

import Script from "next/script";

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#292524] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#292524]/80 max-w-2xl mx-auto">
            Read genuine reviews from our satisfied customers across Ottawa and
            surrounding areas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Elfsight Google Reviews Widget */}
          <div
            className="elfsight-app-649e9647-fe1b-4c2e-8106-9589b72f2576"
            data-elfsight-app-lazy
          ></div>

          {/* Load Elfsight Platform Script */}
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="lazyOnload"
            async
          />
        </div>
      </div>
    </section>
  );
}
