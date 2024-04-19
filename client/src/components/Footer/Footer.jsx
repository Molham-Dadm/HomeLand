import React, {useEffect} from "react";
import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa'
import Map from "../Map/Map";
import "./Footer.css";





const Footer = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="f-wrapper">

        
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">

          <Link to={'/'}>
            <img className="logo" src="./logo.svg" alt="" width={120} />
          </Link>

         <div className="socials">
              <span className="social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                
              </span>
              <span className="social">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <FaInstagramSquare/></a>
               
              </span>
              <span className="social"> 
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitterSquare/></a>
                
              </span>
              <span className="social">
                   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a>
                
              </span>

         </div>

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="paddings innerWidth " style={{width: '30rem'}} >
            <Map address={'68305, Mannheim, Germany'} />
        </div>

        
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText"> Mannheim, 68305,  Germany</span>
          <div className="flexColCenter f-menu">
            <span> <Link to={'/properties'} >Properties</Link> </span>
            <span><Link to={'/services'} >Services</Link></span>
            
            <span><Link to={'/faq'} >FAQ</Link></span>

            <span><Link to={'/about'} >About Us</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
