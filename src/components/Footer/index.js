import React from 'react'
import config from '../../../config'
import { Link } from 'gatsby'

import './styles.scss'

import FacebookIcon from '@material-ui/icons/Facebook';


const Footer = () => {
  return (
    <footer className='hero is-dark'>
      <div className='level'>
            <div className='level-item'>
              <Link to='/'>
                <img src='/img/FChomeinspection.jpg' width='200' alt='Fremont County Home Inspection logo' />
              </Link>
            </div>
            <div className='level-item stacked'>
                <img src='/img/internachi.png' width='150' alt='InterNachi Certified Home Hnspector'/>
                <p>#19100604</p>
            </div>
            <div className='level-item stacked'>
                <img src='/img/asbestos-liscense.png' width='150' alt='South Dakota Certified Asbestos Inspector'/>
                <p>SD # 8496</p>
            </div>
            <div className='level-item stacked'>
                <Link className='button is-white is-outlined' to='/contact'>Contact Us</Link>
                <p>(307) 349 1492</p>
                <p>Lander, Wyoming</p>
            </div>
        </div>
      <nav className='navbar bottom-nav is-spaced is-flex-touch'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <p className='has-text-centered'>
              {config.copyright}
            </p>
          </div>
        </div>
        <div className='navbar-end media-icons is-flex-touch'>
          <a href='https://www.facebook.com/FremontCountyHomeInspection' target='__blank' className='nav-icon navbar-item'>
            <FacebookIcon />
          </a>
          <a href='https://www.google.com/maps/place/Fremont+County+Home+Inspection/@42.823219,-108.7170646,17z/data=!3m1!4b1!4m5!3m4!1s0x875901046d4f74db:0x4c347fa58c67fa94!8m2!3d42.823219!4d-108.7148759' target='__blank' className='navbar-item'>
            <img src='/img/googleclear.png' width='30' alt='google icon'/>
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
