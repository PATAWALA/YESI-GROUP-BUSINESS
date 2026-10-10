import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SourcingSimulator from "@/components/SourcingSimulator";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <SourcingSimulator />
      <WhyUs />
      <Footer />
    </main>
  );
}