import React, { Component } from "react";

import "./App.scss";
import Navbar from "./components/00_Navbar/Navbar";
import MainImg from "./components/01_MainImg/MainImg";
import AboutLawFirm from "./components/02_AboutLawfirm/AboutLawFirm";
import Tabs from "./components/03_Tabs/Tabs";
import Meet from "./components/04_Meet/Meet";
import WhereToFind from "./components/05_WhereToFind/WhereToFind";
import Social from "./components/06_Social/Social";
import Footer from "./components/07_Footer/Footer";


// import Consultation from "./components/Consultation";
// import Tabs from "./components/Tabs";
// import MediaQuery from 'react-responsive';
// import MobileBankruptcy from "./pages/MobileBankruptcy";
// import MobileNav from "./components/MobileNav";
// import MobileTabs from "./components/MobileTabs";
// import AboutUs from "./components/AboutUs";
// import Carousel from "./components/Carousel";
// import Form from "./components/Form";
// import Hover from "./components/Hover";
// import { checkPropTypes } from "prop-types";

// import { checkPropTypes } from "prop-types";
// import KevinCard from "./components/KevinCard";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div className="App">
        {/* <MediaQuery query="(min-device-width: 1224px)">
          <MobileNav />
        <MobileBankruptcy />
        </MediaQuery> */}
        <Navbar />
        <MainImg />
        <AboutLawFirm />
        <Tabs />
        <Meet />
        {/* <Consultation /> */}
        <WhereToFind />
        <Social />
        <Footer />
        {/* <MediaQuery query="(min-device-width: 1824px)">
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery query="(max-width: 1224px)">
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileNav />
          <MobileTabs />
          <MobileBankruptcy />
        </MediaQuery>
        <MediaQuery query="(orientation: portrait)">
          <div>You are portrait</div>
        </MediaQuery>
        <MediaQuery query="(orientation: landscape)">
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery query="(min-resolution: 2dppx)">
          <div>You are retina</div>
        </MediaQuery> */}
      </div>
    );
  }
}
