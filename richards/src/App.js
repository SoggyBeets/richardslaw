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
import Consultation from "./components/Consultation";
import Hover from "./components/Hover";

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
{/* <div className="row">
<div className="col-2"></div>
<div className="col-8">
<h1 id="aboutUsTitle">MEET OUR ATTORNEYS</h1>
</div>
<div className="col-2"></div>
</div>
<div className="row">
<div className="col-2"></div>
<div className="col-4"><Hover />
</div>
<div className="col-4">
<Hover />
</div>
<div className="col-2"></div>
</div> */}
<Meet />
{/* <Hover /> */}
        {/* <div className="container">
          <div className="row no-gutters" id="ttabs">
            <div className="col" />
          </div>
        </div> */}
<Consultation />

{/* <div className="row">
<div className="col-2"></div>
<div className="col-8">
<h1 id="aboutUsTitle">Google Maps</h1>
</div>
<div className="col-2"></div>
</div> */}


            <div className="row" id="wtfContainer">
<div className="col-2"></div>
<div className="col-8">
<h1 id="whereToFind">Where To Find Us</h1>
</div>
<div className="col-2"></div>
</div>



          <div className="row no-gutters" id="socialfeeds">
          {/* <div className="col-2"></div> */}
            <div className="col-6" id="fbfeed">
              <div className="test">
                <Facebook />
              </div>
            </div>
            {/* <div className="col-xs-1 col-md-1"></div> */}
            <div className="col-6" id="instafeed">
              <Google />
              </div>
              {/* <div className="col-2"></div> */}
            </div>

        <Footer />
      </div>
    );
  }
}

export default App;
