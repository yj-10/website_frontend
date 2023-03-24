import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import FooterDegin from "../../Footer/FooterDegin";

function TPTesting() {
  return (
    <>
      <div className="head-section">
        <img
          src="https://spxcooling.com/wp-content/uploads/Cooling-Tower-Reconstruction.jpg"
          className="w-100 Img-fluid"
          alt="no-img"
        />
      </div>
      <MDBContainer>
        <div className="content my-4">
          <h1 className="text-center display-6">
            Wooden Cooling Tower Testing
          </h1>

          <article>
            <ul>
              <li>
                <p>
                  Wood continues to be widely used for the construction of
                  cooling towers. Wood deterioration can shorten the life of a
                  cooling tower from an anticipated 20-25 years to 10 years or
                  less. Cooling tower operation becomes inefficient and repair
                  and replacement costs are excessive. In the past, redwood was
                  selected for use in cooling towers because of its high
                  strength-to-weight ratio, availability, ease of use, low cost,
                  and natural resistance to decay. Pressure-treated Douglas fir
                  and similar types of wood are replacing redwood due to cost
                  and availability factors. Wood is composed of three main
                  components: cellulose, lignin, and natural extractives. Long
                  fibers of cellulose give wood its strength. Lignin acts as the
                  cementing agent for the cellulose. The extractives contain
                  most of the natural compounds that enable wood to resist
                  decay. Normally, highly colored woods are most durable
                </p>
              </li>
            </ul>
          </article>
        </div>
      </MDBContainer>

      <FooterDegin />
    </>
  );
}

export default TPTesting;
