import React from 'react';
import closeIcon from '../../assets/closeIcon.png';
import './Header.css';

const Header = ({ room }) => (

  <div>
    <div className="headLeft-section">
      <div className="headLeft-sub">
        <input type="text" name="search" placeholder="Search..."/>
        <button> <i class="fa fa-search"></i> </button>
      </div>
    </div>
    <div className="headRight-section">
      <div className="headRight-sub">
        <h3>{room}</h3>
        <button className="btn-exit">
          <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </button>
      </div>
    </div>
  </div>
);

export default Header;