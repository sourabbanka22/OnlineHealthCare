import React, { Component } from 'react';

class HealthOne extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { age, gender, chestPain, restingBP, serumCholestoral, fastingBloodSugar, handleChange } = this.props;
        return(
            <>
                <h2>Enter your health related information:</h2>
                <label>
                    <input 
                        type="text"
                        name="age"
                        value={age}
                        placeholder="Age"
                        onChange={handleChange('age')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="gender"
                        value={gender}
                        placeholder="Gender"
                        onChange={handleChange('gender')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="chestPain"
                        value={chestPain}
                        placeholder="Chest Pain Type"
                        onChange={handleChange('chestPain')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="restingBP"
                        value={restingBP}
                        placeholder="Resting Blood Pressure"
                        onChange={handleChange('restingBP')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="serumCholestoral"
                        value={serumCholestoral}
                        placeholder="Serum Cholestoral in mg/dl"
                        onChange={handleChange('serumCholestoral')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="fastingBloodSugar"
                        value={fastingBloodSugar}
                        placeholder="Blood Sugar Range"
                        onChange={handleChange('fastingBloodSugar')}
                    />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default HealthOne;