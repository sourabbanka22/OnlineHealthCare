import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <li className="msg-right">
          <div className="msg-left-sub">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="msg-desc">
              <p>{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
        </li>
        )
        : (
          <li className="msg-left">
            <div className="msg-left-sub">
              <div className="msg-desc">
                <p>{ReactEmoji.emojify(text)}</p>
              </div>
              <p className="sentText pl-10 ">{user}</p>
            </div>
          </li>
        )
  );
}

export default Message;