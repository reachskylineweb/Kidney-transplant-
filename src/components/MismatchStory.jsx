import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const MismatchStory = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1
        }
      });

      tl.to(line1Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 1 }, '+=0.5')
        .to(line3Ref.current, { opacity: 1, y: 0, color: '#B52A2A', duration: 1 }, '+=0.5')
        .to('.mismatch-bg-visual', { scale: 1.2, rotation: 10, duration: 2 }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mismatch-section">
      <img
        src={ASSETS.KIDNEY_PAIR}
        alt="Background Kidney Pair visual transition"
        className="mismatch-bg-visual"
      />

      <div className="mismatch-pinned-container">
        <div className="section-tag light" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
          KEY CLINICAL PERSPECTIVE
        </div>

        <div ref={line1Ref} className="mismatch-line">
          BLOOD GROUP
        </div>
        <div ref={line2Ref} className="mismatch-line highlight">
          MISMATCH
        </div>
        <div ref={line3Ref} className="mismatch-line">
          DOESN'T HAVE TO END THE JOURNEY.
        </div>
      </div>
    </section>
  );
};
