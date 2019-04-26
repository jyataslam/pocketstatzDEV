import React from 'react';
import "./team_score.scss";

export default ({ team1, team2, gameDetails }) => {
    // use props from rest of score stats when available

    var currentPeriod = "FINAL";
    if (gameDetails.currentPeriod) {
        currentPeriod = "P" + gameDetails.currentPeriod;
    }
    if (gameDetails.currentIntermission && gameDetails.gameStatus === "COMPLETED_PENDING_REVIEW") {
        currentPeriod = "End of P" + gameDetails.currentIntermission;
    }

    var minutesRemaining = Math.floor(gameDetails.periodTimeRemaining / 60);
    var secondsRemaining = gameDetails.periodTimeRemaining % 60;
    var timeRemaining = minutesRemaining + ":" + secondsRemaining;
    console.log(secondsRemaining);
    if (secondsRemaining < 10) {
        secondsRemaining = "0" + secondsRemaining;
    }
    var timeRemaining = minutesRemaining + ":" + secondsRemaining;
    if (gameDetails.gameStatus === "COMPLETED" || gameDetails.gameStatus === "COMPLETED_PENDING_REVIEW") {
        timeRemaining = "";
    }

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
            <div className="center" id="period">{currentPeriod}</div>
            <div className="center" id="time">{timeRemaining}</div>
        </div>
    );
}

