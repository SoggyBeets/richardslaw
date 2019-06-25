import React from "react";
import MobileNav from "../06_MobileNav/MobileNav";
import MobileIcon from '../07_MobileIcon/MobileIcon';
import MobileTitle from '../07_MobileTitle/MobileTitle';

const PracticeAreas = () => {
  return (
    <div>
      <MobileIcon />
      <div className="mobileContainer">
      <MobileTitle title={"Practice Areas"} />
      

      </div>
      <MobileNav />
    </div>
  );
};

export default PracticeAreas;
