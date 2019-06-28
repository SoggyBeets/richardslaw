import React from "react";
import "./MobileNav.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faComments,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import MobileDropdown from "../08_MobileDropdown/MobileDropdown";

const mobileIcons = {
  fontSize: "3rem",
  color: "white",
  padding: "10px"
};

const MobileNav = () => {
  return (
    <div className="nav-wrapper">
      <nav className="mobileNav">
        <ul>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} style={mobileIcons} />
              <p className="iconLabel">Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/practiceAreas">
              <FontAwesomeIcon icon={faBook} style={mobileIcons} />
              <p className="iconLabel">Practice Areas</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/attorneyCard">
              <FontAwesomeIcon icon={faUserFriends} style={mobileIcons} />
              <p className="iconLabel">Attorneys</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/practiceAreas">
              <FontAwesomeIcon icon={faBook} style={mobileIcons} />
              <p className="iconLabel">Practice Areas</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/attorneys">
              <FontAwesomeIcon icon={faUserFriends} style={mobileIcons} />
              <p className="iconLabel">Attorneys</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <FontAwesomeIcon icon={faHome} style={mobileIcons} />
              <p className="iconLabel">About</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FontAwesomeIcon icon={faComments} style={mobileIcons} />
              <p className="iconLabel">Contact</p>
            </NavLink>
          </li>
          <li>
            <MobileDropdown>
              {/* <NavLink to="/about">
            <FontAwesomeIcon icon={faHome} style={mobileIcons} />
            <p className="iconLabel">About</p>
          </NavLink> */}
            </MobileDropdown>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
