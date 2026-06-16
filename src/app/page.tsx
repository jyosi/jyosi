import HeroSection from "@/components/home/HeroSection";
import OwnProducts from "@/components/home/OwnProducts";
import FeaturedBrands from "@/components/home/FeaturedBrands";
import TherapeuticAreas from "@/components/home/TherapeuticAreas";
import ProductShowcase from "@/components/home/ProductShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CEOSection from "@/components/home/CEOSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OwnProducts />
      <TherapeuticAreas />
      <ProductShowcase />
      <WhyChooseUs />
      <CEOSection />
      <FeaturedBrands />
      <ContactCTA />
    </>
  );
}
