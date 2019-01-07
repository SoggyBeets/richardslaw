import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav>
  <div className="row" id="navbarRow">
  <div className="col-md-4">
  <Button></Button>
  </div>
  <div className="col-md-4">
  <div id="richardsbrand"><h1>This will be the logo</h1></div>
    </div>
  <div className="col-md-4"><h1>Contact</h1></div>       
  
  </div>
  </nav>
);

export default Navbar;

 /* <div className="navbar-brand" to="/">
      Pupster
    </div>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </div>
        </li>
        <li className="nav-item">
          <div
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Discover
          </div>
        </li>
        <li className="nav-item">
          <div
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          // </div> */

          /* </li>
      </ul> */