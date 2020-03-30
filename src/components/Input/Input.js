import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (

  <div>
    <form>
      <div className="upload-btn">
        <i class="fa fa-photo"></i>
      </div>
      <input 
        type="text" 
        name="" 
        placeholder="Type Here..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className="btn-send" onClick={e => sendMessage(e)}>
        <i class="fa fa-send"></i>
      </button>
    </form>
  </div>


)

export default Input;