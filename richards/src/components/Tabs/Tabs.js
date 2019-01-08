import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGavel, faInstagram, faFacebookSquare, faMapMarkerAlt, faCarrot, faBeer, faUsers, faUserInjured, faBalanceScale } from '@fortawesome/free-solid-svg-icons'
// library.add(faGavel, faInstagram, faFacebookSquare, faMapMarkerAlt, faCarrot, faBeer, faUsers, faUserInjured, faBalanceScale)
import { faIgloo, faGavel } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faGavel)

const tabContent = {
  fontFamily: 'Roboto',
  color: 'white',
  fontSize: '2em'
}

const hOne = {
  fontFamily: 'Roboto',
  color: 'white',
  fontSize: '3em'
}

const icon = {
  fontSize : '5em',
  color : 'white'
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
            <div className="icon">
            <FontAwesomeIcon icon="gavel" style={icon}/>
              <h1 style={hOne}>Injury Law</h1>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            <div className="icon">
            <FontAwesomeIcon icon="gavel" style={icon}/>
              <h1 style={hOne}>Family Law</h1>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            <div className="icon">
            <FontAwesomeIcon icon="gavel" style={icon}/>
              <h1 style={hOne}>Injury Law</h1>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <div className="icon">
            <FontAwesomeIcon icon="gavel" style={icon}/>
              <h1 style={hOne}>Family Law</h1>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              <div className="icon">
            <FontAwesomeIcon icon="gavel" style={icon}/>
              <h1 style={hOne}>DUI Law</h1>
              </div>
            </NavLink>
          </NavItem>
        </Nav>


        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4 style={tabContent}> If you’ve been injured in Utah, through an accident or by someone
              else’s negligence; it may seem impossible to get your life back on
              track. Sadly, you would not believe the games insurance companies
              will play, and the efforts they will go through to prevent you
              from seeking legal protection for yourself. With Injuries, there’s
              no time for games. RBR Law will be aggressive with the Insurance
              Company, and help you get compensation for your injuries. We give
              you a fighting chance against the big money in Insurance, so you
              can get your life back, and the justice you deserve.</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4 style={tabContent}>Facing a divorce or a domestic dispute is hard; You’re about to be
              in the fight of your life. Divorce, custody, and other family
              changes need to be handled by council with real experience in
              Utah. RBR has helped people just like you through the most painful
              times of their lives with grace and strength. If you've come to
              need help with difficult family circumstances, we'd like you to
              consider our help. When it comes to your kids, your home, and the
              life you’ve worked so hard to build, you need a Law Firm that
              Aggressively protects your future.</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4 style={tabContent}>If you have Bill Problems you probably have a lot of questions
              like: Will I lose my home? Creditors are so aggressive! Can they
              Really Call Me At Work? What about my retirement? At RBR we’ve
              helped hundreds of people get their Bill Problems taken care of,
              reduce stress, and get back peace of mind. Even if you’re facing a
              foreclosure, dealing with the IRS on back-taxes, or have been told
              by Bill Collectors that you can’t file bankruptcy, we have a
              solution. We get Aggressive with your creditors so they stop
              harassing you, and you get to move on with a fresh start.</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <h4 style={tabContent}>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <h4 style={tabContent}> If you’ve been accused of driving under the influence, you are
              guaranteed to have the State, the City, the Police and the
              Prosecution come after you AGGRESSIVELY. Every second counts, and
              your Lawyer’s experience counts. Your future, your job, your right
              to drive – depends on it. With RBR Law you get an Aggressive
              defense and an Advocate for the protection of your Rights.</h4>
              </Col>
            </Row>
          </TabPane>
          
          {/* <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane> */}
        </TabContent>
      </div>
    );
  }
}