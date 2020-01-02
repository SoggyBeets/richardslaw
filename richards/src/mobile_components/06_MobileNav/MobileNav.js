import React from "react";
import "./MobileNav.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faComments,
  faBook,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
// import MobileDropdown from "../08_MobileDropdown/MobileDropdown";

const mobileIcons = {
  fontSize: "3rem",
  color: "white",
  padding: "10px"
};

const MobileNav = () => {
  return (
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
          <NavLink to="/about">
            <FontAwesomeIcon icon={faAddressCard} style={mobileIcons} />
            <p className="iconLabel">About</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <FontAwesomeIcon icon={faComments} style={mobileIcons} />
            <p className="iconLabel">Contact</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
