import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/images/components/logo.jpg"
import "../css/components/footer.css"

const footerAboutLinks = [
  {
    display: "Who We Are",
    path: "/about",
  },

  {
    display: "Contact",
    path: "/about",
  },
  {
    display: "Career",
    path: "/about",
  }
]

const footerRecommendLinks = [
  {
    display: "YouTube Channels",
    path: "/youtube",
  },

  {
    display: "Facebook Pages",
    path: "/facebook",
  },
  {
    display: "Movie Critics",
    path: "/critics",
  }
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-group'>
          <div className='footer-title'>About Us</div>
          <div className='footer-content'>
            {footerAboutLinks.map((item, index) => (
              <p key={index}>
                <Link style={{color:'white'}} to={item.path}>{item.display}</Link>
              </p>
            ))}
          </div>
        </div>

        <div className='footer-group'>
          <div className='footer-title'>Recommend Media</div>
          <div className='footer-content'>
            {footerRecommendLinks.map((item, index) => (
              <p key={index}>
                <Link style={{color:'white'}} to={item.path}>{item.display}</Link>
              </p>
            ))}
          </div>
        </div>

        <div className='footer-group footer_about'>
          <p>
            <Link to='/'>
              <img src={logo} className='footer_logo' alt='' />
            </Link>
          </p>
          <p style={{ color: 'white' }}>Just a blog about movies @@
          </p>
        </div>
      </div>
  </footer>
);
}
     

export default Footer
