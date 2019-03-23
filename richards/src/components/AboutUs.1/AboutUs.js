import React from "react";
import "./AboutUs.css";

const AboutUs = props => (
  <section id="aboutUs">
  <div className="container">
    <div className="row no-gutters" id="aboutusrow">
      <div className="col-xs-12 col-md-6" id="img-card-body">
        <img
          className="imgcardimg"
          src="http://www.studentworldonline.com/userfiles/images/Courses/Law/giammarco-boscaro-380907.jpg"
          alt="Card cap"
        />
      </div>

      <div className="col-xs-12 col-md-6" id="txt-card-body">
        <p>
          The attorneys at Richards & Richards Law Group, P.C. offer legal
          advice and representation to clients throughout Northern Utah. We are
          committed to providing the highest quality professional legal services
          at an affordable price. Moreover, we believe that dedicating our full
          attention to the needs of each individual client is not only a matter
          of good service, but is critical to achieving the best possible
          results. 
        </p>
      </div>
    </div>
    </div>
  </section>
);

export default AboutUs;
