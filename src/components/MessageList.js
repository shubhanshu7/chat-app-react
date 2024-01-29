import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          {message.sender}: {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
