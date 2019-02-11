import React from "react";
import "./Navbar.css";
import Logo from "../Icon";
import { Row, Col } from "reactstrap";

const Navbar = props => (
  <nav>
    <Row noGutters className="navcont">
      <Col md="2" />
      <Col md="3">
        <div className="textAlignL">
          <p id="navP">Get&nbsp;Help&nbsp;Now!</p>
          <a id="navA" href="tel:+1-801-621-7443">
            801-621-7443
          </a>
        </div>
      </Col>

      <Col md="2">
        <div id="navLogo">
          <Logo />
        </div>
      </Col>

      <Col md="3">
        <div className="textAlignR">
          <p id="navPR">Questions?</p>
          <a id="navAR" href="tel:+1-801-621-7443">
            801-621-7443
          </a>
        </div>
      </Col>
      <Col md="2" />
    </Row>
  </nav>
);

export default Navbar;
