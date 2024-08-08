import React from 'react';
import './Expertise.css';

const Expertise = () => {
  return (
    <div id="expertise" className="expertise-section">
      <h2>My Expertise</h2>
      <div className="expertise-content">
        <div className="expertise-item">
          <h3>Software Development</h3>
          <p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
        </div>
        <div className="expertise-item">
          <h3>Frontend Dev: React, NextJS</h3>
          <p>Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;