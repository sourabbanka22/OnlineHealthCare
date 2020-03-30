import React from "react";
import "./Home.css";
import { Check } from "../Check/Check.js";
import Join from '../Join/Join';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    this.rightSide.classList.add("right");
  }

  changeState = () => {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({
      isLogginActive: !prevState.isLogginActive 
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Check" : "Ask";
    const currentActive = isLogginActive ? "Health" : "Doctor";
    return (
      <div className="Home">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Join/>
            )}
            {!isLogginActive && (
              <Check/>
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
        <div className="text">{props.currentActive}</div>
      </div>
    </div>
  );
};

export default Home;