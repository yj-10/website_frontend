import React from "react";
import Labinfo from "./LabInfo";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
} from "mdb-react-ui-kit";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";

function LaborateryMiddComp() {
  return (
    <>
      <MDBContainer id="LabBox">
        <div id="LabHeadBox">
          <h2> inhoue Laboratory</h2>
          <p>
            The inhouse laboratory set-up helps in reducing the logistics and
            time taken to carry out these tests regularly which in turn has
            assisted the Quality assurance of our FRP products.
          </p>
        </div>

        <MDBTable bordered borderColor="dark" responsive="xl" >
          <MDBTableHead>
            <tr>
              <th scope="col">Test</th>
              <th scope="col">ASTM-STD</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">REQURIMENT AS PER CTI-137</th>

              <th scope="col">Result</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {Labinfo.length !== 0
              ? Labinfo.map((items) => {
                  return (
                    <tr>
                      <td scope="row">{items.Test}</td>
                      <td scope="row">{items.ASTM}</td>
                      <td scope="row">
                        <ReadMoreReact
                          text={items.Description}
                          min={50}
                     
                          ideal={100}
                          readMoreText=" read more"
                          max={100}
                        />
                      </td>
                      <td scope="row">{items.Requirement}</td>
                      <td scope="row">{items.Test}</td>
                    </tr>
                  );
                })
              : "no data "}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
}

export default LaborateryMiddComp;

// .table>:not(caption)>*>* {
//   padding: 0rem 0.4rem;
// }
