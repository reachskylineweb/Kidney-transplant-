import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const DonorRecipient = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-card', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="donor-recipient-section" id="donor-story">
      <div className="container">
        <div className="donor-recipient-header">
          <div className="section-tag light" style={{ justifyContent: 'center' }}>
            THE TRANSPLANT RELATIONSHIP
          </div>
          <h2 className="donor-recipient-title">
            BRIDGING THE DONOR & RECIPIENT JOURNEY
          </h2>
          <p style={{ color: '#9AAEA4', fontFamily: 'Plus Jakarta Sans', fontSize: '1rem' }}>
            How specialist preparation connects living donors with incompatible blood groups to recipients in need.
          </p>
        </div>

        <div className="donor-recipient-trio">
          <div className="story-card" data-cursor="DONOR">
            <div className="story-card-img-wrap">
              <img src={ASSETS.DONOR_CONCEPT} alt="Living Donor Concept" className="story-card-img" />
            </div>
            <div className="story-card-tag">01 / THE LIVING DONOR</div>
            <h3 className="story-card-title">WILLING DONOR</h3>
            <p className="story-card-desc">
              A healthy family member or living donor willing to give a kidney, even when blood group matching does not align standardly.
            </p>
          </div>

          <div className="story-card" data-cursor="DESENSITIZE" style={{ background: '#03170D', borderColor: '#C5A059' }}>
            <div className="story-card-img-wrap" style={{ height: '220px' }}>
              <img src={ASSETS.KIDNEY_PAIR} alt="Desensitization Pathway" className="story-card-img" style={{ objectFit: 'contain' }} />
            </div>
            <div className="story-card-tag" style={{ color: '#B52A2A' }}>02 / THE PATHWAY</div>
            <h3 className="story-card-title">CONDITIONING</h3>
            <p className="story-card-desc">
              Antibody removal protocols allow the recipient's immune response to safely accept the donor kidney.
            </p>
          </div>

          <div className="story-card" data-cursor="RECIPIENT">
            <div className="story-card-img-wrap">
              <img src={ASSETS.RECIPIENT} alt="Transplant Recipient" className="story-card-img" />
            </div>
            <div className="story-card-tag">03 / THE RECIPIENT</div>
            <h3 className="story-card-title">RECIPIENT CARE</h3>
            <p className="story-card-desc">
              Surgical implantation followed by multi-disciplinary clinical monitoring to support long-term organ function.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
