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
        <Col xs="1" md="2" />
        <Col xs="11" md="10">
          <h1 id="aggresiveText">Utah's Aggressive Law Firm</h1>
          {/* <hr></hr> */}
          <h2 id="missionStatement">
            A family firm that is dedicated to easing your stress, protecting
            your rights, and getting you what you deserve.
          </h2>
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
      </Row>
    </Col>
  </Row>
);

export default MainImg;
