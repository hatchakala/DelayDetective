import React from 'react';
import './Header.css';
import magnifyingGlass from '../public/magnifying-glass.png';

function Header() {
  const goToAbout = () => {
    alert("Navigating to the About section.");
  };

  return (
    <header className="header">
      <div className="header-left">
        <span>NJ Transit</span>
        <img src={magnifyingGlass} alt="Search Icon" className="search-icon" />
      </div>
      <h1>Delay Detective</h1>
      <button id="about-button" onClick={goToAbout}>About</button>
    </header>
  );
}

export default Header;
