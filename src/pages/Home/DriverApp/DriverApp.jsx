import React, { useState } from 'react';
import './DriverApp.css';

const DriverApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabContent = {
    dashboard: {
      label: 'DRIVER APP INTERFACE',
      title: 'Everything at a glance',
      desc: 'Drivers see their current duty status, available hours, and next required actions the moment they open the app.',
      image: '/tablet-mockup.png',
      features: [
        'Review duty status at a glance',
        'See remaining drive and on-duty hours',
        'One-tap status changes between driving, on-duty, and sleeper',
        'Instant access to navigation, messages, and alerts'
      ]
    },
    logs: {
      label: 'HOS LOGS INTERFACE',
      title: 'Simplified compliance logging',
      desc: 'Edit logs, manage unassigned driving time, and certify records directly from the mobile device to ensure FMCSA compliance.',
      image: '/tablet-mockup-logs.png',
      features: [
        'Visual log graphs for 24-hour periods',
        'Easy bulk log editing and annotations',
        'Automatic violation alerts before they occur',
        'Seamless roadside inspection transfer mode'
      ]
    },
    inspection: {
      label: 'DVIR INTERFACE',
      title: 'Digital vehicle inspections',
      desc: 'Complete pre-trip and post-trip inspections quickly. Report defects, attach photos, and sign off electronically.',
      image: '/tablet-mockup-inspection.png',
      features: [
        'Customizable inspection templates by vehicle type',
        'Mechanic sign-off workflow for repaired defects',
        'Photo uploads for immediate damage reporting',
        'Historical DVIR access for compliance audits'
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="driver-app">
      <div className="driver-app-container">
        
        <div className="driver-app-header">
          <h2 className="driver-app-title">Driver app that keeps logs clean and inspections fast</h2>
          <p className="driver-app-subtitle">
            A purpose-built mobile experience that helps drivers stay compliant without slowing them down.
          </p>
        </div>

        {/* Tabs */}
        <div className="driver-app-tabs-container">
          <div className="driver-app-tabs">
            <button 
              className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Driver Dashboard
            </button>
            <button 
              className={`tab-btn ${activeTab === 'logs' ? 'active' : ''}`}
              onClick={() => setActiveTab('logs')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              HOS Logs
            </button>
            <button 
              className={`tab-btn ${activeTab === 'inspection' ? 'active' : ''}`}
              onClick={() => setActiveTab('inspection')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Vehicle Inspection
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="driver-app-content-area transition-fade">
          
          {/* Left Tablet Image */}
          <div className="driver-app-image-side" key={`image-${activeTab}`}>
            <img src={currentContent.image} alt={currentContent.title} className="tablet-image fade-in" />
          </div>

          {/* Right Text Content */}
          <div className="driver-app-text-side" key={`text-${activeTab}`}>
            <div className="feature-label fade-in-up">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="18" x2="12" y2="18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>{currentContent.label}</span>
            </div>
            
            <h3 className="content-title fade-in-up stagger-1">{currentContent.title}</h3>
            <p className="content-desc fade-in-up stagger-2">{currentContent.desc}</p>

            <ul className="content-list fade-in-up stagger-3">
              {currentContent.features.map((feature, idx) => (
                <li key={idx}>
                  <div className="check-icon-wrapper">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DriverApp;
