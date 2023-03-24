import React from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../assets/MLogo/MahakalLogo.png";
import { IoLogoLinkedin, IoIosArrowDown } from "react-icons/io";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

import { BsFacebook, BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { IconBase } from "react-icons";

const Layout = () => {
  return (
    <>
      <section className="app_sub_header">
        <Container fluid>
          <div className="header_contact_wrap">
            <div className="header_contact_phone">
              <div className="header_contact_email">
                <p className="pera">
                  {" "}
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <AiOutlineMail /> mahakalcoolingtower@gmail.com
                </p>
              </div>
              <div className="header_contact_number">
                <p className="pera">
                  <BsFillTelephoneFill /> 98260-76474 <span>81031-07600</span>
                </p>
              </div>
            </div>
            <div className="header_social_wrap">
              <div className="header_social">
                <a href="https://www.linkedin.com/in/rajesh-panchal-4a7a0717b/?originalSubdomain=in">
                  <IoLogoLinkedin />
                </a>
              </div>
              <div className="header_social">
                <a href="https://twitter.com/mahakaltower">
                  {" "}
                  <AiOutlineTwitter />
                </a>
              </div>
              <div className="header_social">
                <a href="https://www.facebook.com/mahakalcoolingtower/">

                  <MdFacebook />

                </a>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;
              {/* <div className="header_social">
                <Link to="/">
                  <AiOutlineInstagram />
                </Link>
              </div> */}
            </div>
          </div>
        </Container>
      </section>
      <header className="app_header">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <Link to={"/"}>
                <Image
                  src={logo}
                  alt="App Logo"
                  className="img-fluid"
                  style={{ height: "80px", width: "250px", marginLeft: "20px" }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#link">
                  <Link to={"/parts"}>Parts</Link>
                </Nav.Link>
                <Nav.Link id="basic-nav-dropdown">
                  <Link to={"/product"}>
                    Product <IoIosArrowDown style={{ fontSize: "10px" }} />{" "}
                  </Link>
                  <ul className="ul">
                    <li>
                      <Link to={"/FanBlads"}>Fan Blades</Link>
                    </li>

                    <li>
                      <Link to={"/WoodenCooling"}>Wooden Cooling Towers</Link>
                    </li>
                    <li>
                      <Link to={"/Gearbox"}>Gear box</Link>
                    </li>
                    <li>
                      <Link to={"/Rcc_Cooling_tower"}>Rcc Cooling Towers</Link>
                    </li>

                    <li>
                      <Link to={"/FRPFan"}>FRP Fan Stack</Link>
                    </li>
                  </ul>
                </Nav.Link>

                <Nav.Link>
                  <Link to={"/project"}>Project</Link>
                </Nav.Link>

                <Nav.Link id="basic-nav-dropdown">
                  <Link to={"/Service"}>
                    Service <IoIosArrowDown style={{ fontSize: "10px" }} />
                  </Link>

                  <ul className="ul">
                    <li>
                      <Link to={"/Reconstruction"}>Reconstruction</Link>
                    </li>
                    <li>
                      <Link to={"/ESProgram"}>Extend Service Program</Link>
                    </li>
                    <li>
                      <Link to={"/CTITips"}>Cooling Tower inspection Tips</Link>
                    </li>
                    <li>
                      <Link to={"/GearboxDiagonstics"}>
                        Gearbox Diagnostics and Repair
                      </Link>
                    </li>
                    <li>
                      <Link to={"/MTesting"}>Materials Testing</Link>
                    </li>
                    <li>
                      <Link to={"/FFEAnalysis"}>
                        Fill Fouling Evaluation Analysis
                      </Link>
                    </li>
                    <li>
                      <Link to={"/TPTesting"}>
                        {" "}
                        Wooden Cooling Tower Testing
                      </Link>
                    </li>
                  </ul>
                </Nav.Link>

                <Nav.Link href="#link">
                  <Link to={"/Laboratery"}>R&D Laboratery</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/Blog"}>Blogs</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/Industries"}>Industries</Link>{" "}
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/About"}>About Us</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/Contact"}>Contact Us</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Layout;
