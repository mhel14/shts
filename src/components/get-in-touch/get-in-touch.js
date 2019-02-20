import React from 'react'
import SocialIcons from './social-icons';

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <div className="container wrapper">
        <div className="social-icons-wrapper">
          <p>Stay connected</p>
          <SocialIcons />
        </div>
        <div className="news-letter">
          <p>Sign up to our newsletter</p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="button" value="Sign up"/>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch;