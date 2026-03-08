import React from 'react';
import Hero from './Hero/Hero';
import Partners from './Partners/Partners';
import Features from './Features/Features';
import Benefits from './Benefits/Benefits';
import AdvancedFeatures from './AdvancedFeatures/AdvancedFeatures';
import MobileApp from './MobileApp/MobileApp';
import DriverApp from './DriverApp/DriverApp';
import Testimonials from './Testimonials/Testimonials';
import FAQ from './FAQ/FAQ';
import CTA from './CTA/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <Benefits />
      <AdvancedFeatures />
      <MobileApp />
      <DriverApp />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Home;
