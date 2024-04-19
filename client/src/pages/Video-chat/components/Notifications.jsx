import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Phone } from '@material-ui/icons'



import { SocketContext } from '../SocketContext';



const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem' }}>
          <h2><span style={{fontSize:'1.5rem', textTransform: 'uppercase', backgroundColor: 'lightgray',borderRadius: '10px',  padding: '5px 10px', color: 'gray'}} >{call.name}</span> is calling...{<Phone/>} </h2>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;