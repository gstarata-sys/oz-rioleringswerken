import Hero        from "@/components/sections/Hero";
import Services    from "@/components/sections/Services";
import Werkwijze   from "@/components/sections/Werkwijze";
import Pricing     from "@/components/sections/Pricing";
import USP         from "@/components/sections/USP";
import ServiceArea from "@/components/sections/ServiceArea";
import FAQ         from "@/components/sections/FAQ";
import Contact     from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Werkwijze />
      <Pricing />
      <USP />
      <ServiceArea />
      <FAQ />
      <Contact />
    </>
  );
}
