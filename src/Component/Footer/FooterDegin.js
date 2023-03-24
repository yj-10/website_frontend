import React from "react";
// import footerLogo from "../../assets/MLogo/ILogo.png";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
// import {
//   AiOutlineInstagram,
//   AiOutlineTwitter,
//   AiOutlineMail,
// } from "react-icons/ai";
// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { Link } from "react-router-dom";
// import { BsFacebook, BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";

// import Subscribe from "./Subscribe";
import Footerone from "./Footerone";
const FooterDegin = () => {

  return (
    <>
      {/* <footer className="app_footer">
        <Container>
          <Row>
            <Col sm={6} md={6} lg={3} xl={3}>
              <div className="address_wrap">
                <figure className="footer_logo">
                  <Link to={"/"}>
                    <Image
                      src={footerLogo}
                      alt="App Logo"
                      className="img-fluid"
                      style={{ height: "125px", width: "300px" }}
                      fluid
                    />
                  </Link>
                </figure>
                <div className="address_details">
                  <p className="pera">
                    220 kailash kuti talawali chanda A.B Road, Indore
                  </p>
                </div>
                <div className="address_contact">
                  <p className="pera">
                    <BsFillTelephoneFill /> 98260-76474
                    <br />
                    <BsFillTelephoneFill /> 81031-07600
                  </p>
                  <p className="text-white my-2 text-capitalize">
                    <h6>
                      <AiOutlineMail />
                      &nbsp;mahakalcoolingtower@gmail.com
                    </h6>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} md={6} lg={3} xl={3}>
              <div className="footer_links_wrap">
                <div className="footer_links_title">
                  <h3 className="h3_title">Pages</h3>
                </div>
                <ul>
                  <li>
                    <Link to={"/parts"}>Parts</Link>
                  </li>

                  <li>
                    <Link to={"/product"}>Product </Link>
                  </li>
                  <li>
                    <Link to={"/Project"}>Projects</Link>
                  </li>
                  <li>
                    <Link to={"/Contact"}>Contact US</Link>
                  </li>
                  <li>
                    <Link to={"/Career"}>Career</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} md={6} lg={3} xl={3}>
              <div className="footer_links_wrap">
                <div className="footer_links_title">
                  <h3 className="h3_title">About </h3>
                </div>
                <ul>
                  <li>
                    <Link to={"/Laboratery"}>R&D Laboratery</Link>
                  </li>
                  <li>
                    <Link to={"/About"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/Blog"}>Blogs</Link>
                  </li>
                  <li>
                    <Link to={"/Gallery"}>Gallery</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} md={6} lg={3} xl={3}>
              <div className="footer_social_wrap">
                <div className="footer_social_title">
                  <h3 className="h3_title">Subscribe for Updates</h3>
                </div>
                <Subscribe />
              </div>
            </Col>
          </Row>
          <div className="footer_social_links">
            <li>
              <a href="https://www.facebook.com/mahakalcoolingtower/">
                <div className="footer_social_icn">
                  <GrFacebookOption />
                </div>
              </a>
            </li>
            {/* <li>
                    <a href="">
                      <div className="footer_social_icn ins">
                        <AiOutlineInstagram />
                      </div>
                      like us on instagram
                    </a>
                  </li> */}
            {/* <li> */}
              {/* <a href="https://twitter.com/mahakaltower">
                <div className="footer_social_icn twi">
                  <AiOutlineTwitter />
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rajesh-panchal-4a7a0717b/?originalSubdomain=in">
                <div className="footer_social_icn link">
                  <GrLinkedinOption />
                </div>
              </a>
            </li>
          </div>

          <hr className="text-white" />
          <div className="app_sub_footer">
            <p className="pera text-white">
              Copyright © 2022. All Rights Reserved.
            </p>
            <ul>
              <li>
                <Link to="/Privacy">Privacy Policy </Link>
              </li>
              <li>
                <Link to={"/Terms"}>Terms & Condition </Link>
              </li>
            </ul>
          </div>
        </Container> */}
      {/* </footer> */} 

      <Footerone/>
    </>
  );
};

export default FooterDegin;
