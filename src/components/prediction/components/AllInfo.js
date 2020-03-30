import React, { Component } from 'react';
import healthy from '../assets/healthyHeart.PNG';
import unhealthy from '../assets/UnhealthyHeart.PNG';
import initial from '../assets/Check.jfif';

class AllInfo extends Component {

    state ={
        Status: "Pending"
    }

    Predict = () => {
        const { age, gender, chestPain, restingBP, 
            serumCholestoral, fastingBloodSugar, 
            restingECG, maxHeartRate, exerciseIA, 
            depressionEX, peakExSlope, vesselsCount, thal } = this.props;
        
        fetch(`https://sourab-diseasepredictionapi.herokuapp.com/DiseasePrediction/prediction/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "age": age, "gender": gender, "chestPain": chestPain,
                                "restingBP": restingBP, "serumCholestoral": serumCholestoral,
                                "fastingBloodSugar": fastingBloodSugar, "restingECG": restingECG,
                                "maxHeartRate": maxHeartRate, "exerciseIA": exerciseIA,
                                "depressionEX": depressionEX, "peakExSlope": peakExSlope,
                                "vesselsCount": vesselsCount, "thal": thal
                            })
        })
        .then( res => res.json())
        .then( res => {
          this.setState({
            Status: res["result"]
          },
            () => {                        
              console.log(this.state.Status) 
            }
          );
        })
        .catch( error => console.log(error));
        
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { age, gender, chestPain, restingBP, 
            serumCholestoral, fastingBloodSugar, 
            restingECG, maxHeartRate, exerciseIA, 
            depressionEX, peakExSlope, vesselsCount, thal } = this.props;

        
        return(
            <div style={{display: "flex"}}>
                <div style={{flex:50}}>
                    <h2>Here is the information you entered:</h2>
                    Age: <b>{age}</b><br />
                    Gender: <b>{gender}</b><br />
                    Chest Pain Type: <b>{chestPain}</b><br />
                    Resting Blood Pressure: <b>{restingBP}</b><br />
                    Serum Cholestoral in mg/dl: <b>{serumCholestoral}</b><br />
                    Blood Sugar Range: <b>{fastingBloodSugar}</b><br />
                    Resting ECG: <b>{restingECG}</b><br />
                    Maximum Heart Rate: <b>{maxHeartRate}</b><br />
                    Exercise Induced Angina: <b>{exerciseIA}</b><br />
                    Depression Induced by Exercise: <b>{depressionEX}</b><br />
                    Slope at Peak Exercise Segment: <b>{peakExSlope}</b><br />
                    Number of Major Vessels Colored by Flourosopy: <b>{vesselsCount}</b><br />
                    Thallesmia: <b>{thal}</b><br />
                    <button className="Back" onClick={this.back}>
                        « Back
                    </button>
                    <button className="Back" onClick={this.Predict}>
                        Check Status
                    </button>
                </div>
                <div style={{flex:50}}>
                    {this.state.Status === "Pending" &&
                    <div>
                        <h2>Pending...</h2>
                        <img src={initial} style={{height:400, width:400}} alt="Your Heart"></img>
                    </div>
                    }
                    {this.state.Status === "No Presence" &&
                    <div>
                        <h2>Your heart is Healthy</h2>
                        <img src={healthy} style={{height:400, width:400}} alt="Your Heart"></img>
                    </div>
                    }
                    {this.state.Status === "Presence" &&
                    <div>
                        <h2>Your Heart is UnHealthy</h2>
                        <img src={unhealthy} style={{height:400, width:400}} alt="Your Heart"></img>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default AllInfo;