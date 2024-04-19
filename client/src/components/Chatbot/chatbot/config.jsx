import { createChatBotMessage } from 'react-chatbot-kit';
import HousePicture from '../components/HousePicture.jsx';


const botName = 'Hommy'


const config = {
  
  botName: botName,  
  initialMessages: [createChatBotMessage(`Hi! I am ${botName}. How can i help you?`)],
  widgets: [
    {
        widgetName: 'housePicture',
        widgetFunc: (props) => <HousePicture {...props} />,
      },
  ],
  customStyles: {
    botMessageBox: {
        backgroundColor: '#376B7E',
      },
      chatButton: {
        backgroundColor: '#5ccc9d',
      },
  }
};

export default config;