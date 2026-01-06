import { Hero } from './components/Hero';
import { FeatureProducts } from './components/FeatureProducts';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeatureProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
