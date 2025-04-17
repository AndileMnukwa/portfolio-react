import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'Design'];

  const filteredProjects = selectedCategory === 'All' 
    ? mywork_data 
    : mywork_data.filter(work => work.category === selectedCategory);

  const handleShowMore = () => {
    setVisibleProjects(prev => 
      prev + 3 > mywork_data.length ? mywork_data.length : prev + 3
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleProjects(6);
  };

  return (
    <section id="work" className="mywork">
      <div className="container">
        <div className="section-title mywork-title">
          <h2>My latest work</h2>
          <img src={theme_pattern} alt="" className="title-pattern" />
        </div>

        <div className="portfolio-filter">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mywork-container">
          {filteredProjects.slice(0, visibleProjects).map((work, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <img src={work.w_img} alt={work.title || `Project ${index + 1}`} />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{work.title || `Project ${index + 1}`}</h3>
                  <p className="portfolio-category">{work.category || 'Web'}</p>
                  <a href="#" className="portfolio-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <button className="mywork-showmore" onClick={handleShowMore}>
            <span>Show More</span>
            <img src={arrow_icon} alt="Arrow" className="arrow-icon" />
          </button>
        )}
      </div>
    </section>
  );
};

export default MyWork;