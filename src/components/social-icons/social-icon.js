import React, { Fragment } from 'react'
import fb from './../../assets/images/desktop/soc_fb.png';
import tweet from './../../assets/images/desktop/soc_twt.png';
import gplus from './../../assets/images/desktop/soc_gplus.png';
import pin from './../../assets/images/desktop/soc_pin.png';
import chat from './../../assets/images/desktop/sup-chat.png';
import fund from './../../assets/images/desktop/sup-fund.png';
import info from './../../assets/images/desktop/sup-info.png';

const Icon = (props) => {
  return (
    props.position === "left" ? 
      <Fragment>
        <img src={fb} alt="facebook"/>
        <img src={tweet} alt="tweeter"/>
        <img src={gplus} alt="google plus"/>
        <img src={pin} alt="pinterest"/>
      </Fragment>
    :
      <Fragment>
        <img src={chat} alt="Let's chat"/>
        <img src={fund} alt="Donate"/>
        <img src={info} alt="About us"/>
      </Fragment>
  )
}

export default Icon;