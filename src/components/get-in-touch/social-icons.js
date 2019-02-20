import React from 'react'

// Logos
import fb from './../../assets/images/desktop/ftr-soc-fb.png';
import tweet from './../../assets/images/desktop/ftr-soc-twt.png';
import linkedIn from './../../assets/images/desktop/ftr-soc-in.png';
import googlePlus from './../../assets/images/desktop/ftr-soc-gplus.png';
import pinterest from './../../assets/images/desktop/ftr-soc-pin.png';

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      <li> <img src={fb} alt="facebook icon"/> </li>
      <li> <img src={tweet} alt="tweeter icon"/> </li>
      <li> <img src={linkedIn} alt="linkedin icon"/> </li>
      <li> <img src={googlePlus} alt="google+ icon"/> </li>
      <li> <img src={pinterest} alt="pinterest icon"/> </li>
    </ul>
  )
}

export default SocialIcons;
