import React from 'react';
import "./team_score.scss";

export default props => {
    return(
            <div className="container team-score">
                    <div className="center">Date Goes Here</div>
                    <div className="row">
                        <div className="teamName col s6 center">LAL</div>
                        <div className="teamName col s6 center">GSW</div>
                    </div>
                    <div className="row">
                        <div className="teamName col s6 center">120</div>
                        <div className="teamName col s6 center">82</div>
                    </div>
                    <div className="center">Quarter Goes Here</div>
                    <div className="center">Timer Goes Here</div>
            </div>
    );
}