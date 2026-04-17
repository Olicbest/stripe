import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import DashboardPreview from "@/components/sections/DashboardPreview";


export default function Home() {
  return (
    <main className="relative overflow-hidden pt-20">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
