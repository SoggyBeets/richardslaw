import React from "react";
import "./Navbar.css";
import Hamburger from "../Hamburger";
const Navbar = props => (
  <nav>
    <div className="row" id="navbarRow">
      <div className="col" id="button">
        <div id="hambuger">
          <Hamburger />
        </div>
        <div id="menu">
          <h3>Menu</h3>
        </div>
      </div>
      <div className="col" id="logodiv">
        <div id="logo" />
      </div>
      <div id="icon" />
      <div className="col" id="phone">
        <h3>Get Help Now!</h3>
        <a href="tel:+1-801-621-7443">801-621-7443</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
