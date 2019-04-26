import React from 'react';
import "./team_score.scss";

export default ({ team1, team2, gameDetails }) => {
    console.log('game details', gameDetails);
    // use props from rest of score stats when available

    return (
        <div className="container" id="team-score">
            <div className="center" id="date">{gameDetails.gameDate}</div>
            <div className="row" id="teams">
                <div className="teamName col s6 center">
                    {team1.teamName}
                </div>
                <div className="teamName col s6 center">
                    {team2.teamName}
                </div>
            </div>
            <div className="row" id="scores">
                <div className="teamName col s6 center">{team1.teamScore}</div>
                <div className="teamName col s6 center">{team2.teamScore}</div>
            </div>
            <div className="center" id="period">{
                (!gameDetails.currentPeriod ? (gameDetails.currentPeriod = "Final", gameDetails.currentPeriod) : gameDetails.currentPeriod)
            }
            </div>
            {/* quarterTimeRemaining will need to be formatted; divide by 60, add a colon before the last 2 digits? Need to see live data to be sure */}
            <div className="center" id="time">{gameDetails.periodTimeRemaining}</div>
        </div>
    );
}

