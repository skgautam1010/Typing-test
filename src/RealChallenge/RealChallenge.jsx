import React from 'react'
import TestLetter from '../TestLetter/TestLetter';
import './RealChallenge.css';
const RealChallenge = ({selectedParagraph,timeRemaining,timerStarted,testInfo}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                {timeRemaining>=10 ? timeRemaining: `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timerStarted && "Start Typing To Start The Test!"}
                </p>
            </div>

            <div className="text-area-container">
                <div className="textarea-left">
                    <div className="textarea text-paragraph">
                        {testInfo.map((individualLetterInfo)=>{
                                return(
                                    <TestLetter individualLetterInfo={individualLetterInfo} />);
                                
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                    className="textarea"
                    placeholder="Start typing here"
                    ></textarea>
                </div>
            </div>
        </div>
    )
}


export default RealChallenge;
