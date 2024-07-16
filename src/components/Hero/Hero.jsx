import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
     <img src={profile_img} alt="" />
     <h1><span>I'm Andile Mnukwa,</span> Fullstack dev based in Cape Town.</h1>
     <p>As a front-end developer, I specialize in crafting visually appealing and user-friendly
     interfaces for websites and applications.</p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div> 
        </div>
    </div>
  )
}

export default Hero