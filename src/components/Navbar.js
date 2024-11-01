import React from 'react';
import './Navbar.css'; // We'll create this CSS file later for styling

const Navbar = () => {
  const toggleMenu = () => {
    document.querySelector('.nav-links').classList.toggle('active');
  };

  return (
    <nav>
      <div className="logo">𝙲𝚢𝚋𝚎𝚛-𝚂𝚎𝚗𝚝𝚒𝚗𝚎𝚕</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
    </nav>
  );
};

export default Navbar;
