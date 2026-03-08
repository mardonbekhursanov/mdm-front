import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <svg 
          className={`faq-icon ${isOpen ? 'rotate' : ''}`} 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="faq-answer-wrapper">
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is TT ELD?",
      answer: "TT ELD is an FMCSA-registered Electronic Logging Device (ELD) solution designed to help commercial motor vehicle drivers and fleets easily track Hours of Service (HOS), complete vehicle inspections (DVIR), and manage compliance."
    },
    {
      question: "How can TT ELD help me?",
      answer: "We simplify compliance, reduce paperwork, and provide real-time visibility into your fleet operations. Our intuitive app saves drivers time, while our powerful dashboard helps managers reduce violations and improve efficiency."
    },
    {
      question: "What are the advantages of TT ELD?",
      answer: "Advantages include an exceptionally user-friendly interface requiring under 15 minutes of training, highly responsive 24/7 customer support, seamless IFTA reporting, and reliable hardware that stays connected even in areas with poor cellular service."
    },
    {
      question: "How does TT ELD work?",
      answer: "A small hardware device plugs directly into your truck's diagnostic port (ECM). It syncs engine data via Bluetooth to the TT ELD app on the driver's smartphone or tablet, which then transmits the logs to our secure cloud dashboard for fleet managers to view in real-time."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        <div className="faq-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-subtitle">
            Quick answers to common questions about TT ELD.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="faq-footer">
          <button className="btn-view-all">
            View All FAQs
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
