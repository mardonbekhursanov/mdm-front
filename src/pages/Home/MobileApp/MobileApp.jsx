import React from 'react';
import './MobileApp.css';

const MobileApp = () => {
  return (
    <section className="mobile-app">
      <div className="mobile-app-container">
        
        {/* Left Content */}
        <div className="mobile-app-content">
          <h2 className="mobile-app-title">TT ELD Mobile Application</h2>
          <p className="mobile-app-subtitle">
            Everything your drivers need, right in their pocket. Designed for the road, built for simplicity.
          </p>

          <ul className="mobile-app-features">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-list-icon">
                <rect x="7" y="3" width="10" height="18" rx="2" stroke="#F59E0B" strokeWidth="2"/>
                <line x1="12" y1="18" x2="12" y2="18.01" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              All-in-one mobile app for HOS, DVIR, navigation, and messaging
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-list-icon">
                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M12 8v4l3 3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Real-time data sync with fleet dashboard and dispatch
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-list-icon">
                <path d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" stroke="#F59E0B" strokeWidth="2"/>
                <path d="M8 12h8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Inspection discretion mode—show only required information to officers
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-list-icon">
                <path d="M20 6L9 17l-5-5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Complete mobile workflows for pre-trip, post-trip, and en-route tasks
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-list-icon">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="#F59E0B" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="#F59E0B" strokeWidth="2"/>
              </svg>
              Intuitive design that reduces training time to under 15 minutes
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-list-icon">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              On-device telematics and diagnostics data at your fingertips
            </li>
          </ul>

          <div className="app-store-buttons">
            <button className="btn-store">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="store-icon">
                <path d="M4 2v20l16-10L4 2zm2 3.8l10.8 6.8L6 19.3V5.8z"/>
              </svg>
              Google Play
            </button>
            <button className="btn-store">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="store-icon">
                <path d="M16 4.3c-1.2 0-2.3.8-3 2-.6-1.1-1.8-2-3-2-2.1 0-3.8 1.8-3.8 4 0 3.2 5 7.7 6.8 9.2 1.8-1.5 6.8-6 6.8-9.2 0-2.2-1.7-4-3.8-4z"/>
              </svg>
              App Store
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mobile-app-image-wrapper">
          <img src="/mobile-mockup.png" alt="TT ELD Mobile App Interface" className="mobile-app-image" />
        </div>

      </div>
    </section>
  );
};

export default MobileApp;
