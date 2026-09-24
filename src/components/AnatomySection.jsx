import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const AnatomySection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        scale: 1.15,
        rotation: -3,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="abo-explanation-section" style={{ backgroundColor: '#F3F0E7', borderTop: '1px solid #E6E1D3' }}>
      <div className="container">
        <div className="abo-grid">
          <div className="abo-editorial-content">
            <div className="section-tag">ANATOMICAL FOCUS</div>
            <h2 className="abo-editorial-title">
              RENAL ARCHITECTURE & IMMUNE ACCEPTANCE
            </h2>
            <p className="editorial-block-text" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              The human kidney is a complex organ containing over one million microscopic nephrons responsible for filtering waste and balancing blood chemistry.
            </p>
            <p className="editorial-block-text">
              In ABO-incompatible transplantation, specialized pre-transplant procedures clear blood group isoagglutinins, allowing the recipient's kidney vasculature to assimilate the new organ without immediate hyperacute rejection.
            </p>
          </div>

          <div className="editorial-img-wrapper" style={{ height: '480px', border: '1px solid #E6E1D3' }}>
            <img
              ref={imgRef}
              src={ASSETS.KIDNEY_ANATOMY}
              alt="Detailed Kidney Structural Anatomy"
              className="editorial-img"
              style={{ objectFit: 'contain', padding: '2rem' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
