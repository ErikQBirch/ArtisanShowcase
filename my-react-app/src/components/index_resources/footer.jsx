// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './footer.css';
const FooterElement = () => {
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 992);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);

//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

  return (
    <footer>
        {/* <h2>Artisan Showcase</h2>
        <p>Your hub for creative expression through writing, art, music, and more.</p> */}
        <div>
          <article>
            <h3>Portfolio</h3>   
            <ul>
              <li>
                <Link to="/writings">Writings</Link>
              </li>
              <li>
                <Link to="/artwork">Artwork</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/misc">Misc</Link>
              </li>
            </ul>
          </article>
          <article>
            <h3>Contact</h3>
            <ul>
              <li>contact@example.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </article>
        </div>
        <p>© 2024 Artisan Showcase. All rights reserved.</p>
    </footer>
  );
};

export default FooterElement;