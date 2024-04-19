import React, { useState } from 'react'
import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
import {Tilt} from 'react-tilt'





const Value = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
             <div className="v-left">

                <Tilt>
                    <div className="image-container">
                        <img src="./house6lg.png" alt="image" />
                    </div>
                </Tilt>
                
             </div>

             {/* right side */}
             <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>
                    We always ready to help by providing the best services for you.
                    <br />
                    We believe a good blace to live can make your life better
                </span>


               <Accordion 
                  className='accordion'
                  allowMultipleExpanded={false}
                  preExpanded={[0]}   
               >
                {
                    data.map((item, index) => {

                        //  const [className, setClassName] = useState(null)

                        return (
                            <AccordionItem key={index} uuid={index} className={`accordionItem ${activeIndex === index ? 'expanded' : 'collapsed'}`}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton' onClick={() => setActiveIndex(index)} >

                                      {/* <AccordionItemState>
                                        {({expanded}) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                                      </AccordionItemState> */}

                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className='primaryText'>{item.heading} </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }

               </Accordion>
             </div>
        </div>
    </section>
  )
}

export default Value