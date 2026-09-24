import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const kidneyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kidney scroll choreography: travels down continuously into next section
      gsap.to(kidneyRef.current, {
        y: '100vh',
        scale: 1.35,
        rotation: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Text entry animation
      gsap.from('.mrblack-hero-anim', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="mrblack-hero-section" id="about">
      <div className="mrblack-hero-container">
        {/* Left Column Content */}
        <div className="mrblack-hero-left">
          <h1 className="mrblack-hero-title mrblack-hero-anim">
            ABO-INCOMPATIBLE<br />KIDNEY TRANSPLANT
          </h1>
          <p className="mrblack-hero-desc mrblack-hero-anim">
            Blood group mismatch doesn't necessarily end the transplant conversation. Explore specialized evaluation pathways at GEM Hospital Perungudi.
          </p>
          <button
            onClick={scrollToAppointment}
            className="mrblack-apply-btn mrblack-hero-anim"
          >
            <span className="btn-dots">
              <span className="btn-dot"></span>
              <span className="btn-dot"></span>
              <span className="btn-dot"></span>
            </span>
            <span>APPLY NOW</span>
          </button>
        </div>

        {/* Center Kidney Protagonist (Isolated Floating Kidney with Radial Masking) */}
        <div className="mrblack-hero-center">
          <div className="mrblack-kidney-wrapper">
            <img
              ref={kidneyRef}
              src={ASSETS.HERO_KIDNEY}
              alt="ABO-Incompatible Kidney Protagonist"
              className="mrblack-kidney-img isolated-kidney"
            />
          </div>
        </div>

        {/* Right Column Metrics */}
        <div className="mrblack-hero-right">
          <div className="mrblack-hero-stat mrblack-hero-anim">
            <div className="stat-number">95000 16022</div>
            <div className="stat-label">24/7 Campaign Helpline</div>
          </div>

          <div className="mrblack-hero-stat mrblack-hero-anim">
            <div className="stat-number">PERUNGUDI</div>
            <div className="stat-label">Chennai Transplant Center</div>
          </div>
        </div>
      </div>

      {/* Background Watermark Text */}
      <div className="mrblack-hero-watermark" aria-hidden="true">
        GEM HOSPITAL
      </div>
    </section>
  );
};
