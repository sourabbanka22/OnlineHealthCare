import React, { Component } from 'react';
import HealthOne from './HealthOne';
import HealthTwo from './HealthTwo';
import AllInfo from './AllInfo';

export class StepForm extends Component {
    state = {
        step: 1,

        // Disease Info 1
        age: null,
        gender: "",
        chestPain: "",
        restingBP: null,
        serumCholestoral: null,
        fastingBloodSugar: "",
        restingECG: "",

        // Disease Info 2
        maxHeartRate: null,
        exerciseIA: "",
        depressionEX: "",
        peakExSlope: "",
        vesselsCount: null,
        thal: null

    }


    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, age, gender, chestPain, restingBP, 
                serumCholestoral, fastingBloodSugar, 
                restingECG, maxHeartRate, exerciseIA, 
                depressionEX, peakExSlope, vesselsCount, thal } = this.state;

        if(step === 1)
            return (<HealthOne 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange}
                age={age}
                gender={gender}
                chestPain={chestPain}
                restingBP={restingBP}
                serumCholestoral={serumCholestoral}
                fastingBloodSugar={fastingBloodSugar}
                restingECG={restingECG}
            />);
        if(step === 2)
            return (<HealthTwo 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                maxHeartRate={maxHeartRate}
                exerciseIA={exerciseIA}
                depressionEX={depressionEX}
                peakExSlope={peakExSlope}
                vesselsCount={vesselsCount}
                thal={thal}
            />);
        if(step === 3)
            return (<AllInfo 
                age={age}
                gender={gender}
                chestPain={chestPain}
                restingBP={restingBP}
                serumCholestoral={serumCholestoral}
                fastingBloodSugar={fastingBloodSugar}
                restingECG={restingECG}
                maxHeartRate={maxHeartRate}
                exerciseIA={exerciseIA}
                depressionEX={depressionEX}
                peakExSlope={peakExSlope}
                vesselsCount={vesselsCount}
                thal={thal}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 3.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;