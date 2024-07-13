import React from 'react'
import './About.css'
// import grad from '../../assets/grad.jpeg'
import profile_img from '../../assets/profile_img.png'


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
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ducimus quo est facilis aliquam autem odio aperiam vitae, doloremque libero, quidem distinctio molestias rerum earum labore beatae? Voluptates, possimus optio.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eos sequi, perferendis laudantium consectetur dolorem minima quos suscipit ipsam atque dolore labore vel beatae voluptatem ut ducimus odit illum expedita.</p>
                </div>
                <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skills"><p>React JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skills"><p>Python</p><hr style={{width:"50%"}} /></div>
                <div className="about-skills"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                <div className="about-skills"><p>Java</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
        <div className="about-achievements">
            <h1>10+</h1>
            <p>Years Of Experience</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>90+</h1>
            <p>Project Completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy client</p>
        </div>
    </div>
  )
}

export default About