import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/components/logo1.png';

const mainNav = [
    { display: 'HOME', path: '/' },
    { display: 'POSTS', path: '/posts' },
    { display: 'LISTS', path: '/lists' },
    { display: 'ABOUT', path: '/about' }
];

const Header = () => {
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className={`header ${activeLink !== '/' &&
        activeLink !== '/lists' ? 'header-active' : ''}`}>
            <div className={`container ${activeLink !== '/' && 
            activeLink !== '/lists' ? 'container-active' : ''}`}>
                <div className="header_logo">
                    <Link to="/" onClick={() => handleLinkClick('/')}>
                        <img className="logo_img" src={logo} alt="" />
                    </Link>
                </div>
                <div className="header_menu">
                    {mainNav.map((item, index) => (
                        <div className="header_menu_item" key={index}>
                            <Link to={item.path} style={{textDecoration: "none"}} onClick={() => handleLinkClick(item.path)}>
                                <span style={{ color: activeLink !== '/' && 
                                    activeLink !== '/lists'  ? 'black' : 'white' }}>
                                    {item.display}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
