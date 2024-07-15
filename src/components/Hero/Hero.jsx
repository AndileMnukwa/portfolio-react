import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
     <img src={profile_img} alt="" />
     <h1><span>I'm Andile Mnukwa,</span> Fullstack dev based in Cape Town.</h1>
     <p>As a front-end developer, I specialize in crafting visually appealing and user-friendly
     interfaces for websites and applications.</p>
     <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div> 
        </div>
    </div>
  )
}

export default Hero