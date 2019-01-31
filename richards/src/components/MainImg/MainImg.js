import React from "react";
import "./MainImg.css"
import Navbar from "../Navbar/Navbar"

const MainImg = () => (
<div className="row">
<div className="col-md-12">

<img id="headerSection" src="https://www.rbrlawgroup.com/wp-content/uploads/2016/08/utah-lawyer-homepage-hero-3.jpg" alt="lawyer Jamie">
</img>
<Navbar></Navbar>
<div className="row">
<div className="col-2"></div>
<div className="col-8">
<h1 id="aggresiveText"><span id="span">U</span>tah's <span id="span">A</span>ggresive <span id="span">L</span>awfirm</h1>
<h2 id="missionStatement">This will be the mission statement of the company</h2>
<h3 id="msText">This will be some extra text for the mission statement</h3></div>
{/* <div className="col-2"></div> */}
<div className="col-2"></div>
</div>
</div>
</div>
 );

export default MainImg;
