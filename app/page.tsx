import Hero from "../components/Hero";
import FeaturedServices from "../components/FeaturedServices";
import Testimonials from "../components/Testimonials";
import ProjectShowcase from "../components/ProjectShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <ProjectShowcase />
      <Testimonials />
      <CallToAction />
    </>
  );
}
