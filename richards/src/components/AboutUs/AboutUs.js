import React from "react";
// import { Link } from "react-router-dom";
import "./AboutUs.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const AboutUs = props => (
  <section id="aboutUs">
  <div className="row">
  <div className="col-md-6"> <div class="card">
  <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card cap"/>
  <div class="card-body">
    <h5 class="card-title">Kevin Richards</h5>
  </div>
</div>
</div>
  <div className="col-md-6"> 
  <div class="card">
  <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card cap"/>
  <div class="card-body">
    <h5 class="card-title">Jamie Richards</h5>
  </div>
</div>
</div>
  </div>
  </section>
);

export default AboutUs;

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