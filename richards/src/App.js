import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Google from "./components/Google";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
// import Carousel from "./components/Carousel";
import MainImg from "./components/MainImg";
import Form from "./components/Form";
import Meet from "./components/Meet";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
<MainImg />
        {/* <div className="container" id="carouselcont">
          <div className="row no-gutters" id="carouselrow">
            <div className="col-12">
              <Carousel />
            </div>
          </div>
        </div> */}

        <div className="row no-gutters" id="ttabs">
        {/* <div className="col-2"></div> */}
        {/* <div className="col-2"></div> */}
            <div className="col-12">
            <Tabs />
            </div>
            {/* <div className="col-2"></div> */}
            {/* <div className="col-2"></div> */}
          </div>

        {/* <div className="container">
          <div className="row no-gutters" id="ttabs">
            <div className="col" />
          </div>
        </div> */}
<Meet />
        <AboutUs />
        

        <div className="container">
          <div className="row no-gutters" id="faces">
            <div className="col">
              <div className="kevin" />
            </div>
            <div className="col">
              <div className="jaime" />
            </div>
          </div>
        </div>

        <Form />

        <div className="row no-gutters" id="googlemaps">
          <div className="col-1"></div>
            <div className="col-10">
              <Google />
              </div>
              <div className="col-1"></div>
            </div>

          <div className="row no-gutters" id="socialfeeds">
          <div className="col-xs-1 col-md-1"></div>
            <div className="col-xs-10 col-md-5" id="fbfeed">
              <div className="test">
                <Facebook />
              </div>
            </div>
            {/* <div className="col-xs-1 col-md-1"></div> */}
            <div className="col-xs-10 col-md-5" id="instafeed">
              <Instagram />
              </div>
              <div className="col-xs-1 col-md-1"></div>
            </div>

        <Footer />
      </div>
    );
  }
}

export default App;
