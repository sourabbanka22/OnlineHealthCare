import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="message">
    <div>
        <ul>
          {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </ul>
    </div>
  </ScrollToBottom>
);

export default Messages;