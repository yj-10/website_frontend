import axios from "axios";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Collapse } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import Weburls from "../../Redux/ApI/Weburls";
import SuccessModel from "../../utility/SuccessModel";

function CareerInfo() {
  const [CareerapiData, setCareerapiData] = useState([]);
  const [showShow, setShowShow] = useState(false);
  // const [loadsucces, setloadsucces] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  const api = async () => {
    const result = await axios.get(Weburls.Careergetapi);
    const data = await result.data.msg;
    console.log("result", result.status)
    // if (result.status === 200) {
    //   setTimeout(() => {
    //     setloadsucces(true)

    //   }, 3000)
    // }
    setCareerapiData(data);
    // setloadsucces(false)
  };


  useEffect(() => {
    api();


  }, [0]);
  return (
    <>
      <MDBContainer className="CareerContaier">
        {/* {loadsucces === true  ? <SuccessModel /> : "msg"} */}
        {CareerapiData.map((item) => {
          const { ctc, position, title, location, qualification, exprerience } =
            item;
          return (
            <div className="mb-4 CareerInfo">
              <h1>{title}</h1>
              <div className="content">
                <MDBRow className="mb-1">
                  <MDBCol className="text-end text-style">{"Position"}</MDBCol>
                  <MDBCol className="text-start">{position}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-1">
                  <MDBCol className="text-end">{"Location"}</MDBCol>
                  <MDBCol className="text-start">{location}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-1">
                  <MDBCol className="text-end">{"Qualification"}</MDBCol>
                  <MDBCol className="text-start">{qualification}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-1">
                  <MDBCol className="text-end">{"Experience"}</MDBCol>
                  <MDBCol className="text-start">{exprerience}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-1">
                  <MDBCol className="text-end">
                    {"CTC Desired(in lac) PA"}
                  </MDBCol>
                  <MDBCol className="text-start">{ctc}</MDBCol>
                </MDBRow>
              </div>
            </div>
          );
        })}
      </MDBContainer>
    </>
  );
}

export default CareerInfo;
