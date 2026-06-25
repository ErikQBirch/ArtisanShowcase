// import { useState } from 'react'
import { Link } from 'react-router-dom'; // Import Link
import "./writings.css"


function Writings_scrap() {
  

  return (
    <>
      <section id="banner">
        <h1>Writings</h1>
        <div id="filter">
          <button>Personal Reflections</button>
          <button>Creative Writings</button>
        </div>
        {/* <div className="navbar-brand">
          <Link to="/">Back Btn</Link>
        </div> */}
      </section>

    </>
  )
}

export default Writings_scrap;
