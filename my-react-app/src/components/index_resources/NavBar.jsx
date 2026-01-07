import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
// import './NavBar.css'; // Optional: for styling

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">My App</Link> {/* Use Link instead of <a> */}
        </div>
        <button className="hamburger" onClick={toggleOverlay}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className="navbar-nav">
          <li 
            className="nav-item dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link">Portfolio</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/writings" className="dropdown-link">Writings</Link>
                </li>
                <li>
                  <Link to="/artwork" className="dropdown-link">Artwork</Link>
                </li>
                <li>
                  <Link to="/music" className="dropdown-link">Music</Link>
                </li>
                <li>
                  <Link to="/misc" className="dropdown-link">Misc</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link> {/* Example: link to about page */}
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link> {/* Example: link to contact page */}
          </li>

          {/* Add more links as needed */}
        </ul>
      </nav>
      
      {isOverlayOpen && (
        <div className="overlay-menu">
          <button className="overlay-close" onClick={toggleOverlay}>×</button>
          <ul className="overlay-nav">
            <li className="overlay-item">
              <Link to="/" onClick={toggleOverlay}>Home</Link>
            </li>
            <li className="overlay-item">
              <span className="overlay-dropdown-toggle">Portfolio</span>
              <ul className="overlay-dropdown">
                <li><Link to="/writings" onClick={toggleOverlay}>Writings</Link></li>
                <li><Link to="/artwork" onClick={toggleOverlay}>Artwork</Link></li>
                <li><Link to="/music" onClick={toggleOverlay}>Music</Link></li>
                <li><Link to="/misc" onClick={toggleOverlay}>Misc</Link></li>
              </ul>
            </li>
            <li className="overlay-item">
              <Link to="/about" onClick={toggleOverlay}>About</Link>
            </li>
            <li className="overlay-item">
              <Link to="/contact" onClick={toggleOverlay}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;