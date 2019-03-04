import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainImg from "./components/MainImg";
// import Tabs from "./components/Tabs";
import Meet from "./components/Meet";
import Consultation from "./components/Consultation";
import WhereToFind from "./components/WhereToFind";
import Social from "./components/Social";
// import AboutUs from "./components/AboutUs";


import Footer from "./components/Footer";
import Tabs from "./components/Tabs";

// import Carousel from "./components/Carousel";
// import Form from "./components/Form";
// import Hover from "./components/Hover";
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
        <Social />
        <Footer />
        {/*  */}
      </div>
    );
  }
}

export default App;
