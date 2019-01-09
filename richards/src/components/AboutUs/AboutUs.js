import React from "react";
import "./AboutUs.css";

const AboutUs = props => (
  <section id="aboutUs">
    <div className="row">
      <div className="col" id="kevin">
        <div className="card">
          <img
            className="card-img-top"
            src={require("../AboutUs/Kevin.jpg")}
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
            src={require("../AboutUs/Jaime.jpg")}
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
