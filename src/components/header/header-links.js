import React from 'react'

// Icons
import tel from '../../assets/images/desktop/top-phone.png'; 
import mail from '../../assets/images/desktop/top-email.png'; 
import faq from '../../assets/images/desktop/top-question.png'; 
import user from '../../assets/images/desktop/top-login.png'; 

const HeaderLinks = () => {
  return (
    <div className="top-links">
      <div className="container">
        <ul>
          <li><a href="#"> <img src={tel} alt="tel #"/> 1234 567 890</a></li>
          <li><a href="#"> <img src={mail} alt="email"/>  Contact Us</a></li>
          <li><a href="#"> <img src={faq} alt="faq"/> FAQs</a></li>
          <li><a href="#"> <img src={user} alt="user"/> Student Login</a></li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderLinks;