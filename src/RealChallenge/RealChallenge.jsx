import React from 'react'
import './RealChallenge.css';

const RealChallenge = ({selectedParagraph}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:15</p>
                <p className="timer-info">Start Typing To Start The Test</p>
            </div>

            <div className="text-area-container">
                <div className="textarea-left">
                    <div className="textarea text-paragraph">
                        {selectedParagraph}
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
