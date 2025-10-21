import React from 'react'
import './Foter.css'
import logo1 from '../../assets/logo1.png'
import instagram_icons from '../../assets/instagram_icons.png'
import linkedin_icons from '../../assets/linkedin_icons.png'
import github_icons from '../../assets/github_icons.png'


const Foter = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo1} alt="" height='50'/>
            <p>Buy&Sale</p>
        </div>
        <ul className='footer-links'>
            <li>About</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icon-container'>
                 <img src={instagram_icons} alt="" height='40px'/>
                </div>
                 <div className='footer-icon-container'>
                  <img src={linkedin_icons} alt="" height='40px' />
                </div>
                 <div className='footer-icon-container'>
                 <img src={github_icons} alt="" height='35px' />
                </div>

            </div>
            <div className='footer-copyright'>
                <p>Copyright @2023 -ALL Right Reserved</p>

            </div>
    </div>
  )
}

export default Foter
