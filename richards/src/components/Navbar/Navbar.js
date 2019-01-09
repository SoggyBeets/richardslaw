import React from "react";
import "./Navbar.css";
import Hamburger from "../Hamburger";
const Navbar = props => (

  <nav>

<div class="container">
  <div className="row" id="navbarRow">




    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>

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
        <a href="tel:+1-801-621-7443">801-621-7443</a>
      </div>
  </nav>
);

export default Navbar;
