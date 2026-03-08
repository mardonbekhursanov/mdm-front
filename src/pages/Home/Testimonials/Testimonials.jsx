import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        
        <div className="testimonials-header">
          <h2 className="testimonials-title">Trusted by fleets nationwide</h2>
          <p className="testimonials-subtitle">
            Hear from the fleet managers and owner-operators who rely on TT ELD every day.
          </p>
        </div>

        <div className="testimonials-grid">
          
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4v8zm11 0h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4v8z" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 11v4a4 4 0 0 1-4 4H4m17-8v4a4 4 0 0 1-4 4h-2" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="testimonial-text">
              "TT ELD has completely transformed how we manage our fleet. The automated HOS logging saves our drivers hours every week, and the real-time tracking gives us peace of mind."
            </p>
            <div className="testimonial-author">
              <h4 className="author-name">Fleet Manager</h4>
              <p className="author-role">Regional carrier, 50 trucks</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4v8zm11 0h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4v8z" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 11v4a4 4 0 0 1-4 4H4m17-8v4a4 4 0 0 1-4 4h-2" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="testimonial-text">
              "Switching to TT ELD was the best decision we made. Compliance has never been easier, and the customer support team is incredibly responsive."
            </p>
            <div className="testimonial-author">
              <h4 className="author-name">Owner-Operator</h4>
              <p className="author-role">Long-haul specialist</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4v8zm11 0h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4v8z" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 11v4a4 4 0 0 1-4 4H4m17-8v4a4 4 0 0 1-4 4h-2" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="testimonial-text">
              "The dashboard gives us visibility we never had before. We've reduced fuel costs by 12% and virtually eliminated HOS violations since implementing TT ELD."
            </p>
            <div className="testimonial-author">
              <h4 className="author-name">Operations Director</h4>
              <p className="author-role">Multi-state fleet, 200+ trucks</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
