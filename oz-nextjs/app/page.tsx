import Hero        from "@/components/sections/Hero";
import USP         from "@/components/sections/USP";
import Services    from "@/components/sections/Services";
import Pricing     from "@/components/sections/Pricing";
import Werkwijze   from "@/components/sections/Werkwijze";
import Portfolio   from "@/components/sections/Portfolio";
import Reviews     from "@/components/sections/Reviews";
import ServiceArea from "@/components/sections/ServiceArea";
import AboutUs     from "@/components/sections/AboutUs";
import FAQ         from "@/components/sections/FAQ";
import Contact     from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <USP />
      <Services />
      <Werkwijze />
      <Portfolio />
      <Pricing />
      <Reviews />
      <AboutUs />
      <ServiceArea />
      <FAQ />
      <Contact />
    </>
  );
}
