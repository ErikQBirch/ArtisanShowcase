import { Outlet, Link } from "react-router-dom";
import '../../scss/components/header.css'


const toggleSideNav = () => {
  let header = document.querySelector("header");
  // let app = document.querySelector('.App');
  
  header.classList.toggle('sideNav_open');
  // app.classList.toggle('blur');

}

const Header = () => {

  return (
    <>
      <header>
        <div className="basicNav">
          <h1>Logo</h1>
          <button id="hamBtn" onClick={toggleSideNav}>=</button>
        </div>
        <nav className={"mainNav"} onClick={toggleSideNav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/artwork">Artwork</Link>
            </li>
            <li>
              <Link to="/writings">Writings</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Header;