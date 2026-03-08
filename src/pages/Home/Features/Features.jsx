import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        
        <div className="features-header">
          <h2 className="features-title">Everything you need</h2>
          <p className="features-subtitle">
            A complete platform for fleet compliance, safety, and operational efficiency.
          </p>
        </div>

        <div className="features-grid">
          
          {/* Card 1 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon text-amber-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-card-title">Driver Safety</h3>
            <p className="feature-card-desc">
              Protect your most valuable asset—your drivers. Real-time alerts, fatigue monitoring, and safety scoring help prevent accidents and keep your team safe on the road.
            </p>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon text-amber-500">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-card-title">GPS Tracking</h3>
            <p className="feature-card-desc">
              Know where every vehicle is at any moment. Live tracking, route history, geofencing, and location-based alerts give you complete visibility across your fleet.
            </p>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon text-amber-500">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-card-title">ELD Compliance</h3>
            <p className="feature-card-desc">
              Stay FMCSA-compliant with automatic Hours of Service recording, electronic DVIR, and inspection-ready logs that simplify every audit and roadside check.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
