import React from 'react';




const ActionProvider = ({ createChatBotMessage, setState, children }) => {
   const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you. How can i help you?')

     setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
     }))
   }



   const handleHouse = () => {
    const botMessage = createChatBotMessage('Look! Here is a nice house picture for you!',
    {
      widget: 'housePicture',
    })
     setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
     }))
   }


   const handlePropertiesForRent = () => {
    const botMessage = createChatBotMessage('We currently have a variety of properties available for rent. Please provide us with your preferences (location, size, budget) so we can assist you better.If you would like to get in touch with us, feel free to contact us at example@estateagency.com or call us at +123456789.');
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  }

  const handlePropertyManagement = () => {
    const botMessage = createChatBotMessage('Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance, and more. Let us know if you\'d like to learn more about our property management solutions. If you would like to get in touch with us, feel free to contact us at example@estateagency.com or call us at +123456789.');
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  }

  const handlePropertyHelp = () => {
    const botMessage = createChatBotMessage('Yes, i can help you. Please, tell me what information do you need? If you would like to get in touch with us, feel free to contact us at example@estateagency.com or call us at +123456789.');
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  }


  const handlePropertyBuying = () => {
    const botMessage = createChatBotMessage('Here we obviously can help you. Buying a house involves several steps including property search, mortgage application, property inspection, and closing. Our agents can guide you through the entire process and help you find your dream home. If you would like to get in touch with us, feel free to contact us at example@estateagency.com or call us at +123456789.');
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  }

  const handleInformation = () => {
    const botMessage = createChatBotMessage('Yes, i can help you. Please, tell me what information do you need? If you would like to get in touch with us, feel free to contact us at example@estateagency.com or call us at +123456789.');
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  }

  const handleSpecificFeatures = () => {
    const botMessage = createChatBotMessage('All information about the specific features you will get visiting us or contacting us in any way. If you would like to get in touch with us, feel free to contact us at example@estateagency.com or call us at +123456789.');
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  }



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleHouse,
            handlePropertiesForRent,
            handlePropertyManagement,
            handlePropertyHelp,
            handlePropertyBuying,
            handleInformation,
            handleSpecificFeatures,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;