import React from "react";
import { Image } from "react-bootstrap";
import footerLogo from "../../assets/MLogo/ILogo.png";

import { Link } from "react-router-dom";
import "./styleone.css";
import Subscribe from "./Subscribe";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { AiOutlineHome, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
function Footerone() {
  const IconStyle = {
    fontSize: "25px",
    backgroundColor: "white !important",
    padding: "5px 10px",
    borderRadius: "25px",
  };

  return (
    <>
      <section className="ftco-section">
        {/* <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2>Footer #02</h2>
            </div>
          </div>
        </div> */}
      </section>
      <footer className="footer-02">
        <div className="container">
          {/* <div className="row  justify-content-center">
            <div className="">
              <div className="subscribe mb-5  ">
                {/* subscribe section */}

          <MDBRow className="mb-5">
            <MDBCol lg={6} md={6} sm={12}>
              <h3 className="text-white text-start  mb-4" style={{letterSpacing:"1px",fontSize:"38px" }}>Subscribe for More Updates</h3>
            </MDBCol>
            <MDBCol lg={6} md={6} sm={12} className="mb-4">
            <Subscribe />

            </MDBCol>
          </MDBRow>

          {/* subscribe section */}
          {/* </div> */}

          {/* </div> */}
          {/* </div> */}
          <div className="row">
            <div className="col-md-5 col-lg-5">
              <div className="row">
                <div className="col-md-12 col-lg-12 mb-md-0 mb-4">
                  <h2 className="footer-heading">
                    {/* <Link to={"/"} className={"logo"}>
                      <Image
                        src={footerLogo}
                        alt="App Logo"
                        className="img-fluid"
                        style={{ height: "120px",width:"290px" }}
                        fluid
                      />
                    </Link> */}
                  </h2>
                  <p className="text-white">
                    <AiOutlineHome className="h2" /> 220 kailash kuti talawali
                    chanda A.B Road, Indore
                    
                    
                    <br />
                    <i>
                      <AiOutlineMail className="h2" />
                    </i>{" "}
                    &nbsp;mahakalcoolingtower@gmail.com
                  </p>
                  <p className="text-white">
                    <BsFillTelephoneFill /> &nbsp; 98260-76474
                  </p>
                  <p className="text-white">
                    <BsFillTelephoneFill /> &nbsp; 81031-07600
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-7">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <h2 className="footer-heading" style={{ fontSize: "28px" }}>
                    Pages
                  </h2>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to={"/Parts"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        Parts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/Product"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/Project"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/Contact"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/Career"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <h2 className="footer-heading" style={{ fontSize: "28px" }}>
                    About
                  </h2>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to={"/Laboratery"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        R &amp; D Laboratery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/About"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/Blog"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/Gallery"}
                        className="py-1 text-decoration-none h5 d-block"
                      >
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-md-3 mb-md-0 mb-4 border-left">
                  <h2 className="footer-heading" style={{ fontSize: "23px" }}>
                    Resources
                  </h2>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#"
                        className="py-1 text-decoration-none  d-block"
                      >
                        <BsFillTelephoneFill /> &nbsp; 98260-76474
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="py-1 text-decoration-none  d-block"
                      >
                        <BsFillTelephoneFill /> &nbsp; 81031-07600
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <h2 className="footer-heading" style={{ fontSize: "28px" }}>
                    Social
                  </h2>
                  <div className="footer_social_links">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <a href="https://www.facebook.com/mahakalcoolingtower/">
                          <div className="footer_social_icn">
                            <i>
                              {" "}
                              <GrFacebookOption className="text-white" />
                            </i>
                          </div>
                        </a>
                      </li>

                      <li className="mb-3">
                        <a href="https://twitter.com/mahakaltower">
                          <div className="footer_social_icn">
                            <i>
                              <AiOutlineTwitter className="text-white" />
                            </i> 
                          </div>
                        </a>
                      </li>

                      <li className="mb-3">
                        <a href="https://www.linkedin.com/in/rajesh-panchal-4a7a0717b/?originalSubdomain=in">
                          <div className="footer_social_icn link">
                            <i>
                              <GrLinkedinOption className="text-white" />
                            </i>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

          {/* <div className="row partner-wrap mt-5">
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="mb-0"> Copyright © 2022. All Rights Reserved.</h3>
                </div> */}
          {/* <div className="col-md-9">
                  <p className="partner-name mb-0">
                    <a href="#">
                      <span className="ion-logo-ionic mr-2"></span>Company 01
                    </a>
                    <a href="#">
                      <span className="ion-logo-ionic mr-2"></span>Company 02
                    </a>
                    <a href="#">
                      <span className="ion-logo-ionic mr-2"></span>Company 03
                    </a>
                    <a href="#">
                      <span className="ion-logo-ionic mr-2"></span>Company 04
                    </a>
                    <a href="#">
                      <span className="ion-logo-ionic mr-2"></span>Company 05
                    </a>
                    <a href="#">
                      <span className="ion-logo-ionic mr-2"></span>Company 06
                    </a>
                  </p>
                </div> */}
          {/* <div className="col text-md-right">
                  <p className="mb-0">
                    <a href="#" className="btn-custom">
                      See All{" "}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="row mt-5">
            <div className="col-md-6 col-lg-8">
              <p className="copyright" /> */}
          {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
          {/* Copyright &copy; */}
          {/* <script>document.write(new Date().getFullYear());</script> All */}
          {/* rights reserved | This template is made with{" "}
              <i className="ion-ios-heart" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib.com
              </a>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
          {/* </div> */}
          {/* <div className="col-md-6 col-lg-4 text-md-right">
              <p className="mb-0 list-unstyled">
                <a className="mr-md-3" href="#">
                  Terms
                </a>
                <a className="mr-md-3" href="#">
                  Privacy
                </a>
                <a className="mr-md-3" href="#">
                  Compliances
                </a>
              </p>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footerone;
