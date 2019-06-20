import React from "react";
import "./Meet.css";
import { Row, Col } from "reactstrap";
import KevinImg from "../../images/portrait1-500px.jpg"
import JamieImg from "../../images/portrait2-500px.jpg"

const Meet = () => (
  <Row noGutters>
    <Col md="12" id="attorneyContainer">
      <Row noGutters>
        <Col md="2" />
        <Col md="8">
          <h1 className="sectionTitle">Meet Our Attorneys</h1>
        </Col>
        <Col md="2" />
      </Row>

      <Row noGutters id="kevinRow">
        <Col xs="0" md="1" />
        <Col xs="0" md="1" className="greyLeft" />
        <Col xs="12" md="3" className="imgCard">
          <img
            id="kevinPortrait"
            src={KevinImg}
            alt="Kevin Richards Portrait"
          />
        </Col>
        <Col xs="0" md="1" className="greyLeft" />
        <Col xs="12" md="5" className="lawyerCard kevinLawyerCard">
        <Row noGutters>
          <h2 className="meetTitle">Kevin G. Richards</h2>
          </Row>
          <Row>
          <Col md='5'> 
          <h3 className="meeth3">Education</h3>
          <h4 className="meeth4">
            J.D. University of Tulsa(1988) <br /> B.A. Weber State
            University(1983)
          </h4>
          <h3 className="meeth3">Admissions</h3>
          <h4 className="meeth4">
            U.S. District Court of Utah
            <br />
            U.S. Bankruptcy Court-State of Utah
            <br />
            U.S. Tenth Circuit Court of Appeals
            <br />
            U.S. Immigration Court (all states)
          </h4>
          </Col>
          <Col md='5'>
          <h3 className="meeth3">Areas of Practice</h3>
          <h4 className="meeth4">
            Divorce & Custody
            <br />
            Adoption
            <br />
            Immigration
            <br />
            DUI/Criminal-all felonies & misdemeanors
            <br />
            Civil Litigation
            <br />
            Probate/Estate Planning
            <br />
            Guardian & Conservatorship
            <br />
            Personal Injury
            <br />
            Mediations/Alternative Dispute Resolution
          </h4>
          </Col>
          <Col md='2'/>
          </Row>
          <Row>
          <Col md='10'>
          <hr align="left" width="80%" color="white" />
          </Col>
          <Col md='2' />
          </Row>
          <Row>
          <Col md='10'>
          <p className="meetp">
            Kevin G. Richards was raised in Ogden and is a product of Ogden CIty
            Schools. It was while he was a senior at Ogden High that he decided
            that he wanted to be a lawyer. Mr. Richards now has over 30 years of
            legal experience. Aside from being an attorney he also does
            mediation and alternative dispute resolution. He is fluent in
            Portuguese and Spanish. Mr. Richards’ current hobbies involve
            traveling with his wife and family, overlanding and spending a
            beautiful day up at Snowbasin skiing.
          </p>
          </Col>
          <Col md='2' />
          </Row>
        </Col>
        <Col xs="0" md="1" />
      </Row>

      <Row noGutters id="jaimeRow">
        <Col xs="0" md="1" />
        <Col xs="0" md="1" className="greyLeft" />
        <Col xs="12" md="3" className="imgCard">
          <img
            id="jaimePortrait"
            src={JamieImg}
            alt="Jaime Richards Portrait"
          />
        </Col>
        <Col xs="0" md="1" className="greyLeft" />
        <Col xs="12" md="5" className="lawyerCard">
        <Row noGutters>
          <h2 className="meetTitle">Jaime G. Richards</h2>
          </Row>
          <Row>
          <Col md='5'> 
          <h3 className="meeth3">Education</h3>
          <h4 className="meeth4">
          J.D., Washburn University (2014)
            <br />
            B.A. Weber State University(1983)
          </h4>
          <h3 className="meeth3">Admissions</h3>
          <h4 className="meeth4">
          U.S. District Court of Utah
            <br />
            U.S. Bankruptcy Court-State of Utah
          </h4>
          </Col>
          <Col md='5'>
          <h3 className="meeth3">Areas of Practice</h3>
          <h4 className="meeth4">
          Bankruptcy
            <br />
            Divorce & Custody
            <br />
            Adoption
            <br />
            Civil Litigation
            <br />
            Probate/Estate Planning
            <br />
            Guardian & Conservatorship
            <br />
            Contract Disputes & Drafting
          </h4>
          </Col>
          <Col md='2'/>
          </Row>
          <Row>
          <Col md='10'>
          <hr align="left" width="80%" color="white" />
          </Col>
          <Col md='2' />
          </Row>
          <Row>
          <Col md='10'>
          <p className="meetp">
          Jaime G. Richards was born and raised in Ogden and is a product of
            Ogden City schools just like his father Kevin. Before law school
            Jaime had a career in real estate development and finance. He
            decided to become a lawyer because he likes working with people and
            problem solving. Jaime is fluent in Portuguese. He is an avid
            golfer, but also enjoys CrossFit, skiing and anything that involves
            spending time with his wife and children.
          </p>
          </Col>
          <Col md='2' />
          </Row>
        </Col>
        <Col xs="0" md="1" />
      </Row>

  </Col>
  </Row>
);

export default Meet;
