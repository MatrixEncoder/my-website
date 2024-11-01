import React from 'react';
import './ContactSection.css';

const ContactSection = () => (
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <div className="contact-details">
      <div className="contact-item">
        <i className="fas fa-phone-alt"></i>
        <p><strong>Phone:</strong> <a href="tel:+919125916986">+91-9125916986</a></p>
      </div>
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <p><strong>Email:</strong> <a href="mailto:dhawalsri77@gmail.com">dhawalsri77@gmail.com</a></p>
      </div>
      <div className="contact-item">
        <i className="fab fa-linkedin"></i>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/suryansh-srivastava-746113292" target="_blank" rel="noopener noreferrer">Suryansh Srivastava</a></p>
      </div>
    </div>
  </section>
);

export default ContactSection;
