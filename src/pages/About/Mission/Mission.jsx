import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        
        <div className="mission-left">
          <h2 className="mission-title">Our mission</h2>
          <div className="mission-text">
            <p>
              We believe that compliance shouldn't be complicated. Our mission is to build technology that makes it simple for every fleet—from single owner-operators to enterprise carriers—to stay compliant, keep drivers safe, and operate at peak efficiency.
            </p>
            <p>
              Founded by industry veterans who understand the daily challenges of trucking, TT ELD was built from the ground up to solve the real problems that fleet managers and drivers face every day. We combine cutting-edge technology with deep industry knowledge to deliver a platform that truly works for the people who use it.
            </p>
          </div>
        </div>

        <div className="mission-right">
          <div className="mission-cards-grid">
            <div className="mission-card">
              <div className="mission-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 18h3.19l3.19-3.19M15 12V6a2 2 0 0 1 2-2h3.19a2 2 0 0 1 2 2v9.31a2 2 0 0 1-2 2h-3.19M12 18h0M8 18h0"></path>
                  <circle cx="7" cy="18" r="2"></circle>
                  <circle cx="17" cy="18" r="2"></circle>
                </svg>
              </div>
              <div className="mission-card-value">52K+</div>
              <div className="mission-card-label">Trucks</div>
            </div>

            <div className="mission-card">
              <div className="mission-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="mission-card-value">5.3K+</div>
              <div className="mission-card-label">Fleets</div>
            </div>

            <div className="mission-card wide">
              <div className="mission-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 2C12 2 12 5 12 5M12 19V22M2 12H5M19 12h3"></path>
                </svg>
              </div>
              <div className="mission-card-value">Since 2020</div>
              <div className="mission-card-label">Serving the industry</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
