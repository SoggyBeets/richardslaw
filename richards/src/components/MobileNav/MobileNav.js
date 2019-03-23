// import React from "react";
// import "./MobileNav.css";
// import Logo from "../Icon";
// import { Row, Col } from "reactstrap";
import Icon from '../Icon';
import MobileDropdown from '../Dropdown';
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class MobileNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"><Icon id="mobileIcon" /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Law Areas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}








// const MobileNav = props => (
//   <header className="mobileToolBar">
//     <nav className="mobileNav">
//       <div></div>
//       <div className="mobileLogo"><a href="/">the logo</a></div>
//       <div className="mobileNavItems">
//         <ul>
//           <li><a href="/">About Us</a></li>
//           <li><a href="/">Practice Areas</a></li>
//           <li><a href="/">Lawyers</a></li>
//           <li><a href="/">Contact Us</a></li>
//         </ul>
//       </div>
//     </nav>
//   </header>
// );

// export default MobileNav;
