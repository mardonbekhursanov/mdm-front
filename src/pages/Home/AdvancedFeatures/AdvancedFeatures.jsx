import React from 'react';
import './AdvancedFeatures.css';

const AdvancedFeatures = () => {
  return (
    <section className="adv-features">
      <div className="adv-features-container">
        
        <div className="adv-features-header">
          <h2 className="adv-features-title">Take ELD compliance to the next level</h2>
          <p className="adv-features-subtitle">
            Advanced features that go beyond basic logging to keep you ahead of regulations.
          </p>
        </div>

        <div className="adv-features-list">
          
          {/* Feature 1 */}
          <div className="adv-feature-item">
            <div className="adv-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
                <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#F59E0B" strokeWidth="2"/>
              </svg>
            </div>
            <div className="adv-feature-content">
              <h3 className="adv-feature-title">Flexible Rulesets</h3>
              <p className="adv-feature-desc">
                Automatic ruleset selection based on real-time GPS location. The system detects state lines and adjusts HOS rules accordingly—no manual switching required.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="adv-feature-item">
            <div className="adv-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
                <rect x="3" y="11" width="18" height="10" rx="2" stroke="#F59E0B" strokeWidth="2"/>
                <circle cx="12" cy="5" r="2" stroke="#F59E0B" strokeWidth="2"/>
                <path d="M12 7v4M8 16h8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="adv-feature-content">
              <h3 className="adv-feature-title">Smart Automation</h3>
              <p className="adv-feature-desc">
                Automated yard moves, unassigned HOS handling with geofencing, and AI-powered annotations reduce manual work and eliminate common compliance errors.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="adv-feature-item">
            <div className="adv-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="adv-feature-content">
              <h3 className="adv-feature-title">Easy Integration</h3>
              <p className="adv-feature-desc">
                Seamlessly connect TT ELD with your existing dispatch, accounting, and fleet management systems through our open API and pre-built integrations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
