import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services/Services';
import TechStack from '../components/sections/TechStack';
import Work from '../components/sections/Work';
import About from '../components/sections/About';
import SaasSection from '../components/sections/SaaS/SaasSection';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <TechStack />
      <Work />
      <About />
      <SaasSection />
      <Contact />
    </main>
  );
}