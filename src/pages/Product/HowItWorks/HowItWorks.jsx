import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Plug Device",
      desc: "Connect the ELD device to your vehicle's diagnostic port. Takes less than 2 minutes with plug-and-play installation."
    },
    {
      number: "2",
      title: "Connect App",
      desc: "Download the TT ELD mobile app and pair it with the device via Bluetooth. Automatic configuration—no technician needed."
    },
    {
      number: "3",
      title: "Drive & Auto-Log",
      desc: "Start driving. The system automatically records your HOS, engine hours, vehicle movement, and miles driven in real time."
    },
    {
      number: "4",
      title: "Manage Compliance & Reports",
      desc: "Access logs, run reports, and manage your fleet from the web dashboard. Everything syncs automatically—no manual uploads."
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How it works</h2>
          <p className="how-it-works-subtitle">
            Get up and running in four simple steps.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number-circle">
                {step.number}
              </div>
              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
