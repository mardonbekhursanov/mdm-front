import React from 'react';
import './ProductHero.css';

const ProductHero = () => {
  return (
    <section className="product-hero">
      <div className="product-hero-container">
        <h1 className="product-hero-title">One platform for complete fleet compliance</h1>
        <p className="product-hero-subtitle">
          From ELD logging to GPS tracking, safety management to IFTA reporting—TT ELD gives you everything you need to run a compliant, efficient fleet.
        </p>
        <button className="btn-product-hero">
          Talk to Sales
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductHero;
