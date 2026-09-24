import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const DoctorPatient = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.doc-anim', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
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
    <section ref={sectionRef} className="doctor-section">
      <div className="container">
        <div className="doctor-composition">
          <div className="doctor-img-wrap doc-anim" data-cursor="CONSULT">
            <img
              src={ASSETS.DOCTOR_PATIENT}
              alt="Transplant Specialist Consultation"
              className="doctor-img"
            />
          </div>

          <div className="doctor-overlay-card doc-anim">
            <div className="section-tag light" style={{ marginBottom: '1rem' }}>
              EXPERT GUIDANCE
            </div>
            <h2 className="doctor-card-title">
              THE CONVERSATION STARTS WITH A SPECIALIST.
            </h2>
            <p className="doctor-card-desc">
              Navigating an ABO-incompatible kidney transplant requires clear answers, clinical experience, and an individual evaluation plan. Connect directly with GEM Hospital's transplant program team in Perungudi, Chennai.
            </p>
            <button
              onClick={scrollToAppointment}
              className="magnetic-btn magnetic-btn-light"
              style={{ width: '100%' }}
            >
              SCHEDULE A SPECIALIST EVALUATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
