// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link
// import './FooterElement.css'; // Optional: for styling

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
        <h2>Artisan Showcase</h2>
        <p>Your hub for creative expression through writing, art, music, and more.</p>
        <article>
          <h3>Portfolio</h3>   
          <ul>
            <li><a href="/writings">Writings</a></li>
            <li><a href="/artwork">Artwork</a></li>
            <li><a href="/music">Music</a></li>
            <li><a href="/misc">Misc</a></li>
          </ul>
        </article>
        <article>
          <h3>Contact</h3>
          <ul>
            <li>Email: contact@example.com</li>
          </ul>
        </article>
        <p>© 2024 Artisan Showcase. All rights reserved.</p>
    </footer>
  );
};

export default FooterElement;