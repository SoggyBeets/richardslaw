import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import './PracticeAreas.scss';
import classnames from "classnames";
import MobileIcon from "../07_MobileIcon/MobileIcon";
import MobileTitle from "../07_MobileTitle/MobileTitle";
import MobileNav from "../06_MobileNav/MobileNav";
import PracticeAreaCard from "../09_PracticeAreaCard/PracticeAreaCard";
import InjuryIcon from "../../icons/injurymobile.png";
import BankruptIcon from "../../icons/bankruptmobile.png";
import DivorceIcon from "../../icons/familymobile.png";
import ImmigrationIcon from "../../icons/immigrationmobile.png";
import CriminalIcon from "../../icons/criminal-duimobile.png";
// import InjuryIcon from '../../icons/injurymobile.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <MobileIcon />
        <div className="mobileContainer">
          <MobileTitle title={"Practice Areas"} />
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames("mobileNavLink", { active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Injury
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Bankruptcy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Divorce/Custody
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "4" })}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                Immigration
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "5" })}
                onClick={() => {
                  this.toggle("5");
                }}
              >
                DUI/Criminal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "6" })}
                onClick={() => {
                  this.toggle("6");
                }}
              >
                Real Estate
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <PracticeAreaCard
                    title={"Injury"}
                    icon={InjuryIcon}
                    texthead={
                      "Pursuit of Your Accident Claim and Care While You Recover"
                    }
                    text1={
                      "If you’ve been injured in an accident in Utah let our firm help get your life back on track. At our firm we will work with your personally and fight with the insurance companies on your behalf. Don’t become another faceless case out of hundreds like you would at a big law firm. Insurance companies like to play games, but we won’t let them play games with you. We will be aggressive and make sure that you get the best settlement possible."
                    }
                    text2={
                      " So, if you’ve been injured in a truck accident with commercial carriers, car accident or motorcycle accident, let our years of experience help you reach a settlement with the insurance companies. We won’t stand for their games and we know everything we are up against. Let us give you a fighting chance against the insurance companies so you can get your life back and the justice you deserve."
                    }
                    textConsultation={
                      "Call our office and get your FREE CONSULTATION scheduled today!"
                    }
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <PracticeAreaCard
                    title={"Bankruptcy"}
                    icon={BankruptIcon}
                    texthead={"Assistance and Protection from Crippling Debt"}
                    text1={
                      "If you are facing financial issues and feel like the walls are closing in around you financially, let us here at R&R Law Group help you out. Whether these financial issues have come from the result of a job loss, divorce, foreclosure, medical issues, back-taxes or credit card debt, etc., we can help you."
                    }
                    text2={
                      "Our attorney’s have years of experience in Bankruptcy Law and know what they are doing. Jaime G. Richards even serves as the Treasurer for the Utah Bankruptcy Lawyers Forum working one-on-one with Bankruptcy Trustees and Bankruptcy Court Judges. Let our office help you gain control again of your finances and not let creditors dictate and ruin your life."
                    }
                    textConsultation={
                      "Call our office and get your FREE CONSULTATION scheduled today!"
                    }
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <PracticeAreaCard
                    title={"Divorce/Custody"}
                    icon={DivorceIcon}
                    texthead={
                      "Protection of Your Top Priorities and Your Highest Cares"
                    }
                    text1={
                      "Dealing with divorce and/or custody is never easy, and sometimes it can be even harder if the other party wants to bully you around. Here at R&R Law Group, we will not let that happen. We will stand beside you in this difficult time and help you fight for what you deserve. We deal with all kinds of divorce/custody cases from the easy to the most complex. Your kids, your home and your life are the most important things you have. We will make sure the deck is not stacked against you and get you what you deserve."
                    }
                    text2={
                      "Besides divorce/custody cases we also handle adoptions which often is a long and complex process. Our attorneys know what the legal requirements are and we understand the process. We want to help make this process easy for you and as quick as possible."
                    }
                    textConsultation={
                      "Call our office and get your FREE CONSULTATION scheduled today!"
                    }
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="4">
              <Row>
                <Col sm="12">
                  <PracticeAreaCard
                    title={"Immigration"}
                    icon={ImmigrationIcon}
                    texthead={
                      "Pursuit of Obtaining Legal Status or Fighting Deportation"
                    }
                    text1={
                      "Whether we are adjusting a person’s legal status or helping them fight deportation, the process here in the Unitedb States, is long and complicated. We want to help make that process less difficult for you and keep you here. Kevin G. Richards got involved with immigration law over 30 years ago when his wife emigrated to the United States from Brazil. Since then he has helped more of his family and countless others gain legal status here in the United States. Not only do we understand immigration law, but we also understand criminal law and how criminal charges could impact one’s immigration status."
                    }
                    textConsultation={
                      "Call our office and get your FREE CONSULTATION scheduled today!"
                    }
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="5">
              <Row>
                <Col sm="12">
                  <PracticeAreaCard
                    title={"DUI/Criminal"}
                    icon={CriminalIcon}
                    texthead={
                      " Good people sometimes make bad decisions. Don’t make another bad decision by not hiring us."
                    }
                    text1={
                      "If you’ve been charged with driving under the influence of drugs and/or alcohol, you can guarantee that the Police andb Prosecutors will come after you. DUI charges in Utah carry significant fines and penalties including the loss of your license. We represent you at DMV/DLD hearings and criminal hearings in the court. Here at R&R Law Group we review each and every case thoroughly so that your rights are not taken away."
                    }
                    text2={
                      "Besides DUI defense we also provide defense in all criminal matters whether they are felony or misdemeanor charges in all state and federal courts including serious drug offenses. Defending yourself or having an attorney who does not know what they are doing can have serious consequences such as increased fines, jail or prison times. We who have years of criminal experience and can help you no matter the situation. If you do not have legal status in the United States there is no one better than Kevin G. Richards to represent you as he has years of experience in both immigration and criminal law and knows how criminal charges can impact your legal status."
                    }
                    textConsultation={
                      "Call our office and get your FREE CONSULTATION scheduled today!"
                    }
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="6">
              <Row>
                <Col sm="12">
                  <PracticeAreaCard
                    title={"Real Estate"}
                    icon={InjuryIcon}
                    texthead={"Planning for Your Heirs Future"}
                    text1={
                      "Is your Will up to date? Do you even have one? Who would take care of your children in the event of an untimely death? If you are like me, these are questions we would rather avoid. But the issue does not go away simply because we ignore it. The truth of the matter is if we fail to plan, we fail to make sure our loved ones are taken care of. Instead the courts or State could make important decisions regarding your children and distribution of your assets. Remember, failure to plan means you are planning to fail. Let our office help you so you don’t fail."
                    }
                    text2={
                      "Besides creating a Will our office can help you set up a Trust which creates legal entity that holds property or assets for the person(s) who created it. Property created Trusts have several benefits such as: avoiding probate; providing for minor children incapable of caring for themselves financially; reduces estate taxes; and the terms of a Trust are private while terms of a will are public."
                    }
                    text3={
                      "Probate is a word that is used but not always understood. However, all probate means is that you are going through the legal process of settling one’s estate when they die. Probate is not always a bad or scary thing. Let our office help you maneuver through the action of probate and come up with the best estate plan for you."
                    }
                    textConsultation={
                      "Call our office and get your FREE CONSULTATION scheduled today!"
                    }
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
        <MobileNav />
      </div>
    );
  }
}
