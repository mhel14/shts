import React from 'react'
import FooterNav from './footer-nav';

const Footer = () => {
  return (
    <footer>
      <div className="container wrapper">
        <FooterNav heading="Lorem" numberOfList="8" />
        <FooterNav heading="Ipsum" numberOfList="7" />
        <FooterNav heading="Dolor" numberOfList="10" />
        <FooterNav heading="Sit amet" numberOfList="9" />
        <FooterNav heading="Consectetur" numberOfList="8" />
      </div>
      <div className="container">
        <div className="copyright">
          <p>&copy;Copyright 2015 SHTS University, All rights reserved</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Amet</li>
          </ul>
          <p className="mobile-copyright">
            &copy;Copyright 2015 SHTS University 
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
