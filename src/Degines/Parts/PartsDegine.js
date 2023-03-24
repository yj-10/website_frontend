import React from 'react'
import PartsHeadComp from '../../Component/Parts/PartsHeadComp'
import FooterDegin from '../../Component/Footer/FooterDegin'
import PartsMiddeComp from '../../Component/Parts/PartsMiddeComp'
function PartsDegine() {
  return (
    <>
      <section id="partsHead">
        <PartsHeadComp />
      </section>
      <section id="PartsMiddle">
        <PartsMiddeComp />
      </section>
      <FooterDegin />

    </>
  )
}

export default PartsDegine