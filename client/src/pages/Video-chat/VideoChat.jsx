import React from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import { ContextProvider } from './SocketContext';




const useStyles = makeStyles((theme) => ({

   title: {
    color: 'white',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  

   },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/chat-bg.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize:' cover',
      backgroundPosition: 'center',

    

     
    },
}))



const VideoChat = () => {
const classes = useStyles()
const navigate = useNavigate()

const handleClick = () =>{

 navigate('/')
}
  return (

    <ContextProvider>
     <div className={`${classes.wrapper} v-chat-body`} >

          <Button 
               style={{position: 'absolute',top: '2rem', right: '18.8rem', backgroundColor: 'white', border: 'none', outline: '3px solid white', outlineOffset: '5px', borderRadius: '10px'}} 
               onClick={handleClick} 
               >
            Back
          </Button>
        
        <Typography className={classes.title} variant='h2' align='center' >ViChat</Typography>
   
        {/* video player */}
          <VideoPlayer/>

        {/* options */}
          <Options >
              <Notifications/>
          </Options>
      
    
     </div>
     </ContextProvider>
  )
}

export default VideoChat