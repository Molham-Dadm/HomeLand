import React from 'react'
import './PropertyCard.css'
import { AiTwotoneCar } from 'react-icons/ai';
import {truncate} from 'lodash'
import { useNavigate } from 'react-router-dom';
import Heart from '../Heart/Heart';
import {Tilt} from 'react-tilt'
import {FaShower} from 'react-icons/fa'
import { MdMeetingRoom } from 'react-icons/md';





const PropertyCard = ({card}) => {
  const navigate = useNavigate()

  return (
  <Tilt> 
    <div 
       onClick={() => navigate(`../properties/${card.id}`)}
       className="flexColStart r-card ">
        
        <Heart id={card?.id} />
        
        <img src={card.image} alt="home" />
         
        <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>

      
            <div className='flexCenter ' style={{gap: '25px'}}>
                  <div className='flexCenter card-ft' style={{gap: '8px'}}>
                      <FaShower color='#1f3e72'/>
                      <span>{card?.facilities?.bathrooms} </span>
                  </div>

                  <div className='flexCenter card-ft' style={{gap: '8px'}}>
                      <MdMeetingRoom color='#1f3e72'/>
                        <span>{card?.facilities?.bedrooms} </span>
                  </div>

                    <div className='flexCenter card-ft' style={{gap: '8px'}}>
                        <AiTwotoneCar color='#1f3e72'/>
                        <span>{card?.facilities?.parkings} </span>
                    </div>
            </div>


        </span>
        <span className="primaryText">{truncate(card.title, {length: 15})}</span>
        <span className="secondaryText">{truncate(card.description, {length: 80})}</span>

    </div>
  </Tilt>
  )
}

export default PropertyCard



