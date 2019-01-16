import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3, height: '20rem' }}>
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
const containerText = {
  
    fontSize: '1rem',
    fontWeight: '200',
    textAlign: 'center',
    padding: '1rem',
    lineHeight: '1.5rem'
}
const containerTitle = {
  
  fontSize: '1.5rem',
  fontFamily: 'Robo',
  textAlign: 'center'
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
        <AppBar position="static" color="default">
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
            <Tab label="Injury Law"  />
            {/* </div>
            <div className="col-md-2"> */}
            <Tab label="Item Two" />
            {/* </div>
            <div className="col-md-2"> */}
            <Tab label="Item Three" />
            {/* </div>
            <div className="col-md-2"> */}
            <Tab label="Item Four" />
            {/* </div>
            <div className="col-md-2"> */}
            <Tab label="Item Five" />
            {/* </div>
            <div className="col-md-1"></div> */}
            {/* </div> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><h2 style={containerTitle}>AGRESSIVE PURSUIT OF YOUR ACCIDENT CLAIM AND CARE WHILE YOU RECOVER</h2><h3 style={containerText}>If you’ve been injured in Utah, through an accident or by someone else’s negligence; it may seem impossible to get your life back on track.
Sadly, you would not believe the games insurance companies will play, and the efforts they will go through to prevent you from seeking legal protection for yourself.
With Injuries, there’s no time for games. RBR Law will be aggressive with the Insurance Company, and help you get compensation for your injuries. We give you a fighting chance against the big money in Insurance, so you can get your life back, and the justice you deserve.
 </h3></TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
          <TabContainer dir={theme.direction}>Item Four</TabContainer>
          <TabContainer dir={theme.direction}>Item Five</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(FullWidthTabs);
