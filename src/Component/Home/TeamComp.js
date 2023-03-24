import React from 'react'
import Teaminfo from './TeamInfo'

function TeamComp() {
  return (
    <>
      <div id="teamTitle">
        <p> Meet Our team</p>
      </div>
      <div id="TeamComp">{
        Teaminfo.length > 0 ? Teaminfo.map((item) => {
          return <div id="innerimgbox" className='bg-image hover-zoom' >
            <img style={{ width: "250px", borderRadius: "20px", filter: "contrast(110%)", height: "350px", }} src={item.Image}
              className='img-fluid shadow-2-strong'
              alt={item.alt}
            />
            <h3>{item.Name}</h3>
            <p> {item.Prof}</p>
          </div>
        }) : <p>no data available</p>

      }

      </div>
    </>
  )
}

export default TeamComp