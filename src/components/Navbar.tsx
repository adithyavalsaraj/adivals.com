import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      {/* <li>
        <Link to="/portfolio">My Works</Link>
      </li>
      <li>
        <Link to="/interests">Interests</Link>
      </li> */}
      {/* <li>
        <Link to="/contact">Contact</Link>
      </li> */}
    </ul>
  </nav>
);

export default Navbar;
