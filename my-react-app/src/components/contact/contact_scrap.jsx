// import { useState } from 'react'
import { Link } from 'react-router-dom'; // Import Link

function Contact_scrap() {
  

  return (
    <>
        <h1>Contact</h1>
        <div className="navbar-brand">
          <Link to="/">Back Btn</Link> {/* Use Link instead of <a> */}
        </div>
    </>
  )
}

export default Contact_scrap;
