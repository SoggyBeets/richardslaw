import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class MobileDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Practice Areas
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Practice Areas</DropdownItem>
          <DropdownItem>Injury</DropdownItem>
          <DropdownItem>Bankruptcy</DropdownItem>
          <DropdownItem>Divorce/Custody</DropdownItem>
          <DropdownItem>Immigration</DropdownItem>
          <DropdownItem>DUI/Criminal</DropdownItem>
          <DropdownItem>Real Estate</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}