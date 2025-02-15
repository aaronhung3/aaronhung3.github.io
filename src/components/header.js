import React from 'react';
import './header.css'

function Header() {

    const onButtonClick = () => {
        const pdfUrl = process.env.PUBLIC_URL + "/aaronhung_resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
    <header class="header">
        <div class="header-wrapper">
            <div class="left-part">
                <div class="logo">
                    <span>AH</span>
                </div>
            </div>
            <div class="right-part">
                <ul>
                    <li>
                        <span class="material-symbols-outlined size" id="darkmode-symbol">
                            dark_mode
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined size" id="lightmode-symbol">
                            light_mode
                        </span>
                    </li>
                    <li id="nav-btn-3">
                        <a href="/resume.html">
                            <button class="btn btn1" onClick={onButtonClick}>
                                <span class="material-symbols-outlined" id="donwload-symbol">
                                    download
                                </span>
                                <span id="text">Resume</span>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}

export default Header;