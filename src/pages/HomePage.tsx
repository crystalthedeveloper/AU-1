import Hero from '../components/Hero';
import FeaturedVehicles from '../components/FeaturedVehicles';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTA />
    </main>
  );
}
