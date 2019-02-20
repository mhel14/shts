import React from 'react'
import MobileNav from './mobile-nav';

const Header = () => {
  return (
    <div className="header">
      <div className="nav-wrapper container">
        <h1>SHTS University</h1>
        <nav>
          <ul>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Ipsum</a></li>
            <li><a href="#">Dolor</a></li>
            <li><a href="#">Sit</a></li>
            <li><a href="#">Amet</a></li>
          </ul>
          <MobileNav />
        </nav>
      </div>
    </div>
  )
}

export default Header;