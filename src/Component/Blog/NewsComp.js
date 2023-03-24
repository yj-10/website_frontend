import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import New1 from "../../assets/Img/New1.png";
import New2 from "../../assets/Img/New2.png";
import New3 from "../../assets/Img/New3.png";
import { useState } from "react";
import axios from "axios";
import Weburls from "../../Redux/ApI/Weburls";
import { useEffect } from "react";

function NewsComp() {
  const [NewsDetail, setNewsDetail] = useState([]);
  console.log("NewsData////////////", NewsDetail);
  const api = async () => {
    const result = await axios.get(Weburls.Newsgetapi);
    console.log(result.data.msg);
    const data = result.data.msg;
    setNewsDetail(data);
  };

  useEffect(() => {
    api();
  }, [0]);
  return (
    <>
      {NewsDetail.length
        ? NewsDetail.map((item) => {
            return (
              <MDBRow>
                <MDBCol md="4" className="mb-3">
                  <img
                    src={item.image}
                    className="img-thumbnail w-100"
                    style={{ height: "250px" }}
                    alt="..."
                  />
                </MDBCol>
                <MDBCol md="8">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </MDBCol>
              </MDBRow>
            );
          })
        : "no-data-available"}
      {/* <MDBRow>
        <MDBCol md="4">
          <img src={New1} className="img-thumbnail" alt="..." />
        </MDBCol>
        <MDBCol md="8">
          <h2>Cooling Tower Metal Industries</h2>
          <p>
            The use of cooling towers is therefore fundamental in many
            situations & industries such as the iron and steel industry, the
            metallurgical sector, refineries, glassworks, the municipal solid
            waste disposal sector, the chemical industries, the plastics
            industry, purifiers, etc. Today we are going to analyze the use in
            the first two sectors: the steel and metallurgical sectors and we
            find out more about how cooling towers work in steel plant.
          </p>
        </MDBCol>

        <MDBCol md="4">
          <img src={New2} className="img-thumbnail" alt="..." />
        </MDBCol>
        <MDBCol md="8">
          <h2>Cooling Tower Oil And Gas Industries</h2>
          <p>
            The PMM modular cooling tower consists of components pre-assembled
            in the factory and transportable by container: the aim is easy
            remote transport to minimise costs. High efficiency due to the
            principle of evaporative cooling.
          </p>
        </MDBCol>

        <MDBCol md="4">
          <img src={New3} className="img-thumbnail" alt="..." />
        </MDBCol>
        <MDBCol md="8">
          <h2>Cooling Tower Paper Industries</h2>
          <p>
            HVAC systems play a crucial role in many industrial cooling
            applications. They are used to cool areas where high heat loads can
            shut down critical processes. This could stem from machinery that
            generates extensive heat or where cooling and ventilation are
            required to protect temperature- and humidity-sensitive equipment.
          </p>
        </MDBCol>
      </MDBRow> */}
    </>
  );
}

export default NewsComp;
