import React, { useEffect, useState } from 'react';
import ContactMe_section from './contactMe_section.jsx';
import { Link } from 'react-router-dom'; // Import Link
import './homepage.css';


function Homepage_scrap() {
  const [visibleBannerIds, setVisibleBannerIds] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleBannerIds((prev) => {
          const next = new Set(prev);
          let changed = false;

          entries.forEach((entry) => {
            const id = entry.target.id;
            if (entry.intersectionRatio > 0.5) {
              if (!next.has(id)) {
                next.add(id);
                changed = true;
              }
            } else if (next.has(id)) {
              next.delete(id);
              changed = true;
            }
          });

          return changed ? next : prev;
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    document.querySelectorAll('.banner_article').forEach((article) => observer.observe(article));
    return () => observer.disconnect();
  }, []);

  let optionsArray = [
    { id: 0, name: 'Latest Updates', link: '/', img: 'images/Imagination.webp' },
    { id: 1, name: 'Writings', link: '/writings', img: 'images/Imagination.webp' },
    { id: 2, name: 'Artwork', link: '/artwork', img: 'images/Imagination.webp' },
    { id: 3, name: 'Music', link: '/music', img: 'images/Imagination.webp' },
    { id: 4, name: 'Misc', link: '/misc', img: 'images/Imagination.webp' },
  ];
  return (
    <>
      <section>
        {optionsArray.map((option) => {
          const articleId = `${option.name.toLowerCase()}_banner`;
          return (
            <article
              key={option.id}
              id={articleId}
              className={`banner_article${visibleBannerIds.has(articleId) ? ' visible' : ''}`}
            >
              <div className="banner_overlay"></div>
              <figure>
                <img src={`${import.meta.env.BASE_URL}${option.img}`} alt={option.name} />
                <h1><Link to={option.link}>{option.name}</Link></h1>
              </figure>
            </article>
          );
        })}
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
