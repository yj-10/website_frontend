import React from "react";
import abouthead from "../../assets/Img/abouthead.png"
function AboutHead() {
  return (
    <>
      <div id="imgbox">
        <img src={abouthead} className="img-fluid" alt="no-img" />
      </div>
      <div id="Aboutcontentbox">
        <h2>About The Company</h2>
        <p>
          An ISO 9001: 2015 certified company established in the year of 2002,
          Mahakal Cooling Towers is the leading Manufacturer, Wholesaler, and
          Trader of Cooling Towers and Cooling Tower parts. Due to its
          consistent performance, sturdy construction, easy installation, less
          maintenance, high speed, energy efficiency and longer service life,
          this machine is highly acknowledged by our clients. Under the
          leadership of, “Mr. Rajesh Panchal ”, we have attained a reputed
          position in the industry.
        </p>
      </div>
    </>
  );
}

export default AboutHead;
