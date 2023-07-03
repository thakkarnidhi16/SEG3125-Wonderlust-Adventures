export const config = {
  initialMessages: [
    { 
      id: 'welcomeMessage',
      message: 'Welcome! How can I assist you today?',
      trigger: 'userInput'
    }
  ],
  states: {
    userInput: {
      user: true,
      trigger: 'responseMessage'
    },
    responseMessage: {
      message: 'I m sorry, I didnt understand. Could you please rephrase your question?',
      trigger: 'userInput'
    }
  }
};

export default config;
