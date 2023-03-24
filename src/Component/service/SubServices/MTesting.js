import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import MaterialImg from "../../../assets/Img/MATERIALS TESTING.jpg"
import FooterDegin from "../../Footer/FooterDegin";

function MTesting() {
  return (
    <>
      <div className="head-section">
        <img
          src={MaterialImg}
          className="w-100 img-fluid"
          alt="no-img"
        />
      </div>
      <MDBContainer>
        <div className="content my-4">
          <h1 className="text-center display-6">MATERIALS TESTING</h1>

          <article>
            <ul>
              <li>
                <p>
                  Materials testing is a well-established technique used to
                  determine the physical and mechanical properties of raw
                  materials and components from a human hair to steel, composite
                  materials and ceramics. <br/>To meet the challenges posed in
                  testing a wide diversity of materials AMETEK Test &
                  Calibration Instruments offers a comprehensive range of high
                  performance materials testing machines, designed to make
                  accurate and repeatable force measurements in the range from
                  0.1 N to 300 kN (0.0225 lbf - 67443 lbf). Depending on the
                  machine, elongations of between 1 micron and 2.5 m (98.4 in)
                  can be measured.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </MDBContainer>

      <FooterDegin />
    </>
  );
}

export default MTesting;
