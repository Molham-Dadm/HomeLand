import React from "react"
import Back from "./components/Back"
import Heading from "./components/Heading"
import "./About.css"
import Team from "./components/Team"




const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>With a commitment to integrity, professionalism, and client satisfaction, we have transformed the way people buy, sell, and invest in real estate. From our humble beginnings to our current status as a trusted name in the market, our agency has remained steadfast in our dedication to exceeding expectations and delivering exceptional service to every client.</p>
            <p>Our success is rooted in our client-centric approach, innovative solutions, and unwavering commitment to community engagement. As we continue to grow and evolve, we remain focused on our core values while embracing new technologies and opportunities to better serve our clients. With a passionate team of experts and a vision for the future, we are poised to continue making a positive impact in the real estate industry and the communities we serve.</p>
            
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./office1.jpg' alt='image' />
          </div>
        </div>
      </section>

      <section className="team-card-container">
        <div className="team-contain">
          <Team/>
        </div>
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

export default About
