
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

import React, { useEffect, useState } from 'react';
import './Header.css';
import magnifyingGlass from '../public/magnifying-glass.png';
import { Link } from 'react-router-dom';

function Header() {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const title = 'Delay Detective';

  // Type each letter of the title correctly in sequence
  useEffect(() => {
    let currentIndex = 0;
    const typeEffect = setInterval(() => {
      setText(title.slice(0, currentIndex + 1)); // Update text based on title substring
      currentIndex++;
      if (currentIndex === title.length) {
        clearInterval(typeEffect);
        setTimeout(() => setCursorVisible(false), 500); // Hide cursor after typing completes
      }
    }, 150); // Adjusted delay to make typing smoother

    return () => clearInterval(typeEffect);
  }, [title]);

  return (
    <header className="header">
      <div className="header-left">
        <span>NJ Transit</span>
        <img src={magnifyingGlass} alt="Search Icon" className="search-icon" />
      </div>
      <div className="header-title-container">
        <h1 className="header-title">
          <span className="typing-text">{text}</span>
          {cursorVisible && <span className="cursor">|</span>}
        </h1>
      </div>
      <Link to="/about">
        <button id="about-button" className="about-button">About</button>
      </Link>
    </header>
  );
}

export default Header;


// import React from 'react';
// import './Header.css';
// import magnifyingGlass from '../public/magnifying-glass.png';
// import { Link } from 'react-router-dom';

// function Header() {
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
//       <Link to="/about">
//         <button id="about-button">About</button>
//       </Link>
//     </header>
//   );
// }

// export default Header;

