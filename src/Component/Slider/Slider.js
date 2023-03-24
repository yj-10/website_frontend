import React from 'react'
import "./slider.scss"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import slidedata from './Sliderdata';
function Slider() {


  return (
    <MDBCarousel showControls >
      {
        slidedata.map((data) => {
          return <MDBCarouselItem
            className=' d-block'
            itemId={data.item}
            src={data.Image}
            alt={data.alt}
          />
        })
      }

    </MDBCarousel>
  )
}

export default Slider



