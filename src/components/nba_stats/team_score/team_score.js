import React from 'react';
import "./team_score.scss";

export default ({ team1, team2, gameDetails }) => {
    // use props from rest of score stats when available

    return (
        <div className="container" id="team-score">
            <div className="center" id="date">{gameDetails.gameDate}</div>
            <div className="row" id="teams">
                <div className="teamName col s6 center">{
                    (team1.teamName === "BRO" ? (team1.teamName = "BKN", team1.teamName) : team1.teamName)
                    &&
                    (team1.teamName === "OKL" ? (team1.teamName = "OKC", team1.teamName) : team1.teamName)
                }
                </div>
                <div className="teamName col s6 center">{
                    (team2.teamName === "BRO" ? (team2.teamName = "BKN", team2.teamName) : team2.teamName)
                    &&
                    (team2.teamName === "OKL" ? (team2.teamName = "OKC", team2.teamName) : team2.teamName)
                }</div>
            </div>
            <div className="row" id="scores">
                <div className="teamName col s6 center">{team1.teamScore}</div>
                <div className="teamName col s6 center">{team2.teamScore}</div>
            </div>
            <div className="center" id="quarter">{
                //Currently displays Final between quarters. Try using currentIntermission !== null or something
                (!gameDetails.currentQuarter ? (gameDetails.currentQuarter = "Final", gameDetails.currentQuarter) : gameDetails.currentQuarter)
            }
            </div>
            {/* quarterTimeRemaining will need to be formatted; divide by 60, add a colon before the last 2 digits? Need to see live data to be sure */}
            <div className="center" id="time">{gameDetails.quarterTimeRemaining}</div>
        </div>
    );
}

