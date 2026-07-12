import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import WhatWeMake from "@/components/WhatWeMake";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Work />
        <WhatWeMake />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
