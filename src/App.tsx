import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Categories from "./components/Categories";
import WhatYouGet from "./components/WhatYouGet";
import RendaExtra from "./components/RendaExtra";
import Pricing from "./components/Pricing";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <Features />
      <Gallery />
      <Categories />
      <WhatYouGet />
      <RendaExtra />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
