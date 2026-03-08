import React from 'react';
import './OperationsUI.css';

const OperationsUI = () => {
  return (
    <section className="operations-ui">
      <div className="operations-ui-container">
        
        {/* Left Side: Mockup Image */}
        <div className="operations-image-col">
          <div className="dashboard-mockup-wrapper">
            <img 
              src="/path/to/your/imported/tt_eld_fleet_map_dashboard_mockup.png" 
              alt="TT ELD Fleet Management Dashboard" 
              className="dashboard-mockup-img"
              // Adding an inline style as a fallback if the user hasn't copied the image yet
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/800x600/111827/ffffff?text=Dashboard+Mockup";
              }}
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="operations-content-col">
          <h2 className="operations-title">Operations-ready UI for fleets</h2>
          <p className="operations-subtitle">
            A clean, professional interface designed for fleet managers who need actionable data at a glance.
          </p>

          <div className="operations-feature-list">
            
            <div className="ops-feature-item">
              <div className="ops-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2v6h6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15h6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12h6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ops-feature-text">
                <h3>ELD Compliance</h3>
                <p>Automated HOS logging and inspection-ready driver logs with one-tap audit mode.</p>
              </div>
            </div>

            <div className="ops-feature-item">
              <div className="ops-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="9" r="2.5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ops-feature-text">
                <h3>GPS Tracking</h3>
                <p>Live vehicle positions, route playback, and geofence alerts on an interactive map.</p>
              </div>
            </div>

            <div className="ops-feature-item">
              <div className="ops-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ops-feature-text">
                <h3>Safety Workflows</h3>
                <p>Digital DVIRs, driver behavior scoring, and fatigue monitoring dashboards.</p>
              </div>
            </div>

            <div className="ops-feature-item">
              <div className="ops-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20v-6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ops-feature-text">
                <h3>Back-Office Reports</h3>
                <p>Compliance summaries, IFTA reports, and operational analytics in one place.</p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default OperationsUI;
