import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Weburls from "../../Redux/ApI/Weburls";
import MCard from "../../utility/MCard";

function GalleryParts() {
  const [GalleryParts, setGalleryParts] = useState([]);
  console.log(".......", GalleryParts);
  console.log("GalleryParts", GalleryParts);
  const api = async () => {
    const result = await axios.get(Weburls.gallerygetapi);
    console.log(".....", result);

    const data = await result.data.msg;
    setGalleryParts(data);
  };
  useEffect(() => {
    api();
  }, [0]);
  return (
    <>
      <MDBContainer className="CardContainer">
        <MDBRow className=" d-flex justify-content-center flex-wrap ">
          {GalleryParts.map((item) => {
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

export default GalleryParts;
