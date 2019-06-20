import React, { Component } from "react";
import "./Social.scss";
import GoogleMap from "./Google/Google";
import FacebookFeed from "./Facebook/Facebook";
import { Row, Col } from "reactstrap";

export default class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}
  render() {
    return (
      <Row noGutters id="socialfeeds">
        <Col xs="12" md="6" id="mapsfeed">
          <GoogleMap />
        </Col>
        <Col xs="12" md="6" id="fbfeed">
          <FacebookFeed />
        </Col>
      </Row>
    );
  }
}
