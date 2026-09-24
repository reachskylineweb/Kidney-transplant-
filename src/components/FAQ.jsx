import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is ABO-incompatible kidney transplantation?",
    a: "ABO-incompatible (ABOi) kidney transplantation is a medical protocol that enables a patient to receive a kidney from a living donor with a different, non-matching blood group. Specialized pre-transplant desensitization treatments are used to temporarily clear anti-blood group antibodies from the recipient's bloodstream."
  },
  {
    q: "Does a blood group mismatch mean transplantation is impossible?",
    a: "No. Blood group mismatch does not necessarily end the transplant conversation. While standard kidney transplants require matching blood types, ABO-incompatible protocols offer an evaluated pathway for eligible patient and donor pairs under specialist nephrology supervision."
  },
  {
    q: "Who may be evaluated for ABO-incompatible transplantation?",
    a: "Patients with end-stage renal disease who have a healthy, willing living donor with a different blood group may be evaluated. Eligibility depends on individual clinical health, antibody titer levels, and specialist clinical assessment at GEM Hospital."
  },
  {
    q: "What tests are involved in the pre-transplant assessment?",
    a: "The assessment includes comprehensive blood typing, anti-A / anti-B isoagglutinin antibody titer quantification, tissue typing, crossmatching, complete renal function panel, and thorough physical evaluation of both donor and recipient."
  },
  {
    q: "How can I consult the GEM transplant team in Chennai?",
    a: "You can reach out directly to GEM Hospital Perungudi, Chennai by calling 95000 16022 or by requesting an evaluation appointment using the online consultation request form below."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-anim', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header faq-anim">
          <div className="section-tag">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="faq-title">CLINICAL QUESTIONS & ANSWERS</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item faq-anim ${openIndex === idx ? 'open' : ''}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.q}</span>
                <Plus className="faq-icon" />
              </button>
              <div className="faq-answer-wrap">
                <div className="faq-answer-content">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
