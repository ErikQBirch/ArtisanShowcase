// import React, { useRef, useState } from 'react';
import ContactMe_section from './contactMe_section.jsx';
import { Link } from 'react-router-dom'; // Import Link
import './homepage.css';


function Homepage_scrap() {
  let optionsArray = [
    { id: 0, name: 'Latest Updates', link: '/', img: 'imagination.webp' },
    { id: 1, name: 'Writings', link: '/writings', img: 'imagination.webp' },
    { id: 2, name: 'Artwork', link: '/artwork', img: 'imagination.webp' },
    { id: 3, name: 'Music', link: '/music', img: 'imagination.webp' },
    { id: 4, name: 'Misc', link: '/misc', img: 'imagination.webp' },
  ];
  return (
    <>
      <section>
        {optionsArray.map((option) => (
          <article key={option.id} id={option.name.toLowerCase() + "_banner"} className="banner_article">
            <figure>
              <img src={`${import.meta.env.BASE_URL}${option.img}`} alt={option.name} />
              <h1><Link to={option.link}>{option.name}</Link></h1>
            </figure>
          </article>
        ))}
      </section>


      {/* <article id="imagination" className="banner_article">
        <figure>
          <img src="../public/imagination.webp"></img>
          <h1>Home</h1>
        </figure>
      </article>
      <article id="writings_banner" className="banner_article">
        <figure>
          <img src="../public/imagination.webp"></img>
          <h1><Link to="/writings">Writings</Link></h1>
        </figure>
      </article>
      <article id="artwork_banner" className="banner_article">
        <figure>
          <img src="../public/imagination.webp"></img>
          <h1><Link to="/artwork">Artwork</Link></h1>
        </figure>
      </article>
      <article id="music_banner" className="banner_article">
        <figure>
          <img src="../public/imagination.webp"></img>
          <h1>
            <Link to="/music">Music</Link>
          </h1>
        </figure>
      </article>
      <article id="misc_banner" className="banner_article">
        <figure>
          <img src="../public/imagination.webp"></img>
          <h1><Link to="/misc">Misc</Link></h1>
        </figure>
      </article> */}
      <ContactMe_section />
    </>
  )
}

export default Homepage_scrap;
