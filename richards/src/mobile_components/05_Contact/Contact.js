import React from "react";
import MobileNav from "../06_MobileNav/MobileNav";
import MobileIcon from '../07_MobileIcon/MobileIcon';
import MobileTitle from '../07_MobileTitle/MobileTitle';

const Contact = () => {
  return (
    <div>
      <MobileIcon />
      <div className="mobileContainer">
      <MobileTitle title={"Contact"}/>
      </div>
      <MobileNav />
    </div>
  );
};

export default Contact;
