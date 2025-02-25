//import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div>
          <img src={logo}></img>
        </div>
        <div className="links">
          <Link to="/?cat=art" className="link">
            <h4>Art</h4>
          </Link>
          <Link to="/?cat=phil" className="link">
            <h4>Philosophy</h4>
          </Link>
          <Link to="/?cat=tech" className="link">
            <h4>Tech</h4>
          </Link>
          <Link to="/?cat=gen" className="link">
            <h4>General</h4>
          </Link>
          <span>
            <h4>Lumie</h4>
          </span>
          <span>
            <h4>Logout</h4>
          </span>
          <span className="write">
            <Link to="/write" className="link">
              <h4>Write</h4>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
