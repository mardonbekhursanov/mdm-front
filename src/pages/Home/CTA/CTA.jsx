import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-box">
          <h2 className="cta-title">Ready to simplify your fleet management?</h2>
          <p className="cta-subtitle">
            Join over 52,000 trucks and 5,300 fleet companies already using TT ELD to stay compliant and efficient.
          </p>
          
          <div className="cta-buttons">
            <button className="btn-cta-primary">
              Talk to Sales
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-cta-secondary">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
