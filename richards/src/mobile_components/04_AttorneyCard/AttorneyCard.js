import React from "react";
import './AttorneyCard.scss';

export class AttorneyCard extends React.Component {
  render (){
  return (
    <div>
      <h1>{this.props.name}</h1>
      <img className="mobileImg" src={this.props.img}></img>
      <p>{this.props.info}</p>
    </div>
  );
};
}

export default AttorneyCard;