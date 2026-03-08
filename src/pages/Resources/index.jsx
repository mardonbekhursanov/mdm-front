import React from 'react';
import './Resources.css';

const Resources = () => {
  const resourcesList = [
    {
      id: 1,
      title: "User's Manual",
      desc: "Complete guide covering all features of the TT ELD platform, from setup to daily operations.",
    },
    {
      id: 2,
      title: "Installation Guide",
      desc: "Step-by-step instructions for installing and configuring your PT30 ELD device in any commercial vehicle.",
    },
    {
      id: 3,
      title: "ELD Certificate",
      desc: "Official FMCSA registration certificate for the TT ELD device, required for compliance verification.",
    },
    {
      id: 4,
      title: "Inspection Guide",
      desc: "Quick reference guide for roadside inspections, including how to present your ELD data to officers.",
    },
    {
      id: 5,
      title: "Malfunction Guide",
      desc: "Troubleshooting procedures and malfunction criteria as defined by FMCSA regulations.",
    },
    {
      id: 6,
      title: "TT ELD Sticker",
      desc: "Downloadable and printable TT ELD compliance sticker template for your fleet vehicles.",
    }
  ];

  return (
    <main className="resources-page">
      <div className="resources-container">
        
        <header className="resources-header">
          <h1 className="resources-title">Resources & downloads</h1>
          <p className="resources-subtitle">
            Manuals, guides, and documents to help you get the most out of TT ELD.
          </p>
        </header>

        <div className="resources-grid">
          {resourcesList.map(resource => (
            <div className="resource-card" key={resource.id}>
              
              <div className="resource-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="doc-icon">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="resource-content">
                <h3 className="resource-card-title">{resource.title}</h3>
                <p className="resource-card-desc">{resource.desc}</p>
              </div>

              <button className="btn-download">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download
              </button>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Resources;
