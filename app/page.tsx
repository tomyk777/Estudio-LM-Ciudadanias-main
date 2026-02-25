import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
