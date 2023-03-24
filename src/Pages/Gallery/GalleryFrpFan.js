import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Weburls from "../../Redux/ApI/Weburls";
import MCard from "../../utility/MCard";

function GalleryFrpFan() {
  const [GalleryFrpfan, setGalleryFrpfan] = useState([]);
  console.log("GalleryFrpfan", GalleryFrpfan);
  const api = async () => {
    const result = await axios.get(Weburls.gallerygetapi2, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await result.data.msg;
    setGalleryFrpfan(data);
  };
  useEffect(() => {
    api();
  }, [0]);
  return (
    <MDBContainer className="CardContainer ">
      <MDBRow className=" d-flex justify-content-center flex-wrap mb-4 ">
        {GalleryFrpfan.length > 0
          ? GalleryFrpfan.map((item) => {
              return (
                <MDBCol sm={12} md={4} lg={4} className="my-2">
                  <MCard src={item.image} title={item.title} />
                </MDBCol>
              );
            })
          : "no data available"}
      </MDBRow>
    </MDBContainer>
  );
}

export default GalleryFrpFan;
