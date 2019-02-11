import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainImg from "./components/MainImg";
// import Tabs from "./components/Tabs";
import Meet from "./components/Meet";
import Consultation from "./components/Consultation";
import WhereToFind from "./components/WhereToFind";

// import AboutUs from "./components/AboutUs";
// import Google from "./components/Google";
// import Facebook from "./components/Facebook";
// import Instagram from "./components/Instagram";

import Footer from "./components/Footer";
import Tabs from "./components/Tabs";

// import Carousel from "./components/Carousel";
// import Form from "./components/Form";
// import Hover from "./components/Hover";
import { Container, Row, Col } from "reactstrap";
import { checkPropTypes } from "prop-types";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainImg />
        <Tabs />
        <Meet />
        <Consultation />
        <WhereToFind />

        {/* <div className="row no-gutters" id="socialfeeds">
          <div className="col-6" id="fbfeed">
            <div className="test">
              <Facebook />
            </div>
          </div>
          <div className="col-6" id="instafeed">
            <Google />
          </div>
        </div> */}

        <Footer />
      </div>
    );
  }
}

export default App;
