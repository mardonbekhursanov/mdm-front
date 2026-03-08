import React from 'react';
import './AboutCTA.css';

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <div className="about-cta-container">
        <h2 className="about-cta-title">Ready to get started?</h2>
        <p className="about-cta-subtitle">
          Join thousands of fleets who trust TT ELD for their compliance and operations needs.
        </p>
        <button className="btn-about-cta">
          Talk to Sales
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AboutCTA;
