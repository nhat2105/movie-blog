import React from 'react'
import { Link } from 'react-router-dom'


import logo from '../assets/images/components/logo.jpg'

const mainNav = [
    {
        display: 'Home',
        path: '/'
    },
    
    {
        display: 'Posts',
        path: '/catalog'
    },
    
    {
        display: 'About',
        path: '/about'
    }
]

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header_logo">
            <Link to ='/'>
                <img className = "logo_img" src={logo} alt= ""/>
            </Link>
        </div>
        <div className="header_menu">
            {
                mainNav.map((item, index) => (
                    <div className="header_menu_item" key = {index}>
                        <Link to={item.path}>
                            <span>{item.display}</span>
                        </Link>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Header
