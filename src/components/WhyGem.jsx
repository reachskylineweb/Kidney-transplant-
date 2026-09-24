import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WhyGem = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-anim', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why-gem-section">
      <div className="container">
        <div className="why-gem-header why-anim">
          <div>
            <div className="section-tag light">CLINICAL EXCELLENCE</div>
            <h2 className="why-gem-title">SPECIALIST CARE AT GEM</h2>
          </div>
          <div style={{ color: '#9AAEA4', fontSize: '0.9rem', maxWidth: '380px' }}>
            Multi-disciplinary medical infrastructure dedicated to complex renal transplantation in Chennai.
          </div>
        </div>

        <div className="why-gem-list">
          <div className="why-gem-item why-anim">
            <div className="why-gem-num">01 / DIAGNOSTIC RIGOR</div>
            <h3 className="why-gem-item-title">COMPREHENSIVE IMMUNOLOGICAL EVALUATION</h3>
            <p className="why-gem-item-desc">
              Detailed antibody titer testing and crossmatching to accurately evaluate blood group compatibility thresholds.
            </p>
          </div>

          <div className="why-gem-item why-anim">
            <div className="why-gem-num">02 / DESENSITIZATION</div>
            <h3 className="why-gem-item-title">TARGETED BLOOD CONDITIONING</h3>
            <p className="why-gem-item-desc">
              Structured pre-operative plasmapheresis and targeted immunosuppression protocols tailored to individual donor-recipient antibody profiles.
            </p>
          </div>

          <div className="why-gem-item why-anim">
            <div className="why-gem-num">03 / MONITORING</div>
            <h3 className="why-gem-item-title">LONG-TERM GRAFT SURVEILLANCE</h3>
            <p className="why-gem-item-desc">
              Dedicated nephrology post-operative follow-up to support renal graft survival and optimize long-term health outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
