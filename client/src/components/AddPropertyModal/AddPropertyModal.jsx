import { useAuth0 } from '@auth0/auth0-react'
import { Container, Modal, Stepper, Button, Group } from '@mantine/core'
import React, { useState, useEffect } from 'react'
import AddLocation from '../AddLocation/AddLocation'
import BasicDetails from '../BasicDetails/BasicDetails'
import Facilities from '../Facilities/Facilities'
import UploadImage from '../UploadImage/UploadImage'




const AddPropertyModal = ({opened, setOpened }) => {
    const [active, setActive] = useState(0)
    const {user} = useAuth0()


    
    
    const [propertyDetails, setPropertyDetails] = useState({
      
      title: '',
      description: '',
      price: 0,
      country: '',
      city: '',
      address: '',
      image: null,
      facilities: {
        bedrooms: 0,
        parkings: 0,
        bathrooms: 0,
      },
      userEmail: user?.email, 
    })
    
    
    useEffect(() => {
         if (user) {
             setPropertyDetails(prevDetails => ({
                 ...prevDetails,
                 id: user.id,
                 userEmail: user.email
             }));
         }
     }, [user]);


     
    const nextStep = () => {
      setActive((current) => (current < 4 ? current + 1 : current))
    }

    const prevStep = () => {
        setActive((current) => (current > 0 ? current - 1 : current)) 
    }



  return (
    <Modal 
       opened={opened}
       onClose={() => setOpened(false)}
       closeOnClickOutside
       size={'90rem'}
    >
       <Container h={'40rem'} w={'100%'}>
            <Stepper active={active} onStepClick={setActive}>

                <Stepper.Step label="Location" description="Address">
                   <AddLocation  
                      nextStep={nextStep}
                      propertyDetails={propertyDetails}
                      setPropertyDetails={setPropertyDetails}
                   />
                </Stepper.Step>

                <Stepper.Step label="Images" description="Upload">
                   <UploadImage 
                      prevStep={prevStep}
                      nextStep={nextStep}
                      propertyDetails={propertyDetails}
                      setPropertyDetails={setPropertyDetails}
                    />
                </Stepper.Step>

                <Stepper.Step label="Basics" description="Details">
                   <BasicDetails 
                     prevStep={prevStep}
                     nextStep={nextStep}
                     propertyDetails={propertyDetails}
                     setPropertyDetails={setPropertyDetails}
                    />
                </Stepper.Step>

                <Stepper.Step>
                  <Facilities 
                     prevStep={prevStep}
                     nextStep={nextStep}
                     propertyDetails={propertyDetails}
                     setPropertyDetails={setPropertyDetails}
                    />
                </Stepper.Step>

                <Stepper.Completed>
                Completed, click back button to get to previous step
                </Stepper.Completed>

            </Stepper>
       </Container>
    </Modal>
  )
}

export default AddPropertyModal