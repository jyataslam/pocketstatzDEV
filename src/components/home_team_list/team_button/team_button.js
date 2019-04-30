import React from 'react';
import './team_button.scss';

export default (props) => {
    const { colors, team_full_name, team_id, id ,chooseTeam, league_name } = props;
    
    const backgroundColor = {
        'background': `${colors} url('dist/assets/images/atlanta-hawks-small.png') no-repeat right`,
    };

        return(
            <div className="container">
                <div className="row">
                    <button onClick={() => {chooseTeam(team_id || id, league_name)}} style={backgroundColor} className="btn btn-large home-team-button col s12">{team_full_name}</button>
                </div>
            </div>
        );
}
