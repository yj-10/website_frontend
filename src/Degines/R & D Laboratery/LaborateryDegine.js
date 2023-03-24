import React from 'react'
import FooterDegin from '../../Component/Footer/FooterDegin'
import LabLower from '../../Component/R&D Laboratery/LabLower'
import LaborateryHeadComp from '../../Component/R&D Laboratery/LaborateryHeadComp'
import LaborateryMiddComp from '../../Component/R&D Laboratery/LaborateryMiddComp'
import LaborateryComp from '../../Component/R&D Laboratery/LaborateryMiddComp'

function LaborateryDegine() {
  return (
  <>
<section id="labhead">
<LaborateryHeadComp/>
</section>
<section id="labmidd">
<LaborateryMiddComp/>
</section>
<section id="labdown">
<LabLower/>
</section>
<FooterDegin/>

  </>
  )
}

export default LaborateryDegine