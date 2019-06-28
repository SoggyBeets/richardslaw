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
      <AttorneyCard 
        name={"Kevin Richards"} 
        img={KevinImage} 
        edu={"Education"}
        eduText={"J.D. University of Tulsa(1988) B.A. Weber State University(1983)"}
        adm={"Admissions"}
        admText={"U.S. District Court of Utah U.S. Bankruptcy Court-State of Utah U.S. Tenth Circuit Court of Appeals U.S. Immigration Court (all states)"}
        aop={"Areas of Practice"}
        aopText={"Divorce & Custody Adoption Immigration DUI/Criminal-all felonies & misdemeanors Civil Litigation Probate/Estate Planning Guardian & Conservatorship Personal Injury Mediations/Alternative Dispute Resolution"}
        info={"Kevin G. Richards was raised in Ogden and is a product of Ogden City Schools. It was while he was a senior at Ogden High that he decided that he wanted to be a lawyer. Mr.Richards now has over 30 years of legal experience. Asidefrom being an attorney he also does mediation andalternative dispute resolution. He is fluent in Portugueseand Spanish. Mr. Richards’ current hobbies involve traveling with his wife and family, overlanding and spending a beautiful day up at Snowbasin skiing."}
        />
      <AttorneyCard 
        name={"Jamie Richards"} 
        img={JamieImage}
        edu={"Education"}
        eduText={""}
        adm={""}
        admText={""}
        aop={""}
        aopText={""} 
        info={"Hello my name is Jamie Richards and I am an attorney"}
        />
      </div>
      <MobileNav />
    </div>
  );
};

export default Attorneys;
