import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import HowWeWork from './sections/HowWeWork';
import ServiceAreas from './sections/ServiceAreas';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <HowWeWork />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
