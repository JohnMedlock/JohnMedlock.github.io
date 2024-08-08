import React from 'react';
import backgroundImage from '../assets/background.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <nav className="navbar">
        <div className="logo">John_Medlock</div>
        <ul className="nav-links">
          <li><a href="#home">home</a></li>
          <li><a href="#expertise">expertise</a></li>
          <li><a href="#work">work</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h1>John Medlock</h1>
        <p>Computer Science Student at The University of Georgia</p>
      </div>
      <div className="scroll-down">
        <a href="#expertise">
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
