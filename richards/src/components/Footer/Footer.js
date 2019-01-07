import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Footer = props => (
  <footer>
  <div className="row" id="footerRow">
  <div className="col-md-4"><h1>Links</h1></div>
  <div className="col-md-4">
  <div id="copyright"><h1>Copy Right 2018</h1></div>
    </div>
  <div className="col-md-4"><h1>Contact</h1></div>       
  </div>
  </footer>
);

export default Footer;

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