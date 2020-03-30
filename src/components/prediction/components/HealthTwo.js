import React, { Component } from 'react';

class HealthTwo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { restingECG, maxHeartRate, exerciseIA, depressionEX, peakExSlope, vesselsCount, thal, handleChange } = this.props;
        return(
            <>
                <h2>Enter your health related information:</h2>
                <label>
                    <input 
                        type="text"
                        name="restingECG"
                        value={restingECG}
                        onChange={handleChange('restingECG')}
                        placeholder="Resting ECG"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="maxHeartRate"
                        value={maxHeartRate}
                        onChange={handleChange('maxHeartRate')}
                        placeholder="Maximum Heart Rate"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="exerciseIA"
                        value={exerciseIA}
                        onChange={handleChange('exerciseIA')}
                        placeholder="Exercise Induced Angina"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="depressionEX"
                        value={depressionEX}
                        onChange={handleChange('depressionEX')}
                        placeholder="Depression Induced by Exercise"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="peakExSlope"
                        value={peakExSlope}
                        onChange={handleChange('peakExSlope')}
                        placeholder="Slope at Peak Exercise Segment"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="vesselsCount"
                        value={vesselsCount}
                        onChange={handleChange('vesselsCount')}
                        placeholder="Number of Major Vessels Colored by Flourosopy"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="thal"
                        value={thal}
                        onChange={handleChange('thal')}
                        placeholder="Thallesmia"
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default HealthTwo;