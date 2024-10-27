
// import React from 'react';
// import './Header.css';
// import magnifyingGlass from '../public/magnifying-glass.png';

// function Header() {
//   const goToAbout = () => {
//     alert("Navigating to the About section.");
//   };

//   return (
//     <header className="header">
//       <div className="header-left">
//         <span>NJ Transit</span>
//         <img src={magnifyingGlass} alt="Search Icon" className="search-icon" />
//       </div>
//       <div className="header-title-container">
//         <h1 className="header-title">
//           <span className="typing-text">Delay Detective</span>
//           <span className="cursor">|</span>
//         </h1>
//       </div>
//       <button id="about-button" onClick={goToAbout}>About</button>
//     </header>
//   );
// }

import React from 'react';
import './Header.css';
import magnifyingGlass from '../public/magnifying-glass.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span>NJ Transit</span>
        <img src={magnifyingGlass} alt="Search Icon" className="search-icon" />
      </div>
      <div className="header-title-container">
        <h1 className="header-title">
          <span className="typing-text">Delay Detective</span>
          <span className="cursor">|</span>
        </h1>
      </div>
      <Link to="/about">
        <button id="about-button">About</button>
      </Link>
    </header>
  );
}

export default Header;

