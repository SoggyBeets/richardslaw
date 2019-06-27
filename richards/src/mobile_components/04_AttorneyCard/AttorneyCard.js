import React from "react";
import './AttorneyCard.scss';

export class AttorneyCard extends React.Component {
  render (){
  return (
    <div>
      <h1 className="mobileHeading">{this.props.name}</h1>
      <img className="mobileImg" src={this.props.img}></img>
      <div className="attorneyCardBg">
      <h3 className="attorneyCardTitle">{this.props.edu}</h3>
      <h4 className="attorneyCardText">{this.props.eduText}</h4>
      <h3 className="attorneyCardTitle">{this.props.adm}</h3>
      <h4 className="attorneyCardText">{this.props.admText}</h4>
      <h3 className="attorneyCardTitle">{this.props.aop}</h3>
      <h4 className="attorneyCardText">{this.props.aopText}</h4>
      <p>{this.props.info}</p>
      </div>
    </div>
  );
};
}

export default AttorneyCard;

// <h3 className="meeth3">Education</h3>
//                   <h4 className="meeth4">
//                     J.D. University of Tulsa(1988) <br /> B.A. Weber State
//                     University(1983)
//                   </h4>
//                   <h3 className="meeth3">Admissions</h3>
//                   <h4 className="meeth4">
//                     U.S. District Court of Utah
//                     <br />
//                     U.S. Bankruptcy Court-State of Utah
//                     <br />
//                     U.S. Tenth Circuit Court of Appeals
//                     <br />
//                     U.S. Immigration Court (all states)
//                   </h4>

// <h3 className="meeth3">Areas of Practice</h3>
//                   <h4 className="meeth4">
//                     Divorce & Custody
//                     <br />
//                     Adoption
//                     <br />
//                     Immigration
//                     <br />
//                     DUI/Criminal-all felonies & misdemeanors
//                     <br />
//                     Civil Litigation
//                     <br />
//                     Probate/Estate Planning
//                     <br />
//                     Guardian & Conservatorship
//                     <br />
//                     Personal Injury
//                     <br />
//                     Mediations/Alternative Dispute Resolution
//                   </h4>

// <p className="meetp">
//                     Kevin G. Richards was raised in Ogden and is a product of
//                     Ogden CIty Schools. It was while he was a senior at Ogden
//                     High that he decided that he wanted to be a lawyer. Mr.
//                     Richards now has over 30 years of legal experience. Aside
//                     from being an attorney he also does mediation and
//                     alternative dispute resolution. He is fluent in Portuguese
//                     and Spanish. Mr. Richards’ current hobbies involve traveling
//                     with his wife and family, overlanding and spending a
//                     beautiful day up at Snowbasin skiing.
//                   </p>