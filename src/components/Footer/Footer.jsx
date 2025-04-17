import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscribeStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus({
        type: 'success',
        message: 'Thank you for subscribing!'
      });
      setEmail('');
      setIsSubscribing(false);
      
      // Clear status message after 3 seconds
      setTimeout(() => setSubscribeStatus(null), 3000);
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={logo} alt="Andile Mnukwa Logo" className="footer-logo" />
            <p className="footer-description">
              Stay updated with my latest projects and insights. Subscribe below!
            </p>
            
            <div className="footer-social">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-top-right">
            <form onSubmit={handleSubscribe} className="footer-subscribe-form">
              <div className="footer-email-input">
                <img src={user_icon} alt="User" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                />
              </div>
              
              <button 
                type="submit" 
                className="footer-subscribe-btn"
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            
            {subscribeStatus && (
              <div className={`subscribe-status ${subscribeStatus.type}`}>
                {subscribeStatus.message}
              </div>
            )}
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Andile Mnukwa. All rights reserved.
          </p>
          
          <div className="footer-bottom-right">
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#contact" className="footer-link">Connect with me</a>
          </div>
        </div>
        
        <div className="footer-credit">
          <p>Designed & Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;