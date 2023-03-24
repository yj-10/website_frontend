import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import we1 from "../../assets/images/we1.jpg"
import we2 from "../../assets/images/we2.jpg"
import D3 from "../../assets/images/D3.jpg"
import we3 from "../../assets/images/we3.jpg"
// import D5 from "../../assets/images/D5.jpg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import AOS from "aos";
import "aos/dist/aos.css";
const Delivered = () => {
  const options = {
    stagePadding: 0,
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1100: {
        items: 2,
      },
      1200: {
        items: 2,
      }
    },
  };
  useEffect(() => {
    AOS.init({
      easing: "linear",
      once: true,
      delay: 400,
      duration: 800,
    });
    AOS.refresh()
  }, []);

  return (
    <>
      <section className='delivered_wrap'>
        <Container>
          <Row>
            <Col sm={7} md={7} lg={7} xl={7}>
              <OwlCarousel className='owl-theme hero_slider'  {...options} data-aos="fade-up">
                <div className='item'>
                  <figure className='delivered_img'>
                    <Image src={we1} alt="delivered" fluid />
                  </figure>
                  <div className='delivered_about'>
                    <h4 className='h4_title'>SGT STC SERIES TWIN UNIT COOLER</h4>
                    <p className='pera'>INDUSTRIAL EVAPORATOR</p>
                  </div>
                </div>

                <div className='item'>
                  <figure className='delivered_img'>
                    <Image src={we2} alt="delivered" fluid />
                  </figure>
                  <div className='delivered_about'>
                    <h4 className='h4_title'>SGS CF SERIES || CENTRIFUGAL COOLER</h4>
                    <p className='pera'>INDUSTRIAL EVAPORATOR</p>
                  </div>
                </div>
                <div className='item'>
                  <figure className='delivered_img'>
                    <Image src={D3} alt="delivered" fluid />
                  </figure>
                  <div className='delivered_about'>
                    <h4 className='h4_title'>RECOLD</h4>
                    <p className='pera'>INDUSTRIAL EVAPORATOR</p>
                  </div>
                </div>
                <div className='item'>
                  <figure className='delivered_img'>
                    <Image src={we3} alt="delivered" fluid />
                  </figure>
                  <div className='delivered_about'>
                    <h4 className='h4_title'>SGS BTR UNIT COOLER</h4>
                    <p className='pera'>INDUSTRIAL EVAPORATOR</p>
                  </div>
                </div>
                {/* <div className='item'>
                  <figure className='delivered_img'>
                    <Image src={D5} alt="delivered" fluid />
                  </figure>
                  <div className='delivered_about'>
                    <h4 className='h4_title'>Lorem ipsum</h4>
                    <p className='pera'>sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div> */}
              </OwlCarousel>
            </Col>
            <Col sm={5} md={5} lg={5} xl={5}>
              <div className='delivered_details' data-aos="fade-up">
                <h2 className='h2_title'>projects <br /><span>we delivered</span></h2>
                <p className='pera'>This product list provides an overview of industrial evaporators to help you determine which is right for your application.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Delivered