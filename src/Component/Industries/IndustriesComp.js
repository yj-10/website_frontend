import React from "react";
import info from "./IndusInfo";
function IndustriesComp() {
  return (
    <>
      <div id="induheadbox">
        <div id="titile">
          <p>Industries</p>
          <p>
            our consultants are industry experts who are bringing unique
            perspective
          </p>
        </div>
      </div>
      <div id="induimgbox">
        {info.length > 0 ? (
          info.map((item) => {
            return (
              <div id="innerimgbox" className="bg-image hover-zoom m-4">
                <img
                  style={{
                    width: "350px",
                    filter: "contrast(100%)",
                    height: "250px",
                  }}
                  src={item.Image}
                  className="img-fluid  py-2"
                  alt={item.alt}
                />
                <p>{item.Name}</p>
              </div>
            );
          })
        ) : (
          <p>no data available</p>
        )}
      </div>
    </>
  );
}

export default IndustriesComp;
