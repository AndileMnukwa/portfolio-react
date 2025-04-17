import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const form = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });
      
      form.append("access_key", "a1c62d81-68c3-4f04-82f6-fa7307357d16");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(form))
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'There was an error sending your message. Please try again.' 
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title contact-title">
          <h2>Get in touch</h2>
          <img src={theme_pattern} alt="" className="title-pattern" />
        </div>
        
        <div className="contact-section">
          <div className="contact-left">
            <h3 className="contact-heading gradient-text">Let's talk</h3>
            <p className="contact-description">
              Got a question, project idea, or just want to say hello? Fill out the form below, 
              and I'll get back to you as soon as possible!
            </p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <img src={mail_icon} alt="Email" />
                </div>
                <p>mnukwa@gmail.com</p>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">
                  <img src={call_icon} alt="Phone" />
                </div>
                <p>+2765-607-1416</p>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">
                  <img src={location_icon} alt="Location" />
                </div>
                <p>Cape Town, Western Cape</p>
              </div>
            </div>
          </div>
          
          <div className="contact-right">
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Write your message here</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message here"
                  required
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className="primary-btn contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;