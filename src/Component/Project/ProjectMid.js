import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import img1 from "../../assets/Img/img10.jpg";
import img6 from "../../assets/Img/img6.jpg";
import img7 from "../../assets/Img/img7.jpg";
import img8 from "../../assets/Img/img8.jpg";
import img9 from "../../assets/Img/img9.webp";
import Weburls from "../../Redux/ApI/Weburls";

function ProjectMid() {
  const [ProjectData, setProjectData] = useState([]);
  console.log("GalleryCoolingData", ProjectData);
  const api = async () => {
    const result = await axios.get(Weburls.Projectgetapi, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await result.data.msg;
    setProjectData(data);
  };

  useEffect(() => {
    api();
  }, [0]);

  return (
    <>
      <MDBContainer>
        <h1 className="text-info mb-4"> Mahakal Projects </h1>
        {ProjectData.length > 0
          ? ProjectData.map((item) => {
              return (
                <MDBRow className="mb-4">
                  <MDBCol md="4 ">
                    <img src={item.image} className="img-fluid w-100" />
                  </MDBCol>
                  <MDBCol md="8" className="">
                    <h2 className="px-1 ">{item.title}</h2>

                    <ReadMoreReact
                      text={item.data}
                      min={80}
                      ideal={100}
                      readMoreText="click here to read more"
                      max={200}
                    />
                  </MDBCol>
                </MDBRow>
              );
            })
          : "no-data"}
      </MDBContainer>
    </>
  );
}

export default ProjectMid;
