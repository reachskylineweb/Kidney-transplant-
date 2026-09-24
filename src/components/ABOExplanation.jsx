import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const ABOExplanation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.abo-anim', {
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
    <section ref={sectionRef} className="abo-explanation-section" id="explanation">
      <div className="container">
        <div className="abo-grid">
          <div className="abo-anatomy-visual abo-anim" data-cursor="ANATOMY">
            <img
              src={ASSETS.KIDNEY_ANATOMY}
              alt="Kidney Anatomy Illustration"
              className="abo-anatomy-img"
            />
            <div className="anatomy-annotation anatomy-annotation-1">
              <span>ANTIBODY CONDITIONING PATHWAY</span>
            </div>
            <div className="anatomy-annotation anatomy-annotation-2">
              <span>SPECIALIZED DESENSITIZATION</span>
            </div>
          </div>

          <div className="abo-editorial-content">
            <div className="section-tag abo-anim">UNDERSTANDING ABO INCOMPATIBILITY</div>

            <h2 className="abo-editorial-title abo-anim">
              WHAT IS ABO-INCOMPATIBLE TRANSPLANTATION?
            </h2>

            <div className="editorial-block abo-anim">
              <div className="editorial-block-title">01 / IMMUNOLOGICAL ADVANCEMENT</div>
              <p className="editorial-block-text">
                Traditionally, a kidney transplant required exact blood group matching between donor and recipient. ABO-incompatible (ABOi) transplantation utilizes medical protocols to enable successful transplantation when blood types differ.
              </p>
            </div>

            <div className="editorial-block abo-anim">
              <div className="editorial-block-title">02 / SPECIALIZED PREPARATION</div>
              <p className="editorial-block-text">
                Through targeted medical conditioning—such as plasmapheresis or immunoadsorption—naturally occurring blood group antibodies in the recipient are reduced prior to surgery, allowing the donated kidney to function safely.
              </p>
            </div>

            <div className="editorial-block abo-anim">
              <div className="editorial-block-title">03 / CLINICAL EVALUATION</div>
              <p className="editorial-block-text">
                ABO-incompatible transplantation is not a universal substitute for all patients. Eligibility depends entirely on individual clinical assessment, anti-blood group antibody titers, and comprehensive specialist review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
