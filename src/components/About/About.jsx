import React from 'react'
import './About.css'
// import grad from '../../assets/grad.jpeg'
import profile_img from '../../assets/profile-img.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={grad} alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.possimus optio.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy client</p>
        </div>
    </div>
    </div>
  )
}

export default About