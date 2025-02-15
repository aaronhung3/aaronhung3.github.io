import React from "react";
import Header from './header';
import { Link } from "react-router-dom";
import './main-page.css';

function Main() {
    return (
        <div className="page-container">
            <Header />
            <div class="content-container">
                <div class="page-content">
                    <div class="content">
                        <div class="content-wrapper">
                            <div class="content-text">
                                <div class="intro-id-container">
                                    <h3 class="intro-id"><span id="intro">hello, my name is </span><span id="intro-name">aaron</span></h3>
                                </div>
                                <div class="intro-text">
                                    <p>I am an undergraduate at Georgia Insitute of Technology</p>
                                    <p>studying in Computer Science with a concentration in</p>
                                    <p>Intelligence and Media.</p>
                                </div>
                                <div class="link-container">
                                    <ul>
                                        <Link to='/contact'>
                                            <li class="nav-btn" id="nav-btn-1"><span>Contact</span></li>
                                        </Link>
                                        <Link to='projects'>
                                            <li class="nav-btn" id="nav-btn-2"><span>Projects</span></li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Main;