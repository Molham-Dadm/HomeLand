import React from 'react'
import CountUp from "react-countup";
import './CountUps.css'




const CountUps = () => {

  return (
    <section className='statSec' style={{position: 'relative', width: '900px', marginLeft: '300px'}}>
        <div style={{marginTop: '0px',
                   borderRadius: '5px',
                   justifyContent: 'space-between',
                   position: 'absolute',
                   zIndex: 10,
                   top: '-250px',
                   backgroundColor: 'ivory',
                   opacity: '70%',
                   padding: '15px'
                   
                   }} className="flexCenter stats container paddings">
            <div className="flexColCenter stat">
            <span>
                <CountUp start={8000} end={8500} duration={4} /> <span>+</span>
            </span>
            <span className="">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
            <span>
                <CountUp start={1800} end={2000} duration={4} /> <span>+</span>
            </span>
            <span className="">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span>
                <CountUp end={168} /> <span>+</span>
            </span>
            <span className="">Awards Winning</span>
            </div>
        </div> 
    </section>  
  )
}

export default CountUps