import React from 'react'
import ContactComp from '../../Component/Contact/ContactComp';
import ContactCards from '../../Component/Contact/ContactCards';
import Frame72 from "../../assets/Img/Frame72.png";
function ContactDegine() {
  return (<>
    {/* images should be here */}
    <section id="sect">
      <img src={Frame72} alt='no img' />
    </section>

    {/* React us */}
    <section id="SecPart">
      <ContactCards />
    </section>
  
    {/* form section start */}
    <section id="secthired">
      <ContactComp />
    </section>

    {/* form section close  */}

    <section id="mapbox">
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3282200269045!2d75.91305861540388!3d22.790298930687005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd8b77341ee9%3A0x6ff37ec73edbbb73!2sMahakal%20cooling%20towers%20-%20Frp%20fan%2Fcooling%20tower%2F%20frp%20fan%20stacks%2F%20cooling%20tower%20spare%20parts!5e0!3m2!1sen!2sin!4v1674461352984!5m2!1sen!2sin" style={{ width: "100%", height: "450px", }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </section>

  </>
  )
}

export default ContactDegine