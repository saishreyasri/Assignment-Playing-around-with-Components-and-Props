import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <img 
        className="header-logo" 
        src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" 
        alt="Kalvium Logo" 
      />
      <nav className="header-nav">
        <ul className="header-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#more">More</a></li>
        </ul>
      </nav>
      <a className="header-cta" href="#contact">
        <button>Contact</button>
      </a>
    </header>
  );
}
