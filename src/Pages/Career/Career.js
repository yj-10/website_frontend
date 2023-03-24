/* eslint-disable no-undef */
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBFile,
} from "mdb-react-ui-kit";

import React, { useEffect } from "react";
import AOS from "aos";
import FooterDegin from "../../Component/Footer/FooterDegin";
import MInput from "../../utility/MInput";
import MTextarea from "../../utility/MTextarea";
import MButton from "../../utility/MButton";
import CareerForm from "./CareerForm";
import CareerInfo from "./CareerInfo";

import icon2 from "../../assets/Img/icon2.png";
import icon1 from "../../assets/Img/icon1.png";
import icon3 from "../../assets/Img/icon3.png";
import careerimg from "../../assets/Img/careerimg.png";

function Careers() {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  });

  return (
    <>
      <div className="C_head">
        <img src={careerimg} className="fluid w-100" alt="no-img" />
      </div>

      <MDBContainer fluid className="C_section mb-4">
        <article className="py-3">
          <h1
            id="heading"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="text-center h1 mb-2 py-2"
          >
            Careers
          </h1>
          <p
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="text-center"
          >
            We believe that people are our most valuable resources and hence we
            provide the platform to foster their professional and personal
            growth in alignment with the growth of the organization.
          </p>
        </article>
      </MDBContainer>
      <MDBContainer className="C_Middle_section mb-4">
        <div className="text-title text-center mb-4 heading_text">
          <h1
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            {" "}
            What We Look in Our Employee
          </h1>
        </div>

        <MDBRow className="d-flex flex-wrap justify-content-center my-5">
          <MDBCol
            data-aos="fade-up-left"
            data-aos-delay="50"
            sm="12"
            md="4"
            lg="4"
            className=" C_wrapper_first d-flex justify-content-between"
          >
            <div className="icons">
              <img src={icon2} alt="no-icon" />
            </div>
            <div className="text_wrap">
              <h4> performance with passion</h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                iaculis tempus mauris.
              </p>
            </div>
          </MDBCol>
          <MDBCol
            data-aos="fade-down"
            className="C_wrapper_two d-flex justify-content-around"
            data-aos-delay="50"
            sm="12"
            md="4"
            lg="4"
          >
            <div className="icons">
              <img src={icon1} alt="no-icon" />
            </div>
            <div className="text_wrap">
              <h4> focus in innovaton</h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                iaculis tempus mauris.
              </p>
            </div>
          </MDBCol>
          <MDBCol
            data-aos="fade-up-right"
            data-aos-delay="50"
            sm="12"
            md="4"
            lg="4"
            className="C_wrapper_three d-flex justify-content-around"
          >
            <div className="icons">
              <img src={icon3} alt="no-icon" />
            </div>
            <div className="text_wrap">
              <h4> positive attitude</h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                iaculis tempus mauris.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className="C_job_apply_section mb-4">
        <article className="C_job_head_section">
          <h1>Current opening </h1>
          <p>
            if you are a motivated individual enjoying challenge and having a
            passion to excel, join the team.
          </p>
        </article>

      <CareerInfo/>
      </MDBContainer>

      {/* Career form  */}
      <CareerForm />

      <FooterDegin />
    </>
  );
}

export default Careers;
