import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export const MobileStickyCTA = () => {
  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mobile-sticky-cta">
      <div className="mobile-sticky-inner">
        <a href="tel:9500016022" className="mobile-cta-btn mobile-cta-call">
          <Phone size={14} /> CALL 95000 16022
        </a>
        <button onClick={scrollToAppointment} className="mobile-cta-btn mobile-cta-book">
          <Calendar size={14} /> BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
};
