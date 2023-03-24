import React from "react";
import SCard from "../../utility/SCard";
// import  {BsTelephone} from "react-icons/bs"

function ContactCards() {
  return (
    <>
      <div id="title">
        <h2> Reach Us</h2>
        <p>
          Fill out this form and we'll get the right person in touch as quickly
          as possible. To contact us directly, select your region from the
          regional office locator directory on the right.
        </p>
      </div>
      <div id="Cards" style={{ padding: "20px 30px" }}>
        <SCard text={"81031-07600"} icon="phone" title={"98260-76474"} />
        <SCard
          text={"Email us for Support"}
          icon="envelope"
          title={"mahakalcoolingtoers@gmail.com"}
        />
        <SCard
          text={"220 kailash kuti talawali chanda A.B Road, Indore"}
          icon="map-marker-alt"
          title={"address"}
        />
      </div>
    </>
  );
}

export default ContactCards;
