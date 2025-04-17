import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src={profile_img} alt="Andile Mnukwa" className="profile-image" />
            <div className="profile-blob"></div>
          </div>
          
          <h1 className="hero-heading">
            <span className="gradient-text">I'm Andile Mnukwa,</span> 
            <span className="hero-role">Fullstack Developer based in Cape Town.</span>
          </h1>
          
          <p className="hero-description">
            As a Full Stack Developer, I specialize in crafting dynamic and responsive web 
            applications that bridge the gap between sleek design and powerful functionality.
          </p>
          
          <div className="hero-actions">
            <AnchorLink 
              href="#contact" 
              offset={50} 
              className="primary-btn hero-connect"
            >
              Connect with me
            </AnchorLink>
            
            <a 
              href="#" 
              className="secondary-btn hero-resume"
              onClick={(e) => {
                e.preventDefault();
                // Add resume download or view functionality
                alert("Resume functionality will be added here");
              }}
            >
              My resume
            </a>
          </div>
          
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="scroll-text">Scroll down</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;