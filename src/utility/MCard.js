import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
function MCard(props) {
  return (
    <MDBCard className="bg-image hover-zoom">
      <MDBCardImage
        src={props.src}
        className="img-fluid"
        style={{ filter: "contrast(130%)", height: "250px" }}
        alt="..."
        position="top"
      />
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>{props.text}</MDBCardText>
        <MDBBtn className="bttn">{props.btn}</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default MCard;
