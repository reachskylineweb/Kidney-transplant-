import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const CausesSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on left image
      gsap.fromTo(
        imgRef.current,
        { scale: 1.15, y: -20 },
        {
          scale: 1.0,
          y: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );

      // Staggered reveal of text elements
      gsap.fromTo(
        '.causes-animate-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const causesList = [
    { num: '01', title: 'Diabetes Mellitus', desc: 'High blood sugar damages renal blood vessels over time.' },
    { num: '02', title: 'Hypertension', desc: 'Uncontrolled high blood pressure hardens kidney arteries.' },
    { num: '03', title: 'Polycystic Kidney Disease', desc: 'Genetic condition causing fluid-filled cysts to enlarge.' },
    { num: '04', title: 'Overuse of Drugs', desc: 'Chronic NSAID and nephrotoxic drug overuse.' },
    { num: '05', title: 'Glomerulonephritis', desc: 'Inflammation of tiny kidney filtering units (glomeruli).' },
    { num: '06', title: 'Infectious Diseases', desc: 'Recurrent severe urinary and systemic infections.' }
  ];

  return (
    <section ref={sectionRef} className="causes-section" id="causes">
      <div className="causes-container">
        {/* LEFT COLUMN: Mr.BLACK LOUNGE IMMERSIVE IMAGE FRAME */}
        <div className="causes-left-col causes-animate-item">
          <div className="causes-img-frame">
            <img
              ref={imgRef}
              src={ASSETS.KIDNEY_PAIR}
              alt="Kidney Pair Clinical Anatomy"
              className="causes-img"
            />
            <div className="causes-img-overlay"></div>
            <div className="causes-img-badge">
              <span>CLINICAL VISUAL</span>
              <strong>PAIR ANATOMY</strong>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: EDITORIAL CONTENT & CAUSES LIST */}
        <div className="causes-right-col">
          {/* Header Tag & Section Number */}
          <div className="causes-header-meta causes-animate-item">
            <div className="section-tag light">
              CLINICAL ETIOLOGY
            </div>
            <span className="causes-section-num">03 / 03</span>
          </div>

          {/* Title */}
          <h2 className="causes-main-title causes-animate-item">
            CAUSES OF KIDNEY FAILURE
          </h2>

          {/* Key Stat Callout Box */}
          <div className="causes-callout-box causes-animate-item">
            <div className="callout-stat-badge">45%</div>
            <p className="callout-text">
              <strong>Diabetes and Hypertension</strong> together account for <strong>45%</strong> of all kidney failure patients in India.
            </p>
          </div>

          {/* 6 Causes Grid */}
          <div className="causes-grid">
            {causesList.map((item) => (
              <div key={item.num} className="cause-card causes-animate-item">
                <span className="cause-num">{item.num}</span>
                <div className="cause-details">
                  <h3 className="cause-title">{item.title}</h3>
                  <p className="cause-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inset Metric Card (Mr.BLACK Lounge style) */}
          <div className="causes-inset-card causes-animate-item">
            <div>
              <span className="inset-caption">PRIMARY RISK FACTORS</span>
              <div className="inset-value">DIABETES & HYPERTENSION</div>
              <p className="inset-desc">Leading drivers requiring early ABO-incompatible evaluation.</p>
            </div>
            <a href="#appointment" className="mrblack-btn-pill">
              <span className="btn-dots">
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
              </span>
              <span>APPLY NOW</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
