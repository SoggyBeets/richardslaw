import React from "react";
// import { Link } from "react-router-dom";
import "./Math.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Math = (props) => {
  let value;

  switch(props.operator){
    case "+":
    value = props.num1 + props.num2;
    break;
    case "-":
    value = props.num1 - props.num2;
    break;
    case "*":
    value = props.num1 * props.num2;
    break;
    case "/":
    value = props.num1 / props.num2;
    break;
    default:
    value = NaN;
  }

  return <span style={{fontSize: value}}>{value}</span>
};

export default Math;

 /* <div className="navbar-brand" to="/">
      Pupster
    </div>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </div>
        </li>
        <li className="nav-item">
          <div
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Discover
          </div>
        </li>
        <li className="nav-item">
          <div
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          // </div> */

          /* </li>
      </ul> */