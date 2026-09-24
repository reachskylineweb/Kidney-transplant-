import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const DialysisSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.dialysis-anim', {
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
    <section ref={sectionRef} className="dialysis-section" id="dialysis">
      <div className="container">
        <div className="dialysis-grid">
          <div className="dialysis-visual-container dialysis-anim" data-cursor="DIALYSIS">
            <img
              src={ASSETS.DIALYSIS}
              alt="Dialysis Clinical Treatment"
              className="dialysis-img"
            />
          </div>

          <div className="dialysis-content">
            <div className="section-tag dialysis-anim">TREATMENT CONTEXT</div>
            <h2 className="dialysis-content-title dialysis-anim">
              WHEN DIALYSIS IS PART OF THE JOURNEY
            </h2>
            <p className="dialysis-text dialysis-anim">
              For patients experiencing end-stage renal disease, maintenance dialysis serves as an essential life-sustaining modality while active transplantation options are evaluated.
            </p>
            <p className="dialysis-text dialysis-anim">
              When a willing living donor has a different blood group, exploring an ABO-incompatible transplant pathway at GEM Hospital may offer an alternative solution to long-term dialysis dependence for qualified candidates.
            </p>

            <div className="dialysis-notice dialysis-anim">
              <strong>Medical Disclaimer:</strong> ABO-incompatible kidney transplantation requires comprehensive pre-transplant clinical screening. Eligibility depends on individual immunological assessment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
