import React, { useState } from 'react'
import down from '../../assets/images/mobile/mob-fotter-down-btn.png';

const FooterNav = (props) => {
  const {heading, numberOfList} = props;
  let [ active, setActive ] = useState(false);
  let [ height, setHeight ] = useState(0);
  const listItems = [
    'Mauris vel imperdiet',
    'Faucibus metus',
    'Nulla sed quam dictum', 
    'Ultricies sit amet',
    'Sed tempus',
    'Neque non tincidunt',
    'Vivamus elementum',
    'Mi ut semper',
    'Porttitor vitae nulla dolor', 
    'Sapien mollis'
  ];

  let subMenuHeight = 0;
  return (
    <div className="footer-nav">
      <p className={`heading ${active? 'active' : ''}`} onClick={(e) => {
        setActive(active = !active);
        // setHeight(height = height ? e.target.parentNode.querySelector('.submenu').clientHeight : 0 );
        // subMenuHeight = e.target.parentNode.querySelector('.submenu').clientHeight;
        // console.log(e.target.parentNode.querySelector('.submenu'))
      }} >
        {heading}
        <img src={down} alt="drop down"/>
      </p>
        <ul className={`submenu ${active? 'active' : ''}`} >
          {listItems.slice(0, numberOfList)
          .map((item) => (
              <li key={item}>{item}</li>
          ))}
        </ul>
    </div>
  )
}
export default FooterNav;
