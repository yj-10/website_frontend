import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import FooterDegin from "../../Footer/FooterDegin";
import serviceheadimg from "../../../assets/Img/serviceheadimg.png"

function CTITips() {
  return (
    <>
      <div className="head-section">
        <img
          src={serviceheadimg}
          className=" Img-fluid " style={{ width:"100%" , height:"50vh"}}
          alt="no-img"
        />
      </div>
      <MDBContainer>
        <div className="content my-4">
          <h1 className="text-center">Cooling Tower Inspection Tips</h1>

          <article>
            <ul>
              <li>
                Each installation and site location is different, but the best
                way to understand the frequency needed is based on previous
                inspection results and observations.
              </li>
              <li>
                If the existing system is noted to have a good chemical
                treatment regime, clean ambient environment, clean process
                environment, and be free of fouling, then inspections would be
                conducted at less frequency than those systems where fouling is
                noted, meaning more regular cleaning.
              </li>
              <li>
                If the installation is new and has no history to review, then we
                would suggest using your experience or the knowledge of someone
                with experience and starting with more frequent inspection and
                cleans.
              </li>
            </ul>
          </article>
        </div>
      </MDBContainer>

      <FooterDegin />
    </>
  );
}

export default CTITips;
