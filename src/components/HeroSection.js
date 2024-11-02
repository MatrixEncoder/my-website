import React from 'react';
import './HeroSection.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Cyber-Sentinel</h1>
        <p className="hero-description">Your safety is our priority!</p>
        <a href="#about" className="btn">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
