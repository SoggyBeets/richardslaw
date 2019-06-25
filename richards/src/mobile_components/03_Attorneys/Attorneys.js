import React from "react";
import './Attorneys.scss';
import MobileNav from "../06_MobileNav/MobileNav";
import MobileIcon from '../07_MobileIcon/MobileIcon';
import KevinImage from '../../images/portrait1-500px.jpg';
import JamieImage from '../../images/portrait2-500px.jpg';
import AttorneyCard from '../04_AttorneyCard/AttorneyCard';
import MobileTitle from '../07_MobileTitle/MobileTitle';

const Attorneys = () => {
  return (
    <div>
      <MobileIcon />
      <div className="mobileContainer">
      <MobileTitle title={"Attorneys"} />
      <AttorneyCard name={"Kevin Richards"} img={KevinImage} info={"Hello my name is Kevin Richards and I am an attorney"}/>
      <AttorneyCard name={"Jamie Richards"} img={JamieImage} info={"Hello my name is Jamie Richards and I am an attorney"}/>
      </div>
      <MobileNav />
    </div>
  );
};

export default Attorneys;
