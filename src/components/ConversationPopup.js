import React from 'react';

const ConversationPopup = ({ contacts, onContactClick, onClose }) => {
  return (
    <div>
      <div>
        {contacts.map((contact) => (
          <div key={contact.id} onClick={() => onContactClick(contact.id)}>
            {contact.name}
          </div>
        ))}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ConversationPopup;
