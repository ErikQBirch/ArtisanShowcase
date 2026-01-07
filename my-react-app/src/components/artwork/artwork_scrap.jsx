// import { useState } from 'react'
import { Link } from 'react-router-dom'; // Import Link
function Artwork_scrap() {  

  return (
    <>
        <h1>Artwork</h1>
        <div className="navbar-brand">
          <Link to="/">Back Btn</Link> {/* Use Link instead of <a> */}
        </div>
    </>
  )
}

export default Artwork_scrap;
