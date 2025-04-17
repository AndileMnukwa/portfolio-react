import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title services-title">
          <h2>My Services</h2>
          <img src={theme_pattern} alt="" className="title-pattern" />
        </div>
        
        <div className="services-container">
          {Services_Data.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{service.s_no}</div>
              <h3 className="service-name gradient-text">{service.s_name}</h3>
              <p className="service-description">{service.s_desc}</p>
              
              <div className="service-readmore">
                <span>Read More</span>
                <img src={arrow_icon} alt="Arrow" className="arrow-icon" />
              </div>
              
              <div className="service-icon-bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;