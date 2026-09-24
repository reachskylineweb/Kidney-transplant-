import React from 'react';
import { ASSETS } from '../constants/assets';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src={ASSETS.GEM_LOGO} alt="GEM Hospital Logo" className="footer-brand-logo" />
            <p className="footer-desc">
              GEM Hospital Chennai is a premier tertiary clinical institute offering specialized ABO-incompatible kidney transplantation pathways in Perungudi, Chennai.
            </p>
          </div>

          <div>
            <div className="footer-col-title">NAVIGATION</div>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About ABO Program</a></li>
              <li><a href="#explanation" className="footer-link">Anatomical Overview</a></li>
              <li><a href="#donor-story" className="footer-link">Donor Matching</a></li>
              <li><a href="#journey" className="footer-link">Transplant Journey</a></li>
              <li><a href="#faq" className="footer-link">Clinical FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">CONTACT</div>
            <ul className="footer-links">
              <li><a href="tel:9500016022" className="footer-link" style={{ color: '#C5A059', fontWeight: '700' }}>Call: 95000 16022</a></li>
              <li><span className="footer-link">Location: Perungudi, Chennai</span></li>
              <li><a href="https://chennaigemhospital.in" target="_blank" rel="noopener noreferrer" className="footer-link">chennaigemhospital.in</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">CLINICAL NOTICE</div>
            <p className="footer-desc" style={{ fontSize: '0.8rem' }}>
              All clinical evaluations, desensitization protocols, and surgical interventions are subject to individual medical assessment by GEM Hospital nephrologists.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} GEM Hospital Chennai. All Rights Reserved.</div>
          <div className="footer-disclaimer">
            Disclaimer: Information provided on this landing page is for educational and campaign awareness purposes only and does not constitute formal medical diagnosis or binding guarantee.
          </div>
        </div>
      </div>
    </footer>
  );
};
