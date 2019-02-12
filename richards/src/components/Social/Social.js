import React from "react";
import "./Social.css";
import Google from "../Google";
import Facebook from "../Facebook";
// import Instagram from "./components/Instagram";
import { Row, Col } from "reactstrap";

const Social = () => (
  <Row noGutters id="socialfeeds">
    <Col xs="12" md="6" id="mapsfeed">
      <Google />
    </Col>
    <Col xs="12" md="6" id="fbfeed">
    <Facebook />
    </Col>
  </Row>
);

export default Social;
