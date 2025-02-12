import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <p>John Medlock</p>
                <p><a href="contact.html" className="win95-button">Contact John Medlock</a></p>
            </nav>
        </header>
    );
};

export default Header;