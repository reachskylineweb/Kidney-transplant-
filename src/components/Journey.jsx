import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "CONSULTATION",
    desc: "Initial specialist clinical consultation at GEM Hospital to review history, previous dialysis status, and patient background."
  },
  {
    num: "02",
    title: "DONOR & RECIPIENT EVALUATION",
    desc: "Comprehensive anatomical, renal, and overall health evaluation for both the prospective donor and recipient."
  },
  {
    num: "03",
    title: "COMPATIBILITY ASSESSMENT",
    desc: "Specialized immunological testing, blood typing, and measurement of blood group antibody titer levels."
  },
  {
    num: "04",
    title: "SPECIALIST PREPARATION",
    desc: "Targeted pre-transplant desensitization protocols (e.g. plasmapheresis) to reduce anti-blood group antibodies prior to surgery."
  },
  {
    num: "05",
    title: "TRANSPLANT SURGERY",
    desc: "Surgical procedure performed by GEM Hospital's expert transplant team in state-of-the-art operative suites."
  },
  {
    num: "06",
    title: "POST-CARE & FOLLOW-UP",
    desc: "Structured post-operative immunosuppression management and long-term renal monitoring."
  }
];

export const Journey = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 100);

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="journey-pinned-wrapper" id="journey">
      <div className="journey-container">
        <div ref={trackRef} className="journey-track">
          <div className="journey-intro-card">
            <div className="section-tag light">CLINICAL PATHWAY</div>
            <h2 className="journey-intro-title">
              YOUR<br />TRANSPLANT<br />JOURNEY
            </h2>
            <p style={{ color: '#9AAEA4', fontSize: '0.95rem', maxWidth: '340px' }}>
              A structured multi-stage evaluation and care continuum designed by specialist transplant clinicians.
            </p>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="journey-step-card" data-cursor="STEP">
              <div className="journey-step-num">{step.num}</div>
              <div>
                <h3 className="journey-step-name">{step.title}</h3>
                <p className="journey-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
