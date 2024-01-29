import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, startConversation } from '../redux/actions';
import ConversationList from '../components/ConversationList';
import ConversationPopup from '../components/ConversationPopup';
import MessageList from '../components/MessageList';
import SendMessageForm from '../components/SendMessageForm';

const ChatPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversations);
  const messages = useSelector((state) => state.messages[selectedContactId] || []);

  // Define dummyContacts (adjust with your actual data structure)
  const dummyContacts = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more contacts as needed
  ];

  // In ChatPage.js
useEffect(() => {
    // Dispatch actions to initialize Redux state with dummy data
    dispatch(startConversation(1)); // Example conversation
    dispatch(addMessage(1, { text: 'Hello!', sender: 'Dummy User', id: 1 }));
  }, []);
  

  const handleContactClick = (contactId) => {
    setShowPopup(false);
    setSelectedContactId(contactId);

    // If conversation does not exist, start a new one
    if (!conversations.find((c) => c.contactId === contactId)) {
      dispatch(startConversation(contactId));
    }
  };

  const handleSendMessage = (text) => {
    dispatch(addMessage(selectedContactId, { text, sender: 'Dummy User', id: messages.length + 1 }));
  };

  return (
    <div>
      <div>
        <ConversationList conversations={conversations} onClick={(conversationId) => setSelectedContactId(conversationId)} />
        <button onClick={() => setShowPopup(true)}>Create Conversation</button>
      </div>
      <div>
        {selectedContactId ? (
          <>
            <MessageList messages={messages} />
            <SendMessageForm onSend={handleSendMessage} />
          </>
        ) : (
          <div>Select a conversation</div>
        )}
      </div>
      {showPopup && <ConversationPopup contacts={dummyContacts} onContactClick={handleContactClick} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default ChatPage;
