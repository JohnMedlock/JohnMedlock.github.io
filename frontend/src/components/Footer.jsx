import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="copyright">
                {currentYear} John Medlock
            </div>
            <div className="footer-buttons">
                <a href="contact.html" className="win95-button" title="Contact Me">
                    <i className="fas fa-envelope"></i>
                    <span>Contact</span>
                </a>
                <a 
                    href="https://www.linkedin.com/in/jwmedlock" 
                    className="win95-button" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                >
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <a 
                    href="https://github.com/JohnMedlock" 
                    className="win95-button" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="GitHub Profile"
                >
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;