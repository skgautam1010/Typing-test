import React from 'react'
import ChallengeDetailCard from '../ChallengeDetailCard/ChallengeDetailCard';
import './TypingChallenge.css';
import RealChallenge from '../RealChallenge/RealChallenge';

const TypingChallenge = ({selectedParagraph,words,characters,wpm,timeRemaining,timerStarted}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                    <ChallengeDetailCard cardName="Words" cardValue={words}/>
                    <ChallengeDetailCard cardName="Characters" cardValue={characters}/>
                    <ChallengeDetailCard cardName="Speed" cardValue={wpm}/>
            </div>
            <div className="typewriter-container">
                <RealChallenge selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerStarted={timerStarted}/>                
            </div>
        </div>
    )

}


export default TypingChallenge;
