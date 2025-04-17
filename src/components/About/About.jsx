import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.jpg';

const About = () => {
  const skills = [
    { name: "HTML & CSS", proficiency: 70 },
    { name: "React JS", proficiency: 60 },
    { name: "Python", proficiency: 55 },
    { name: "JavaScript", proficiency: 55 },
    { name: "Java", proficiency: 60 },
    { name: "C#", proficiency: 70 }
  ];

  const achievements = [
    { count: "20+", title: "satisfied teammates" },
    { count: "10+", title: "Projects Completed" },
    { count: "24/7", title: "Working Hours" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title about-title">
          <h2>About me</h2>
          <img src={theme_pattern} alt="" className="title-pattern" />
        </div>

        <div className="about-sections">
          <div className="about-left">
            <div className="profile-frame">
              <img src={profile_img} alt="Andile Mnukwa" className="about-profile-img" />
              <div className="profile-overlay"></div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-para">
              <p>
                I am a graduate from Walter Sisulu University with a degree in 
                Information Technology, specializing in Software Development.
              </p>
              <p>
                I have acquired comprehensive knowledge and skills in the field of 
                software development, focusing on creating scalable and user-friendly 
                applications that solve real-world problems.
              </p>
            </div>

            <div className="about-skills">
              {skills.map((skill, index) => (
                <div key={index} className="about-skill">
                  <p>{skill.name}</p>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ width: `${skill.proficiency}%` }}
                    >
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-achievements">
          {achievements.map((achievement, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="achievement-divider"></div>}
              <div className="about-achievement">
                <h3 className="achievement-count gradient-text">{achievement.count}</h3>
                <p className="achievement-title">{achievement.title}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;