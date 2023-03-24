import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import MCard from "../../utility/MCard";
import serviceinfo from "./serviceInfo";

function Servicecomp() {
  return (
    <>
      <div id="servicebox">
        {/* service head  */}
        <div className="serviceHead">
          <div className="servicetitle">
            <p> Mahakal Cooling Tower service solution</p>
          </div>
          <div className="servicemidtext">
            <p>
              where do uou turn when a cooling tower fails or when a momentary
              problem overwhelms the capacity of your tower? today's experts
              <br/>call mahakal cooling towers the availability and effectiveness of
              <br/>temporar7 cooling towers has dramatically improved the options for
              process cooling at plants around the world.
            </p>
          </div>

          <div className="servicelasttext">
            <p>
              maximize your production during hot summer months peak demand
              times. maintain production while performing cooling tower repair
              and maintenance. reduce costly down time after disaster strikes.
              meet or exceed environmental and safety standards without
              compromise.
            </p>
          </div>
        </div>
        {/* service head close */}

        <div id="servicecard">
          {serviceinfo.length > 0 ? (
            serviceinfo.map((item) => {
              return (
                <MCard src={item.Image} text={item.Desc} title={item.Name} />
              );
            })
          ) : (
            <MDBSpinner role="status">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
          )}
        </div>
      </div>
    </>
  );
}

export default Servicecomp;
