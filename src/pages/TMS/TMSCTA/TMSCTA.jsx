import React from 'react';
import './TMSCTA.css';

const TMSCTA = () => {
  return (
    <section className="tms-cta-section">
      <div className="tms-cta-container">
        
        <p className="tms-cta-text">
          ProTRUX is developed by the TT ELD team (ProTRUX). Use it free and connect your operations end-to-end.
        </p>
        
        <a href="#" className="btn-tms-cta">
          Open ProTRUX
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <div className="tms-redirect-notice">
          <div className="notice-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="notice-content">
            <strong>Redirect notice</strong> — You'll be redirected to ProTRUX to continue. ProTRUX is a separate product experience. <a href="#" className="notice-link">Continue to ProTRUX</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TMSCTA;
