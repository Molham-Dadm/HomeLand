import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Assignment, Phone, PhoneDisabled } from '@material-ui/icons'


import { SocketContext } from '../SocketContext'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      
      
    },
    gridContainer: {
      backgroundColor: 'lightgray',
      width: '100%',
      borderRadius: '10px',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '600px',
      margin: '20px 0',
      border: '3px solid white',
      borderRadius: '20px',
      padding: '10px',
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    text: {
      fontWeight: 'bold'
    },
    margin: {
      marginTop: 10,
    },
    padding: {
      padding: 20,
    },

    paper: {
      padding: '10px 20px',
      // border: '2px solid black',
      borderRadius: '10px'
    },
   }));



const Options = ({children}) => {
    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('')
    const classes = useStyles()



  return (
        <Container className={classes.container} >
           <Paper elevation={10} className={classes.paper} >
             <form className={classes.root} noValidate autoComplete='off' >
                <Grid container className={classes.gridContainer} >

                  <Grid item xs={12} md={6} className={classes.padding} >
                    <Typography gutterBottom variant='h6' align='center' className={classes.text} >
                     Account info
                    </Typography>
                    <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                    {console.log(me)}
                    <CopyToClipboard text={me} className={classes.margin} >
                      <Button 
                          variant='contained' 
                          color='primary' 
                          fullWidth 
                          startIcon={<Assignment fontSize='large' />} 
                          >
                       Copy your id
                      </Button>
                    </CopyToClipboard>
                  </Grid>

                  <Grid item xs={12} md={6} className={classes.padding} >
                    <Typography gutterBottom variant='h6' align='center' className={classes.text} >
                     Make a Call
                    </Typography>
                    <TextField 
                          label="ID to Call" 
                          value={idToCall} 
                          onChange={(e) => setIdToCall(e.target.value)} 
                          fullWidth 
                         
                          />
                    
                    {callAccepted && !callEnded ? (

                        <Button 
                             variant='contained' 
                             color='secondary' 
                             fullWidth 
                             startIcon={<PhoneDisabled fontSize='large' />} 
                             onClick={leaveCall }
                             className={classes.margin}
                             >
                         Hang up
                        </Button>                       

                     ) : (

                      <Button 
                            variant='contained' 
                            color='primary' 
                            fullWidth 
                            startIcon={<Phone fontSize='large' />} 
                            onClick={() => callUser(idToCall) }
                            className={classes.margin}
                            >
                        Call
                      </Button>
                      
                     )} 
                   
                  </Grid>


                </Grid>
             </form> 
            {children}
           </Paper> 
        </Container>
  )
}

export default Options