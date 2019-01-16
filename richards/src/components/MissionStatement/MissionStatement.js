import React from "react";
import "./MissionStatement.css";

const overlay = {
  color: '#fff',
  position: 'absolute',
  zIndex: '12',
  top: '15%',
  left: '0',
  width: '100%',
  textAlign: 'center'
}

const MissionStatement = props => (
<section id="missionStatement">
   <div className="statement">
          <div className="overlay" style={overlay}>
            <h1>UTAH'S LAW FIRM</h1>
            <h2>
              OGDEN BASED PERSONAL INJURY, BANKRUPTCY, FAMILY AND CRIMINAL
              LAWYERS WITH SOME YARS OF EXPERIENCE.
            </h2>
          </div>
          </div>
</section>
);

export default MissionStatement;
