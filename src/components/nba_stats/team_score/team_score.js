import React from 'react';
import "./team_score.scss";

export default ({ team1, team2, gameDetails }) => {
    // use props from rest of score stats when available

    var currentQuarter = "FINAL";
    if (gameDetails.currentQuarter) {
        currentQuarter = "Q" + gameDetails.currentQuarter;
    }
    if (gameDetails.currentIntermission && gameDetails.playedStatus === "COMPLETED_PENDING_REVIEW") {
        currentQuarter = "End of Q" + gameDetails.currentIntermission;
    }

    var minutesRemaining = Math.floor(gameDetails.quarterTimeRemaining / 60);
    var secondsRemaining = gameDetails.quarterTimeRemaining % 60;
    var timeRemaining = minutesRemaining + ":" + secondsRemaining;
    if (secondsRemaining < 10) {
        secondsRemaining = "0" + secondsRemaining;
    }
    if (gameDetails.gameStatus === "COMPLETED" || gameDetails.gameStatus === "COMPLETED_PENDING_REVIEW") {
        timeRemaining = "";
    }

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
            <div className="center" id="quarter">{currentQuarter}</div>
            <div className="center" id="time">{timeRemaining}</div>
        </div>
    );
}

