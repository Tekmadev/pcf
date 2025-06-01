import Hero from "../components/Hero";
import FeaturedServices from "../components/FeaturedServices";
import Testimonials from "../components/Testimonials";
import ProjectShowcase from "../components/ProjectShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import GoogleReviews from "../components/GoogleReviews";
import CallToAction from "../components/CallToAction";
import AEOContent from "../components/AEOContent";
import { businessProfile } from "@/data/businessProfile";

export default function Home() {
  const homepageQAContent = [
    {
      question: "What flooring services does PCF provide in Ottawa?",
      answer:
        "PCF offers comprehensive flooring services including hardwood installation, carpet installation, tile and ceramic work, vinyl flooring, epoxy flooring, and professional flooring repairs and refinishing throughout Ottawa and surrounding areas.",
      category: "Services",
    },
    {
      question: "Is PCF licensed and insured in Ottawa?",
      answer:
        "Yes, PCF is a fully licensed and insured contractor in Ottawa. We carry WSIB coverage and provide comprehensive warranties on all our work for your peace of mind.",
      category: "Credentials",
    },
    {
      question: "Do you provide free estimates in Ottawa?",
      answer:
        "Absolutely! PCF provides free, no-obligation estimates for all flooring and contracting projects in Ottawa, Kanata, Orleans, Nepean, Gatineau, and surrounding areas.",
      category: "Pricing",
    },
    {
      question: "What areas in Ottawa do you serve?",
      answer:
        "PCF serves all of Ottawa including downtown Ottawa, Kanata, Orleans, Nepean, Barrhaven, Gloucester, and extends to Gatineau and surrounding communities in Eastern Ontario and Western Quebec.",
      category: "Service Area",
    },
    {
      question: "How long has PCF been serving Ottawa?",
      answer:
        "PCF has been providing quality flooring and contracting services to Ottawa residents and businesses for years, building a reputation for excellence, reliability, and customer satisfaction.",
      category: "Experience",
    },
    {
      question: "What makes PCF different from other Ottawa contractors?",
      answer:
        "PCF stands out through our commitment to quality craftsmanship, transparent pricing, comprehensive warranties, licensed and insured operations, and personalized service for each Ottawa client.",
      category: "Why Choose Us",
    },
  ];

  return (
    <>
      <AEOContent
        title="Flooring and Contracting Services in Ottawa"
        businessName="PCF (Precision Contracting & Flooring)"
        location="Ottawa"
        qaContent={homepageQAContent}
        contextInfo={{
          serviceArea: [
            "Ottawa",
            "Gatineau",
            "Kanata",
            "Orleans",
            "Nepean",
            "Barrhaven",
            "Gloucester",
          ],
          businessHours:
            "Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 4:00 PM",
          phone: businessProfile.phone.display,
          email: businessProfile.email,
          credentials: [
            "Licensed Contractor in Ottawa",
            "Fully Insured with WSIB Coverage",
            "Quality Workmanship Guarantee",
            "Free Estimates and Consultations",
            "Serving Ottawa Since Establishment",
          ],
        }}
      />

      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <ProjectShowcase />
      <GoogleReviews />
      {/* <Testimonials /> */}
      <CallToAction />
    </>
  );
}
