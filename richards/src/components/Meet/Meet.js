import React from "react";
import "./Meet.css";
import { Row, Col } from "reactstrap";

const Meet = () => (
  <Row noGutters>
    <Col md="12" id="attorneyContainer">
      <Row noGutters>
        <Col xs="0" md="2" />
        <Col xs="12" md="8">
          <h1 id="aboutUsTitle">Meet Our Attorneys</h1>
        </Col>
        <Col xs="0" md="2" />
      </Row>

      <Row noGutters id="kevinRow">
        <Col xs="0" md="1" />
        <Col xs="12" md="5" id="imgCard">
          <img
            id="kevinPortrait"
            src="https://www.rbrlawgroup.com/wp-content/uploads/2016/08/portrait1-500px.jpg"
            alt="Kevin Richards Portrait"
          />
        </Col>
        <Col xs="12" md="5" id="lawyerCard">
          <h2 id="meetTitle">Kevin G. Richards</h2>

          <h3 id="meeth3">Education</h3>

          <h4 id="meeth4">
            J.D. University of Tulsa(1988) <br /> B.A. Weber State
            University(1983)
          </h4>
          <h3 id="meeth3">Admissions</h3>

          <h4 id="meeth4">
            U.S. District Courts, District of Utah <br />
            U.S. Bankruptcy Court, District of Utah
          </h4>
          <hr align="left" width="80%" color="white" />

          <p id="meetp">
            Kevin G. Richards was raised in Ogden and is a product of Ogden City
            Schools. Mr. Richards has over 25 years of legal experience in the
            areas of chapters 7 and 13 consumer bankruptcy; divorce and family
            law; criminal defense and immigration; real estate and construction
            litigation; and commercial litigation and transactions. He also does
            alternative dispute resolution and mediation. He is fluent in
            Portuguese and Spanish. Mr. Richards in the past couple of years has
            taken up marathon running having completed several including the
            Boston Marathon in April of 2012.
          </p>
        </Col>
        <Col xs="0" md="1" />
      </Row>

      <Row noGutters id="jaimeRow">
        <Col md="1" />
        <Col md="5" id="imgCard">
          <img
            id="jaimePortrait"
            src="https://www.rbrlawgroup.com/wp-content/uploads/2016/08/portrait2-500px.jpg"
            alt="Jaime Richards Portrait"
          />
        </Col>
        <Col md="5" id="lawyerCard">
          <h2 id="meetTitle">Jaime G. Richards</h2>
          <h3 id="meeth3">Education</h3>
          <h4 id="meeth4">
            J.D. Washburn University School of Law (2014) <br /> B.A. Weber
            State University (2011)
          </h4>
          <h3 id="meeth3">Admissions</h3>
          <h4 id="meeth4">U.S. District Courts, District of Utah</h4>
          <hr align="left" width="80%" color="white" />
          <p id="meetp">
            Jaime is the firm’s bankruptcy expert. He excels in helping people
            through tough and stressful situations. His other practices areas
            include divorce, paternity and custody, as well as general civil
            litigation, will, and estate work as well as contract disputes and
            drafting. Jaime became a lawyer because he likes working with people
            and problem solving. Most clients who meet with him immediately like
            his demeanor and attitude which helps them feel comfortable during
            some of the most trying situations of their lives. Before venturing
            to law school and becoming a lawyer, Jaime had a previous career in
            real estate development and finance. Jaime’s greatest pride and joy
            is his family, which now includes five children.
          </p>
        </Col>

        <Col md="1" />
      </Row>
    </Col>
  </Row>
);

export default Meet;
