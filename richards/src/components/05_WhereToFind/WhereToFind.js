import React, { Component } from "react";
import "./WhereToFind.scss";
import { Row, Col } from "reactstrap";

export default class WhereToFind extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <Row noGutters id="wtfContainer">
        <Col xs="0" md="2" />
        <Col xs="12" md="8">
          <h1 id="whereToFind">Where To Find Us</h1>
        </Col>
        <Col xs="0" md="2" />
      </Row>
    );
  }
}
