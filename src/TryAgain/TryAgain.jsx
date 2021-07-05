import React from 'react'
import './TryAgain.css';

const TryAgain = ({words,characters,wpm}) => {
    return (
        <div className="try-again-cont">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters</b> : {characters}
                </p>
                <p>
                    <b>Words</b> : {words}

                </p>
                <p>
                    <b>Speed</b> : {wpm} wpm
                </p>
            </div>
            <div>
                <button className="buttons start-again-btn">Re-Try</button>
                <button className="buttons share-btn" onClick={()=>{
                    window.open("https://www.facebook.com/sharer/sharer.php?u=sonu","facebook-share-dialog","width=800","height=600")
                }}>Share</button>
                <button className="buttons tweet-btn" onClick={()=>{
                    window.open("https://www.twitter.com/intent/tweet?text=skgautam1010","Twitter","width=800","height=600")
                }}>Tweet</button>
            </div>
        </div>
    )
}


export default TryAgain;
