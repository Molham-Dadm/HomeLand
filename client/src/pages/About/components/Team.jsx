import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { whatsup } from '../../../components/Companies/assets'
import {instagram} from '../../../components/Companies/assets'
import {facebook} from '../../../components/Companies/assets'
import {message, phone} from '../../../components/Companies/assets'
import { projects } from '../../../components/Companies/constants'
import { fadeIn, textVariant } from '../../../utils/motion'

import './Team.css'




const TeamCard = ({index, name, description, image, source_code_link}) => {

  return (
    <motion.div 
          variants={fadeIn('up', 'spring', index * 0.5, 0.75)} 
          className="card-box"
          style={{
               marginBottom: '40px',
               marginTop: '40px',
               display: 'flex',
               flexWrap: 'wrap'
            }}
          >
      <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450
      }} 
          className=' card-box'
          style={{
            backgroundColor: 'var(--primary)',
            paddingTop: '35px',
            paddingBottom: '60px',
            height: '29rem',
            borderRadius: '.6rem'
     
        }}
      >
         <div className=' team-cover'>
           <img 
              src={image} 
              alt={name} 
              className='w-full h-full object-cover rounded-2xl image-bg'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover git-container'>
              <div 
                  onClick={() => window.open(source_code_link, '_blank')} 
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer git-img-container'
                  >
                <img src={instagram} alt='instagram' className='' />
                <img src={facebook} alt='facebook' className='' />
                <img src={whatsup} alt='whatsup' className='' />
                <img style={{backgroundColor: 'white'}} src={message} alt='whatsup' className='' />
                <img style={{backgroundColor: 'white', borderRadius: '50%'}} src={phone} alt='whatsup' className='' />

              </div>

              
            </div>   

            

        </div> 


        

        <div className='' >
           <h3 className='team-member-name'>{name} </h3>
           <p className='team-member-description'>{description} </p>
        </div>

      </Tilt>
    </motion.div>
  )
}




const Team = () => {
  return (
    <>
      <motion.div variants={textVariant()}className="cont-team">
      
        <h2 className="title-team">Our Team.</h2>
      </motion.div>

      <div className='w-full flex '>
         <motion.p 
               variants={fadeIn('', '', 0.1, 1)} 
               className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] p-team'
               >
             
            We form a cohesive real estate team, pooling together diverse expertise to seamlessly navigate transactions and deliver comprehensive services to our valued clients. With agents adept at negotiations and administrative staff proficient in managing paperwork, each team member plays a crucial role in achieving success in the dynamic real estate market.
         </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 card-team-box'>
         {projects.map((project, index) => (
            <TeamCard 
                   className="card-team"
                   key={`project-${index}`}
                   index={index}
                   {...project}
                   />
         ))}
      </div>
    </>
  )
}

export default Team