import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import predictImg from "../../assets/predict.jpg";

export class Check extends React.Component {

  render() {
    return (
    <div className="base-container">
        <div className="header">Check Your Health</div>
        <div className="content">
          <div className="image">
            <img src={predictImg} alt="Login"/>
          </div>
        </div>
        <div className="footer">
        <Link to={`/predict`}>
          <button type="button" className="btn">
            Check Now
          </button>
        </Link>
        </div>
      </div>
    );
  }
}
