import React from 'react';
import "./team_score.scss";

export default ({ team1, team2 }) => {
    return (
        <div className="container" id="team-score">
            <div className="center" id="date">Date Goes Here</div>
            <div className="row" id="teams">
                <div className="teamName col s6 center">{
                    (team1.teamName === "BRO" ? (team1.teamName = "BKN", team1.teamName) : team1.teamName)
                    ||
                    (team1.teamName === "OKL" ? (team1.teamName = "OKC", team1.teamName) : team1.teamName)
                }
                </div>
                <div className="teamName col s6 center">{
                    (team2.teamName === "BRO" ? (team2.teamName = "BKN", team2.teamName) : team2.teamName)
                    ||
                    (team2.teamName === "OKL" ? (team2.teamName = "OKC", team2.teamName) : team2.teamName)
                }</div>
            </div>
            <div className="row" id="scores">
                <div className="teamName col s6 center">120</div>
                <div className="teamName col s6 center">82</div>
            </div>
            <div className="center" id="quarter">Quarter Goes Here</div>
            <div className="center" id="time">Timer Goes Here</div>
        </div>
    );
}

