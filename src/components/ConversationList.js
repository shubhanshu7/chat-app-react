import React from 'react';

const ConversationList = ({ conversations, onClick }) => {
  return (
    <div>
      {conversations.map((conversation) => (
        <div key={conversation.id} onClick={() => onClick(conversation.id)}>
          {conversation.contactName} - {conversation.lastMessage}
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
