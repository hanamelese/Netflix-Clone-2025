import React from 'react'
import './Header.css'
import NetflixLogo from '../../assets/images/Netflix-logo.jpg'
import { Search, NotificationsNone, AccountBox, ArrowDropDown } from '@mui/icons-material';

const Header = () => {
  return (
    <div>
      <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
          <ul>
            <li><img src={NetflixLogo} alt='NETFLIX' width="100"></img></li>
            <li><a href="/">Home </a></li>
            <li><a href="/tvshow">TvShow </a></li>
            <li><a href="/romance">Romance </a></li>
            <li><a href="/action">Action </a></li>
          </ul>
        </div>
        <div className='header-right'>
          <ul><li><Search /></li>
              <li><NotificationsNone /></li>
              <li><AccountBox /></li>
              <li><ArrowDropDown /></li>
          </ul>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Header
