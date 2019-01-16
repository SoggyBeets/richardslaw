import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>

  <div className="container">
    <div className="row no-gutters" id="navbarrow">
    



      <div className="col-4" id="phone">
        <h5>Get&nbsp;Help&nbsp;Now!</h5>
        <a href="tel:+1-801-621-7443">801-621-7443</a>
      </div>

      <div className="col-4">
      <div id="logo" />
  
      </div>

      <div className="col-4" id="q">
        <h4>Questions?</h4>
      </div>




    </div>
    </div>
  </nav>
);

export default Navbar;
