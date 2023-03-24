import React from "react";
import FooterDegin from "../../Component/Footer/FooterDegin";
import Producthead from "../../Component/Product/Producthead";
import Productmid from "../../Component/Product/Productmid";

function ProductDeggine() {
  return (
    <>
    <div id="producthead">
        <Producthead />
    </div>
     <div id="productmid">
        <Productmid />
     </div>
      <FooterDegin />
    </>
  );
}

export default ProductDeggine;
