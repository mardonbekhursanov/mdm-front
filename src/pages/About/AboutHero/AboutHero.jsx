import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-top">
        <h1 className="about-hero-title">Your reliable logistics partner</h1>
        <p className="about-hero-subtitle">
          Since 2020, TT ELD has been helping trucking companies across America simplify compliance, improve safety, and optimize their fleet operations.
        </p>
      </div>

      <div className="about-hero-stats-banner">
        <div className="about-hero-stats-container">
          <div className="about-stat-item">
            <span className="about-stat-value">52,000+</span>
            <span className="about-stat-label">Trucks Trusted</span>
          </div>
          <div className="about-stat-item">
            <span className="about-stat-value">5,300+</span>
            <span className="about-stat-label">Fleet Companies</span>
          </div>
          <div className="about-stat-item">
            <span className="about-stat-value">2020</span>
            <span className="about-stat-label">Operating Since</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
