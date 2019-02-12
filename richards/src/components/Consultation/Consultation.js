import React from "react";
import "./Consultation.css";
import { Row, Col } from "reactstrap";

const Consultation = () => (
  <div className="consultationContainer">
    <Row noGutters>
      <Col xs="0" md="2" />
      <Col xs="12" md="4">
        <h2 id="consultationText">We Are Always Ready To Help You</h2>
      </Col>
      <Col xs="12" md="4">
        <button id="consultationBtn">Free Consultation</button>
      </Col>
      <Col xs="0" md="2" />
    </Row>
    <div class="elfsight-app-14fd1b7f-cef3-4c59-add5-8558eec9bf75"></div>
  </div>
);

export default Consultation;
