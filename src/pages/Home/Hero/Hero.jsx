import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left Content Column */}
        <div className="hero-content">
          <h1 className="hero-title">
            Unlock the power of TT ELD to accelerate your workflow
          </h1>
          
          <p className="hero-subtitle">
            Simplify management. Streamline compliance, optimize fleet operations, prioritize driver safety—all in one comprehensive platform.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              Talk to Sales
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">View Pricing</button>
          </div>
          
          <a href="#login" className="hero-login-link">
            Dashboard Login 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Stats Row */}
          <div className="hero-stats">
            <div className="stat-item">
              <h3>52,000+</h3>
              <p>Trucks Trusted</p>
            </div>
            <div className="stat-item">
              <h3>5,300+</h3>
              <p>Fleet Companies</p>
            </div>
            <div className="stat-item">
              <h3>2020</h3>
              <p>Operating Since</p>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="hero-image-container">
          <img src="/mockup.png" alt="TT ELD Dashboard and Mobile App mockups" className="hero-image" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
