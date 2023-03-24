import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import achievements1 from "../../assets/images/achievements1.jpg";
import achievements2 from "../../assets/images/achievements2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Achievements = () => {
  useEffect(() => {
    AOS.init({
      easing: "linear",
      once: true,
      delay: 400,
      duration: 800,
    });
    AOS.refresh()
    AOS.refreshHard()
  }, []);
  return (
    <>
      <section className='achievements_wrap'>
        <Container>
          <Row>
            <Col sm={5} md={5} lg={5} xl={5}>
              <div className='achievements_details' data-aos="fade-up">
                <h2 className='h2_title'>Achievements</h2>
                <p className='pera'>Having more than 1200 satisfied clients and 300+ cooling towers and heat exchangers successfully running in the market across the globe. We have delivered the best in quality products with better performance and durability.

Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea comya sedo consequat duis aute irure dolor in reprehenderit.</p>
                {/* <a href="#">Read more</a> */}
              </div>
            </Col>
            <Col sm={7} md={7} lg={7} xl={7}>
              <Row data-aos="fade-up">
                <Col sm={12} md={12} lg={6} xl={6}>
                  <figure className='achievements_img'>
                    <Image src={achievements1} alt="achievements" fluid />
                  </figure>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6}>
                  <figure className='achievements_img'>
                    <Image src={achievements2} alt="achievements" fluid />
                  </figure>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Achievements