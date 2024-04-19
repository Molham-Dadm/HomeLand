import "./Hero.css";
import { motion } from "framer-motion";
import {Tilt} from 'react-tilt'
// import SearchBar from "../SearchBar/SearchBar.jsx";




const Hero = () => {

  return (

    <section  className="hero-wrapper">

      <div style={{justifyContent: 'space-between'}} className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.div 
                className="orange-circle"
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-out",
                }}
                />

            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover <br />
              House of Your
              <br />  <span > Dream</span>
            </motion.h1>
          </div>
          {/* <div className="flexColStart flex-hero-des">
            <span style={{color: 'gray'}}>Find a variety of properties that suit you very easily</span>
            <span style={{color: 'gray'}}>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter " style={{width: '25rem'}}>
            <span className="info-welcome">Welcome to our estate agency, where we specialize in personalized service and expert guidance to help you find the perfect home. With a commitment to integrity and client satisfaction, we are dedicated to making your real estate journey smooth and successful.</span>
          </div> */}

        </div>

        {/* right side */}

          <Tilt>
              <div className="flexCenter hero-right">
                  <motion.div
                    initial={{ x: "7rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 0.8 }}
                    transition={{
                      duration: 2,
                      type: "ease-in",
                    }}
                    className="image-container"
                    style={{height: '28rem', width: '28rem', borderRadius: '50%'}}
                  >

                        <img src="./estate-image.jpg" alt="houses"/> 

                  </motion.div>
              </div>
            </Tilt>
    </div>
    </section>

  );
};

export default Hero;
