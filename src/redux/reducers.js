const initialState = {
    conversations: [],
    messages: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        const { conversationId, message } = action.payload;
        return {
          ...state,
          messages: {
            ...state.messages,
            [conversationId]: [...(state.messages[conversationId] || []), message],
          },
        };
  
      case 'START_CONVERSATION':
        const { contactId } = action.payload;
        return {
          ...state,
          conversations: [...state.conversations, { contactId, lastMessage: '', id: state.conversations.length + 1 }],
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  