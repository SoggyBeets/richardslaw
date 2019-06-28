import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class MobileDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem> header>Header</DropdownItem>
          <DropdownItem> header>Action</DropdownItem>
          <DropdownItem> header>Action</DropdownItem>
          <DropdownItem> header>Action</DropdownItem>
          <DropdownItem> header>Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}