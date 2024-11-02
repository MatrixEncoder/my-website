import React, { useState } from 'react';
import './Navbar.css';

// Make sure to import the video file correctly
import video from '../assets/857195-hd_1280_720_25fps.mp4';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">𝙲𝚢𝚋𝚎𝚛-𝚂𝚎𝚗𝚝𝚒𝚗𝚎𝚕</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`slide-menu ${isMenuOpen ? 'active' : ''}`}>
        <video className="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <ul className="nav-links">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
