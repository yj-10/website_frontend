import React from 'react'
import FooterDegin from '../../Component/Footer/FooterDegin'
import IndustriesComp from "../../Component/Industries/IndustriesComp"
import Frame75 from "../../assets/Img/Frame75.png"
function IndustriesDegine() {
  return (
    <>
    <section id="indushead" >
     <div>
       <img src={Frame75} alt='no-img-data'/>
     </div>
    </section>
   
    <section id="indusbox">
     <IndustriesComp/>
    </section>
   
   
   
       <FooterDegin/>
       </>
  )
}

export default IndustriesDegine


