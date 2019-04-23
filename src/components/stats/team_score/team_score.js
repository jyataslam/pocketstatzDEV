import React from 'react';
import "./team_score.scss";

export default ({ team1, team2 }) => {
    // use props from rest of score stats when available

    return(
            <div className="container" id="team-score">
                    <div className="center" id="date">Date Goes Here</div>
                    <div className="row" id="teams">
                        <div className="teamName col s6 center">{team1.teamName}</div>
                        <div className="teamName col s6 center">{team2.teamName}</div>
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