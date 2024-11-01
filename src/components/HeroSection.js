import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-description">Highlighting my work and projects</p>
      <a href="#portfolio" className="btn">View My Work</a>
    </div>
  </section>
);

export default HeroSection;
