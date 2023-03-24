import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import FRPAxialFlowFan from "../../assets/Img/FRP Axial Flow Fan.jpg";

function Productmid() {
  return (
    <>
      <MDBContainer>
        <MDBRow className="mb-3 ">
          <MDBCol id="boxtwo" lg={"12"} md={"12"} sm={"12"}>
            <div id="LetfSideproduct">
              <div>
                <p id="title">FRP Axial Flow Fan </p>
              </div>
              <div id="body-product">
                <p>
                  Axial ventilators are expecially suitable for all those
                  application requiring large flow rates and relatively low
                  pressure (around 1.000-3.000Pa), like ventilation plants on
                  ships, evaporative towers, ventilation and cooling of
                  industrial facilities. Axial ventilators are ideal for
                  conveying clean air with temperature under +100°C in
                  continuous service.
                </p>
                <h4>
                  <b>HDAXM Series</b>
                </h4>
                <p>
                  Flow rates up to 432.000 m³/h and pressure up to 3.000 Pa with
                  airfoil blades. Axial fans also according to ATEX and API
                  standards
                </p>
              </div>

              <div id="imgProduct">
                <img src={FRPAxialFlowFan} className="img-fluid" alt="no-img" />
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/*  */}
    </>
  );
}

export default Productmid;
