import { Outlet, Link } from "react-router-dom";
import '../../scss/components/header.css'

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
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

export default NavBar;