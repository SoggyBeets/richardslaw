import React from "react";
// import { Link } from "react-router-dom";
import "./Calculator.css";
import Math from "../Math";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Calculator = () => (
  <div>
    <p>19 + 142 = <Math num1={19} operator="+" num2={142} />
    </p>
    <p>21 - 6 = <Math num1={21} operator="-" num2={6} />
    </p>
    <p>3 * 12 = <Math num1={3} operator="*" num2={12} />
    </p>
    <p>64 / 8 = <Math num1={64} operator="/" num2={8} />
    </p>
  </div>
);


export default Calculator;

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