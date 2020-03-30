import React, { useState } from 'react';
import { Link } from "react-router-dom";
import doctorImg from "../../assets/doctor.jpg";
import "../Check/style.css"

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="base-container">
      <div className="header">
        Chat with a Doctor
      </div>
      <div className="content">
        <div className="image">
          <img src={doctorImg} alt="Login"/>
        </div>
        <div className="form">
          <div className="form-group">
            <input style={{marginTop:20}} placeholder="Your Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="form-group">
            <input placeholder="Doctor's ID" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
        </div>
      </div>
      <div className="footer">
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button type="button" className="btn">Chat Now</button>
        </Link>
      </div>
    </div>
  );
}
