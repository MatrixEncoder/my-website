import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <h1>Welcome to My Portfolio</h1>
      <p>Highlighting my work and projects</p>
      <a href="#portfolio" className="btn">View My Work</a>
    </div>
  </section>
);

export default HeroSection;
