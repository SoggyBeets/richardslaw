import React from "react";
import "./AboutUs.css";

const AboutUs = props => (
  <section id="aboutUs">
  
    <div className="row" id="aboutusrow">
      <div className="col" id="ascol">
        <div className="card" id="kevin">
          <img
            className="kevinimg"
            src={require("../AboutUs/Kevin.jpg")}
            alt="Card cap"
          />
          <div className="card-body">
            <h5>Kevin Richards</h5>
            <h5>Attorney</h5>
          </div>
        </div>
      </div>

      <div className="col" id="ascol">
        <div className="card" id="jaime">
          <img
            className="jaimeimg"
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
