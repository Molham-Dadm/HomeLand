import React from "react"
import Heading from "../../pages/About/components/Heading"
import { awards } from "./data/Data"
import "./Awards.css"
import { Tilt } from "react-tilt"



const Awards = () => {
  return (
    <>
      <section style={{marginTop: '0px', paddingTop: '35px'}} className='awards padding container'>
        <div className='container'>
          <Heading title='Over 2,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div style={{backgroundColor: '#122947', height: '300px', display: 'flex', flexDirection: 'column'}} className='box' key={index}>

              <Tilt>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
              </Tilt>

                <h1 style={{color: 'white'}}>{val.num}</h1>
                <p style={{color: '#ffff'}}>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards
