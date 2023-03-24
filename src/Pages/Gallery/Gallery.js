import React, { useEffect, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import GalleryParts from "./GalleryParts";
import GalleryCooling from "./GalleryCooling";
import GalleryCoolingTower from "./GalleryCoolingTower";
import GalleryFrpFan from "./GalleryFrpFan";
import FooterDegin from "../../Component/Footer/FooterDegin";
import axios from "axios";
import Weburls from "../../Redux/ApI/Weburls";
import MCard from "../../utility/MCard";

function Gallery() {
  const [basicActive, setBasicActive] = useState("All");

  const [galleryallData, setgalleryallData] = useState([]);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  console.log("galleryall data", galleryallData);
  const api = async () => {
    const result = await axios.get(Weburls.galleryapi, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await result.data.msg;
    setgalleryallData(data);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <div className="container bg-gallery-head">
        <h1>
          we are <span> mahakal cooling towers</span>, A trusted cooling tower
          and service company across the worldwide
        </h1>
      </div>
      <MDBContainer className="py-5 Gallery">
        <div className="heading-text mb-4">
          <h1> Our gallery</h1>
        </div>
        <MDBTabs
          pills
          className=" d-flex justify-content-center flex-wrap mb-4"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("All")}
              active={basicActive === "All"}
            >
              ALL
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("GalleryCooling")}
              active={basicActive === "GalleryCooling"}
            >
              Project
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("GalleryCoolingTower")}
              active={basicActive === "GalleryCoolingTower"}
            >
              Product
            </MDBTabsLink>
          </MDBTabsItem>

          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("GalleryFrpFan")}
              active={basicActive === "GalleryFrpFan"}
            >
              Cooling Towers
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("GalleryParts")}
              active={basicActive === "GalleryParts"}
            >
              Parts
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
        <MDBTabsContent>
          <MDBTabsPane show={basicActive === "All"}>
            <MDBContainer className="CardContainer">
              <MDBRow className=" d-flex justify-content-center flex-wrap">
                {galleryallData.length > 0
                  ? galleryallData.map((item) => {
                      return (
                        <MDBCol sm={12} md={4} lg={4} className="my-2">
                          {" "}
                          <MCard src={item.image} title={item.title} />
                        </MDBCol>
                      );
                    })
                  : "no data available"}
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "GalleryParts"}>
            <GalleryParts />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "GalleryCooling"}>
            <GalleryCooling />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "GalleryCoolingTower"}>
            <GalleryCoolingTower />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "GalleryFrpFan"}>
            <GalleryFrpFan />
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>

      <FooterDegin />
    </>
  );
}

export default Gallery;

{
  /* <h2
                  className="text-capitalize display-6 mb-4 "
                  style={{
                    fontSize: "25px",
                    fontFamily: "Poppins Sans-serif",
                    color: "#162337",
                  }}
                >
                  Cooling Tower Fan
                </h2>
                <GalleryCooling />
                <h2
                  className="text-capitalize  display-6 mb-4"
                  style={{
                    fontSize: "25px",
                    fontFamily: "Poppins Sans-serif",
                    Color: "#162337",
                  }}
                >
                  Frp Cooling Tower Fan
                </h2>
                <GalleryCoolingTower />

                <h2
                  className="text-capitalize mb-4 display-6"
                  style={{
                    fontSize: "25px",
                    fontFamily: "Poppins Sans-serif",
                    color: "#162337",
                  }}
                >
                  Frp Fan stack
                </h2>
                <GalleryFrpFan /> */
}
