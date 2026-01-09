import { Hero } from './components/Hero';
import { FeatureProducts } from './components/FeatureProducts';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { useTitle } from '../../hooks/useTitle';
export const HomePage = () => {
  useTitle('Home | eBookStore');
  return (
    <main>
      <Hero />
      <FeatureProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
