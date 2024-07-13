import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
     <img src={profile_img} alt="" />
     <h1><span>I'm Andile Mnukwa,</span> Fullstack dev based in Cape Town.</h1>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
     <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div> 
        </div>
    </div>
  )
}

export default Hero