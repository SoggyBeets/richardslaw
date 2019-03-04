import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./Tabs.css";
import { Row, Col } from "reactstrap";

// import '../../logo.svg';
// import color from '@material-ui/core/colors/deepOrange';

function TabContainer({ children, dir }) {
  return (
    <Typography
      component="div"
      dir={dir}
      id="typography"
      // style={{
      //   padding: 8 * 3,
      //   height: "25rem",
      //   backgroundColor: " rgba(0, 0, 0, 0.6)"
      // }}
    >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

// const itemOne = {
//   color: 'red',
//   backgroundImage: 'url('./../..public/icons/bankruptmobile.png')'
// }

const lawArea = {
  fontSize: "2.5rem",
  fontWeight: "500",
  textAlign: "left",
  paddingTop: "2rem",
  lineHeight: "1.5rem",
  color: "white",
  fontFamily: "Playfair Display, serif"
};

const containerText = {
  fontFamily: "Rubik, sansSerif",
  fontSize: ".85rem",
  fontWeight: "400",
  textAlign: "left",
  paddingTop: "1rem",
  lineHeight: "1.75rem",
  letterSpacing: ".1rem",
  color: "#ffffff"
};

const containerTitle = {
  fontFamily: "Rubik, sansSerif",
  fontSize: "1.25rem",
  letterSpacing: ".1rem",
  textAlign: "left",
  paddingTop: "2rem",
  color: "#ffcc54"
};

const tabsBG = {
  backgroundColor: "#104e7d",
  color: "white"
};

const tabsfont = {
  color: "#ffffffb0"
  // padding: '.65rem'
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Row noGutters id="tabsRow">
          <Col xs="0" md="2" id="tabsRow" />
          <Col xs="12" md="8" id="tabsRow">
            <AppBar position="static" color="#104e7d" style={tabsBG}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                {/* <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2"> */}

                <Tab label="Injury" style={tabsfont} />
                {/* </div>
            <div className="col-md-2"> */}
                <Tab label="Bankruptcy" style={tabsfont} />
                {/* </div>
            <div className="col-md-2"> */}
                <Tab
                  label="Divorce/
                Custody"
                  style={tabsfont}
                />
                {/* </div>
            <div className="col-md-2"> */}
                <Tab label="Immigration" style={tabsfont} />
                {/* </div>
            <div className="col-md-2"> */}
                <Tab
                  label="DUI/
                Criminal"
                  style={tabsfont}
                />
                <Tab label="Estate Planning" style={tabsfont} />

                {/* </div>
            <div className="col-md-1"></div> */}
                {/* </div> */}
                {/* <Tab label="Estate Planning" /> */}
              </Tabs>
            </AppBar>
          </Col>
          <Col xs="0" md="2" id="tabsRow" />
        </Row>

        <Col id="tabContentRow">
          <Row noGutters>
            <Col xs="0" md="2" />
            <Col xs="12" md="8">
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabContainer dir={theme.direction}>
                  <h1 style={lawArea}>Injury</h1>
                  <h2 style={containerTitle}>
                    Pursuit of Your Accident Claim and Care While You Recover
                  </h2>
                  <h3 style={containerText}>
                    If you’ve been injured in an accident in Utah let our firm
                    help get your life back on track. At our firm we will work
                    with your personally and fight with the insurance companies
                    on your behalf. Don’t become another faceless case out of
                    hundreds like you would at a big law firm. Insurance
                    companies like to play games, but we won’t let them play
                    games with you. We will be aggressive and make sure that you
                    get the best settlement possible.
                    <br />
                    So, if you’ve been injured in a truck accident with
                    commercial carriers, car accident or motorcycle accident,
                    let our years of experience help you reach a settlement with
                    the insurance companies. We won’t stand for their games and
                    we know everything we are up against. Let us give you a
                    fighting chance against the insurance companies so you can
                    get your life back and the justice you deserve.
                    <br />
                    Call our office and get your FREE CONSULTATION scheduled
                    today!
                  </h3>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <h1 style={lawArea}>Bankruptcy</h1>
                  <h2 style={containerTitle}>
                    Assistance and Protection from Crippling Debt
                  </h2>
                  <h3 style={containerText}>
                    If you are facing financial issues and feel like the walls
                    are closing in around you financially, let us here at R&R
                    Law Group help you out. Whether these financial issues have
                    come from the result of a job loss, divorce, foreclosure,
                    medical issues, back-taxes or credit card debt, etc., we can
                    help you.
                    <br />
                    Our attorney’s have years of experience in Bankruptcy Law
                    and know what they are doing. Jaime G. Richards even serves
                    as the Treasurer for the Utah Bankruptcy Lawyers Forum
                    working one-on-one with Bankruptcy Trustees and Bankruptcy
                    Court Judges. Let our office help you gain control again of
                    your finances and not let creditors dictate and ruin your
                    life.
                    <br />
                    Call our office and get your FREE CONSULTATION scheduled
                    today!
                  </h3>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <h1 style={lawArea}>Divorce/Custody</h1>
                  <h2 style={containerTitle}>
                    Protection of Your Top Priorities and Your Highest Cares
                  </h2>
                  <h3 style={containerText}>
                    Dealing with divorce and/or custody is never easy, and
                    sometimes it can be even harder if the other party wants to
                    bully you around. Here at R&R Law Group, we will not let
                    that happen. We will stand beside you in this difficult time
                    and help you fight for what you deserve. We deal with all
                    kinds of divorce/custody cases from the easy to the most
                    complex. Your kids, your home and your life are the most
                    important things you have. We will make sure the deck is not
                    stacked against you and get you what you deserve.
                    <br />
                    Besides divorce/custody cases we also handle adoptions which
                    often is a long and complex process. Our attorneys know what
                    the legal requirements are and we understand the process. We
                    want to help make this process easy for you and as quick as
                    possible.
                    <br />
                    Call our office and get your FREE CONSULTATION scheduled
                    today!
                  </h3>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <h1 style={lawArea}>Immigration</h1>
                  <h2 style={containerTitle}>
                    Pursuit of Obtaining Legal Status or Fighting Deportation
                  </h2>
                  <h3 style={containerText}>
                    Whether we are adjusting a person’s legal status or helping
                    them fight deportation, the process here in the United
                    States, is long and complicated. We want to help make that
                    process less difficult for you and keep you here. Kevin G.
                    Richards got involved with immigration law over 30 years ago
                    when his wife emigrated to the United States from Brazil.
                    Since then he has helped more of his family and countless
                    others gain legal status here in the United States. Not only
                    do we understand immigration law, but we also understand
                    criminal law and how criminal charges could impact one’s
                    immigration status.
                    <br />
                    Call our office and get your FREE CONSULTATION scheduled
                    today!
                  </h3>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <h1 style={lawArea}>DUI/Criminal</h1>
                  <h2 style={containerTitle}>
                    Good people sometimes make bad decisions. Don’t make another
                    bad decision by not hiring us.
                  </h2>
                  <h3 style={containerText}>
                    If you’ve been charged with driving under the influence of
                    drugs and/or alcohol, you can guarantee that the Police and
                    Prosecutors will come after you. DUI charges in Utah carry
                    significant fines and penalties including the loss of your
                    license. We represent you at DMV/DLD hearings and criminal
                    hearings in the court. Here at R&R Law Group we review each
                    and every case thoroughly so that your rights are not taken
                    away.
                    <br />
                    Besides DUI defense we also provide defense in all criminal
                    matters whether they are felony or misdemeanor charges in
                    all state and federal courts including serious drug
                    offenses. Defending yourself or having an attorney who does
                    not know what they are doing can have serious consequences
                    such as increased fines, jail or prison times. We who have
                    years of criminal experience and can help you no matter the
                    situation. If you do not have legal status in the United
                    States there is no one better than Kevin G. Richards to
                    represent you as he has years of experience in both
                    immigration and criminal law and knows how criminal charges
                    can impact your legal status.
                    <br />
                    Call our office and get your FREE CONSULTATION scheduled
                    today!
                  </h3>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <h1 style={lawArea}>Estate Planning</h1>
                  <h2 style={containerTitle}>Planning for Your Heirs Future</h2>
                  <h3 style={containerText}>
                    Is your Will up to date? Do you even have one? Who would
                    take care of your children in the event of an untimely
                    death? If you are like me, these are questions we would
                    rather avoid. But the issue does not go away simply because
                    we ignore it. The truth of the matter is if we fail to plan,
                    we fail to make sure our loved ones are taken care of.
                    Instead the courts or State could make important decisions
                    regarding your children and distribution of your assets.
                    Remember, failure to plan means you are planning to fail.
                    Let our office help you so you don’t fail.
                    <br />
                    Besides creating a Will our office can help you set up a
                    Trust which creates legal entity that holds property or
                    assets for the person(s) who created it. Property created
                    Trusts have several benefits such as: avoiding probate;
                    providing for minor children incapable of caring for
                    themselves financially; reduces estate taxes; and the terms
                    of a Trust are private while terms of a will are public.
                    <br />
                    Probate is a word that is used but not always understood.
                    However, all probate means is that you are going through the
                    legal process of settling one’s estate when they die.
                    Probate is not always a bad or scary thing. Let our office
                    help you maneuver through the action of probate and come up
                    with the best estate plan for you.
                    <br />
                    Call our office and get your FREE CONSULTATION scheduled
                    today!
                  </h3>
                </TabContainer>
              </SwipeableViews>
            </Col>
            <Col xs="0" md="2" />
          </Row>
        </Col>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
