import Aos from "aos";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import lab from "../../assets/Img/lab.png"
import { useEffect } from "react";

function LaborateryHeadComp() {
  useEffect(() => {
    Aos.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  });
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol sm={"12"} md="12" lg={"6"}>
            <div  data-aos="fade-right"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center" id="laboratoryHeadboxLeft">
              <p>material testing and quality assurance</p>
              <p>
                FRP is a composite that is made from multiple raw materials or
                resin and glass fibres, which are sourced from international
                vendors in various batches throughout the year. To ensure the
                material quality does not fluctuate or vary with these batches,
                the material structural properties of each batch have to be
                tested religiously.
              </p>
            </div>
          </MDBCol>
          <MDBCol sm={"12"} md="12" lg={"6"}>
            <div id="laboratoryHeadboxRight">
              <img
                 data-aos="fade-left"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center" src={lab} className="img-fluid" alt="no-img" />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LaborateryHeadComp;
