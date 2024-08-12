import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>Stay updated with my latest projects and insights. Subscribe below!</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subcribe">Subscription</div>
        </div>
      </div>
     <hr />
     <div className="footer-bottom">
        <p className=''>© 2024 Andile Mnukwa. All right reserved.</p>
        <div className="footer-bottom-right">
          <p>Teams of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer