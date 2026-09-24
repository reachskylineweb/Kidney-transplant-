import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ASSETS } from '../constants/assets';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (window.scrollToSection) {
      window.scrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className={`mrblack-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="mrblack-header-inner">
          {/* Left Links */}
          <nav className="mrblack-nav-left">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="mrblack-nav-link">
              ABOUT
            </a>
            <a href="#explanation" onClick={(e) => { e.preventDefault(); scrollToSection('explanation'); }} className="mrblack-nav-link">
              PROGRAM
            </a>
            <a href="#journey" onClick={(e) => { e.preventDefault(); scrollToSection('journey'); }} className="mrblack-nav-link">
              JOURNEY
            </a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="mrblack-nav-link">
              FAQ
            </a>
          </nav>

          {/* Center Brand Logo with Clean Badge for 100% Clarity */}
          <a href="#" className="mrblack-brand-center">
            <div className="logo-badge">
              <img src={ASSETS.GEM_LOGO} alt="GEM Hospital Logo" className="mrblack-logo-img" />
            </div>
          </a>

          {/* Right Action */}
          <div className="mrblack-nav-right">
            <a href="#appointment" onClick={(e) => { e.preventDefault(); scrollToSection('appointment'); }} className="mrblack-nav-link hide-mobile">
              CONTACTS
            </a>
            <button
              onClick={() => scrollToSection('appointment')}
              className="mrblack-btn-pill hide-mobile"
            >
              <span className="btn-dots">
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
              </span>
              <span>CONTACT US</span>
            </button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mrblack-mobile-drawer">
          <button onClick={() => scrollToSection('about')} className="mobile-drawer-link">ABOUT</button>
          <button onClick={() => scrollToSection('explanation')} className="mobile-drawer-link">ABO PROGRAM</button>
          <button onClick={() => scrollToSection('donor-story')} className="mobile-drawer-link">DONOR MATCH</button>
          <button onClick={() => scrollToSection('journey')} className="mobile-drawer-link">TRANSPLANT JOURNEY</button>
          <button onClick={() => scrollToSection('faq')} className="mobile-drawer-link">FAQ</button>
          <button onClick={() => scrollToSection('appointment')} className="magnetic-btn magnetic-btn-light" style={{ width: '100%', maxWidth: '300px', marginTop: '1rem' }}>
            APPLY NOW
          </button>
          <a href="tel:9500016022" style={{ color: '#C5A059', fontWeight: '700', marginTop: '1rem', textDecoration: 'none' }}>
            CALL 95000 16022
          </a>
        </div>
      )}
    </>
  );
};
