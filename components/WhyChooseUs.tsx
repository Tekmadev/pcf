const reasons = [
  {
    id: "expertise",
    title: "Unmatched Expertise",
    description:
      "With over 15 years of experience, our team brings exceptional craftsmanship to every project, ensuring flawless execution and stunning results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: "materials",
    title: "Premium Materials",
    description:
      "We source only the highest quality materials from trusted suppliers, ensuring durability, beauty, and long-lasting performance for your home.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    id: "timeline",
    title: "On-Time Completion",
    description:
      "We respect your time and deliver projects according to schedule, maintaining clear communication throughout the entire process.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "warranty",
    title: "Satisfaction Guarantee",
    description:
      "We stand behind our work with comprehensive warranties and a commitment to your complete satisfaction on every project.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary rounded-full opacity-10"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#d6781c] rounded-full opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            WHY CHOOSE US
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary">
            Excellence in Every Detail
          </h3>
          <div className="w-20 h-1 bg-[#d6781c] mx-auto mt-6"></div>
          <p className="max-w-2xl mx-auto mt-6 text-secondary-light">
            At PFC, we're committed to delivering exceptional quality and
            service that exceeds expectations. Here's why homeowners throughout
            Ottawa trust us with their most important projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 border-b-4 border-[#d6781c] h-full flex flex-col items-center text-center"
            >
              <div className="text-[#d6781c] mb-4">{reason.icon}</div>
              <h4 className="text-xl font-bold text-secondary mb-3">
                {reason.title}
              </h4>
              <p className="text-secondary-light">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
