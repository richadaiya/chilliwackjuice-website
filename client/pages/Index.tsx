import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import ProductsSection from "@/components/home/ProductsSection";
import OurStory from "@/components/home/OurStory";

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Hero />
      <Features />
      <Testimonials />
      <ProductsSection />
      <OurStory />
    </div>
  );
}
