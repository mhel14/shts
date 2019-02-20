import React, { Component } from 'react'

class MobileNav extends Component {
  state = {
    isNavExpanded: false
  }

  navHandler = () => {
    const navState = this.state.isNavExpanded;
    this.setState({
      isNavExpanded: !navState
    })
  }

  componentDidUpdate() {
    // console.log(this.state.isNavExpanded);
  }

  render() {
    return (
      <div className="mobile-nav">
        
        <svg 
          onClick={this.navHandler}
          id="menu-open" 
          className={`mobile-menu ${this.state.isNavExpanded ? 'expanded' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.17 32.17"
        >
          <line className="menu__icon menu__icon--start" x1="4.75" y1="6.08" x2="27.42" y2="6.08"></line>
          <line className="menu__icon menu__icon--middle" x1="4.75" y1="16.08" x2="27.42" y2="16.08"></line>
          <line className="menu__icon menu__icon--end" x1="4.75" y1="26.08" x2="27.42" y2="26.08"></line>
        </svg>
        <div className={`nav-items ${this.state.isNavExpanded ? 'expanded' : ''}`}>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Amet</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MobileNav;