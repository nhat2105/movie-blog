import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


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
        display: 'About us',
        path: '/about'
    }
]

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header_logo">
            <Link to ='/'>
                <img src={logo} alt= "" width= "10%"/>
            </Link>
        </div>
        <div className="header_menu">
            <div className="header_menu_left">
                <div className="header__menu__left__close">
                    <i className='bx bx-chevron-left'></i>
                </div>
                {
                    mainNav.map((item, index) => (
                        <div className="header_menu_left_item">
                            <Link to={item.path}>
                                <span>{item.display}</span>
                            </Link>
                        </div>
                    ))
                }
            </div>

            <div className="header_menu_right">
                <div className="header__menu__item">
                    <i className="bx bx-search"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
