import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./chatbot/config.jsx";
import ActionProvider from './chatbot/ActionProvider.jsx'
import MessageParser from "./chatbot/MessageParser.jsx";
import './Chatbot.css';
import ChatIcon from "./assets/ChatIcon.jsx";




const Chat = () => {
  const [showBot, toggleBot] = useState(false)

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_message', JSON.stringify(messages))
  }

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'))
    return messages
  }



  return (
   

      <div style={{maxWidth: '300px', position: 'fixed', top: '10rem', right: '4rem', zIndex: 10}}>

        {showBot && (
          <Chatbot 
               config={config} 
               actionProvider={ActionProvider} 
               messageParser={MessageParser} 
               saveMessages={saveMessages}
               
               />
             )}
             <button 
                style={{width: '60px', height: '60px',border: 'none', background: 'transparent'}}
                onClick={() => toggleBot((prev) => !prev)} >

                <ChatIcon />
                {/* <img src="/chat.svg" alt="" /> */}
             </button>
 
              
      </div>

  
  );
}

export default Chat;