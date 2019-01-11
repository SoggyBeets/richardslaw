import React from "react";
import "./Navbar.css";
import Hamburger from "../Hamburger";



const Navbar = props => (

  <nav>
    <div className="row" id="navbarRow">
      <div className="col">
        <div id="hambuger">
          <Hamburger />
        </div>
        <div id="menu">
          <h6>Menu</h6>
        </div>
      </div>
      <div className="col" id="logodiv">
        <div id="logo" />
      </div>
      <div id="icon" />
      <div className="col" id="phone">
        <h6>Get Help Now!</h6>
        <a href="tel:+1-801-621-7443">801-621-7443</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
