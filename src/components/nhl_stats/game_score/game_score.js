import React from 'react';
import "./team_score.scss";

export default ({ team1, team2, gameDetails }) => {
    // use props from rest of score stats when available
    // may need condition for just after a game ends:
      // if status="COMPLETED_PENDING_REVIEW", display FINAL (same for nba)
    
    var currentPeriod = "FINAL";

    if (gameDetails.currentPeriod) {
        currentPeriod = "P" + gameDetails.currentPeriod;
    }
    if (gameDetails.currentPeriod > 3) {
        currentPeriod = "OT" + (gameDetails.currentPeriod - 3);
    }
    if (gameDetails.currentIntermission) {
        currentPeriod = "End of P" + gameDetails.currentIntermission;
    }
    if (gameDetails.currentIntermission > 3) {
        currentPeriod = "End of OT" + (gameDetails.currentIntermission - 3);
    }

    var minutesRemaining = Math.floor(gameDetails.periodTimeRemaining / 60);
    var secondsRemaining = gameDetails.periodTimeRemaining % 60;
    var timeRemaining = minutesRemaining + ":" + secondsRemaining;

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

