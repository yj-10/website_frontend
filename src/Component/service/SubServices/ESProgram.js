import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import FooterDegin from "../../Footer/FooterDegin";

function ESProgram() {
  return (
    <>
      <div className="head-section">
        <img
          src="https://spxcooling.com/wp-content/uploads/Extend-Service-Program.jpg"
          className="w-100 img-fluid"
          alt="no-img"
        />
      </div>
      <MDBContainer>
        <div className="content my-4">
          <h1 className="text-center display-6">Extend Service Program</h1>

          <article>
            <h2>Country-Wide Extension Programs</h2>
            <ul>
              <li>
                <p>
                  Country-wide extension programs are government-operated
                  programs that provide educational learning experiences to
                  farmers, and are a key policy instrument for supporting food
                  security (van den Ban and Hawkins, 1996). Extension programs
                  support producers' capacity and technical knowledge, in turn
                  increasing or diversifying their harvest and potentially
                  improving household consumption patterns. The West Africa
                  Agricultural Productivity Program (WAAPP) is an example of a
                  large-scale extension program. Established in 2007, the
                  program works across 13 West African countries, developing and
                  disseminating climate-smart farming technologies designed to
                  boost long-term agricultural productivity.
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

export default ESProgram;
