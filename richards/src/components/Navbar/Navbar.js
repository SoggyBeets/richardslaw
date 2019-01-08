import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "../Hamburger";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav>
    <div className="row" id="navbarRow">
      <div className="col-md-4" id="button">
        <div id="hambuger">
          <Hamburger />
        </div>
        <div id="menu">
          <h3>Menu</h3>
        </div>
      </div>
      <div className="col-md-4" id="logodiv">
        <div id="logo" />
      </div>
      <div id="icon" />
      <div className="col-md-4" id="phone">
        <h3>Get Help Now!</h3>
        <a href="tel:+1-555-555-1212">555-555-1212</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
