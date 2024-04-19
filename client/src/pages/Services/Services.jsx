import React from "react"
import img from "/services.jpg"
import Back from "./Back"
import ServicesCards from "./ServicesCards"
import './Services.css'



// import "../home/featured/Featured.css"
// import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Our Services' cover={img} />
        <div className='featured container'>
          {/* <FeaturedCard /> */}
        </div>
      </section>



        <h1 style={{
          textAlign: 'center',
          color: 'gray'
        }}>Services we Offer.</h1>
      <section 
      className="services-container flexCenter cont-services"
      style={{
        paddingBottom: '60px'
      }}
      >
       <ServicesCards/>
      </section>



      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>
            <a href="mailto:user1@gmail.com">Contact Us Today</a>
              
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
