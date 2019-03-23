import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import "./App.css";
import MainImg from "./components/MainImg";
// import Tabs from "./components/Tabs";
import Meet from "./components/Meet";
import MobileNav from "./components/MobileNav";
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
         <MobileNav />
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
