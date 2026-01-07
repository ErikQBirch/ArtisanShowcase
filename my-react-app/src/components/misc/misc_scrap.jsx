// import { useState } from 'react'
import { Link } from 'react-router-dom'; // Import Link

function Misc_scrap() {
  

  return (
    <>
        <h1>Misc</h1>
        <div className="navbar-brand">
          <Link to="/">Back Btn</Link> {/* Use Link instead of <a> */}
        </div>
    </>
  )
}

export default Misc_scrap;
