import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <div className="row no-gutters" id="navbarrow">
    
      <div className="col" id="phone">
        <h5>Get Help Now!</h5>
        <a href="tel:+1-801-621-7443">801-621-7443</a>
      </div>

      <div className="col" id="logo">
        <div id="icon" />
      </div>

      <div className="col" id="q">
        <h4>Questions?</h4>
      </div>

    </div>
    
  </nav>
);

export default Navbar;
