import React from 'react';
import { MapPin, Phone, Globe, Clock } from 'lucide-react';

export const Location = () => {
  return (
    <section style={{ backgroundColor: '#F3F0E7', padding: '6rem 0', borderTop: '1px solid #E6E1D3' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="section-tag">HOSPITAL LOCATION</div>
            <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800', color: '#062817', marginBottom: '2rem' }}>
              GEM HOSPITAL CHENNAI
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} color="#B52A2A" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.9rem', color: '#062817', display: 'block' }}>ADDRESS</strong>
                  <span style={{ color: '#555555', fontSize: '0.95rem' }}>
                    Perungudi, Old Mahabalipuram Road (OMR), Chennai, Tamil Nadu 600096
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={22} color="#0B3D24" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.9rem', color: '#062817', display: 'block' }}>DIRECT PHONE</strong>
                  <a href="tel:9500016022" style={{ color: '#B52A2A', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none' }}>
                    95000 16022
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Globe size={22} color="#0B3D24" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.9rem', color: '#062817', display: 'block' }}>OFFICIAL WEBSITE</strong>
                  <a href="https://chennaigemhospital.in" target="_blank" rel="noopener noreferrer" style={{ color: '#0B3D24', textDecoration: 'underline' }}>
                    chennaigemhospital.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: '380px', backgroundColor: '#E6E1D3', border: '1px solid #D8D2C2', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', textAlign: 'center' }}>
            <MapPin size={48} color="#0B3D24" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Syne', fontSize: '1.4rem', color: '#062817', marginBottom: '0.5rem' }}>
              PERUNGUDI CAMPUS
            </h3>
            <p style={{ color: '#555555', fontSize: '0.9rem', maxWidth: '320px', marginBottom: '1.5rem' }}>
              State-of-the-art tertiary care facility with dedicated renal operating suites and specialized intensive care units.
            </p>
            <a
              href="https://maps.google.com/?q=GEM+Hospital+Perungudi+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn magnetic-btn-secondary"
            >
              OPEN IN GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
