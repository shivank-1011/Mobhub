import React from 'react';
import './CSS/Contact.css';
import { useNavigate } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection/FadeInSectio';

const Contact = () => {
  const navigate = useNavigate();
  
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="close-icon" onClick={() => navigate('/')}>
          &times;
        </div>
        
        <FadeInSection>
          <h2 className="heading">Get in <span>Touch</span></h2>
        </FadeInSection>
        
        <FadeInSection style={{ transitionDelay: '0.2s' }}>
          <form action="https://formspree.io/f/mgvalyql" method="POST">
            <div className="input-box">
              <input type="text" name="fullname" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            </div>
            <div className="input-box">
              <input type="tel" name="phone" placeholder="Phone number" required pattern="^[6-9]\d{9}$" title="Please enter a valid 10-digit Indian mobile number" />
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Contact;