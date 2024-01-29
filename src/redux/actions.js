export const addMessage = (conversationId, message) => ({
    type: 'ADD_MESSAGE',
    payload: { conversationId, message },
  });
  
  export const startConversation = (contactId) => ({
    type: 'START_CONVERSATION',
    payload: { contactId },
  });
  