import React from "react";
import "./Style/SCard.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdb-react-ui-kit";
// import { BsTelephone } from 'react-icons/bs';
function SCard(props) {
  return (
    <MDBCard>
      <MDBCardBody>
        <div id="icons">
          <i>
            {" "}
            <MDBIcon fas icon={props.icon} />
          </i>
        </div>
        <div id="cardbox">
          <MDBCardTitle>{props.title}</MDBCardTitle>
          {/* <MDBCardImage src={props.src}/> */}
          <MDBCardText>{props.text}</MDBCardText>
        </div>

        {/* <MDBBtn href='#'>{props.btn}</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
  );
}

export default SCard;
