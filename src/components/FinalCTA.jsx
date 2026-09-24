import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const FinalCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-anim', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
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

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="final-cta-section">
      <div className="section-tag light cta-anim" style={{ marginBottom: '2rem' }}>
        GEM HOSPITAL CHENNAI
      </div>

      <h2 className="final-cta-title cta-anim">
        A BLOOD GROUP MISMATCH DOESN'T HAVE TO END THE CONVERSATION.
      </h2>

      <div className="final-cta-actions cta-anim">
        <button
          onClick={scrollToAppointment}
          className="magnetic-btn magnetic-btn-light"
          style={{ padding: '1.2rem 2.8rem', fontSize: '0.9rem' }}
          data-cursor="BOOK"
        >
          BOOK AN APPOINTMENT <ArrowRight size={18} />
        </button>

        <a
          href="tel:9500016022"
          className="magnetic-btn magnetic-btn-secondary"
          style={{ color: '#F3F0E7', borderColor: '#F3F0E7', padding: '1.2rem 2.8rem', fontSize: '0.9rem' }}
          data-cursor="CALL"
        >
          <Phone size={18} /> CALL 95000 16022
        </a>
      </div>

      <div style={{ marginTop: '4rem', color: '#9AAEA4', fontFamily: 'Plus Jakarta Sans', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }} className="cta-anim">
        PERUNGUDI, CHENNAI • CHENNAIGEMHOSPITAL.IN
      </div>
    </section>
  );
};
