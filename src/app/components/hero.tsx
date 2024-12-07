import React from 'react';
import '@/app/styles/hero.css'; // Link to the dark-themed CSS file

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Xpert Technologies</h1>
          <h4 className="hero-subtitle">Innovative insights for a Technologies</h4>
          <p className="hero-description">
          Deals in:All kind of New/Used Computers,Laptop,Printers & CCTV Cameras.
          
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
