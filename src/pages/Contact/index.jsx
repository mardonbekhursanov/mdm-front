import React from 'react';
import ContactHero from './ContactHero/ContactHero';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactForm />
    </main>
  );
};

export default Contact;
