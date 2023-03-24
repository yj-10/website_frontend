import { MDBInput } from "mdb-react-ui-kit";
import React from "react";

function MInput(props) {
  return (
    <>
      <MDBInput
        className={props.class}
        name={props.name}
        onChange={props.onChange}
        textarea={props.text}
        rows={props.rows}
        value={props.value}
        id={props.id}
        type={props.type}
        label={props.label}
        placeholder={props.placeholder}
        required={props.required}
      />
    </>
  );
}

export default MInput;
