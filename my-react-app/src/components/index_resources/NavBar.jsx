import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './NavBar.css'; // Optional: for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">My App</Link> {/* Use Link instead of <a> */}
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/writings" className="nav-link">Writings</Link> {/* Example: link to writings page */}
        </li>
        <li className="nav-item">
          <Link to="/artwork" className="nav-link">Artwork</Link> {/* Example: link to artwork page */}
        </li>
        <li className="nav-item">
          <Link to="/music" className="nav-link">Music</Link> {/* Example: link to music page */}
        </li>
        <li className="nav-item">
          <Link to="/misc" className="nav-link">Misc</Link> {/* Example: link to misc page */}
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
  );
};

export default NavBar;