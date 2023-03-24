import React from 'react'
import Servicecomp from '../../Component/service/Servicecomp'
import FooterDegin from '../../Component/Footer/FooterDegin'
import serviceheadimg from "../../assets/Img/serviceheadimg.png"
function ServiceDegine() {
  return (
<>
<section id="servicehead">
<img src={serviceheadimg} alt='no-img-data'/>
</section>
<section id="serviceMiddle">
<Servicecomp/>
</section>
<FooterDegin/>


</>
  )
}

export default ServiceDegine