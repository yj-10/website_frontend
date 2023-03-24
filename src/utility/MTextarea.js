import React from "react";
import { MDBTextArea } from "mdb-react-ui-kit";

export default function MTextarea(props) {
  return (
    <MDBTextArea
      onChange={props.onChange}
      className={props.class}
      name={props.name}
      label={props.label}
      id={props.id}
      rows={props.rows}
      value={props.value}
    />
  );
}
