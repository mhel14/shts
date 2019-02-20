import React, { Component } from 'react'
import down from '../../assets/images/mobile/mob-fotter-down-btn.png';

class FooterAccordion extends Component {
  render() {
    
    return (
      <div>
        <div
          className="nav-item"
          // onClick={this.mobileDropdownHandler}
        >
          <div className="footer-nav-menu">
            <span>Menu</span>
            <img
              className="navigation__dropdown-icon"
              src={down}
              alt="Dropdown Arrow"
            />
          </div>
          <div className="footer-nav-submenu" > { /*style={{ height: `${this.state.activeMenuHeight}px` }}> */}
            test
          </div>
        </div>
      </div>
    )
  }
}

export default FooterAccordion;
