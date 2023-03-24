import React from 'react'
import { Container } from 'react-bootstrap'

const Counter = () => {
    return (
        <>
            <section className='counter_wrap'>
                <Container>
                    <div className='counter_inner_wrap'>
                        <div className="row text-center">
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div className="counter">
                                    <h2 className="timer count-title count-number" data-to="2600" data-speed="1500"></h2>
                                    <p className="count-text ">trusted clients</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div className="counter">
                                    <h2 className="timer count-title count-number" data-to="25" data-speed="1500"></h2>
                                    <p className="count-text ">Numbers of employee</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div className="counter">
                                    <h2 className="timer count-title count-number" data-to="100" data-speed="1500"></h2>
                                    <p className="count-text ">orders in queue list</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div className="counter">
                                    <h2 className="timer count-title count-number" data-to="3900" data-speed="1500"></h2>
                                    <p className="count-text ">projects we completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Counter