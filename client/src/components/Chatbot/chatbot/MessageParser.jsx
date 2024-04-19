import React from 'react';




const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    if(message.includes('hello') || message.includes('hi') || message.includes('good morning') || message.includes('good afternoon')  ){
      // console.log('hi')
      actions.handleHello()
    }

    if(message.includes('show me a house') || message.includes('show a house')  || message.includes('pictures of a house') || message.includes('picture of a house') || message.includes('picture')){
      actions.handleHouse()
    }



    if (message.toLowerCase().includes('rent')) {
      actions.handlePropertiesForRent();
    }

    if (message.toLowerCase().includes('property management')) {
      actions.handlePropertyManagement();
    }

    if (message.toLowerCase().includes('help me') || message.toLowerCase().includes('need help') || message.toLowerCase().includes('help')) {
      actions.handlePropertyHelp();
    }

    if (message.toLowerCase().includes('buying') || message.toLowerCase().includes('buy') || message.toLowerCase().includes('sale') || message.toLowerCase().includes('for selling')) {
      actions.handlePropertyBuying();
    }


    if (message.toLowerCase().includes('information')) {
      actions.handleInformation();
    }



    if (message.toLowerCase().includes('specific features')) {
      actions.handleSpecificFeatures();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;