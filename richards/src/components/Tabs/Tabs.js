import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import "./Tabs.css";
// import '../../logo.svg';
// import color from '@material-ui/core/colors/deepOrange';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3, height: '25rem', backgroundColor: ' rgba(0, 0, 0, 0.6)' }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

// const itemOne = {
//   color: 'red',
//   backgroundImage: 'url('./../..public/icons/bankruptmobile.png')'
// }

const lawArea = {
  
  fontSize: '2.5rem',
  fontWeight: '500',
  textAlign: 'left',
  paddingTop: '2rem',
  lineHeight: '1.5rem',
  color: 'white',
  fontFamily: 'Playfair Display, serif'
}

const containerText = {
  fontFamily: 'Rubik, sansSerif',
    fontSize: '.85rem',
    fontWeight: '400',
    textAlign: 'left',
    paddingTop: '1rem',
    lineHeight: '1.75rem',
    letterSpacing: '.1rem',
    color: '#ffffff'
}

const containerTitle = {
  fontFamily: 'Rubik, sansSerif',
  fontSize: '1.25rem',
  letterSpacing: '.1rem',
  textAlign: 'left',
  paddingTop: '2rem',
  color: '#ffcc54'
}

const tabsBG = {
  backgroundColor: '#104e7d',
  color: 'white'
}

const tabsfont = {
  color: '#ffffffb0',
  // padding: '.65rem'
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
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
      <div className="row no-gutters" id="tabsRow">
      <div className="col-xs-0 col-md-2" id="tabsRow"></div>
      <div className="col-xs-12 col-md-8" id="tabsRow">
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

            <Tab label="Injury" style={tabsfont}  />
            {/* </div>
            <div className="col-md-2"> */}
            <Tab label="Bankruptcy" style={tabsfont} />
            {/* </div>
            <div className="col-md-2"> */}
            <Tab label="Divorce/Custody" style={tabsfont} />
            {/* </div>
            <div className="col-md-2"> */}
            <Tab label="Immigration" style={tabsfont} />
            {/* </div>
            <div className="col-md-2"> */}
            <Tab label="DUI/Criminal" style={tabsfont} />
            <Tab label="Estate Planning" style={tabsfont} />

            {/* </div>
            <div className="col-md-1"></div> */}
            {/* </div> */}
            {/* <Tab label="Estate Planning" /> */}
          </Tabs>
        </AppBar>
        </div>
        <div className="col-xs-0 col-md-2" id="tabsRow"></div>
        </div>
        <div id="tabContentRow">
        <div className="row no-gutters">
        <div className="col-xs-0 col-md-2"></div>
        <div className="col-xs-12 col-md-8">
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
       
      
          <TabContainer dir={theme.direction}>
          <h1 style={lawArea}>Injury</h1>
          <h2 style={containerTitle}>Agressive Pursuit Of Your Accident Claim And Care While You Recover</h2><h3 style={containerText}>If you’ve been injured in Utah, through an accident or by someone else’s negligence; it may seem impossible to get your life back on track.
Sadly, you would not believe the games insurance companies will play, and the efforts they will go through to prevent you from seeking legal protection for yourself.
With Injuries, there’s no time for games. RBR Law will be aggressive with the Insurance Company, and help you get compensation for your injuries. We give you a fighting chance against the big money in Insurance, so you can get your life back, and the justice you deserve.
 </h3></TabContainer>
          <TabContainer dir={theme.direction}>
          <h1 style={lawArea}>Bankruptcy</h1>
          <h2 style={containerTitle}>Aggressive Assistance And Protection From Crippling Debt</h2><h3 style={containerText}>If you have Bill Problems you probably have a lot of questions like: Will I lose my home? Creditors are so aggressive! Can they Really Call Me At Work? What about my retirement?
At RBR we’ve helped hundreds of people get their Bill Problems taken care of, reduce stress, and get back peace of mind.
Even if you’re facing a foreclosure, dealing with the IRS on back-taxes, or have been told by Bill Collectors that you can’t file bankruptcy, we have a solution.
We get Aggressive with your creditors so they stop harassing you, and you get to move on with a fresh start.

 </h3></TabContainer>
          <TabContainer dir={theme.direction}>
          <h1 style={lawArea}>Divorce/Custody</h1>
          <h2 style={containerTitle}>Aggressive Protection Of Your Top Priorities And Your Highest Cares</h2><h3 style={containerText}>Facing a divorce or a domestic dispute is hard; You’re about to be in the fight of your life.
Divorce, custody, and other family changes need to be handled by council with real experience in Utah. RBR has helped people just like you through the most painful times of their lives with grace and strength. If you've come to need help with difficult family circumstances, we'd like you to consider our help.
When it comes to your kids, your home, and the life you’ve worked so hard to build, you need a Law Firm that Aggressively protects your future.

 </h3></TabContainer>
          <TabContainer dir={theme.direction}>
          <h1 style={lawArea}>Immigration</h1>
          <h2 style={containerTitle}>Aggressive Pursuit Of Your Accident Claim And Care While Your Recover</h2><h3 style={containerText}>If you’ve been injured in Utah, through an accident or by someone else’s negligence; it may seem impossible to get your life back on track.
Sadly, you would not believe the games insurance companies will play, and the efforts they will go through to prevent you from seeking legal protection for yourself.
With Injuries, there’s no time for games. RBR Law will be aggressive with the Insurance Company, and help you get compensation for your injuries. We give you a fighting chance against the big money in Insurance, so you can get your life back, and the justice you deserve.
 </h3></TabContainer>
          <TabContainer dir={theme.direction}>
          <h1 style={lawArea}>DUI/Criminal</h1>
          <h2 style={containerTitle}>Aggresive Defense While Facing Difficult Charges</h2><h3 style={containerText}>If you’ve been accused of driving under the influence, you are guaranteed to have the State, the City, the Police and the Prosecution come after you AGGRESSIVELY.

Every second counts, and your Lawyer’s experience counts. Your future, your job, your right to drive – depends on it.

With RBR Law you get an Aggressive defense and an Advocate for the protection of your Rights.</h3></TabContainer>
<TabContainer dir={theme.direction}>
<h1 style={lawArea}>Estate Planning</h1>
<h2 style={containerTitle}>Aggressive Defense While Facing Difficult Charges</h2><h3 style={containerText}>If you’ve been accused of driving under the influence, you are guaranteed to have the State, the City, the Police and the Prosecution come after you AGGRESSIVELY.

Every second counts, and your Lawyer’s experience counts. Your future, your job, your right to drive – depends on it.

With RBR Law you get an Aggressive defense and an Advocate for the protection of your Rights.</h3></TabContainer>
        </SwipeableViews>
        </div>
        <div className="col-xs-0 col-md-2"></div>
        </div>
      </div>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(FullWidthTabs);
