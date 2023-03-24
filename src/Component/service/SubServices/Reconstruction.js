import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import FooterDegin from "../../Footer/FooterDegin";
import CoolingImg from "../../../assets/Img/Cooling Tower Reconstruction.jpg"

function Reconstruction() {
  return (
    <>
      <div className="head-section">
        <img
          src={CoolingImg}
          style={{height:"600px"}}
          className="w-100 Img-fluid"
          alt="no-img"
        />
      </div>
      <MDBContainer>
        <div className="content my-4">
          <h1 className="text-center display-6">
            Cooling Tower Reconstruction
          </h1>

          <article>
            <ul>
              <li>
                <p>
                  Whether you have a tower nearing the end of its life cycle,
                  have greater operational needs or have experienced a
                  structural failure, SPX is ready with a range of solutions
                  that can get your operation back online fast. With experience
                  that spans several generations, our highly experienced team
                  can restore your towers to optimal condition—renewed
                  performance that can exceed original specifications. Dedicated
                  reconstruction team | Experience with older towers | Total
                  solutions from design to installation to service | Complete
                  project management options | Tower inspections | Emergency,
                  temporary units to minimize downtime | Over 30 in-house
                  engineers on staff | Wholly-owned construction companies –
                  union and non-union | Over 250 Marley trained craftsmen and
                  technicians
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

export default Reconstruction;
