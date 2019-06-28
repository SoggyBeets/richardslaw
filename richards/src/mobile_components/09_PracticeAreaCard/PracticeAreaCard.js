import React from "react";
import "./PracticeAreaCard.scss";
import KevinImage from "../../images/portrait1-500px.jpg";
import JamieImage from "../../images/portrait2-500px.jpg";
import MobileIcon from "../07_MobileIcon/MobileIcon";
import MobileTitle from "../07_MobileTitle/MobileTitle";
import MobileNav from "../06_MobileNav/MobileNav";

export class PracticeAreaCard extends React.Component {
  render() {
    return (
      <div>
      <h1 className="mobileHeading">{this.props.title}</h1>
      <img className="mobilePracticeAreaIcon" src={this.props.icon}></img>
      <p className="mobilePracticeAreaText">{this.props.texthead}</p>
      <p className="mobilePracticeAreaText">{this.props.text1}</p>
      <p className="mobilePracticeAreaText">{this.props.text2}</p>
      <p className="mobilePracticeAreaText">{this.props.text3}</p>
      <p className="mobilePracticeAreaText textConsultation">{this.props.textConsultation}</p>
      </div>
    );
  
  }
}

export default PracticeAreaCard;
