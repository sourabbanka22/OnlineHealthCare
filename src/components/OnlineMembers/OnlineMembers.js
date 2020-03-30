import React from 'react';
import user from '../../assets/user.PNG';
import './OnlineMembers.css';
import ScrollToBottom from 'react-scroll-to-bottom';

const OnlineMembers = ({ users }) => (
  
  <ScrollToBottom className="people">
      <ul>
          {
          users
            ? (
              <li>
                {users.map(({name}) => (
                  <div className="chatList">
                    <div className="img">
                      <img src={user} alt="Group Member"/>
                    </div>
                    <div className="desc">
                      <small className="time">Active</small>
                      <h5 key={name}>{name.toUpperCase()}</h5>
                      <small>Group Member</small>
                    </div>
                  </div>
                ))}
              </li>
            )
            : null
          }
      </ul>
  </ScrollToBottom>


);

export default OnlineMembers;