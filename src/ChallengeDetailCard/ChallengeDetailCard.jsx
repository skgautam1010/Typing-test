import React from 'react'
import "./ChallengeDetailCard.css";


const ChallengeDetailCard = ({cardName,cardValue}) => {
    return (
        <div className="details-card-cont">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>
    )
}


export default ChallengeDetailCard;