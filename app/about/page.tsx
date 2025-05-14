import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ValuesSection from "./components/ValuesSection";
import ApproachSection from "./components/ApproachSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

export const metadata = {
  title: "About Us | PCF - Precision Flooring & Contracting",
  description:
    "Learn about Precision Flooring & Contracting's journey, mission, and the quality craftsmanship that makes us Ottawa's trusted home improvement experts.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <ApproachSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
