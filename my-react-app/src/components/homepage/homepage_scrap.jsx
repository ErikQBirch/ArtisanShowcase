import React, { useEffect, useState } from 'react';
import ContactMe_section from './contactMe_section.jsx';
import { Link } from 'react-router-dom'; // Import Link
import './homepage.css';


function Homepage_scrap() {
  const [overlayVisibleBannerIds, setOverlayVisibleBannerIds] = useState(new Set());

  useEffect(() => {
    const updateOverlayVisibility = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const nextVisibleIds = new Set();

      document.querySelectorAll('.banner_article').forEach((article) => {
        const rect = article.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        const visibleRatio = visibleHeight / (rect.height || 1);

        if (visibleRatio < 0.5) {
          nextVisibleIds.add(article.id);
        }
      });

      setOverlayVisibleBannerIds((prev) => {
        const isSame = prev.size === nextVisibleIds.size && [...prev].every((id) => nextVisibleIds.has(id));
        return isSame ? prev : nextVisibleIds;
      });
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOverlayVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateOverlayVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateOverlayVisibility);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateOverlayVisibility);
    };
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
              className={`banner_article${overlayVisibleBannerIds.has(articleId) ? ' overlay_visible' : ''}`}
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
