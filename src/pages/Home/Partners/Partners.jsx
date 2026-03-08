import React from 'react';
import './Partners.css';

const Partners = () => {
  // Duplicating the content allows for a seamless infinite scroll animation
  const logos = (
    <>
      <div className="logo-placeholder bravo">
        <span className="icon-fake">⬢</span> BRAVO TRANS LLC
      </div>
      <div className="logo-placeholder dmworld">
        <span className="icon-fake">🕊️</span> DMWORLD
      </div>
      <div className="logo-placeholder linestar">
        <span className="icon-fake">╚</span> LINESTAR<br/><small>LOGISTICS LLC</small>
      </div>
      <div className="logo-placeholder silkroad">
        SILKROAD<br/>TRANZ INC
      </div>
      <div className="logo-placeholder xps">
        <strong>XPS</strong><br/><small>TRANSPORT</small>
      </div>
    </>
  );

  return (
    <section className="partners">
      <div className="partners-container">
        <h4 className="partners-title">TRUSTED BY FLEETS AND INDUSTRY PARTNERS</h4>
        <div className="partners-carousel">
          <div className="partners-track">
            {logos}
            {/* Duplicate for seamless loop */}
            {logos}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
