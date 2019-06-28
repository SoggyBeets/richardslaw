import React, { Component } from "react";
import "./Navbar.scss";
import Logo from "../Icon";
import { Row, Col } from "reactstrap";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}
  render() {
    return (
      <Row noGutters className="navcont">
        <Col xs="0" md="2" />

        <Col xs="4" md="3">
          <div className="textAlignL">
            <p id="navP">Get&nbsp;Help&nbsp;Now!</p>
            <a id="navA" href="tel:+1-801-621-7443">
              801-621-7443
            </a>
          </div>
        </Col>

        <Col xs="4" md="2">
          <div id="navLogo">
            <Logo />
          </div>
        </Col>

        <Col xs="4" md="3">
          <div className="textAlignR">
            <ul>
              <li>
                <Link
                  activeclass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </Col>

        <Col xs="0" md="2" />
      </Row>
    );
  }
}
