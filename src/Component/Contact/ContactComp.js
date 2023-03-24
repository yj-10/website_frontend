import { MDBCol, MDBRow,  MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Contactform from "./Contactform";
import contactimg from "../../assets/Img/contactimg.png"

// import Contactform from './contactform'
// import ContactMap from './ContactMap'

function ContactComp() {
  return (
    <>  <MDBContainer fluid>
      <MDBRow>
        <MDBCol md="6">
          <img id="imgbox"
            src={contactimg}
            style={{ width: "100% ", height: "675px" }}
          />
        </MDBCol>
        <MDBCol md="6">
          <div id="box">
            <h3>Get in Touch with Us</h3>
            <p>
              if you Have any kin of questions Eitehr about our company services
              or some other. please feel free to contact us and message Us.
            </p>
          </div>
          <div id="Formstyle">
            <Contactform />
          </div>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
    </>
  );
}

export default ContactComp;
