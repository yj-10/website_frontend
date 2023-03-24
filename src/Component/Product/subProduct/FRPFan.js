import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import FooterDegin from "../../Footer/FooterDegin";
import Fram from "../../../assets/Img/Fram.png";
import FRPFan1 from "../../../assets/Img/FRP Fan.jpg";
import { useEffect } from "react";
import axios from "axios";
import Weburls from "../../../Redux/ApI/Weburls";
import MCard from "../../../utility/MCard";

function FRPFan() {
  //useState Define
  const [FRPFanData, setFRPFanData] = useState([]);
  console.log(".........FRPFanData", FRPFanData);

  //api calling

  const api = async () => {
    const result = await axios.get(Weburls.ProductFRPFan, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await result.data.msg;
    setFRPFanData(data);
  };

  useEffect(() => {
    api();
  }, [0]);
  return (
    <>
      <div id="productimgbox">
        <img src={Fram} className="w-100 img-fluid " alt="fram" />
      </div>
      <MDBContainer>
        <MDBRow className="mb-3 ">
          <MDBCol id="boxtwo" lg={"12"} md={"12"} sm={"12"}>
            <div id="LetfSideproduct">
              <div>
                <h1 className="text-start text-capitalize my-5" id="title">
                  FRP Fan
                </h1>
              </div>
              <div id="body-product">
                <p>
                  Aerodynamic axial flow FRP supplied by Excellent cooling tower
                  are specifically designed for Cooling Towers and other
                  efficiency critical applications To ensure that the best
                  performance is achieved and the power consumption and noise
                  levels are as low as possible,it is of the most importants
                  that the right fan is chosen Axial fiow fans are delta’s
                  business. With an extensive product range and with a high
                  level of technical support ‘Excellent cooling tower’are
                  specifically designed for cooling towers and other efficiency
                  critical applications.’Excellent cooling tower’energy
                  efficient fan saves upto 30% power as compared to conventional
                  aluminium fans.
                </p>
              </div>

              {/* <div id="imgProduct"> */}
              {/* <img src={FRPFan1} className="img-fluid " alt="no-img" /> */}

              <MDBRow className=" d-flex justify-content-start flex-wrap">
                {FRPFanData.map((item) => {
                  return (
                    <MDBCol sm={12} md={4} lg={4} className="my-2">
                      <MCard src={item.image} title={item.title} />
                    </MDBCol>
                  );
                })}
              </MDBRow>
              {/* </div> */}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FooterDegin />
    </>
  );
}

export default FRPFan;
