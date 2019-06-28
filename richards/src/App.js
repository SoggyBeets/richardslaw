import React, { Component } from "react";
import Responsive from "react-responsive";
import { Route } from "react-router-dom";

import Contact from "./mobile_components/05_Contact/Contact";
import PracticeAreas from "./mobile_components/02_PracticeAreas/PracticeAreas";
// import Attorneys from "./mobile_components/03_Attorneys/Attorneys";
import AttorneyCard from './mobile_components/04_AttorneyCard/AttorneyCard';
import About from "./mobile_components/04_About/About";
import Home from "./mobile_components/01_MobileHome";

import Navbar from "./components/00_Navbar/Navbar";
import MainImg from "./components/01_MainImg/MainImg";
import AboutLawFirm from "./components/02_AboutLawfirm/AboutLawFirm";
import Tabs from "./components/03_Tabs/Tabs";
import Meet from "./components/04_Meet/Meet";
import WhereToFind from "./components/05_WhereToFind/WhereToFind";
import Social from "./components/06_Social/Social";
import Footer from "./components/07_Footer/Footer";

import "./App.scss";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Tablet = props => (
  <Responsive {...props} minWidth={767} maxWidth={1023} />
);
const Desktop = props => <Responsive {...props} minWidth={1024} />;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <Mobile>
          <Route path="/" component={Home} exact />
          <Route path="/practiceAreas" component={PracticeAreas} />
          <Route path="/attorneyCard" component={AttorneyCard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Mobile>
        <Tablet>
        <Navbar />
          <MainImg />
          <AboutLawFirm />
          <Tabs />
          <Meet />
          <WhereToFind />
          <Social />
          <Footer />
        </Tablet>
        <Desktop>
          <Navbar />
          <MainImg />
          <AboutLawFirm />
          <Tabs />
          <Meet />
          <WhereToFind />
          <Social />
          <Footer />
        </Desktop>
      </div>
    );
  }
}
