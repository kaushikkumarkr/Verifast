
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <InteractiveDemo />
        <Features />
        <Testimonials />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;