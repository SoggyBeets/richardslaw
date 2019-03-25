import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import React, { Component } from "react";
import BankIcon from '../icons/bankruptmobile.png';

const lawAreaTitle = {
    width: '6rem'
}

class MobileBankruptcy extends Component {
render() {
return(
<div>
    <MobileNav />
    <img src={BankIcon} alt="Logo" className="mobileIcon" style={lawAreaTitle} />
    <div className="lawAreaTitle"><h1>Bankruptcy</h1></div>
    <Footer />
</div>
);
}
}

export default MobileBankruptcy;
