import React from "react";
import "./AttorneyCard.scss";
import KevinImage from "../../images/portrait1-500px.jpg";
import JamieImage from "../../images/portrait2-500px.jpg";
import MobileIcon from "../07_MobileIcon/MobileIcon";
import MobileTitle from "../07_MobileTitle/MobileTitle";
import MobileNav from "../06_MobileNav/MobileNav";

export class AttorneyCard extends React.Component {
  render() {
    return (
      <div>
        <MobileIcon />
        <div className="mobileContainer">
          <MobileTitle title={"Attorneys"} />
          <h1 className="mobileHeading">Kevin Richards</h1>
          <img className="mobileImg" src={KevinImage} />
          <div className="attorneyCardBg">
            <h3 className="attorneyCardTitle">Education</h3>
            <h4 className="attorneyCardText">
              J.D. University of Tulsa(1988) <br /> B.A. Weber State
              University(1983)
            </h4>
            <h3 className="attorneyCardTitle">Admissions</h3>
            <h4 className="attorneyCardText">
              U.S. District Court of Utah
              <br />
              U.S. Bankruptcy Court-State of Utah
              <br />
              U.S. Tenth Circuit Court of Appeals
              <br />
              U.S. Immigration Court (all states)
            </h4>

            <h3 className="attorneyCardTitle">Areas of Practice</h3>
            <h4 className="attorneyCardText">
              Divorce & Custody
              <br />
              Adoption
              <br />
              Immigration
              <br />
              DUI/Criminal-all felonies & misdemeanors
              <br />
              Civil Litigation
              <br />
              Probate/Estate Planning
              <br />
              Guardian & Conservatorship
              <br />
              Personal Injury
              <br />
              Mediations/Alternative Dispute Resolution
            </h4>

            <p className="attorneyCardPtext">
              Kevin G. Richards was raised in Ogden and is a product of Ogden
              CIty Schools. It was while he was a senior at Ogden High that he
              decided that he wanted to be a lawyer. Mr. Richards now has over
              30 years of legal experience. Aside from being an attorney he also
              does mediation and alternative dispute resolution. He is fluent in
              Portuguese and Spanish. Mr. Richards’ current hobbies involve
              traveling with his wife and family, overlanding and spending a
              beautiful day up at Snowbasin skiing.
            </p>
          </div>
          <h1 className="mobileHeading">Jamie Richards</h1>
          <img className="mobileImg" src={JamieImage} />
          <div className="attorneyCardBg bottomAttorneyCard">
            <h3 className="attorneyCardTitle">Education</h3>
            <h4 className="attorneyCardText">
              J.D., Washburn University (2014)
              <br />
              B.A. Weber State University(1983)
            </h4>
            <h3 className="attorneyCardTitle">Admissions</h3>
            <h4 className="attorneyCardText">
              U.S. District Court of Utah
              <br />
              U.S. Bankruptcy Court-State of Utah
            </h4>

            <h3 className="attorneyCardTitle">Areas of Practice</h3>
            <h4 className="attorneyCardText">
              Bankruptcy
              <br />
              Divorce & Custody
              <br />
              Adoption
              <br />
              Civil Litigation
              <br />
              Probate/Estate Planning
              <br />
              Guardian & Conservatorship
              <br />
              Contract Disputes & Drafting
            </h4>

            <p className="attorneyCardPtext">
              Jaime G. Richards was born and raised in Ogden and is a product of
              Ogden City schools just like his father Kevin. Before law school
              Jaime had a career in real estate development and finance. He
              decided to become a lawyer because he likes working with people
              and problem solving. Jaime is fluent in Portuguese. He is an avid
              golfer, but also enjoys CrossFit, skiing and anything that
              involves spending time with his wife and children.
            </p>
          </div>
        </div>
        <MobileNav />
      </div>
      // <div>
      //   <h1 className="mobileHeading">{this.props.name}</h1>
      //   <img className="mobileImg" src={this.props.img}></img>
      //   <div className="attorneyCardBg">
      //   <h3 className="attorneyCardTitle">{this.props.edu}</h3>
      //   <h4 className="attorneyCardText">{this.props.eduText}</h4>
      //   <h3 className="attorneyCardTitle">{this.props.adm}</h3>
      //   <h4 className="attorneyCardText">{this.props.admText}</h4>
      //   <h3 className="attorneyCardTitle">{this.props.aop}</h3>
      //   <h4 className="attorneyCardText">{this.props.aopText}</h4>
      //   <p>{this.props.info}</p>
      //   </div>
      // </div>
    );
  }
}

export default AttorneyCard;
