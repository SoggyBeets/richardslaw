import React, { Component } from "react";
import MobileNav from "../06_MobileNav/MobileNav";
import MobileIcon from "../07_MobileIcon/MobileIcon";
import MobileTitle from "../07_MobileTitle/MobileTitle";
import styled from "styled-components";


const Form = styled.form`
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 5rem;
  width: 100%;
`;

const Fieldset = styled.fieldset`
  padding: 0;
  text-align: left;
  font-size: 2rem;
  border: 0;
  margin-top: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem 0.5rem;
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  color: #55595c;
  margin-top: 1.618rem;
  border: 1px solid transparent;
  border-radius: 3px;
 
  resize: vertical;

  &:focus {
    outline: 0;
    border-bottom-color: #ffab00;
  }
`;

const SubmitInput = styled.input`
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  background-clip: padding-box;
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-top: 1.618rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #ffab00;
  border: 1px solid transparent;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  cursor: pointer;


  &:focus {
    outline: 0;
    background-color: #ffcc54;
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
      0 8px 15px rgba(0, 0, 0, 0.07);
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
`;

const Input = styled.input`
  padding: 0.5rem 0.5rem;
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  color: #55595c;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #eee;
  border-left: 0;
  border-radius: 3px;
  -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  resize: vertical;

  &:focus {
    outline: 0;
    border-bottom-color: #ffab00;
  }
`;

class ReactFormLabel extends Component {
  render() {
    return <Label htmlFor={this.props.htmlFor}>{this.props.title}</Label>;
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };
  }

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };


  render() {
    return (
      <div>
        <MobileIcon />
        <div className="mobileContainer">
          <MobileTitle title={"Contact"} />
          <Form
            action="https:formspree.io/gavinbrich@gmail.com"
            method="POST"
            target="_blank"
            ref={form => (this.formContainer = form)}
          >

            <Fieldset>
              <ReactFormLabel htmlFor="formName" title="Full Name:" />
              <Input
                id="formName"
                name="name"
                type="text"
                required
                onChange={this.handleChange}
                value={this.state.name}
              />
            </Fieldset>

            <Fieldset>
              <ReactFormLabel htmlFor="formEmail" title="Email:" />

              <Input
                id="formEmail"
                name="email"
                type="email"
                required
                onChange={this.handleChange}
                value={this.state.email}
              />
            </Fieldset>
            <Fieldset>
              <ReactFormLabel htmlFor="formPhone" title="Phone:" />

              <Input
                id="formPhone"
                name="phone"
                type="tel"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </Fieldset>

            <Fieldset>
              <ReactFormLabel htmlFor="formMessage" title="Message:" />
              <TextArea
                id="formMessage"
                name="message"
                required
                onChange={this.handleChange}
              />
            </Fieldset>
            <div>
              <SubmitInput
                id="formButton"
                type="submit"
                placeholder="Send message"
                value="Submit"
              />
            </div>
          </Form>
        </div>
        <MobileNav />
      </div>
    );
  }
}

export default Contact;
