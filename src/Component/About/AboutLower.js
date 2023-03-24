import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Ffirst from "../../assets/Img/Ffirst.png"
import Fsec from "../../assets/Img/Fsec.png"
function AboutLower() {
  return (
    <>
      {/* <div id="aboutLowerHead">
        <div id="h2degine">
          <h2>service</h2>
        </div>
      </div> */}

      <MDBContainer >
        <MDBRow id="boxone" className="grid">
          <MDBCol md="6" lg="6" sm="6" className="g-col-6" >
            <div id="AboutBoxTwoRightSider">
              <img src={Ffirst} className="img-fluid" alt="no-img" />
            </div>
          </MDBCol>
          <MDBCol md="6" className="grid-col-6">
            <div id="AboutBoxTwoLeftSider">
              <h3>supply to USA companies </h3>
              <div id="AboutinnerBox">
                <p>
                  50+
                  <br />
                  <span>Workforce</span>
                </p>
                <p>
                  1000+
                  <br />
                  <span>Project</span>
                </p>
              </div>
              <p>
              An ISO 9001: 2015 certified company established in the year of 2002, Mahakal Cooling Towers is the leading Manufacturer, Wholesaler, and Trader of Cooling Towers and Cooling Tower parts. Due to its consistent performance, sturdy construction, easy installation, less maintenance, high speed, energy efficiency and longer service life, this machine is highly acknowledged by our clients. Under the leadership of, “Mr. Rajesh Panchal ”, we have attained a reputed position in the industry.
              </p>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow id="boxtwo">
          <MDBCol md="6">
            <div id="AboutLowerBoxoneRightSide">
              <h3>Supply To Goverment Sector</h3>
              <div id="AboutinnerBox">
                <p>
                  50+
                  <br />
                  <span>Workforce</span>
                </p>
                <p>
                  1000+
                  <br />
                  <span>Project</span>
                </p>
              </div>
              <p>
              Having more than 1200 satisfied clients and 300+ cooling towers and heat exchangers successfully running in the market across the globe. We have delivered the best in quality products with better performance and durability.

              </p>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div id="AboutLowerBoxoneLeftSider">
              <img src={Fsec} className="img-fluid" alt="no-img" />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default AboutLower;
