import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>

  <div>
    {/* <div className="row no-gutters" id="navbarrow"> */}
    <div className="row">
    <div className="col-2"></div>
      <div className="col-3">
      <div className="textAlignL">
        <p id="navP">Get&nbsp;Help&nbsp;Now!</p>
        <a id="navA" href="tel:+1-801-621-7443">801-621-7443</a>
        </div>
      </div>

      <div className="col-2">
      <div id="logo" />
  
      </div>

      <div className="col-3">
      <div className="textAlignR">
        <p id="navPR">Questions?</p>
        <a id="navAR" href="tel:+1-801-621-7443">801-621-7443</a>
      </div>
      </div>
      <div className="col-2"></div>




    </div>
    </div>
  </nav>
);

export default Navbar;
