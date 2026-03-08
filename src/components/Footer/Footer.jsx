import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section with Links */}
        <div className="footer-top">
          
          {/* Company Info */}
          <div className="footer-brand-col">
           <div className="footer-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo-icon">
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#F59E0B"/>
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#B45309" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M3 7l9 5m0 0l9-5m-9 5v10" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10v4m4-2h4m-4 2v-4" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="footer-logo-text">TT ELD</span>
            </div>
            <p className="footer-desc">
              Simplify management. Streamline compliance, optimize fleet operations, prioritize driver safety.
            </p>
            <div className="footer-stats">
              <span className="stats-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17l-5-5 1.41-1.41L9 14.17l7.59-7.59L18 8l-9 9z" fill="#9ca3af"/>
                </svg>
                52,000+ Trucks Trusted
              </span>
              <span className="stats-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17l-5-5 1.41-1.41L9 14.17l7.59-7.59L18 8l-9 9z" fill="#9ca3af"/>
                </svg>
                5,300+ Fleet Companies
              </span>
              <span className="stats-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17l-5-5 1.41-1.41L9 14.17l7.59-7.59L18 8l-9 9z" fill="#9ca3af"/>
                </svg>
                2020 Operating Since
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-wrapper">
            
            <div className="footer-col">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="#compliance">ELD Compliance</a></li>
                <li><a href="#gps">GPS Tracking</a></li>
                <li><a href="#fleet">Fleet Management</a></li>
                <li><a href="#tms">TMS</a></li>
                <li><a href="#store">Store</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><a href="#downloads">Downloads</a></li>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#refund">Refund Policy</a></li>
                <li><a href="#cookie">Cookie Policy</a></li>
                <li><a href="#warranty">Warranty</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">&copy; 2026 TT ELD. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
