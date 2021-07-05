import React from 'react'
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

const ChallengeSection = () =>
 {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a Speed Test Now!
            </h1>
            <TestContainer words={20} characters={65} wpm={5} /> 
            
        </div>
    )
}

export default ChallengeSection;
