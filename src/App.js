import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSections';
import Footer from './components/Footer';
import HowWork from './components/HowWork';
import PricingSection from './components/Pricing';
import Testimonial from './components/Testimonial';
 
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection/>
      <HowWork/>
      <PricingSection/>
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default App;
