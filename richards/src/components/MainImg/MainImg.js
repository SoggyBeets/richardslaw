import React from "react";
import "./MainImg.css";
import { Row, Col } from "reactstrap";

const MainImg = () => (
  <Row noGutters>
    <Col md="12">
      <img
        id="headerSection"
        src="https://www.rbrlawgroup.com/wp-content/uploads/2016/08/utah-lawyer-homepage-hero-3.jpg"
        alt="lawyer Jamie"
      />
      <Row noGutters>
        <Col md="2" />
        <Col md="8">
          <h1 id="aggresiveText">Utah's Aggressive Law Firm</h1>
          {/* <hr></hr> */}
          <h2 id="missionStatement">
            This will be the mission statement of the company
          </h2>
          <h3 id="msText">
            This will be some extra text for the mission statement
          </h3>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default MainImg;
