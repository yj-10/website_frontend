import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Blog1 from "../../assets/Img/Blog1.png";
import Blog2 from "../../assets/Img/Blog2.png";
import Blog3 from "../../assets/Img/Blog3.png";
import { useState } from "react";
import axios from "axios";
import Weburls from "../../Redux/ApI/Weburls";
import { useEffect } from "react";

function BlogComp() {
  const [BlogData, setBlogData] = useState([]);
  console.log("BlogData////////////", BlogData);
  const api = async () => {
    const result = await axios.get(Weburls.Bloggetapi);
    console.log(result.data.msg);
    const data = result.data.msg;
    setBlogData(data);
  };

  useEffect(() => {
    api();
  }, [0]);

  return (
    <>
      {BlogData.length > 0
        ? BlogData.map((item) => {
            return (
              <MDBRow className="mb-4">
                <MDBCol md="4">
                  <img src={item.Photo} className="img-thumbnail" alt="..." />
                </MDBCol>
                <MDBCol md="8">
                  <h2>{item.name} </h2>
                  <p>{item.post}</p>
                </MDBCol>
              </MDBRow>
            );
          })
        : "no-data-available"}
    </>
  );
}

export default BlogComp;
