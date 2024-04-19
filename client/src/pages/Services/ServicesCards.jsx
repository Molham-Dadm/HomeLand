
import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../../components/Companies/constants/index";

import { fadeIn, textVariant } from "../../utils/motion";





const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full container flexCenter'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=' p-[1px] rounded-[20px] shadow-card container flexCenter paddings '

    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='service-card'
        style={{
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            paddingLeft: '3rem',
            paddingRight: '3rem',
            backgroundColor: 'var(--primary)',
            borderRadius: '20px',
            border: '3px solid green',
            outline: '3px solid darkviolet'
        }}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const ServicesCards = () => {
  return (
      <>
      <motion.div variants={textVariant()} className="serv-card ">
      
      {/* <h2 className={'styles.sectionHeadText'}>Overview.</h2> */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       
        From our agency's perspective, our primary goal is to provide exceptional service to our clients throughout the entire real estate transaction process. We focus on delivering personalized marketing strategies to effectively showcase properties, leveraging our market analysis expertise to accurately price listings for maximum appeal. Our skilled negotiation team works tirelessly to secure favorable deals, ensuring optimal outcomes for both buyers and sellers. Additionally, we prioritize seamless closing experiences by guiding clients through all necessary legal and financial procedures with precision and care. Ultimately, our agency strives to exceed client expectations by offering comprehensive support and expertise at every stage of the real estate journey.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 container'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default ServicesCards