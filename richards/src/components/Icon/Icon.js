import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Icon.css";
import Icon from "../../icons/Icon.svg";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={Icon} alt="Logo" className="iconSize" />
      </div>
    );
  }
}
