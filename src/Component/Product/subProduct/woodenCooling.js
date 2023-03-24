import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import FooterDegin from "../../Footer/FooterDegin";
import Fram from "../../../assets/Img/Fram.png";
import WoodenCooling1 from "../../../assets/Img/Wooden Cooling.png";
import { useEffect } from "react";
import axios from "axios";
import Weburls from "../../../Redux/ApI/Weburls";
import { useState } from "react";
import MCard from "../../../utility/MCard";

function WoodenCooling() {
  const [WoodenData, setWoodenData] = useState([]);
  console.log("WoodenData", WoodenData);

  //api calling
  const api = async () => {
    const result = await axios.get(Weburls.ProductWooden, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await result.data.msg;
    setWoodenData(data);
  };

  useEffect(() => {
    api();
  }, [0]);
  return (
    <>
      {" "}
      <div id="productimgbox">
        <img src={Fram} className="w-100 img-fluid " alt="fram" />
      </div>
      <MDBContainer className="my-4">
        <MDBRow className="mb-3 ">
          <MDBCol id="boxtwo" lg={"12"} md={"12"} sm={"12"}>
            <div id="LetfSideproduct">
              <div>
                <h1 className="text-start my-5 text-capitalize" id="title">
                  Wooden Cooling towers
                </h1>
              </div>
              <div id="body-product">
                <p>
                  Owing to the rich experience in this domain, we have been able
                  to offer premium quality Wooden Cooling Tower to our clients.
                  Chemically treated selected timber Wood is used for the
                  cooling tower. All the timber structure are pre fabricated and
                  the chemically treated. We Manufacture Natural Draft, Induced
                  Draft Cross Flow / Counter Flow Type, Treated Timber Cooling
                  Towers in single cell / Multi cell construction. There is no
                  capacity limitation in multicell design. We have designed and
                  supplied multi-cell tower of 9000 m3/hr capacity. Each cell
                  having 2250 m3/hr circulating water and 150C range at 40C
                  approach. Mechanical draft towers have either direct driven or
                  gear driven fan depends upon the capacity of each cell.
                  Normally small capacity towers (Aprox, Single, cell capacity
                  upto 200 m3/hr and DT 150C) are direct driven and higher
                  capacity towers are gear driven. We also manufacture single
                  stripping special purpose cooling tower T upto 500C.
                </p>
              </div>

              <div id="imgProduct">
                {/* <img
                  src={WoodenCooling1}
                  className="img-fluid mb-3 w-100"
                  alt="no-img"
                /> */}

                <MDBRow className=" d-flex justify-content-start flex-wrap">
                  {WoodenData.map((item) => {
                    return (
                      <MDBCol sm={12} md={4} lg={4} className="my-2">
                        <MCard src={item.image} title={item.title} />
                      </MDBCol>
                    );
                  })}
                </MDBRow>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FooterDegin />
    </>
  );
}

export default WoodenCooling;
