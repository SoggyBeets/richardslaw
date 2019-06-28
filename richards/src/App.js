import React, { Component } from "react";
import Responsive from "react-responsive";

import { Route } from "react-router-dom";
// import ScrollableSection from "react-update-url-on-scroll";

import { Route, Switch } from "react-router-dom";
import "./components/00_Navbar/Navbar.scss";
import { Row, Col } from "reactstrap";
import Logo from "./components/Icon/Icon";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";


import Contact from "./mobile_components/05_Contact/Contact";
import PracticeAreas from "./mobile_components/02_PracticeAreas/PracticeAreas";
import AttorneyCard from "./mobile_components/04_AttorneyCard/AttorneyCard";
import About from "./mobile_components/04_About/About";
import Home from "./mobile_components/01_MobileHome";

import MainImg from "./components/01_MainImg/MainImg";
import AboutLawFirm from "./components/02_AboutLawfirm/AboutLawFirm";
import Tabs from "./components/03_Tabs/Tabs";
import Meet from "./components/04_Meet/Meet";
import WhereToFind from "./components/05_WhereToFind/WhereToFind";
import Social from "./components/06_Social/Social";
import Footer from "./components/07_Footer/Footer";
import Form from "./components/08_Form/form";

import "./App.scss";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Desktop = props => <Responsive {...props} minWidth={768} />;

const P = styled.p`
  color: #ffcc54;
  cursor: pointer;
`;

const UL = styled.ul`
  background-color: rgba(0, 0, 0, 0);
  padding-top: 0.75rem;
`;

class Navbar extends Component {
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

        <Col xs="4" md="4">
          <div className="textAlignR">
            <UL>
              <Link
                activeclass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <P>About</P>
              </Link>
              <Link
                activeclass="active"
                to="practice-areas"
                spy={true}
                smooth={true}
                duration={500}
              >
                <P>Practice Areas</P>
              </Link>
              <Link
                activeclass="active"
                to="attorneys"
                spy={true}
                smooth={true}
                duration={500}
              >
                <P>Attorneys</P>
              </Link>
              <Link
                activeclass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <P>Contact</P>
              </Link>
            </UL>
          </div>
        </Col>

        <Col xs="0" md="1" />
      </Row>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <Mobile>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/practiceAreas" component={PracticeAreas} />
            <Route path="/attorneyCard" component={AttorneyCard} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Mobile>
        <Desktop>
          <Navbar />
          <MainImg />

          <AboutLawFirm />
          <Tabs />
          <Meet />
          <WhereToFind />
          <Social />
//             <Footer />

{/* //           <ScrollableSection name={""} exact>
//             <Navbar />
//           </ScrollableSection>

//         

//           <ScrollableSection name={"about"} exact>
//             <AboutLawFirm />
//           </ScrollableSection>

//           <ScrollableSection name={"practice-areas"} exact>
//             <Tabs />
//           </ScrollableSection>

//           <ScrollableSection name={"attorneys"} exact>
//             <Meet />
//           </ScrollableSection>

//           <ScrollableSection name={"where-to-find"} exact>
//             <WhereToFind />
//           </ScrollableSection>

//           <ScrollableSection name={"footer"} exact>
//             <Social />
//             <Footer />
//           </ScrollableSection> */}

          <Element id="about">
            <AboutLawFirm />
          </Element>

          <Element id="practice-areas">
            <Tabs />
          </Element>

          <Element id="attorneys">
            <Meet />
          </Element>

          <Element id="contact">
            <WhereToFind />
          </Element>
          <Social />
          <Footer />
          <Form />
        </Desktop>
      </div>
    );
  }
}
