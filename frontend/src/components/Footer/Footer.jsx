import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>DesiDelight is a premier online platform offering a wide range of authentic Indian frozen ready-to-eat meals and fresh frozen vegetables. With over three decades of experience, DesiDelight prides itself on delivering high-quality, delicious, and convenient food options that cater to the busy lifestyles of modern consumers. Their products are sourced from farmer-partners who harvest the best crops at the right time, ensuring freshness and taste</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-656-9870</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">copyright 2024 &copy; Tomato.com - All Right Reserved </p>
    </div>
  )
}

export default Footer
