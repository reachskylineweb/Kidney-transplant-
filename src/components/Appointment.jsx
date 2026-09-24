import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    patientBlood: '',
    donorBlood: '',
    message: ''
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.form-anim', {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="appointment-section" id="appointment">
      <div className="container">
        <div className="appointment-grid">
          <div className="appointment-info">
            <div className="section-tag form-anim">CONSULTATION REQUEST</div>
            <h2 className="appointment-info-title form-anim">
              LET'S TALK ABOUT YOUR TRANSPLANT JOURNEY.
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: '1.7' }} className="form-anim">
              Whether you are exploring options for yourself or a loved one, our specialist nephrology team at GEM Hospital Perungudi is available for confidential clinical evaluation.
            </p>

            <div className="appointment-direct-box form-anim">
              <div className="appointment-direct-label">DIRECT CAMPAIGN HELPLINE</div>
              <a href="tel:9500016022" className="appointment-direct-phone" data-cursor="CALL">
                95000 16022
              </a>
              <div style={{ color: '#9AAEA4', fontSize: '0.85rem' }}>
                Available Monday – Saturday • Perungudi, Chennai
              </div>
            </div>
          </div>

          <div className="appointment-form-wrap form-anim">
            {submitted ? (
              <div style={{ background: '#FFFFFF', padding: '3rem', borderLeft: '4px solid #0B3D24' }}>
                <CheckCircle2 size={48} color="#0B3D24" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Syne', fontSize: '1.8rem', marginBottom: '0.5rem', color: '#062817' }}>
                  REQUEST RECEIVED
                </h3>
                <p style={{ color: '#555555', lineHeight: '1.6' }}>
                  Thank you for submitting your evaluation request. A member of the GEM Hospital transplant coordination team will contact you shortly at <strong>{formData.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                  <label className="form-label">FULL NAME *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter patient or guardian name"
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Mobile number"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">PATIENT BLOOD GROUP</label>
                    <select
                      name="patientBlood"
                      value={formData.patientBlood}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select blood group</option>
                      <option value="A+">A Positive (A+)</option>
                      <option value="A-">A Negative (A-)</option>
                      <option value="B+">B Positive (B+)</option>
                      <option value="B-">B Negative (B-)</option>
                      <option value="AB+">AB Positive (AB+)</option>
                      <option value="AB-">AB Negative (AB-)</option>
                      <option value="O+">O Positive (O+)</option>
                      <option value="O-">O Negative (O-)</option>
                      <option value="Unknown">Unknown / Pending</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">DONOR BLOOD GROUP</label>
                    <select
                      name="donorBlood"
                      value={formData.donorBlood}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select donor blood group</option>
                      <option value="A+">A Positive (A+)</option>
                      <option value="A-">A Negative (A-)</option>
                      <option value="B+">B Positive (B+)</option>
                      <option value="B-">B Negative (B-)</option>
                      <option value="AB+">AB Positive (AB+)</option>
                      <option value="AB-">AB Negative (AB-)</option>
                      <option value="O+">O Positive (O+)</option>
                      <option value="O-">O Negative (O-)</option>
                      <option value="NoDonor">No Donor Identified Yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">ADDITIONAL CLINICAL DETAILS / QUESTION</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide relevant medical background or questions..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="form-privacy-note">
                  * By submitting this form, you consent to being contacted by GEM Hospital's transplant medical team regarding your inquiry. Confidentiality is strictly maintained.
                </div>

                <button
                  type="submit"
                  className="magnetic-btn magnetic-btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  REQUEST A CONSULTATION
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
