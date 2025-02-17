
import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icon'>
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>                                   
        </div>
        <div className='footer-data'>
          <ul><li>Audio Description</li>
            <li>Investor Relation</li>
            <li>legal Notice</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preference</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        </div>
        <div className='service-code'>
          <p>Service Code</p>
        </div>
        <div className='copy-write'>
          &copy; 1997-2004 Netflix, Inc.
        </div>

    </div>
  )
}

export default Footer;
