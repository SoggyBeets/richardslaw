import React from "react";
// import { Link } from "react-router-dom";
import "./AboutUs.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
const AboutUs = props => (
  <section id="aboutUs">
      <div className="row">
        <div className="col" id="kevin">
          <div className="card">
            <img
              className="card-img-top"
              // src=""
              alt="Card cap"
            />
            <div className="card-body">
              <h5>Kevin Richards</h5>
              <h5>Attorney</h5>
            </div>
          </div>
        </div>
        <div className="col" id="jaime">
          <div className="card">
            <img
              className="card-img-top"
              // src=""
              alt="Card cap"
            />
            <div className="card-body">
              <h5>Jaime Richards</h5>
              <h5>Lawyer</h5>
            </div>
          </div>
        </div>
      </div>
  </section>
);

export default AboutUs;
