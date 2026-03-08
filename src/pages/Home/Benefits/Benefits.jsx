import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-container">
        
        <div className="benefits-header">
          <h2 className="benefits-title">How can TT ELD help you?</h2>
          <p className="benefits-subtitle">
            Measurable improvements that impact your bottom line from day one.
          </p>
        </div>

        <div className="benefits-grid">
          
          {/* Card 1 */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefit-icon text-amber-500">
                <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Save Time</h3>
            <p className="benefit-card-desc">
              Automate hours of daily paperwork. Electronic logs, digital DVIRs, and automated reports eliminate manual data entry and free your team to focus on what matters.
            </p>
          </div>

          {/* Card 2 */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefit-icon text-amber-500">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Increase Profit</h3>
            <p className="benefit-card-desc">
              Reduce fuel costs with route optimization, minimize violations and fines with proactive compliance alerts, and maximize asset utilization with real-time fleet visibility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefit-icon text-amber-500">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Improve Performance</h3>
            <p className="benefit-card-desc">
              Data-driven insights help you identify inefficiencies, benchmark driver performance, optimize dispatch decisions, and continuously improve fleet operations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
