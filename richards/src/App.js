import AboutLawFirm from "./components/AboutLawfirm";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import "./App.css";
import MainImg from "./components/MainImg";
// import Tabs from "./components/Tabs";
import MediaQuery from 'react-responsive';
import Meet from "./components/Meet";
import MobileBankruptcy from "./pages/MobileBankruptcy";
import MobileNav from "./components/MobileNav";
import MobileTabs from "./components/MobileTabs";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import Social from "./components/Social";
import Tabs from "./components/Tabs";
// import AboutUs from "./components/AboutUs";
import WhereToFind from "./components/WhereToFind";




// import Carousel from "./components/Carousel";
// import Form from "./components/Form";
// import Hover from "./components/Hover";
import { checkPropTypes } from "prop-types";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MediaQuery query="(min-device-width: 1224px)"> */}
          {/* <MobileNav />
        <MobileBankruptcy /> */}
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

export default App;
