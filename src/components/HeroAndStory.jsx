import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/assets';
import DepthCarousel from './DepthCarousel';

gsap.registerPlugin(ScrollTrigger);

export const HeroAndStory = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const kidneyRef = useRef(null);
  const slotRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const stRef = useRef(null);

  const [activeExpertIndex, setActiveExpertIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pathway: 'ABO-Incompatible Evaluation',
    preferredDate: '',
    notes: ''
  });

  const EXPERTS_DATA = [
    {
      id: 1,
      name: 'Dr. C. Palanivelu',
      qualifications: 'MS, MCh, FRCS, FACS',
      designation: 'Chairman & Chief Transplant Surgeon',
      specialty: 'Laparoscopic & Robotic Renal Transplantation',
      experience: '35+ Years Clinical Leadership',
      location: 'GEM Hospital Chennai',
      badge: 'CHIEF TRANSPLANT SURGEON'
    },
    {
      id: 2,
      name: 'Dr. K. Anand',
      qualifications: 'MD, DM (Nephrology), FISN',
      designation: 'Senior Consultant Nephrologist',
      specialty: 'ABO-Incompatible Desensitization & Renal Care',
      experience: '20+ Years Nephrology Experience',
      location: 'Perungudi Transplant Center',
      badge: 'LEAD NEPHROLOGIST'
    },
    {
      id: 3,
      name: 'Dr. R. Sathish',
      qualifications: 'MS, MCh (Urology), DNB',
      designation: 'Senior Transplant Urologist',
      specialty: 'Minimal Access Vascular & Graft Implantation',
      experience: '18+ Years Surgical Expertise',
      location: 'Transplant Surgery Division',
      badge: 'TRANSPLANT UROLOGIST'
    },
    {
      id: 4,
      name: 'Dr. M. Priya',
      qualifications: 'MD, DA, FNB (Critical Care)',
      designation: 'Chief Transplant ICU Specialist',
      specialty: 'Perioperative & High-Risk Anesthesia',
      experience: '16+ Years Critical Care',
      location: 'Transplant ICU Unit',
      badge: 'INTENSIVIST & ANESTHESIA'
    },
    {
      id: 5,
      name: 'Dr. S. Rajesh',
      qualifications: 'MD, DM (Clinical Immunology)',
      designation: 'Transplant Immunologist',
      specialty: 'HLA Matching & Plasma Exchange Protocols',
      experience: '15+ Years Immunogenetics',
      location: 'GEM Immunogenetics Lab',
      badge: 'IMMUNOLOGY FACULTY'
    }
  ];

  const expertCarouselItems = EXPERTS_DATA.map(exp => ({
    image: '', // Blank placeholder
    name: exp.name,
    qual: exp.qualifications,
    alt: exp.name
  }));

  const currentExpert = EXPERTS_DATA[activeExpertIndex] || EXPERTS_DATA[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const getStage2KidneyY = () => {
        if (typeof window === 'undefined') return '38vh';
        if (window.innerWidth > 768) return '38vh';
        if (slotRef.current && kidneyRef.current) {
          const kRect = kidneyRef.current.getBoundingClientRect();
          const sRect = slotRef.current.getBoundingClientRect();
          const kCenter = kRect.top + kRect.height / 2;
          const sCenter = sRect.top + sRect.height / 2;
          const deltaY = sCenter - kCenter;
          if (deltaY > 0) return deltaY;
        }
        return '26vh';
      };

      // Master pinned timeline across 6 stages for 100% reversible scroll choreography
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=850%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      stRef.current = tl.scrollTrigger;

      // INITIAL STATES
      gsap.set(heroRef.current, { autoAlpha: 1, y: 0 });
      gsap.set('.mrblack-hero-content', { opacity: 1, y: 0 });
      gsap.set(section2Ref.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(section3Ref.current, { yPercent: 100, pointerEvents: 'none' });
      gsap.set(section4Ref.current, { yPercent: 100, pointerEvents: 'none' });
      gsap.set(section5Ref.current, { yPercent: 100, pointerEvents: 'none' });
      gsap.set(section6Ref.current, { yPercent: 100, pointerEvents: 'none' });
      gsap.set(img3Ref.current, { scale: 1.15, y: -20 });
      gsap.set(img4Ref.current, { scale: 1.15 });

      // =========================================================
      // STAGE 1 -> STAGE 2: HERO TO SECTION 2 (TRANSPLANT STORY)
      // =========================================================
      tl.to(
        '.mrblack-hero-content',
        {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: 'power1.inOut'
        },
        0
      )
        .to(
          kidneyRef.current,
          {
            y: getStage2KidneyY,
            rotation: 360,
            scale: () => (window.innerWidth <= 768 ? 0.68 : 0.95),
            duration: 1.2,
            ease: 'power1.inOut'
          },
          0
        )
        .to(
          section2Ref.current,
          {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 1,
            ease: 'power1.inOut'
          },
          0.3
        )
        .to({}, { duration: 1.2 })

      // =========================================================
      // STAGE 2 -> STAGE 3: SECTION 3 OVERLAYS SECTION 2
      // =========================================================
        .to(
          section3Ref.current,
          {
            yPercent: 0,
            pointerEvents: 'auto',
            duration: 1.8,
            ease: 'power2.inOut'
          }
        )
        .to(
          section2Ref.current,
          {
            opacity: 0,
            pointerEvents: 'none',
            duration: 1.2,
            ease: 'power1.inOut'
          },
          '<'
        )
        .to(
          kidneyRef.current,
          {
            autoAlpha: 0,
            duration: 0.8
          },
          '<'
        )
        .to(
          img3Ref.current,
          {
            scale: 1.0,
            y: 0,
            duration: 1.8,
            ease: 'power1.inOut'
          },
          '<'
        )
        .to({}, { duration: 1.2 })

      // =========================================================
      // STAGE 3 -> STAGE 4: SECTION 4 OVERLAYS SECTION 3
      // =========================================================
        .to(
          section4Ref.current,
          {
            yPercent: 0,
            pointerEvents: 'auto',
            duration: 1.8,
            ease: 'power2.inOut'
          }
        )
        .to(
          section3Ref.current,
          {
            opacity: 0,
            pointerEvents: 'none',
            duration: 1.2,
            ease: 'power1.inOut'
          },
          '<'
        )
        .to(
          img4Ref.current,
          {
            scale: 1.0,
            duration: 1.8,
            ease: 'power1.inOut'
          },
          '<'
        )
        .to({}, { duration: 1.2 })

      // =========================================================
      // STAGE 4 -> STAGE 5: SECTION 5 (OUR EXPERTS) OVERLAYS SECTION 4
      // =========================================================
        .to(
          section5Ref.current,
          {
            yPercent: 0,
            pointerEvents: 'auto',
            duration: 1.8,
            ease: 'power2.inOut'
          }
        )
        .to(
          section4Ref.current,
          {
            opacity: 0,
            pointerEvents: 'none',
            duration: 1.2,
            ease: 'power1.inOut'
          },
          '<'
        )
        .to({}, { duration: 1.2 })

      // =========================================================
      // STAGE 5 -> STAGE 6: SECTION 6 (BOOK CONSULTATION) OVERLAYS SECTION 5
      // =========================================================
        .to(
          section6Ref.current,
          {
            yPercent: 0,
            pointerEvents: 'auto',
            duration: 1.8,
            ease: 'power2.inOut'
          }
        )
        .to(
          section5Ref.current,
          {
            opacity: 0,
            pointerEvents: 'none',
            duration: 1.2,
            ease: 'power1.inOut'
          },
          '<'
        )
        .to({}, { duration: 1.5 });

    }, containerRef);

    // Global navigation functions mapping section IDs & modal triggers
    window.openAppointmentModal = () => setIsModalOpen(true);
    window.closeAppointmentModal = () => setIsModalOpen(false);

    window.scrollToSection = (sectionId) => {
      setIsModalOpen(false);
      if (!stRef.current) return;
      const st = stRef.current;
      const total = st.end - st.start;
      let targetRatio = 0;

      switch (sectionId) {
        case 'about':
        case 'hero':
          targetRatio = 0;
          break;
        case 'explanation':
        case 'program':
        case 'story':
          targetRatio = 0.20;
          break;
        case 'causes':
        case 'journey':
          targetRatio = 0.40;
          break;
        case 'types':
        case 'faq':
        case 'donor-story':
          targetRatio = 0.60;
          break;
        case 'experts':
          targetRatio = 0.80;
          break;
        case 'appointment':
        case 'contacts':
        case 'book':
          setIsModalOpen(true);
          return;
        default:
          targetRatio = 0;
      }

      const targetY = st.start + total * targetRatio;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    };

    return () => {
      ctx.revert();
      delete window.scrollToSection;
      delete window.openAppointmentModal;
      delete window.closeAppointmentModal;
    };
  }, []);

  const touchStartY = useRef(0);

  const scrollToAppointment = () => {
    setIsModalOpen(true);
  };

  const handleModalWheel = (e) => {
    // If scrolling wheel up (deltaY < -10), close modal to reveal the hidden section underneath
    if (e.deltaY < -10) {
      setIsModalOpen(false);
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const touchY = e.touches[0].clientY;
    const diff = touchY - touchStartY.current;
    if (diff > 40) {
      setIsModalOpen(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        pathway: 'ABO-Incompatible Evaluation',
        preferredDate: '',
        notes: ''
      });
    }, 4000);
  };

  const causesList = [
    { num: '01', title: 'Diabetes Mellitus', desc: 'High blood sugar damages renal blood vessels over time.' },
    { num: '02', title: 'Hypertension', desc: 'Uncontrolled high blood pressure hardens kidney arteries.' },
    { num: '03', title: 'Polycystic Kidney Disease', desc: 'Genetic condition causing fluid-filled cysts to enlarge.' },
    { num: '04', title: 'Overuse of Drugs', desc: 'Chronic NSAID and nephrotoxic drug overuse.' },
    { num: '05', title: 'Glomerulonephritis', desc: 'Inflammation of tiny kidney filtering units (glomeruli).' },
    { num: '06', title: 'Infectious Diseases', desc: 'Recurrent severe urinary and systemic infections.' }
  ];

  return (
    <div ref={containerRef} className="hero-story-pinned-container">
      {/* GLOBAL PINNED FLOATING KIDNEY PROTAGONIST */}
      <div className="global-kidney-layer">
        <div ref={kidneyRef} className="mrblack-kidney-wrapper">
          <img
            src={ASSETS.HERO_KIDNEY}
            alt="ABO-Incompatible Kidney Protagonist"
            className="mrblack-kidney-img isolated-kidney"
          />
        </div>
      </div>

      {/* ================= HERO SECTION (STAGE 1) ================= */}
      <section ref={heroRef} className="mrblack-hero-section" id="about">
        <div className="mrblack-hero-container mrblack-hero-content">
          {/* Left Column Content */}
          <div className="mrblack-hero-left">
            <h1 className="mrblack-hero-title">
              ABO-INCOMPATIBLE<br />KIDNEY TRANSPLANT
            </h1>
            <p className="mrblack-hero-desc">
              Blood group mismatch doesn't necessarily end the transplant conversation. Explore specialized evaluation pathways at GEM Hospital Perungudi.
            </p>
            <button onClick={scrollToAppointment} className="mrblack-apply-btn">
              <span className="btn-dots">
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
              </span>
              <span>APPLY NOW</span>
            </button>
          </div>

          {/* Center Kidney Slot */}
          <div className="mrblack-hero-center">
            <div style={{ width: '320px', height: '380px' }}></div>
          </div>

          {/* Right Column Metrics */}
          <div className="mrblack-hero-right">
            <div className="mrblack-hero-stat">
              <div className="stat-number">95000 16022</div>
              <div className="stat-label">24/7 Campaign Helpline</div>
            </div>

            <div className="mrblack-hero-stat">
              <div className="stat-number">PERUNGUDI</div>
              <div className="stat-label">Chennai Transplant Center</div>
            </div>
          </div>
        </div>

        {/* Watermark Background */}
        <div className="mrblack-hero-watermark mrblack-hero-content" aria-hidden="true">
          GEM HOSPITAL
        </div>
      </section>

      {/* ================= SECTION 2: KIDNEY TRANSPLANT STORY (STAGE 2 - FIXED) ================= */}
      <section ref={section2Ref} className="story-section-2">
        <div className="story-section-2-container story-section-2-content">
          {/* Top Heading above kidney */}
          <div className="story-top-heading">
            <div className="section-tag light" style={{ marginBottom: '0.5rem' }}>
              DEFINITIVE TREATMENT PATHWAY
            </div>
            <h2 className="story-main-title">KIDNEY TRANSPLANT</h2>
          </div>

          <div className="story-section-grid">
            {/* Left to Right Body Content */}
            <div className="story-body-content">
              <p className="story-paragraph">
                Kidney transplantation is the most definitive and cost-effective treatment for patients with kidney failure and on dialysis.
              </p>
              <p className="story-paragraph highlight">
                It is estimated that in India every year over <strong>152,000 people</strong> are diagnosed to have renal failure needing kidney transplantation.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <button onClick={scrollToAppointment} className="mrblack-btn-pill">
                  <span className="btn-dots">
                    <span className="btn-dot"></span>
                    <span className="btn-dot"></span>
                    <span className="btn-dot"></span>
                  </span>
                  <span>EXPLORE ABO-INCOMPATIBLE PATHWAY</span>
                </button>
              </div>
            </div>

            {/* Center Slot reserved for Kidney landing in center */}
            <div ref={slotRef} className="story-center-slot"></div>

            {/* Right Corner Stat Cards */}
            <div className="story-stats-right">
              <div className="features-card">
                <span className="features-card-caption">ANNUAL DIAGNOSES</span>
                <span className="features-card-number">152,000+</span>
                <p className="features-card-desc">Patients in India needing renal transplant each year.</p>
              </div>

              <div className="features-card">
                <span className="features-card-caption">CARE MODALITY</span>
                <span className="features-card-number">DEFINITIVE</span>
                <p className="features-card-desc">Superior long-term survival vs maintenance dialysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CAUSES OF KIDNEY FAILURE (STAGE 3 - OVERLAYS SECTION 2) ================= */}
      <section ref={section3Ref} className="causes-section" id="causes">
        <div className="causes-container">
          {/* LEFT COLUMN: Mr.BLACK LOUNGE IMMERSIVE IMAGE FRAME */}
          <div className="causes-left-col">
            <div className="causes-img-frame">
              <img
                ref={img3Ref}
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
            <div className="causes-header-meta">
              <div className="section-tag light">
                CLINICAL ETIOLOGY
              </div>
              <span className="causes-section-num">03 / 06</span>
            </div>

            {/* Title */}
            <h2 className="causes-main-title">
              CAUSES OF KIDNEY FAILURE
            </h2>

            {/* Key Stat Callout Box */}
            <div className="causes-callout-box">
              <div className="callout-stat-badge">45%</div>
              <p className="callout-text">
                <strong>Diabetes and Hypertension</strong> together account for <strong>45%</strong> of all kidney failure patients in India.
              </p>
            </div>

            {/* 6 Causes Grid */}
            <div className="causes-grid">
              {causesList.map((item) => (
                <div key={item.num} className="cause-card">
                  <span className="cause-num">{item.num}</span>
                  <div className="cause-details">
                    <h3 className="cause-title">{item.title}</h3>
                    <p className="cause-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TYPES OF KIDNEY TRANSPLANT (STAGE 4 - OVERLAYS SECTION 3) ================= */}
      <section ref={section4Ref} className="types-section" id="types">
        <div className="types-container">
          {/* Header Tag & Title */}
          <div className="types-header">
            <div className="section-tag light" style={{ marginBottom: '0.4rem' }}>
              04 / 06 CLINICAL MODALITIES & OPTIONS
            </div>
            <h2 className="types-main-title">TYPES OF KIDNEY TRANSPLANT</h2>
          </div>

          <div className="types-grid">
            {/* LEFT SIDE: DECEASED DONOR TRANSPLANT CARD */}
            <div className="types-card">
              <span className="types-card-tag">CADAVERIC REGISTRY</span>
              <h3 className="types-card-title">DECEASED DONOR KIDNEY TRANSPLANT</h3>
              <p className="types-card-desc">
                Organ donated from a brain-dead or deceased individual registered under TRANSTAN organ sharing network. Vital pathway for patients without an available living related donor.
              </p>
              <ul className="types-checklist">
                <li>State & National Waitlist Registry</li>
                <li>24/7 Emergency Surgical Readiness</li>
                <li>Comprehensive Matching Evaluation</li>
              </ul>
            </div>

            {/* CENTER SIDE: ANATOMY IMAGE FRAME */}
            <div className="types-center-frame">
              <img
                ref={img4Ref}
                src={ASSETS.KIDNEY_ANATOMY}
                alt="Kidney Anatomy Visual"
                className="types-img"
              />
              <div className="types-center-badge">
                ANATOMICAL MODEL
              </div>
            </div>

            {/* RIGHT SIDE: LIVING DONOR TRANSPLANT CARD */}
            <div className="types-card">
              <span className="types-card-tag">RELATED DONOR & ABO-INCOMPATIBLE</span>
              <h3 className="types-card-title">LIVING DONOR KIDNEY TRANSPLANT</h3>
              <p className="types-card-desc">
                Organ donated by a healthy living relative. Covers both standard blood group matched transplants and specialized ABO-incompatible desensitization protocols.
              </p>
              <ul className="types-checklist">
                <li>Elective Pre-Planned Surgery</li>
                <li>ABO-Incompatible Desensitization</li>
                <li>Superior Long-Term Graft Survival</li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA Pill */}
          <div className="types-bottom-cta">
            <button onClick={scrollToAppointment} className="mrblack-btn-pill">
              <span className="btn-dots">
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
              </span>
              <span>APPLY FOR TRANSPLANT EVALUATION</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: OUR EXPERTS (STAGE 5 - OVERLAYS SECTION 4 WITH DEPTH CAROUSEL) ================= */}
      <section ref={section5Ref} className="experts-section" id="experts">
        <div className="experts-container">
          <div className="experts-header">
            <div className="section-tag light" style={{ marginBottom: '0.4rem' }}>
              05 / 06 CLINICAL FACULTY & SURGICAL TEAM
            </div>
            <h2 className="experts-main-title">OUR EXPERTS</h2>
          </div>

          <div className="experts-body-grid">
            {/* LEFT SIDE: REACT BITS DEPTH CAROUSEL */}
            <div className="experts-carousel-wrapper">
              <DepthCarousel
                items={expertCarouselItems}
                cardWidth={260}
                cardHeight={320}
                depth={180}
                spread={75}
                tilt={18}
                tiltDirection="right"
                perspective={1400}
                visibleCards={4}
                falloff={0.2}
                blur={4}
                autoplay={true}
                autoplayDelay={3500}
                loop={true}
                showControls={true}
                showIndicators={true}
                onChange={(idx) => setActiveExpertIndex(idx)}
              />
            </div>

            {/* RIGHT SIDE: ACTIVE EXPERT DETAILS CARD */}
            <div className="expert-details-card">
              <span className="expert-badge">{currentExpert.badge}</span>
              <h3 className="expert-name">{currentExpert.name}</h3>
              <div className="expert-qual">{currentExpert.qualifications}</div>
              <div className="expert-designation">{currentExpert.designation}</div>
              <p className="expert-specialty">
                <strong>Specialization:</strong> {currentExpert.specialty}
              </p>
              <ul className="expert-highlights">
                <li>{currentExpert.experience}</li>
                <li>ABO-Incompatible Protocol Certified</li>
                <li>{currentExpert.location}</li>
              </ul>
              <div style={{ marginTop: '0.4rem' }}>
                <button onClick={scrollToAppointment} className="mrblack-btn-pill">
                  <span className="btn-dots">
                    <span className="btn-dot"></span>
                    <span className="btn-dot"></span>
                    <span className="btn-dot"></span>
                  </span>
                  <span>BOOK EXPERT CONSULTATION</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: BOOK CONSULTATION (STAGE 6 - OVERLAYS SECTION 5 WITH FORM & ADDRESS) ================= */}
      <section ref={section6Ref} className="appointment-section" id="appointment">
        <div className="appointment-container">
          <div className="appointment-header">
            <div className="section-tag light" style={{ marginBottom: '0.4rem' }}>
              06 / 06 PATIENT EVALUATION & DIRECT CONTACT
            </div>
            <h2 className="appointment-main-title">BOOK CONSULTATION</h2>
          </div>

          <div className="appointment-body-grid">
            {/* LEFT SIDE: DIRECT CONTACT & ADDRESS CARD */}
            <div className="appointment-contact-card">
              <div className="contact-item">
                <span className="contact-label">24/7 CAMPAIGN HELPLINE</span>
                <a href="tel:9500016022" className="contact-value highlight-phone">
                  95000 16022
                </a>
                <span className="contact-subtext">Immediate clinical triage & ABO-incompatible evaluation support</span>
              </div>

              <div className="contact-item">
                <span className="contact-label">CLINICAL CENTER LOCATION</span>
                <div className="contact-value">GEM Hospital Chennai</div>
                <span className="contact-subtext">138, Old Mahabalipuram Road, Perungudi, Chennai, Tamil Nadu 600096</span>
              </div>

              <div className="contact-item">
                <span className="contact-label">DIRECT EMAIL & HOSPITAL DESK</span>
                <a href="mailto:transplant@chennaigemhospital.in" className="contact-value" style={{ fontSize: '0.95rem' }}>
                  transplant@chennaigemhospital.in
                </a>
                <span className="contact-subtext">Landline: 044 - 6123 4567 | OP Hours: Mon - Sat (8 AM - 8 PM)</span>
              </div>
            </div>

            {/* RIGHT SIDE: INTERACTIVE CONSULTATION FORM */}
            <div className="appointment-form-card">
              {submitted ? (
                <div className="form-success-msg">
                  ✓ EVALUATION REQUEST SUBMITTED! OUR TRANSPLANT COORDINATOR WILL CALL YOU AT 95000 16022 SHORTLY.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="appointment-form">
                  <div>
                    <label className="form-label">PATIENT NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">PHONE NUMBER</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="patient@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">EVALUATION PATHWAY</label>
                    <select
                      className="form-select"
                      value={formData.pathway}
                      onChange={(e) => setFormData({ ...formData, pathway: e.target.value })}
                    >
                      <option value="ABO-Incompatible Evaluation">ABO-Incompatible Evaluation</option>
                      <option value="Kidney Failure & Dialysis Care">Kidney Failure & Dialysis Care</option>
                      <option value="Living Donor Matching">Living Donor Matching</option>
                      <option value="Cadaveric Waitlist Registry">Cadaveric Waitlist Registry</option>
                    </select>
                  </div>

                  <div className="form-group-full">
                    <label className="form-label">PREFERRED CONSULTATION DATE</label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>

                  <div className="form-group-full">
                    <label className="form-label">PATIENT CLINICAL NOTES (OPTIONAL)</label>
                    <textarea
                      placeholder="Mention current blood group, dialysis frequency, or donor details..."
                      className="form-textarea"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="form-group-full">
                    <button type="submit" className="form-submit-btn">
                      <span className="btn-dots">
                        <span className="btn-dot"></span>
                        <span className="btn-dot"></span>
                        <span className="btn-dot"></span>
                      </span>
                      <span>SUBMIT EVALUATION REQUEST</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT BOOK CONSULTATION OVERLAY (POPS UP OVER CURRENT SECTION WITHOUT SCROLLING THRU INTERMEDIATE SECTIONS) */}
      {isModalOpen && (
        <div
          className="appointment-modal-overlay"
          onWheel={handleModalWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="appointment-modal-inner">
            <button
              onClick={() => setIsModalOpen(false)}
              className="appointment-modal-close"
              aria-label="Close modal"
            >
              ✕ CLOSE
            </button>

            <div className="appointment-header">
              <div className="section-tag light" style={{ marginBottom: '0.4rem' }}>
                PATIENT EVALUATION & DIRECT CONTACT
              </div>
              <h2 className="appointment-main-title">BOOK CONSULTATION</h2>
            </div>

            <div className="appointment-body-grid">
              {/* LEFT SIDE: DIRECT CONTACT & ADDRESS CARD */}
              <div className="appointment-contact-card">
                <div className="contact-item">
                  <span className="contact-label">24/7 CAMPAIGN HELPLINE</span>
                  <a href="tel:9500016022" className="contact-value highlight-phone">
                    95000 16022
                  </a>
                  <span className="contact-subtext">Immediate clinical triage & ABO-incompatible evaluation support</span>
                </div>

                <div className="contact-item">
                  <span className="contact-label">CLINICAL CENTER LOCATION</span>
                  <div className="contact-value">GEM Hospital Chennai</div>
                  <span className="contact-subtext">138, Old Mahabalipuram Road, Perungudi, Chennai, Tamil Nadu 600096</span>
                </div>

                <div className="contact-item">
                  <span className="contact-label">DIRECT EMAIL & HOSPITAL DESK</span>
                  <a href="mailto:transplant@chennaigemhospital.in" className="contact-value" style={{ fontSize: '0.95rem' }}>
                    transplant@chennaigemhospital.in
                  </a>
                  <span className="contact-subtext">Landline: 044 - 6123 4567 | OP Hours: Mon - Sat (8 AM - 8 PM)</span>
                </div>
              </div>

              {/* RIGHT SIDE: INTERACTIVE CONSULTATION FORM */}
              <div className="appointment-form-card">
                {submitted ? (
                  <div className="form-success-msg">
                    ✓ EVALUATION REQUEST SUBMITTED! OUR TRANSPLANT COORDINATOR WILL CALL YOU AT 95000 16022 SHORTLY.
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="appointment-form">
                    <div>
                      <label className="form-label">PATIENT NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">PHONE NUMBER</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="patient@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">EVALUATION PATHWAY</label>
                      <select
                        className="form-select"
                        value={formData.pathway}
                        onChange={(e) => setFormData({ ...formData, pathway: e.target.value })}
                      >
                        <option value="ABO-Incompatible Evaluation">ABO-Incompatible Evaluation</option>
                        <option value="Kidney Failure & Dialysis Care">Kidney Failure & Dialysis Care</option>
                        <option value="Living Donor Matching">Living Donor Matching</option>
                        <option value="Cadaveric Waitlist Registry">Cadaveric Waitlist Registry</option>
                      </select>
                    </div>

                    <div className="form-group-full">
                      <label className="form-label">PREFERRED CONSULTATION DATE</label>
                      <input
                        type="date"
                        required
                        className="form-input"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>

                    <div className="form-group-full">
                      <label className="form-label">PATIENT CLINICAL NOTES (OPTIONAL)</label>
                      <textarea
                        placeholder="Mention current blood group, dialysis frequency, or donor details..."
                        className="form-textarea"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="form-group-full">
                      <button type="submit" className="form-submit-btn">
                        <span className="btn-dots">
                          <span className="btn-dot"></span>
                          <span className="btn-dot"></span>
                          <span className="btn-dot"></span>
                        </span>
                        <span>SUBMIT EVALUATION REQUEST</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
