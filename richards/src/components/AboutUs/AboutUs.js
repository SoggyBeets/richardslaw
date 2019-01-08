import React from "react";
// import { Link } from "react-router-dom";
import "./AboutUs.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const AboutUs = props => (
  <section id="aboutUs">
    <div className="row">
      <div className="col-md-6" id="kevin">
        {" "}
        <div class="card">
          <img
            class="card-img-top"
            src="https://i.pinimg.com/originals/a7/be/85/a7be85c8b619e19d9845a35ae5997fc6.jpg"
            alt="Card cap"
          />
          <div class="card-body">
            <h5>Kevin Richards</h5>
            <h5>Attorney</h5>
          </div>
        </div>
      </div>
      <div className="col-md-6" id="jaime">
        <div class="card">
          <img
            class="card-img-top"
            src="https://www.slaters.co.uk/media/catalog/product/cache/1/small_image/510x680/85e4522595efc69f496374d01ef2bf13/0/2/02802611-bi-om.jpg"
            alt="Card cap"
          />
          <div class="card-body">
            <h5>Jaime Richards</h5>
            <h5>Lawyer</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
