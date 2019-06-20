import Footer from "../components/Footer";
import MainImg from "../components/MainImg";
import MobileNav from "../components/MobileNav";
import React, { Component } from "react";



class MobileMain extends Component {
render() {
return(
<div>
    <MobileNav />
    <MainImg />
    <Footer />
</div>
);
}
}

export default MobileMain;