import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        
        {/* Left Side: The Form */}
        <div className="contact-form-box">
          <form className="main-contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Smith" />
              </div>
            </div>

            <div className="form-group">
              <label>Company</label>
              <input type="text" placeholder="Your trucking company" />
            </div>

            <div className="form-group">
              <label>Fleet size</label>
              <select defaultValue="">
                <option value="" disabled>Select your fleet size</option>
                <option value="1-10">1-10 trucks</option>
                <option value="11-50">11-50 trucks</option>
                <option value="51-200">51-200 trucks</option>
                <option value="200+">200+ trucks</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@company.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your fleet and how we can help..."></textarea>
            </div>

            <button type="submit" className="btn-submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Sidebar */}
        <div className="contact-sidebar">
          <div className="sidebar-group">
            <h3 className="sidebar-title">Get in touch</h3>
            
            <div className="contact-item">
              <div className="contact-icon email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-info">
                <span className="info-label">Email</span>
                <span className="info-value">info@tteld.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon sales">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-info">
                <span className="info-label">Sales</span>
                <span className="info-value">Contact us for a personalized quote</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon support">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <div className="contact-info">
                <span className="info-label">Support</span>
                <span className="info-value">help@tteld.com</span>
              </div>
            </div>
          </div>

          <div className="sidebar-group customer-box">
            <h3 className="sidebar-title">Already a customer?</h3>
            <p className="customer-text">
              Log in to your dashboard or contact our support team for technical assistance.
            </p>
            <div className="customer-actions">
              <button className="btn-outline">Dashboard Login</button>
              <button className="btn-outline">Help Center</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
