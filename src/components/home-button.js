import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const [hover, setHover] = useState(false);

    return (
        <Link to="/">
            <button 
            style={{
                height: '80px',
                width: '80px',
                fontSize: '30px',
                padding: '0',
                border: 'none',
                backgroundColor: 'transparent',
                overflow: 'hidden',

                // Button at bottom right of screen
                position: 'fixed',
                bottom: '70px',
                right: '100px',
                border: hover ? '3px solid #00246B' : '3px solid #606887',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'border 0.5s ease-in',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
                
            <span class="material-symbols-outlined"
                style={{
                    fontSize: '45px',
                    color: hover ? '#00246B' : '#606887',
                    transition: 'color 0.5s ease-in',
                }}>
                home
            </span>

            </button>
        </Link>
    );
}

export default Home;