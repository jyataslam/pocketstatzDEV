import React from 'react';
import './team_button.scss';

export default ({ colors, team_full_name, id, chooseTeam, team_code }) => {
    const backgroundColor = {'backgroundColor': `${colors}`};

        return(
            <div className="container">
                <div className="row">
                    <button onClick={() => {chooseTeam(id)}} style={backgroundColor} id="tabs-swipe-demo" className="btn btn-large home-team-button col s12">{team_full_name}</button>
                </div>
            </div>
            
        );
}
