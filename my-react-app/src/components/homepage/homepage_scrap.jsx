// import React, { useRef, useState } from 'react';
import ContactMe_section from './contactMe_section.jsx';
import { Link } from 'react-router-dom'; // Import Link
import './homepage.css';


function Homepage_scrap() {
  return (
    <>
      <article id="homepage_banner" className="banner_article">
        <figure>
          <img src="../public/homepage_banner.webp"></img>
          <h1>Home</h1>
        </figure>
      </article>
      <article id="writings_banner" className="banner_article">
        <figure>
          <img src="../public/homepage_banner.webp"></img>
          <h1><Link to="/writings">Writings</Link></h1>
        </figure>
      </article>
      <article id="artwork_banner" className="banner_article">
        <figure>
          <img src="../public/homepage_banner.webp"></img>
          <h1><Link to="/artwork">Artwork</Link></h1>
        </figure>
      </article>
      <article id="music_banner" className="banner_article">
        <figure>
          <img src="../public/homepage_banner.webp"></img>
          <h1>
            <Link to="/music">Music</Link>
          </h1>
        </figure>
      </article>
      <article id="misc_banner" className="banner_article">
        <figure>
          <img src="../public/homepage_banner.webp"></img>
          <h1><Link to="/misc">Misc</Link></h1>
        </figure>
      </article>
      <ContactMe_section />
    </>
  )
}

export default Homepage_scrap;
