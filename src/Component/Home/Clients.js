import React from 'react';
import { Container, Image } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import client1 from "../../assets/images/client1.png"
import client2 from "../../assets/images/client2.png"
import client3 from "../../assets/images/client3.png"
import client4 from "../../assets/images/client4.png"
const Clients = () => {
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
                items: 3,
            },
            1100: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        },
    }
    return (
        <>
            <section className='clients_wrap'>
                <Container>
                    <div className="clients_title">
                        <h2 className='h2_title'>clients</h2>
                        <p className='pera'>We provide our clients highest level of support which lowers their cost of operations and gives them peace of mind</p>
                    </div>
                    <OwlCarousel className='owl-theme hero_slider'  {...options}>
                        <div className='item'>
                            <figure className='item_img_wrap'>
                                <Image src={client1} alt='Secure' />
                            </figure>
                        </div>
                        <div className='item'>
                            <figure className='item_img_wrap'>
                                <Image src={client2} alt='Secure' />
                            </figure>
                        </div>
                        <div className='item'>
                            <figure className='item_img_wrap'>
                                <Image src={client3} alt='Secure' />
                            </figure>
                        </div>
                        <div className='item'>
                            <figure className='item_img_wrap'>
                                <Image src={client4} alt='Secure' />
                            </figure>
                        </div>
                    </OwlCarousel>
                </Container>
            </section>
        </>
    )
}

export default Clients