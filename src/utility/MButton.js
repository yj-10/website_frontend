import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function MButton(props) {
  return (
    <MDBBtn type={props.type} onClick={props.click} className={props.class}>
      {props.text}
    </MDBBtn>
  );
}
