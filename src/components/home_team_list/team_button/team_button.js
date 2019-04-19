import React from 'react';
import './team_button.scss';

export default ({ colors, team_full_name, team_id, chooseTeam, team_name }) => {
    const backgroundColor = {'background-color':`${colors}`}

        return(
            <div className="container">
                <div className="row">
                    <button onClick={() => {chooseTeam(team_name)}} style={backgroundColor} className="btn btn-large yellow darken-2 col s12">{team_full_name}</button>
                </div>
            </div>
            
        );
}
