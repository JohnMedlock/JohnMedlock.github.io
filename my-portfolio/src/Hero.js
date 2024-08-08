import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <nav className="navbar">
                <div className="logo">John_Medlock</div>
                <ul className="nav-links">
                    <li><a href="#home">home</a></li>
                    <li><a href="#work">work</a></li>
                    <li><a href="#expereince">experience</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
            <div className="hero-content">
                <h1>John Medlock</h1>
                <p>Computer Science Student at The University of Georgia</p>
            </div>
            <div className="scroll-down">
                <a href="#next-section">
                    <span></span>
                </a>
            </div>
        </div>
    )
}

export default Hero;