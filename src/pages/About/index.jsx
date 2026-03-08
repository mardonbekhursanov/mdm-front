import React from 'react';
import AboutHero from './AboutHero/AboutHero';
import Mission from './Mission/Mission';
import CoreValues from './CoreValues/CoreValues';
import AboutCTA from './AboutCTA/AboutCTA';

const About = () => {
  return (
    <main className="about-page">
      <AboutHero />
      <Mission />
      <CoreValues />
      <AboutCTA />
    </main>
  );
};

export default About;
