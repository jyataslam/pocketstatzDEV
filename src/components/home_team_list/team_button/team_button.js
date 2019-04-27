import React from 'react';
import './team_button.scss';

export default (props) => {
    const { colors, team_full_name, id, chooseTeam, league_name } = props;
    console.log("Team button props:", props);
    const backgroundColor = {'backgroundColor': `${colors}`};

        return(
            <div className="container">
                <div className="row">
                    <button onClick={() => {chooseTeam(id, league_name)}} style={backgroundColor} id="tabs-swipe-demo" className="btn btn-large home-team-button col s12">{team_full_name}</button>
                </div>
            </div>
        );
}
