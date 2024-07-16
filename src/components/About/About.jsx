import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a graduate from Walter Sisulu University with a degree in Information Technology, specializing
                    in Software Development.</p>
                    <p>I have acquired comprehensive knowledge
                    and skills in the field of software development. </p>
                </div>
                <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>C#</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
            <h1>20+</h1>
            <p>satisfied teammates</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Project Completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>24/7</h1>
            <p>Working Hours</p>
        </div>
    </div>
    </div>
  )
}

export default About