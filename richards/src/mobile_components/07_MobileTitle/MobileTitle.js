import React from "react";
import './MobileTitle.scss'

export class MobileTitle extends React.Component {
  render (){
  return (
    <h1 className="mobileTitle">{this.props.title}</h1>
  );
};
}

export default MobileTitle;