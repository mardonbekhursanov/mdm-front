import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      title: "Research First",
      desc: "Every feature we build starts with deep research into FMCSA regulations, driver workflows, and fleet operations. We solve real problems, not imagined ones.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      title: "Customer-Focused Services",
      desc: "Our success is measured by our customers' success. From onboarding to daily support, we're committed to delivering an exceptional experience at every touchpoint.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Proactive Strategy",
      desc: "We don't wait for regulations to change—we anticipate them. Our platform evolves ahead of industry shifts so your fleet is always prepared, never playing catch-up.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2C12 2 12 5 12 5M12 19V22M2 12H5M19 12h3"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="core-values">
      <div className="values-container">
        
        <header className="values-header">
          <h2 className="values-title">Core values</h2>
          <p className="values-subtitle">The principles that guide everything we build.</p>
        </header>

        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon-wrapper">
                {v.icon}
              </div>
              <h3 className="value-card-title">{v.title}</h3>
              <p className="value-card-desc">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
