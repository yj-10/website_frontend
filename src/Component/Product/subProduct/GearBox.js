import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import FooterDegin from "../../Footer/FooterDegin";
import Fram from "../../../assets/Img/Fram.png";
import GearBoxes from "../../../assets/Img/Gear Boxes2.jpg";
import { useEffect } from "react";
import axios from "axios";
import Weburls from "../../../Redux/ApI/Weburls";
import { useState } from "react";
import MCard from "../../../utility/MCard";

function Gearbox() {
  //useState Define
  const [GearData, setGearData] = useState([]);
  console.log(".........GearData", GearData);

  //api calling

  const api = async () => {
    const result = await axios.get(Weburls.ProductGear, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await result.data.msg;
    setGearData(data);
  };
  useEffect(() => {
    api();
  }, [0]);
  return (
    <>
      <div id="productimgbox">
        <img src={Fram} className="w-100 img-fluid " alt="fram" />
      </div>
      <MDBContainer className="my-4">
        <MDBRow className="mb-3 ">
          <MDBCol id="boxtwo" lg={"12"} md={"12"} sm={"12"}>
            <div id="LetfSideproduct">
              <div>
                <h1 className="text-start text-capitalize my-5" id="title">
                  Gear boxes
                </h1>
              </div>
              <div id="body-product">
                <p>
                  Gear reducers are used in all industries, they reduce speed
                  and increase torque. You will find them between the prime
                  mover (i.e.: electric motor, gas, diesel or steam engine,
                  etc.) and the driven equipment: conveyors, mills, paper
                  machines, elevators, screws, agitators, etc.
                  <br />
                  <br /> An industrial gearbox is defined as a machine for the
                  majority of drives requiring a reliable life and factor of
                  safety, and with the pitch line velocity of the gears limited
                  to below 25 m/s, as opposed to mass produced gearboxes
                  designed for a specific duty and stressed to the limit, or
                  used for very high speeds etc., e.g. automobile, aerospace,
                  marine gearboxes.
                  <br />
                  <br /> To the competent engineer, the design of a gear unit,
                  like any other machine, may seem a fairly easy task.
                  <br /> However without experience in this field the designer
                  cannot be expected to cover all aspects of gearbox design.
                  <br />
                  <br /> The purpose of this booklet is to set out the basic
                  design for an industrial gearbox. It should help students not
                  familiar with gearboxes, lay out a reliable working design.
                  And it is intended for the reader to use his own experience in
                  selecting formulae, stress values etc., for gearbox
                  components.
                  <br />
                  To avoid the situation presented in the picture below, you
                  should design gearing carefully and correctly.
                </p>
              </div>

              <div id="imgProduct">
                <MDBRow className=" d-flex justify-content-start flex-wrap">
                  {GearData.map((item) => {
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

export default Gearbox;
