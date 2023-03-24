import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner5 from "../../assets/images/banner5.jpg";
import counter from "../../assets/images/counter.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";

const Banner = () => {
  return (
    <>
      <section className="app_banner">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={banner5}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={counter}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner4} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
        <div className="banner_text_wrap">
          <Container>
            <Row>
              <Col sm={9} md={9} lg={10} xl={10}>
                <article className="banner_text">
                  <p className="pera">
                  Fill out this form and we'll get the right person in touch as quickly as possible.
To contact us directly, select your region from the regional office locator directory on the right.
                  </p>
                </article>
              </Col>
              <Col sm={3} md={3} lg={2} xl={2}>
                <div className="banner_text_link">
                  <Link to="/EnquireInfo">enquire now</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
