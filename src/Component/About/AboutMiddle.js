import React from "react";
import SCard from "../../utility/SCard";

import { IoRocketSharp } from "react-icons/io5";
import { FaGem } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";

function AboutMiddle() {
  return (
    <>
    
      {" "}
      {/* <div id="middleimgbox">
                <img src="img/about.png"/>
            </div> */}
      <div id="middlecardbox">
        <div id="aboutcardOne">
          <i>
            <IoRocketSharp />
          </i>
          <h3>Our Mission</h3>
          <p>
            To deliver the best in class cooling towers technology and to drive
            our ability to meet future challenges.
          </p>
        </div>
        <div id="aboutcardtwo">
          <i>
            <FaGem />
          </i>
          <h3>Achivements</h3>
          <p>
            Having more than 1200 satisfied clients and 300+ cooling towers and
            heat exchangers successfully running in the market across the globe.
          </p>
        </div>
        <div id="aboutcardthree">
          <i>
            <GiBinoculars />
          </i>
          <h3>leadership</h3>
          <p>
            Under the leadership of Mr. Rajesh Panchal, Mahakal Cooling Tower is
            one of the foremost service providers in the field of cooling towers
            technology with quality and performance.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMiddle;
