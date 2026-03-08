import React from 'react';
import TMSOperations from './TMSOperations/TMSOperations';
import TMSCTA from './TMSCTA/TMSCTA';
import './TMS.css';

const TMS = () => {
  return (
    <main className="tms-page-container">
      <section className="tms-hero">
        <div className="tms-hero-container">
          
          <div className="tms-logo">
            <span className="logo-pro">Pro</span><span className="logo-trux">TRUX</span>
          </div>

          <div className="tms-badge">
            Completely Free • No Subscription
          </div>

          <h1 className="tms-title">
            Free AI-Native TMS built by the TT ELD Team
          </h1>

          <p className="tms-subtitle">
            Meet ProTRUX — a modern, free Transportation Management System designed for carriers and dispatch teams, with built-in safety and driver qualification workflows.
          </p>

          <a href="#" className="btn-tms-primary">
            Open ProTRUX
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="tms-footer-text">
            Built by the TT ELD Team • Free to use
          </p>

        </div>
      </section>
      
      <TMSOperations />
      <TMSCTA />
      
    </main>
  );
};

export default TMS;
