import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Weburls from "../../Redux/ApI/Weburls";
import MCard from "../../utility/MCard";

function GalleryCoolingTower() {
  const [GalleryCoolingTower, setGalleryCoolingTower] = useState([]);
  console.log("GalleryCoolingTower", GalleryCoolingTower);
  const api = async () => {
    const result = await axios.get(Weburls.gallerygetapi3, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await result.data.msg;
    setGalleryCoolingTower(data);
  };
  useEffect(() => {
    api();
  }, [0]);
  return (
    <>
      <MDBContainer className="CardContainer">
        <MDBRow className=" d-flex justify-content-center flex-wrap">
          {GalleryCoolingTower.map((item) => {
            return (
              <MDBCol sm={12} md={4} lg={4} className="my-2">
                <MCard src={item.image} title={item.title} />
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default GalleryCoolingTower;
