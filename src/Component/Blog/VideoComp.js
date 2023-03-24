import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Video1 from "../../assets/Img/Video1.mp4";
import Video2 from "../../assets/Img/Video2.mp4";
import Video3 from "../../assets/Img/Video3.mp4";
import Weburls from "../../Redux/ApI/Weburls";
import axios from "axios";

function VideoComp() {
  // api calling
  const [VideoData, setVideoData] = useState([]);
  console.log("VideoData////////////", VideoData);
  const api = async () => {
    const result = await axios.get(Weburls.Videoapi);
    console.log(result.data.msg);
    const data = result.data.msg;
    setVideoData(data);
  };

  // api render after website load
  useEffect(() => {
    api();
  }, [0]);

  return (
    <>
      {VideoData.length > 0
        ? VideoData.map((items) => {
            return (
              <MDBRow>
                <MDBCol md="4">
                  <video
                    loop
                    controls
                    src={items.video}
                    // src={`http://localhost:5000/${items.video}`}
                    className="img-thumbnail w-100"
                    style={{ height: "200px", width: "100%" }}
                    alt="..."
                  />
                </MDBCol>
                <MDBCol md="8">
                  <h2>{items.title}</h2>
                  <p></p>
                </MDBCol>
              </MDBRow>
            );
          })
        : "no data available"}
    </>
  );
}

export default VideoComp;
