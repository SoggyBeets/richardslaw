import React, { Component } from "react";
import "./MainImg.scss";
import { Row, Col } from "reactstrap";
import HeroImg from "../../images/utah-lawyer-homepage-hero-3.jpg";

// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween, Timeline } from 'react-gsap';

export default class MainImg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}
  render() {
    return (
      <div className="heroImgContainer">
        <Row noGutters>
          <Col md="12">
            <img id="headerSection" src={HeroImg} alt="law firm" />
          </Col>
        </Row>

        <Row noGutters className="heroImgRow">
          <Col xs="12" md="12">
            <div className="heroImgText">
              <h1 id="aggresiveText">Utah's Aggressive Law Firm</h1>
              {/* <hr></hr> */}
              <h2 id="missionStatement">
                A family firm that is dedicated to easing your stress,
                protecting your rights, and getting you what you deserve.
              </h2>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

/* <h3 id="msText">
            The attorneys at Richards & Richards Law Group, P.L.L.C. offer
            top-notch legal advice and representation to clients throughout
            Northern Utah. We are committed to providing the highest quality of
            professional legal services at an affordable price. We believe that
            dedicating our full attention to the needs of each individual client
            is not only a matter of good service, but is critical to achieving
            the best possible results.
          </h3> */
