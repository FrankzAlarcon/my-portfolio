import React from 'react';
import '../styles/aboutme.css';

function AboutMe({ children }) {
  return (
    <div id="about-me" className="about-me-container">
      <h2 className="about-me-text">About me</h2>
      {children}
    </div>
  );
}

export default AboutMe;
