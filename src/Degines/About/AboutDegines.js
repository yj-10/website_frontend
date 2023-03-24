import React from "react";
import AboutHead from "../../Component/About/AboutHead";
import AboutLower from "../../Component/About/AboutLower";
import AboutMiddle from "../../Component/About/AboutMiddle";
import FooterDegin from "../../Component/Footer/FooterDegin";

function AboutDegines() {
  return (
    <>
      <section id="Aboutheadsection">
        <AboutHead />
      </section>

      <section id="aboutlowersection">
        <AboutMiddle />
      </section>

      <section id="aboutLastsection">
        <AboutLower />
      </section>

      <FooterDegin />
    </>
  );
}

export default AboutDegines;
