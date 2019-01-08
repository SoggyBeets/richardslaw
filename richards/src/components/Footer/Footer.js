import React from "react";
import "./Footer.css";

const hOneStyle = {
  fontFamily: 'Roboto',
  color: 'white',
  fontSize: '2em'
}
const hTwoStyle = {
  fontFamily: 'Roboto',
  color: 'white',
  fontSize: '1.75em'
}

const hThreeStyle = {
  fontFamily: 'Roboto',
  color: 'white',
  fontSize: '1.25em',
  fontWeight: '200'
}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Footer = () => (
  <footer>
  <div className="row" id="footerRow">
  <div className="col-md-4"><h2 style={hTwoStyle} >Contact</h2>
  <h3 style={hThreeStyle}>RBR Law Group - Bankruptcy, Car Accident and Criminal Attorneys
289 24th St Suite 101 
Ogden, UT 84401 
Main Phone: (801) 621-7443 </h3></div> 
  <div className="col-md-4">
  <div id="richardsbrand"><h1 style={hOneStyle}>Thier Logo</h1><h3>Copy Right 2018</h3><h2>Made By SoggyBeets</h2></div>
    </div>
  <div className="col-md-4"><h2>Links</h2>     
  </div>
  </div>
  </footer>
);

export default Footer;
