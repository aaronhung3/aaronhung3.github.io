import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';

function Header() {

    return (
        <header className='header-container'>
            <div className='header-content-left'></div>
            <div className='header-content-middle'> 
                <Link to='/'>
                <div className='header-nav-items left' id='header-item-about'>
                    <span>About</span>
                </div>
                </Link>
                <Link to='/contact'>
                <div className='header-nav-items left' id='header-item-contact'>
                    <span>Contact</span>
                </div>
                </Link>
                <div className='header-nav-items icon' id='header-item-theme'>
                    <span className="material-symbols-outlined md-60">
                        light_mode
                    </span>
                </div>
                <Link to='/projects'>
                <div className='header-nav-items right' id='header-item-projects'>
                    <span>Projects</span>
                </div>
                </Link>
                <Link to='/resume'>
                <div className='header-nav-items right' id='header-content-resume' style={{margin: 'auto'}}>
                    <span>Resume</span>               
                </div>
                </Link>
            </div>
            <div className='header-content-right'></div>
        </header>
    );
}

export default Header;