import React from "react";
import "./AboutLawFirm.css";
import { Row, Col } from "reactstrap";

const AboutLawFirm = () => (
  <div id="aboutLawFirmContainer" className="col-12">
   <Row noGutters>
  <Col xs="1" md="2" />
  <Col xs="10" md="8" >
  <h1 className="aboutLawFirmTitle">
  About Us
  </h1>
  </Col>
  <Col xs="1" md="2" />
  </Row>
  <Row noGutters>
  <Col xs="1" md="2" />
    <Col xs="10" md="8" id="aboutLawFirmContainer">
      <h3 id="msText">
            The attorneys at Richards & Richards Law Group, P.L.L.C. offer
            top-notch legal advice and representation to clients throughout
            Northern Utah. We are committed to providing the highest quality of
            professional legal services at an affordable price. We believe that
            dedicating our full attention to the needs of each individual client
            is not only a matter of good service, but is critical to achieving
            the best possible results.
          </h3>
  </Col>
  <Col xs="1" md="2" />
  </Row>
  </div>
);

export default AboutLawFirm;
