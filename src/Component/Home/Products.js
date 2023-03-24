import React, { useEffect } from 'react'
import { Container, Image } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import image from "../../assets/images/image.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";

import 'owl.carousel/dist/assets/owl.carousel.css';


import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
    const options = {
        stagePadding: 0,
        loop: true,
        margin: 30,
        nav: true,
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
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1100: {
                items: 2,
            },
            1200: {
                items: 3,
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
            <section className='products_wrap'>
                <Container>
                    <div className='products_title'>
                        <h2 className='h2_title'>products</h2>
                        <p className='pera'>This product list provides an overview of towers to help you determine which is right for your application.</p>
                    </div>
                    <OwlCarousel className='owl-theme hero_slider'  {...options}>
                        <div className='item' data-aos="fade-up">                                                                                                                     
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={image} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title">honeycom pvc fills</h3>
                                    <p className='pera'>pvc fills for cooling tower</p>
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>

                        <div className='item' data-aos="fade-up">
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={image2} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title">honeycom pvc fills</h3>
                                    <p className='pera'>pvc fills for cooling tower</p>
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>
                        <div className='item' data-aos="fade-up">
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={image3} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title">honeycom pvc fills</h3>
                                    <p className='pera'>pvc fills for cooling tower</p>
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>
                        <div className='item' data-aos="fade-up">
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={image4} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title">honeycom pvc fills</h3>
                                    <p className='pera'>pvc fills for cooling tower</p>
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>
                        <div className='item' data-aos="fade-up">
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={image5} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title">honeycom pvc fills</h3>
                                    <p className='pera'>pvc fills for cooling tower</p>
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>
                    </OwlCarousel>
                </Container>
            </section>
        </>
    )
}

export default Products