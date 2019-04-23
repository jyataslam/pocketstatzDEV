import React from 'react';
import './team_button.scss';

export default ({ colors, team_full_name, team_id, chooseTeam, team_code }) => {
    const backgroundColor = {'backgroundColor':`${colors}`}

        return(
            <div className="container">
                <div className="row">
                    <button onClick={() => {chooseTeam(team_id)}} style={backgroundColor} className="btn btn-large yellow darken-2 col s12">{team_full_name}</button>
                </div>
            </div>
            
        );
}
