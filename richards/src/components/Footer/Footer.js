import React from "react";
import "./Footer.css";
import { library, text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faGavel, faInstagram, faFacebookSquare, faMapMarkerAlt, faCarrot, faBeer, faUsers, faUserInjured, faBalanceScale } from '@fortawesome/free-solid-svg-icons'
// library.add(faGavel, faInstagram, faFacebookSquare, faMapMarkerAlt, faCarrot, faBeer, faUsers, faUserInjured, faBalanceScale)
import {
  faCarrot,
  faBalanceScale,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Icon";
import { Row, Col } from "reactstrap";

library.add(fab, faCarrot, faBalanceScale, faRocket);

// const hOneStyle = {
//   fontFamily: 'Roboto',
//   color: 'white',
//   fontSize: '2em'
// }
// const hTwoStyle = {
//   fontFamily: 'Roboto',
//   color: 'white',
//   fontSize: '1.75em'
// }

const hThreeStyle = {
  fontFamily: "Roboto",
  color: "black",
  fontSize: "1rem",
  fontWeight: "200",
  marginLeft: "1rem",
  marginRight: "1rem",
  padding: "0rem"
};

const copyrightStyle = {
  fontFamily: "Roboto",
  color: "white",
  fontSize: ".85rem",
  fontWeight: "400",
  marginLeft: "1rem",
  marginRight: "1rem",
  lineHeight: "1.75rem",
  letterSpacing: "0.1rem"
};

// const richardsLogo = {
//   fontSize: '4em',
//   color: 'grey',
//   padding: '8px'
// }

const google = {
  fontSize: "2rem",
  color: "white",
  padding: "8px",
  paddingBottom: "12px"
  /* padding: 10px; */
};

const ourLogo = {
  fontSize: "3rem",
  color: "purple",
  padding: "8px"
};

const fb = {
  fontSize: "2.25rem",
  color: "white",
  padding: "10px",
  marginRight: "2rem",
  marginLeft: "2rem"
};
const insta = {
  fontSize: "2.25rem",
  color: "white",
  padding: "10px"
};

const iconLinks = {
  marginLeft: "2rem",
  marginRight: "2rem",
  marginBottom: "1rem",
  padding: "0rem",
  textAlign: "center"
};

const linkAlign = {
  textAlign: "center"
};

const Footer = () => (
  <footer>
    <Row noGutters id="footerRow">
      <Col md="12">
        <Row noGutters>
          <Col md="2" />
          <Col md="2">
            <h2 id="contact">Address</h2>
            <h3 href="https://www.google.com/maps/dir/41.2179494,-111.9417437/rbr+law/@41.2203729,-111.9752583,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87530f2088890a47:0xde0ebd0671a6d4e4!2m2!1d-111.9737615!2d41.2224332"
               id="contactText">
               289 24th St, Ogden, UT 84401</h3>
          </Col>
          <Col md="1" />
          <Col md="2">
            <h2 id="contact">Contact Us</h2>
            <h3 href="tel:+1-801-621-7443" id="contactText">(801) 621-7443</h3>
          </Col>
          <Col md="1" />
          <Col md="2">
            <h2 id="contact">Mail Us</h2>
            <h3 id="contactText">example@example.mail</h3>
          </Col>
          <Col md="2" />
        </Row>

        <Row noGutters>
          <Col md="4" />
          <Col md="4">
            <div id="footerLogo">
              <Logo id="footerImg" />
            </div>
          </Col>
          <Col md="4" />
        </Row>

        <Row noGutters>
          <Col md="4" />
          <Col md="4">
            <div style={iconLinks}>
              <FontAwesomeIcon icon={["fab", "google"]} style={google} />
              <FontAwesomeIcon icon={["fab", "facebook"]} style={fb} onClick="parent.open('https://www.facebook.com/RBRlawgroup/')" />
              <FontAwesomeIcon icon={["fab", "instagram"]} style={insta} />
            </div>
          </Col>
          <Col md="4" />
        </Row>

        <Row noGutters>
          <Col md="12">
            <div id="ourLogoSection">
              <h3 style={copyrightStyle}>
                Created By
                <FontAwesomeIcon icon="carrot" style={ourLogo} />
                SoggyBeets.
              </h3>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default Footer;
