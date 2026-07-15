import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedServices from "../components/home/FeaturedServices";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/common/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <FeaturedServices />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
