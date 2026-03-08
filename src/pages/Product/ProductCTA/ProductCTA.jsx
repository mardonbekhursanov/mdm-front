import React from 'react';
import './ProductCTA.css';

const ProductCTA = () => {
  return (
    <section className="product-cta-section">
      <div className="product-cta-container">
        
        <h2 className="product-cta-title">See TT ELD in action</h2>
        <p className="product-cta-subtitle">
          Schedule a personalized demo and discover how TT ELD can transform your fleet operations.
        </p>
        
        <div className="product-cta-buttons">
          <button className="btn-product-cta-primary">
            Talk to Sales
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-product-cta-secondary">
            View Pricing
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductCTA;
