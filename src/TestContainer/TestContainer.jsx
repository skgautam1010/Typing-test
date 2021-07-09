import React from 'react'
import TryAgain from '../TryAgain/TryAgain';
import TypingChallenge from '../TyoingChallenge/TypingChallenge';
import './TestContainer.css';

const TestContainer = ({timeRemaining,selectedParagraph,words,characters,wpm,timerStarted}) => {

    

    return (
        <div className="test-container">
            {
                timeRemaining >0 ?(
                    <div  data-aos="fade-up" className="typing-challenge-cont">
                <TypingChallenge timeRemaining={timeRemaining} selectedParagraph={selectedParagraph} timerStarted={timerStarted} words={words} characters={characters} wpm={wpm} />
            </div>
                ):
                (
                    <div className="try-again-container">
                <TryAgain words={words} characters={characters} wpm={wpm} />
            </div>
                )
            }
            
            
        </div>
    )
}


export default TestContainer;
