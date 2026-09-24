import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Styles
import './styles/globals.css';
import './styles/sections.css';
import './styles/responsive.css';

// Components
import { Navbar } from './components/Navbar';
import { HeroAndStory } from './components/HeroAndStory';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#062817', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ backgroundColor: '#062817', minHeight: '100vh', width: '100%' }}>
        <HeroAndStory />
      </main>
    </div>
  );
}
