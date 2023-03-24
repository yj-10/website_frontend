import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import FooterDegin from "../../Footer/FooterDegin";
import slider1 from "../../../assets/Img/slider-1.jpg"

function FFEAnalysis() {
  return (
    <>
      <div className="head-section">
        <img
          src={slider1}
          className="w-100 Img-fluid"
          alt="no-img"
        />
      </div>
      <MDBContainer>
        <div className="content my-4">
          <h1 className="text-center display-6">
            Fill Fouling Evaluation Analysis
          </h1>

          <article>
            <ul>
              <li>
                <p>
                  Years of service can result in the accumulation of foreign
                  matter on the surface of cooling tower fill, also referred to
                  as “fill fouling.” Fouling can result in a reduction in the
                  cooling efficiency of the tower, as the deposits interfere
                  with air and/or water flow through the fill. Structural
                  integrity of the tower can also be compromised in severe cases
                  of material accumulation.
                  <br />
                  The solution is monitoring the weight of fill media over
                  time to track fouling, seeking opportunities to reduce
                  fouling, and translating the data to help customers make
                  decisions on budgeting future capital expenditures (fill
                  replacement).
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

export default FFEAnalysis;
